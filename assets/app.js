/* ============================================================
   Sumario Alpha Crux — aplicación
   ============================================================ */
(function () {
  "use strict";

  var CASO = window.CASO;
  var AN = window.ANALISIS;
  var DECL = CASO.declarantes;
  var SUM = window.SUMARIO;

  var GRUPO_COLOR = {
    rusa: "#e2574c",
    coreana: "#e8a33d",
    indonesia: "#57b894",
    autoridad: "#3fa8c4",
    terceros: "#9aa2b1"
  };

  var VIEW_TITLES = {
    resumen: "Panorama de la investigación",
    mapa: "Mapa conceptual del caso",
    cronologia: "Línea de tiempo",
    interrogatorios: "Interrogatorios",
    incongruencias: "Análisis de incongruencias",
    conclusiones: "Conclusiones posibles",
    pasos: "Posibles pasos a seguir",
    documentos: "Documentos base",
    viento: "Viento y escenario náutico",
    sumario: "Sumario (borrador)",
    search: "Resultados de búsqueda"
  };

  /* --------------------------------------------------------- utils */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function initials(name) {
    var p = String(name).replace(/[^\wÀ-ÿ\s]/g, " ").trim().split(/\s+/);
    if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
    return (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  function norm(s) {
    return String(s == null ? "" : s).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function declColor(d) { return GRUPO_COLOR[d.grupo] || "#8b8b9e"; }
  function scrollTo(node, opts) {
    if (node && typeof node.scrollIntoView === "function") node.scrollIntoView(opts);
  }

  /* --------------------------------------------------------- router */
  var currentView = "resumen";

  function show(view, opts) {
    opts = opts || {};
    currentView = view;
    qa(".view").forEach(function (v) { v.classList.remove("is-active"); });
    var target = q("#view-" + view);
    if (target) target.classList.add("is-active");
    qa(".nav-item").forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.view === view);
    });
    q("#topbarTitle").textContent = VIEW_TITLES[view] || "";
    if (!opts.keepScroll) q("#scrollArea").scrollTop = 0;
    if (view === "mapa" && window.MAPA) window.MAPA.ensure();
    if (view === "viento" && window.WIND_MAP) window.WIND_MAP.ensure();
    else if (window.WIND_MAP) window.WIND_MAP.stop();
    q("#sidebar").classList.remove("open");
  }
  window.gotoView = show;

  qa(".nav-item").forEach(function (b) {
    b.addEventListener("click", function () {
      q("#globalSearch").value = "";
      q("#searchClear").hidden = true;
      show(b.dataset.view);
    });
  });
  q("#burger").addEventListener("click", function () {
    q("#sidebar").classList.toggle("open");
  });

  /* Salta a un declarante concreto */
  function gotoDeclarante(id) {
    show("interrogatorios");
    selectDeclarante(id);
  }
  window.gotoDeclarante = gotoDeclarante;

  /* Salta a un documento concreto */
  function gotoDocumento(id) {
    show("documentos");
    setTimeout(function () {
      var n = q('[data-doc="' + id + '"]');
      if (n) {
        n.classList.add("open");
        scrollTo(n, { block: "center", behavior: "smooth" });
      }
    }, 60);
  }

  function gotoRef(ref) {
    if (!ref) return;
    if (DECL.some(function (d) { return d.id === ref; })) gotoDeclarante(ref);
    else gotoDocumento(ref);
  }
  window.gotoRef = gotoRef;

  /* ============================================================
     PANORAMA
     ============================================================ */
  function renderPanorama() {
    var nInterr = AN.timeline.filter(function (t) { return t.interrogatorio; }).length;
    var nPreg = DECL.reduce(function (a, d) { return a + d.qa.length; }, 0);
    var criticas = AN.incongruencias.filter(function (i) { return i.gravedad === "critica"; }).length;
    var pendientesNodos = AN.grafo.nodos.filter(function (n) {
      return n.cat === "no-declaro" || n.id === "equipo-coreano";
    });
    var nPasos = AN.pasos.reduce(function (a, b) { return a + b.items.length; }, 0);

    var stats = [
      { n: nInterr, l: "Actas tomadas" },
      { n: nPreg, l: "Preguntas transcriptas" },
      { n: AN.timeline.length, l: "Hitos en la cronología" },
      { n: AN.incongruencias.length, l: "Incongruencias", cls: "warn" },
      { n: criticas, l: "De gravedad crítica", cls: "hot" },
      { n: pendientesNodos.length, l: "Testigos sin declarar", cls: "hot" },
      { n: nPasos, l: "Diligencias propuestas" }
    ];
    q("#heroStats").innerHTML = stats.map(function (s) {
      return '<div class="hstat ' + (s.cls || "") + '"><b>' + s.n + "</b><span>" + esc(s.l) + "</span></div>";
    }).join("");

    var b = CASO.buque;
    var ficha = [
      ["Nombre", b.nombre], ["Tipo", b.tipo], ["Bandera", b.bandera], ["N° OMI", b.omi],
      ["Eslora", b.eslora], ["Manga", b.manga], ["Armador", b.armador], ["Agencia", b.agencia],
      ["Lugar", b.lugar], ["Fecha", b.fecha], ["Combustible", b.combustible], ["Situación", b.apoyado]
    ];
    q("#fichaBuque").innerHTML = ficha.map(function (r) {
      return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>";
    }).join("");

    var mech = [
      "Buque <b>descargado de pescado y carnada</b>, con las artes de pesca estibadas sobre la cubierta principal: pérdida de peso bajo y ascenso del centro de gravedad.",
      "<b>Trasvases sucesivos de combustible</b> sin cálculo de estabilidad y con una bomba sin contador de caudal. El día anterior ya se habían hecho tres.",
      "La escora a babor se manifiesta en la tarde del 25; el puente queda <b>sin guardia efectiva</b> (el oficial de guardia en tierra controlando cabos; el 1er Oficial coreano en su camarote) y <b>nadie da la alarma</b>.",
      "<b>Ingreso de agua por un ojo de buey abierto</b> a babor, en el taller del torno, situado a 1–2 metros de la línea de flotación. No se pudo cerrar por la presión del agua.",
      "El agua desciende por el tambucho y <b>moja el tablero eléctrico principal</b>: se produce el <b>black out</b>. Varios declarantes describen la fase final como prácticamente súbita.",
      "<b>Las bombas de achique quedan sin energía</b> y el generador de emergencia no se alcanza a encender: inundación incontrolable.",
      "<b>Abandono sin orden ni alarma.</b> A las 18:46 Kyongsu PARK avisa al patrón desde el muelle; a las 18:55 el inspector MOON avisa a la agencia con foto y atribución de causa. El buque queda de banda, apoyado en el fondo y sujeto por sus propios cabos."
    ];
    q("#mechChain").innerHTML = mech.map(function (m) { return "<li>" + m + "</li>"; }).join("");

    var knots = [
      {
        h: "¿Se ordenó no encender la bomba?",
        p: "El 2° Oficial de Máquinas afirma que el 1er Oficial le prohibió encender la bomba; el 1er Oficial niega que la conversación haya existido. De ello depende si el oficial de guardia impidió activamente el adrizamiento."
      },
      {
        h: "La bomba nunca se encendió",
        p: "Dos declarantes independientes lo acreditan. Si sólo hubo trasvase por gravedad entre dos tanques de 12–13 m³, la maniobra no pudo causar la escora y la tesis del error humano se cae."
      },
      {
        h: "Nadie ordenó el trasvase",
        p: "Ni el Capitán, ni el oficial de guardia, ni el Jefe de Máquinas asumen la orden de la maniobra señalada como causa del hundimiento. Queda huérfana de autoría en todo el expediente."
      },
      {
        h: "Soldaban a bordo el día del hundimiento",
        p: "El jefe de máquinas coreano sitúa a personal venido de Corea soldando piezas en mal estado a las 16:00, la misma hora en que empieza la escora. Trabajo en caliente de terceros que no fue indagado a ningún otro declarante."
      },
      {
        h: "Nadie estaba en el puente",
        p: "El único oficial de guardia se había bajado a tierra a controlar cabos y el 1er Oficial de Puente coreano declara que no hacía guardias y estaba en su camarote. Con el Capitán y el Jefe de Máquinas durmiendo, el puente quedó vacío."
      }
    ];
    q("#knots").innerHTML = knots.map(function (k) {
      return '<div class="knot"><h4>' + esc(k.h) + "</h4><p>" + esc(k.p) + "</p></div>";
    }).join("");

    var rows = DECL.map(function (d) {
      return '<div class="rost" data-decl="' + d.id + '">' +
        '<div class="rost-av" style="background:' + declColor(d) + '">' + initials(d.nombre) + "</div>" +
        '<div class="rost-txt"><b>' + esc(d.nombre) + (d.ampliacion ? " · ampl." : "") +
        "</b><span>" + esc(d.cargoCorto) + " · " + esc(d.acta.fecha.replace(" de 2026", "")) + "</span></div></div>";
    });
    pendientesNodos.forEach(function (n) {
      var label = n.id === "equipo-coreano" ? "Personal venido de Corea (soldadura)" : n.label;
      var sub = n.id === "equipo-coreano" ? "Sin identificar ni declarar" : "Sin declarar";
      rows.push('<div class="rost pend">' +
        '<div class="rost-av" style="background:#b5559e">' + initials(label) + "</div>" +
        '<div class="rost-txt"><b>' + esc(label) + "</b><span>" + esc(sub) + "</span></div></div>");
    });
    q("#roster").innerHTML = rows.join("");
    qa("#roster .rost[data-decl]").forEach(function (n) {
      n.addEventListener("click", function () { gotoDeclarante(n.dataset.decl); });
    });
  }

  /* ============================================================
     CRONOLOGÍA
     ============================================================ */
  var tlState = { fases: {}, onlyConflict: false, onlyInterr: false };
  AN.fases.forEach(function (f) { tlState.fases[f.id] = true; });

  function faseOf(id) {
    return AN.fases.filter(function (f) { return f.id === id; })[0] || { color: "#888", label: id };
  }

  function renderTimelineFilters() {
    q("#tlFilters").innerHTML = AN.fases.map(function (f) {
      var n = AN.timeline.filter(function (t) { return t.fase === f.id; }).length;
      return '<span class="tlf" data-fase="' + f.id + '"><i style="background:' + f.color + '"></i>' +
        esc(f.label) + " <b>" + n + "</b></span>";
    }).join("");
    qa("#tlFilters .tlf").forEach(function (n) {
      n.addEventListener("click", function () {
        var id = n.dataset.fase;
        tlState.fases[id] = !tlState.fases[id];
        n.classList.toggle("off", !tlState.fases[id]);
        renderTimeline();
      });
    });
    q("#tlOnlyConflict").addEventListener("change", function (e) {
      tlState.onlyConflict = e.target.checked; renderTimeline();
    });
    q("#tlOnlyInterr").addEventListener("change", function (e) {
      tlState.onlyInterr = e.target.checked; renderTimeline();
    });
  }

  function renderTimeline() {
    var items = AN.timeline.filter(function (t) {
      if (!tlState.fases[t.fase]) return false;
      if (tlState.onlyConflict && !t.conflicto) return false;
      if (tlState.onlyInterr && !t.interrogatorio) return false;
      return true;
    });

    q("#tlResult").textContent = items.length + " de " + AN.timeline.length + " hitos";

    if (!items.length) {
      q("#timeline").innerHTML = '<div class="empty-state"><b>Sin hitos</b>Ajustá los filtros para ver la cronología.</div>';
      return;
    }

    var html = "", lastDay = null;
    items.forEach(function (t) {
      if (t.fecha !== lastDay) {
        lastDay = t.fecha;
        html += '<div class="tl-day">' + esc(t.fecha) + "</div>";
      }
      var f = faseOf(t.fase);
      var cls = "tl-item" +
        (t.destacado ? " is-key" : "") +
        (t.conflicto ? " is-conflict" : "") +
        (t.interrogatorio ? " is-interr" : "");
      var tags = (t.etiquetas || []).map(function (e) {
        var hot = e === e.toUpperCase() && e.length > 3;
        return '<span class="chip ' + (hot ? "chip-hot" : "") + '">' + esc(e) + "</span>";
      }).join("");
      html += '<div class="' + cls + '">' +
        '<div class="tl-time">' + esc(t.hora) + "</div>" +
        '<div class="tl-dot" style="border-color:' + f.color + '"></div>' +
        '<div class="tl-card"><h4>' + esc(t.titulo) + "</h4><p>" + esc(t.texto) + "</p>" +
        '<div class="tl-meta"><span class="tl-src">' + esc(t.fuente) + "</span>" + tags +
        (t.ref ? '<button class="tl-link" data-ref="' + t.ref + '">Ver fuente →</button>' : "") +
        "</div></div></div>";
    });
    q("#timeline").innerHTML = html;
    qa("#timeline .tl-link").forEach(function (n) {
      n.addEventListener("click", function () { gotoRef(n.dataset.ref); });
    });
  }

  /* ============================================================
     INTERROGATORIOS
     ============================================================ */
  var declActive = DECL[0].id;
  var declTab = "qa";

  function renderDeclTabs() {
    q("#declTabs").innerHTML = DECL.map(function (d) {
      return '<button class="dtab' + (d.id === declActive ? " is-active" : "") + '" data-id="' + d.id + '">' +
        '<span class="dtab-av" style="background:' + declColor(d) + '">' + initials(d.nombre) + "</span>" +
        '<span class="dtab-txt"><b>' + esc(d.nombre) + "</b><span>" + esc(d.cargoCorto) + "</span></span></button>";
    }).join("");
    qa("#declTabs .dtab").forEach(function (b) {
      b.addEventListener("click", function () { selectDeclarante(b.dataset.id); });
    });
  }

  function selectDeclarante(id) {
    if (!DECL.some(function (d) { return d.id === id; })) return;
    declActive = id;
    declTab = "qa";
    renderDeclTabs();
    renderDeclBody();
    var t = q('.dtab[data-id="' + id + '"]');
    scrollTo(t, { block: "nearest", inline: "nearest" });
    q("#scrollArea").scrollTop = 0;
  }

  function renderDeclBody() {
    var d = DECL.filter(function (x) { return x.id === declActive; })[0];
    var c = declColor(d);

    var fichaRows = Object.keys(d.ficha).map(function (k) {
      return "<dt>" + esc(k) + "</dt><dd>" + esc(d.ficha[k]) + "</dd>";
    }).join("");
    var actaRows = [
      ["Fecha del acta", d.acta.fecha],
      ["Hora de apertura", d.acta.inicio],
      ["Hora de cierre", d.acta.cierre],
      ["Oficial actuante", d.acta.oficial],
      ["Intérprete", d.acta.interprete],
      ["Lugar", d.acta.lugar],
      ["Preguntas", String(d.acta.preguntas)],
      ["Archivo", d.acta.archivo]
    ].map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("");

    var nCrit = d.conclusiones.filter(function (x) { return x.tipo === "critico"; }).length;
    var nContra = d.conclusiones.filter(function (x) { return x.tipo === "contradiccion"; }).length;

    var head =
      '<div class="decl-head"><div class="dh-top">' +
      '<div class="dh-av" style="background:' + c + '">' + initials(d.nombre) + "</div>" +
      '<div class="dh-id"><h2>' + esc(d.nombre) + "</h2>" +
      '<p class="dh-cargo">' + esc(d.cargo) + "</p>" +
      '<div class="dh-chips">' +
      '<span class="chip chip-info">' + esc(d.acta.fecha) + " · " + esc(d.acta.inicio) + "–" + esc(String(d.acta.cierre).split(" ")[0]) + "</span>" +
      '<span class="chip">' + esc(d.qa.length) + " preguntas</span>" +
      (nCrit ? '<span class="chip chip-hot">' + nCrit + " puntos críticos</span>" : "") +
      (nContra ? '<span class="chip chip-purple">' + nContra + " contradicciones</span>" : "") +
      "</div></div></div>" +
      '<div class="dh-cols">' +
      '<div class="dh-col"><h4>Identificación</h4><dl class="kv">' + fichaRows + "</dl>" +
      '<h4 style="margin-top:18px">Ubicación durante los hechos</h4><p class="dh-note">' + esc(d.posicion) + "</p></div>" +
      '<div class="dh-col"><h4>Datos del acta</h4><dl class="kv">' + actaRows + "</dl>" +
      '<h4 style="margin-top:18px">Tesis del declarante</h4><div class="dh-tesis">' + esc(d.tesis) + "</div></div>" +
      "</div></div>";

    var subtabs =
      '<div class="sub-tabs">' +
      '<button class="stab' + (declTab === "qa" ? " is-active" : "") + '" data-t="qa">Preguntas y respuestas<span class="stab-count">' + d.qa.length + "</span></button>" +
      '<button class="stab' + (declTab === "cl" ? " is-active" : "") + '" data-t="cl">Conclusiones<span class="stab-count">' + d.conclusiones.length + "</span></button>" +
      "</div>";

    var body;
    if (declTab === "qa") {
      body =
        '<div class="qa-tools">' +
        '<label class="mt-check"><input type="checkbox" id="qaOnlyKey"><span>Sólo preguntas clave</span></label>' +
        '<button class="btn btn-ghost" id="qaAll">Abrir todas</button>' +
        '<button class="btn btn-ghost" id="qaNone">Cerrar todas</button>' +
        "</div>" + '<div class="qa-list" id="qaList"></div>';
    } else {
      var ICO = { critico: "!", contradiccion: "≠", alerta: "▲", hecho: "i" };
      var LBL = { critico: "Crítico", contradiccion: "Contradicción", alerta: "Alerta", hecho: "Hecho" };
      body = '<div class="concl-list">' + d.conclusiones.map(function (x) {
        return '<div class="concl t-' + x.tipo + '" title="' + esc(LBL[x.tipo] || "") + '">' +
          '<div class="concl-ico">' + (ICO[x.tipo] || "•") + "</div>" +
          '<div class="concl-txt">' + esc(x.t) + "</div></div>";
      }).join("") + "</div>";
    }

    q("#declBody").innerHTML = head + subtabs + body;

    qa("#declBody .stab").forEach(function (b) {
      b.addEventListener("click", function () { declTab = b.dataset.t; renderDeclBody(); });
    });

    if (declTab === "qa") {
      renderQA(d, false);
      q("#qaOnlyKey").addEventListener("change", function (e) { renderQA(d, e.target.checked); });
      q("#qaAll").addEventListener("click", function () {
        qa("#qaList .qa").forEach(function (n) { n.classList.add("open"); });
      });
      q("#qaNone").addEventListener("click", function () {
        qa("#qaList .qa").forEach(function (n) { n.classList.remove("open"); });
      });
    }
  }

  function renderQA(d, onlyKey) {
    var list = onlyKey ? d.qa.filter(function (x) { return x.clave; }) : d.qa;
    q("#qaList").innerHTML = list.map(function (x) {
      var tags = (x.tags || []).map(function (t) {
        var hot = t === t.toUpperCase() && t.length > 3;
        return '<span class="tag ' + (hot ? "hot" : "") + '">' + esc(t) + "</span>";
      }).join("");
      return '<div class="qa' + (x.clave ? " is-key" : "") + (x.clave ? " open" : "") + '">' +
        '<button class="qa-q"><span class="qa-n">' + esc(x.n) + "</span>" +
        '<span class="qa-qt">' + esc(x.p) + '</span><span class="qa-arrow">▸</span></button>' +
        '<div class="qa-a"><div class="qa-a-txt">' + esc(x.r) + "</div>" +
        (tags ? '<div class="qa-tags">' + tags + "</div>" : "") + "</div></div>";
    }).join("");
    qa("#qaList .qa-q").forEach(function (b) {
      b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); });
    });
  }

  /* ============================================================
     INCONGRUENCIAS
     ============================================================ */
  var incFilter = "todas";
  var GRAV_LBL = { critica: "Crítica", alta: "Alta", media: "Media" };

  function renderIncFilters() {
    var ejes = [];
    AN.incongruencias.forEach(function (i) { if (ejes.indexOf(i.eje) < 0) ejes.push(i.eje); });
    var opts = [{ id: "todas", l: "Todas", n: AN.incongruencias.length }];
    ["critica", "alta", "media"].forEach(function (g) {
      var n = AN.incongruencias.filter(function (i) { return i.gravedad === g; }).length;
      if (n) opts.push({ id: "g:" + g, l: "Gravedad " + GRAV_LBL[g].toLowerCase(), n: n });
    });
    ejes.forEach(function (e) {
      opts.push({ id: "e:" + e, l: e, n: AN.incongruencias.filter(function (i) { return i.eje === e; }).length });
    });
    q("#incFilters").innerHTML = opts.map(function (o) {
      return '<span class="tlf' + (incFilter === o.id ? "" : " off") + '" data-f="' + esc(o.id) + '">' +
        esc(o.l) + " <b>" + o.n + "</b></span>";
    }).join("");
    qa("#incFilters .tlf").forEach(function (n) {
      n.addEventListener("click", function () {
        incFilter = n.dataset.f; renderIncFilters(); renderInc();
      });
    });
  }

  function renderInc() {
    var list = AN.incongruencias.filter(function (i) {
      if (incFilter === "todas") return true;
      if (incFilter.indexOf("g:") === 0) return i.gravedad === incFilter.slice(2);
      if (incFilter.indexOf("e:") === 0) return i.eje === incFilter.slice(2);
      return true;
    });
    q("#incList").innerHTML = list.map(function (i, idx) {
      var gchip = i.gravedad === "critica" ? "chip-hot" : (i.gravedad === "alta" ? "chip-warn" : "chip-info");
      var vers = i.versiones.map(function (v) {
        return '<div class="ver"><div class="ver-who"><b>' + esc(v.quien) + "</b>" +
          (v.donde ? '<span class="ver-where">' + esc(v.donde) + "</span>" : "") +
          (v.ref ? '<button class="ver-link" data-ref="' + v.ref + '">ver acta</button>' : "") +
          '</div><p class="ver-cita">' + esc(v.cita) + "</p></div>";
      }).join("");
      return '<div class="inc g-' + i.gravedad + '" data-inc="' + i.id + '">' +
        '<button class="inc-head"><span class="inc-num">' + String(idx + 1).padStart(2, "0") + "</span>" +
        '<span class="inc-hb"><h3>' + esc(i.titulo) + "</h3>" +
        '<p class="inc-res">' + esc(i.resumen) + "</p>" +
        '<span class="inc-chips"><span class="chip ' + gchip + '">' + GRAV_LBL[i.gravedad] + "</span>" +
        '<span class="chip">' + esc(i.eje) + "</span>" +
        '<span class="chip">' + i.versiones.length + " versiones</span></span></span>" +
        '<span class="inc-arrow">▸</span></button>' +
        '<div class="inc-body">' +
        '<div class="inc-sec-h">Versiones confrontadas</div><div class="vers">' + vers + "</div>" +
        '<div class="inc-sec-h">Análisis</div><p class="inc-analisis">' + esc(i.analisis) + "</p>" +
        '<div class="inc-sec-h">Cómo resolverla</div><div class="inc-reso">' + esc(i.resolucion) + "</div>" +
        "</div></div>";
    }).join("");

    qa("#incList .inc-head").forEach(function (b) {
      b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); });
    });
    qa("#incList .ver-link").forEach(function (b) {
      b.addEventListener("click", function (e) { e.stopPropagation(); gotoRef(b.dataset.ref); });
    });
  }

  /* ============================================================
     CONCLUSIONES
     ============================================================ */
  var GRADO = {
    acreditado: "Acreditado",
    probable: "Hipótesis probable",
    "a-verificar": "A verificar",
    refutado: "Refutado por la prueba",
    descartable: "Descartable"
  };

  function renderConclusiones() {
    q("#conclWarn").innerHTML = "<div>" + esc(AN.conclusiones.advertencia) + "</div>";
    q("#gradeLegend").innerHTML = Object.keys(GRADO).map(function (g) {
      return '<span class="cit-badge g-' + g + '">' + esc(GRADO[g]) + "</span>";
    }).join("");

    q("#conclList").innerHTML = AN.conclusiones.grupos.map(function (g) {
      return '<div class="cgroup"><div class="cgroup-h"><h3>' + esc(g.titulo) + "</h3>" +
        "<p>" + esc(g.subtitulo) + "</p></div>" +
        g.items.map(function (it) {
          return '<div class="cit b-' + it.grado + '">' +
            '<span class="cit-badge g-' + it.grado + '">' + esc(GRADO[it.grado] || it.grado) + "</span>" +
            '<span class="cit-txt">' + esc(it.t) + "</span></div>";
        }).join("") + "</div>";
    }).join("");
  }

  /* ============================================================
     PASOS A SEGUIR
     ============================================================ */
  var STORE_KEY = "alphacrux.pasos.v1";
  var doneMap = {};
  try { doneMap = JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch (e) { doneMap = {}; }

  function pasoKey(bi, ii) { return bi + "-" + ii; }

  function renderPasos() {
    var URG = { inmediata: "chip-hot", alta: "chip-warn", media: "chip-info" };
    var URGL = { inmediata: "Inmediata", alta: "Alta", media: "Media" };
    q("#pasosList").innerHTML = AN.pasos.map(function (b, bi) {
      return '<div class="pblock"><div class="pblock-h"><h3>' + esc(b.bloque) + "</h3>" +
        '<span class="chip ' + (URG[b.urgencia] || "") + '">Prioridad ' + (URGL[b.urgencia] || b.urgencia) + "</span>" +
        '<span class="chip">' + b.items.length + " diligencias</span></div>" +
        b.items.map(function (it, ii) {
          var k = pasoKey(bi, ii);
          return '<div class="pstep' + (doneMap[k] ? " done" : "") + '" data-k="' + k + '">' +
            '<label class="pstep-cb"><input type="checkbox"' + (doneMap[k] ? " checked" : "") + "></label>" +
            '<div class="pstep-b"><p class="pstep-t">' + esc(it.t) + "</p>" +
            '<p class="pstep-d">' + esc(it.d) + "</p></div></div>";
        }).join("") + "</div>";
    }).join("");

    qa("#pasosList .pstep input").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var row = cb.closest(".pstep");
        doneMap[row.dataset.k] = cb.checked;
        row.classList.toggle("done", cb.checked);
        try { localStorage.setItem(STORE_KEY, JSON.stringify(doneMap)); } catch (e) {}
        updateProgress();
      });
    });
    updateProgress();
  }

  function updateProgress() {
    var total = AN.pasos.reduce(function (a, b) { return a + b.items.length; }, 0);
    var done = 0;
    AN.pasos.forEach(function (b, bi) {
      b.items.forEach(function (_, ii) { if (doneMap[pasoKey(bi, ii)]) done++; });
    });
    var pct = total ? Math.round((done / total) * 100) : 0;
    q("#progressBar").style.width = pct + "%";
    q("#progressLbl").textContent = done + " / " + total + " completadas (" + pct + "%)";
  }

  q("#pasosReset").addEventListener("click", function () {
    doneMap = {};
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    renderPasos();
  });

  /* ============================================================
     SUMARIO (BORRADOR)
     ============================================================ */
  function ultimaActaFecha() {
    var best = null;
    DECL.forEach(function (d) {
      var f = d.acta && d.acta.fecha;
      if (!f) return;
      if (!best || f.localeCompare(best, "es") > 0) best = f;
      // fechas en español "2 de septiembre de 2026" — comparar por timeline interrogatorio
    });
    var interr = AN.timeline.filter(function (t) { return t.interrogatorio; });
    if (interr.length) return interr[interr.length - 1].fecha;
    return best || SUM.meta.fechaOficio;
  }

  function renderSumario() {
    if (!SUM) return;
    var nActas = DECL.length;
    var nCrit = AN.incongruencias.filter(function (i) { return i.gravedad === "critica"; }).length;
    var nPend = AN.grafo.nodos.filter(function (n) {
      return n.cat === "no-declaro" || n.id === "equipo-coreano";
    }).length;
    var toc = [
      ["#sd-1", "1. Situación"],
      ["#sd-2", "2. Características"],
      ["#sd-3", "3. Investigación"],
      ["#sd-4", "4. Conclusiones"],
      ["#sd-5", "5. Recomendaciones"]
    ];
    q("#sumarioToolbar").innerHTML =
      '<span class="chip chip-warn">' + esc(SUM.meta.estado) + "</span>" +
      '<span class="chip">' + nActas + " actas</span>" +
      '<span class="chip">' + AN.incongruencias.length + " incongruencias · " + nCrit + " críticas</span>" +
      '<span class="chip chip-hot">' + nPend + " testigos pendientes</span>" +
      '<span class="chip">Última acta: ' + esc(ultimaActaFecha()) + "</span>" +
      '<nav class="sumario-toc">' + toc.map(function (t) {
        return '<a href="' + t[0] + '">' + esc(t[1]) + "</a>";
      }).join("") + "</nav>";

    var inst = (CASO.instructores || []).map(function (i) {
      return "<div><b>" + esc(i.nombre) + "</b><br>" + esc(i.rol) + "</div>";
    }).join("");

    var b = CASO.buque;
    var kv = [
      ["Nombre", b.nombre], ["Tipo", b.tipo], ["Bandera", b.bandera], ["N° OMI", b.omi],
      ["Eslora", b.eslora], ["Manga", b.manga], ["Armador", b.armador], ["Agencia", b.agencia],
      ["Lugar del siniestro", b.lugar], ["Fecha", b.fecha],
      ["Combustible a bordo", b.combustible], ["Situación final", b.apoyado]
    ].map(function (r) {
      return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>";
    }).join("");

    var actas = DECL.map(function (d, i) {
      var doc = d.ficha && (d.ficha.Pasaporte || d.ficha.Documento || d.ficha["N° pasaporte"] || "");
      var extra = doc ? " · doc. " + doc : "";
      return '<li><span class="n">' + String(i + 1).padStart(2, "0") + "</span><span><b>" +
        esc(d.nombre) + "</b> — " + esc(d.cargo) + extra + "<br>" +
        esc(d.acta.fecha) + (d.acta.inicio ? ", " + d.acta.inicio : "") +
        (d.acta.cierre && String(d.acta.cierre).indexOf(":") >= 0 && String(d.acta.cierre).length < 12
          ? " – " + d.acta.cierre : "") +
        " · " + esc(d.acta.oficial) +
        (d.acta.interprete ? " · intérprete " + esc(d.acta.interprete.split("(")[0].trim()) : "") +
        " · " + d.qa.length + " preguntas</span></li>";
    }).join("");

    var analisis = SUM.analisisActas.map(function (a) {
      return '<div class="sd-sub"><h5>' + esc(a.titulo) + "</h5><p>" + esc(a.texto) + "</p></div>";
    }).join("");

    var seq = SUM.sucesion.map(function (s) {
      return '<li><span class="h">' + esc(s.h) + "</span><span>" + esc(s.t) + "</span></li>";
    }).join("");

    var defic = SUM.deficiencias.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("");

    var concl = SUM.conclusiones.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("");

    var reco = SUM.recomendaciones.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("");

    var situ = SUM.situacion.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var desa = SUM.desarrollo.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    q("#sumarioDoc").innerHTML =
      '<header class="sd-head">' +
        '<p class="sd-kicker">' + esc(SUM.meta.titulo) + "</p>" +
        '<h2 class="sd-title">' + esc(SUM.meta.asunto) + "</h2>" +
        '<p class="sd-inst">Oficiales instructores</p>' +
        '<div class="sd-firmas" style="margin-top:14px">' + inst + "</div>" +
      "</header>" +
      '<div class="sd-meta"><span>Montevideo, ' + esc(SUM.meta.fechaOficio) + ".-</span>" +
        "<span>" + nActas + " actas · actualizado a la última incorporación</span></div>" +
      '<p class="sd-dest">' + esc(SUM.meta.destinatario) + "</p>" +
      '<p class="sd-dest-cargo">' + esc(SUM.meta.destinatarioCargo) + "</p>" +
      '<p class="sd-lead">' + esc(SUM.introduccion) + "</p>" +
      '<p class="sd-note">' + esc(SUM.meta.notaFormal) + "</p>" +

      '<section class="sd-sec" id="sd-1"><h3>1. Situación</h3>' + situ + "</section>" +

      '<section class="sd-sec" id="sd-2"><h3>2. Características del buque</h3>' +
        '<dl class="sd-kv">' + kv + "</dl></section>" +

      '<section class="sd-sec" id="sd-3"><h3>3. Investigación</h3>' +
        "<h4>A) Desarrollo de lo sucedido</h4>" + desa +
        "<h4>B) Toma de actas</h4>" +
        "<p>Hasta la fecha se tomaron las siguientes actas de información sumaria, en el orden en que fueron incorporadas al análisis:</p>" +
        '<ol class="sd-actas">' + actas + "</ol>" +
        "<h4>C) Análisis de actas de declaración</h4>" +
        "<p>Del cruce de las declaraciones surgen los siguientes ejes de análisis. El detalle confrontado de cada incongruencia obra en la sección específica del expediente interactivo.</p>" +
        analisis +
        "<h4>D) Sucesión de eventos</h4>" +
        "<p>Reconstrucción cronológica a partir de las declaraciones y de los registros de la respuesta. No se dispone de material fotográfico ni de cámara de la fase crítica.</p>" +
        '<ul class="sd-seq">' + seq + "</ul>" +
        "<h4>E) Deficiencias organizativas y del expediente</h4>" +
        '<ul class="sd-ul">' + defic + "</ul>" +
      "</section>" +

      '<section class="sd-sec" id="sd-4"><h3>4. Conclusiones</h3>' +
        "<p>Al estado actual de la instrucción, y sin perjuicio de lo que resulte de las diligencias pendientes, se formulan las siguientes conclusiones provisorias:</p>" +
        '<ol class="sd-ol">' + concl + "</ol></section>" +

      '<section class="sd-sec" id="sd-5"><h3>5. Recomendaciones</h3>' +
        "<p>Se recomienda, salvo mejor opinión, los siguientes puntos:</p>" +
        '<ol class="sd-ol">' + reco + "</ol></section>" +

      '<p class="sd-close">' + esc(SUM.cierre) + "</p>" +
      '<div class="sd-firmas">' + inst + "</div>";

    qa("#sumarioToolbar .sumario-toc a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var id = a.getAttribute("href").slice(1);
        var n = document.getElementById(id);
        if (n) scrollTo(n, { block: "start", behavior: "smooth" });
      });
    });
  }

  /* ============================================================
     DOCUMENTOS
     ============================================================ */
  function renderDocs() {
    var TIPO = { informe: "chip-info", exposicion: "chip-purple", cronologia: "chip", planos: "chip-info", meteo: "chip-info", rol: "chip-purple" };
    var vientoSeries = (AN.viento && AN.viento.series) || [];
    var rolOficiales = (AN.rol && AN.rol.oficiales) || [];
    q("#docsList").innerHTML = AN.documentos.map(function (d) {
      var imgs = (d.imagenes || []).map(function (src) {
        return '<a href="' + esc(src) + '" target="_blank" rel="noopener">' +
          '<img src="' + esc(src) + '" alt="' + esc(d.titulo) + '" loading="lazy"></a>';
      }).join("");
      var archivoCell = d.archivoUrl
        ? '<a class="doc-file-link" href="' + esc(d.archivoUrl) + '" target="_blank" rel="noopener">' + esc(d.archivo) + "</a>"
        : esc(d.archivo);
      var rows = d.tabla || (d.useVientoTabla ? vientoSeries : null);
      var tablaHtml = "";
      if (rows && rows.length) {
        tablaHtml = '<div class="inc-sec-h">Serie horaria</div>' +
          '<div class="doc-table-wrap"><table class="doc-table">' +
          "<thead><tr><th>Timestamp</th><th>Velocidad (nudos)</th><th>Dirección (°)</th></tr></thead><tbody>" +
          rows.map(function (r) {
            return "<tr><td>" + esc(r.ts) + "</td><td>" + esc(String(r.kn).replace(".", ",")) +
              "</td><td>" + esc(String(r.dir)) + "</td></tr>";
          }).join("") +
          "</tbody></table></div>" +
          '<p class="doc-table-note">Dirección = de dónde viene el viento. Fuente: ' +
          esc((AN.viento && AN.viento.fuente) || "") + ".</p>";
      }
      if (d.useRolTabla && rolOficiales.length) {
        tablaHtml += '<div class="inc-sec-h">Oficiales y roles nominales (crew list)</div>' +
          '<div class="doc-table-wrap"><table class="doc-table">' +
          "<thead><tr><th>N°</th><th>Nac.</th><th>Rank</th><th>Nombre</th><th>Embarque</th><th>Nota</th></tr></thead><tbody>" +
          rolOficiales.map(function (r) {
            return "<tr><td>" + r.n + "</td><td>" + esc(r.nat) + "</td><td>" + esc(r.rank) +
              "</td><td>" + esc(r.name) + "</td><td>" + esc(r.aboard) + "</td><td>" + esc(r.nota) + "</td></tr>";
          }).join("") +
          "</tbody></table></div>" +
          '<p class="doc-table-note">' + esc((AN.rol && AN.rol.notaIndonesios) || "") +
          " Fuente: " + esc((AN.rol && AN.rol.fuente) || "") + ".</p>";
      }
      return '<div class="inc" data-doc="' + d.id + '">' +
        '<button class="inc-head"><span class="inc-num">▤</span>' +
        '<span class="inc-hb"><h3>' + esc(d.titulo) + "</h3>" +
        '<p class="inc-res">' + esc(d.resumen) + "</p>" +
        '<span class="inc-chips"><span class="chip ' + (TIPO[d.tipo] || "chip") + '">' + esc(d.fecha) + "</span>" +
        '<span class="chip">' + esc(d.autor) + "</span></span></span>" +
        '<span class="inc-arrow">▸</span></button>' +
        '<div class="inc-body">' +
        '<dl class="kv" style="margin-bottom:6px">' +
        "<dt>Autor</dt><dd>" + esc(d.autor) + "</dd>" +
        "<dt>Cargo</dt><dd>" + esc(d.cargo) + "</dd>" +
        "<dt>Fecha</dt><dd>" + esc(d.fecha) + "</dd>" +
        "<dt>Destinatario</dt><dd>" + esc(d.destinatario) + "</dd>" +
        "<dt>Archivo</dt><dd>" + archivoCell + "</dd></dl>" +
        '<div class="inc-sec-h">Contenido relevante</div>' +
        '<ul class="doc-points">' + d.puntos.map(function (p) {
          var alert = /^ALERTA/.test(p) || /^HALLAZGO/.test(p);
          return "<li" + (alert ? ' class="alert"' : "") + ">" + esc(p) + "</li>";
        }).join("") + "</ul>" +
        tablaHtml +
        (imgs ? '<div class="inc-sec-h">Documento original</div><div class="doc-imgs">' + imgs + "</div>" : "") +
        "</div></div>";
    }).join("");
    qa("#docsList .inc-head").forEach(function (b) {
      b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); });
    });
  }

  /* ============================================================
     BÚSQUEDA GLOBAL
     ============================================================ */
  var searchIndex = [];

  function buildIndex() {
    DECL.forEach(function (d) {
      searchIndex.push({
        grupo: "Declarantes", t: d.nombre + " — " + d.cargo,
        x: d.tesis, w: d.acta.fecha + " · " + d.acta.oficial,
        blob: [d.nombre, d.cargo, d.posicion, d.tesis, JSON.stringify(d.ficha), d.acta.oficial, d.acta.interprete].join(" "),
        act: function () { gotoDeclarante(d.id); }
      });
      d.qa.forEach(function (x) {
        searchIndex.push({
          grupo: "Preguntas y respuestas", t: d.nombre + " · P." + x.n + " — " + x.p,
          x: x.r, w: d.cargoCorto + " · " + d.acta.fecha,
          blob: x.p + " " + x.r + " " + (x.tags || []).join(" ") + " " + d.nombre,
          act: function () { gotoDeclarante(d.id); }
        });
      });
      d.conclusiones.forEach(function (c) {
        searchIndex.push({
          grupo: "Conclusiones por declaración", t: d.nombre + " — conclusión",
          x: c.t, w: d.cargoCorto, blob: c.t + " " + d.nombre,
          act: function () { gotoDeclarante(d.id); declTab = "cl"; renderDeclBody(); }
        });
      });
    });
    AN.timeline.forEach(function (t) {
      searchIndex.push({
        grupo: "Línea de tiempo", t: t.hora + " · " + t.titulo, x: t.texto,
        w: t.fecha + " · " + t.fuente,
        blob: [t.titulo, t.texto, t.fuente, t.hora, t.fecha, (t.etiquetas || []).join(" ")].join(" "),
        act: function () { show("cronologia"); }
      });
    });
    AN.incongruencias.forEach(function (i) {
      searchIndex.push({
        grupo: "Incongruencias", t: i.titulo, x: i.resumen, w: "Gravedad " + i.gravedad + " · " + i.eje,
        blob: [i.titulo, i.resumen, i.analisis, i.resolucion, i.eje,
          i.versiones.map(function (v) { return v.quien + " " + v.cita; }).join(" ")].join(" "),
        act: function () {
          show("incongruencias");
          setTimeout(function () {
            var n = q('[data-inc="' + i.id + '"]');
            if (n) { n.classList.add("open"); scrollTo(n, { block: "center", behavior: "smooth" }); }
          }, 60);
        }
      });
    });
    AN.conclusiones.grupos.forEach(function (g) {
      g.items.forEach(function (it) {
        searchIndex.push({
          grupo: "Conclusiones generales", t: g.titulo, x: it.t, w: GRADO[it.grado] || it.grado,
          blob: it.t + " " + g.titulo, act: function () { show("conclusiones"); }
        });
      });
    });
    AN.pasos.forEach(function (b) {
      b.items.forEach(function (it) {
        searchIndex.push({
          grupo: "Pasos a seguir", t: it.t, x: it.d, w: b.bloque,
          blob: it.t + " " + it.d + " " + b.bloque, act: function () { show("pasos"); }
        });
      });
    });
    AN.grafo.nodos.forEach(function (n) {
      searchIndex.push({
        grupo: "Mapa conceptual", t: n.label, x: n.det || "",
        w: (AN.grafo.categorias.filter(function (c) { return c.id === n.cat; })[0] || {}).label || n.cat,
        blob: n.label + " " + (n.det || ""),
        act: function () { show("mapa"); if (window.MAPA) window.MAPA.focus(n.id); }
      });
    });
    AN.documentos.forEach(function (d) {
      searchIndex.push({
        grupo: "Documentos base", t: d.titulo, x: d.resumen, w: d.autor + " · " + d.fecha,
        blob: [d.titulo, d.resumen, d.autor, d.destinatario, d.puntos.join(" ")].join(" "),
        act: function () { gotoDocumento(d.id); }
      });
    });
    if (AN.viento) {
      searchIndex.push({
        grupo: "Viento y escenario", t: "Viento Telemetry+ · OpenSeaMap",
        x: AN.viento.analisis, w: AN.viento.fuente,
        blob: "viento openseamap " + AN.viento.analisis + " " + AN.viento.posLabel,
        act: function () { show("viento"); }
      });
    }
    if (SUM) {
      searchIndex.push({
        grupo: "Sumario (borrador)", t: SUM.meta.asunto, x: SUM.introduccion,
        w: SUM.meta.fechaOficio, blob: SUM.meta.titulo + " " + SUM.meta.asunto + " " + SUM.introduccion,
        act: function () { show("sumario"); }
      });
      SUM.situacion.forEach(function (p) {
        searchIndex.push({
          grupo: "Sumario (borrador)", t: "1. Situación", x: p, w: "Situación",
          blob: p, act: function () { show("sumario"); setTimeout(function () { var n = q("#sd-1"); if (n) scrollTo(n); }, 60); }
        });
      });
      SUM.desarrollo.forEach(function (p) {
        searchIndex.push({
          grupo: "Sumario (borrador)", t: "3.A Desarrollo", x: p, w: "Investigación",
          blob: p, act: function () { show("sumario"); setTimeout(function () { var n = q("#sd-3"); if (n) scrollTo(n); }, 60); }
        });
      });
      SUM.analisisActas.forEach(function (a) {
        searchIndex.push({
          grupo: "Sumario (borrador)", t: "3.C " + a.titulo, x: a.texto, w: "Análisis de actas",
          blob: a.titulo + " " + a.texto,
          act: function () { show("sumario"); setTimeout(function () { var n = q("#sd-3"); if (n) scrollTo(n); }, 60); }
        });
      });
      SUM.conclusiones.forEach(function (t, i) {
        searchIndex.push({
          grupo: "Sumario (borrador)", t: "4. Conclusión " + (i + 1), x: t, w: "Conclusiones",
          blob: t, act: function () { show("sumario"); setTimeout(function () { var n = q("#sd-4"); if (n) scrollTo(n); }, 60); }
        });
      });
      SUM.recomendaciones.forEach(function (t, i) {
        searchIndex.push({
          grupo: "Sumario (borrador)", t: "5. Recomendación " + (i + 1), x: t, w: "Recomendaciones",
          blob: t, act: function () { show("sumario"); setTimeout(function () { var n = q("#sd-5"); if (n) scrollTo(n); }, 60); }
        });
      });
    }
    searchIndex.forEach(function (r) { r.n = norm(r.blob); });
  }

  function highlight(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      try {
        var re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        out = out.replace(re, "<mark>$1</mark>");
      } catch (e) {}
    });
    return out;
  }

  function runSearch(raw) {
    var qn = norm(raw).trim();
    if (qn.length < 2) return;
    var terms = qn.split(/\s+/);
    var hits = searchIndex.filter(function (r) {
      return terms.every(function (t) { return r.n.indexOf(t) >= 0; });
    });

    q("#searchMeta").textContent = hits.length
      ? hits.length + ' coincidencias para "' + raw + '"'
      : 'Sin coincidencias para "' + raw + '"';

    if (!hits.length) {
      q("#searchResults").innerHTML =
        '<div class="empty-state"><b>Nada encontrado</b>Probá con un nombre, un número de tanque, una hora o un término técnico.</div>';
      show("search", { keepScroll: true });
      return;
    }

    var byGroup = {};
    hits.forEach(function (r) { (byGroup[r.grupo] = byGroup[r.grupo] || []).push(r); });

    var order = ["Declarantes", "Preguntas y respuestas", "Incongruencias", "Línea de tiempo",
      "Conclusiones por declaración", "Conclusiones generales", "Pasos a seguir",
      "Mapa conceptual", "Documentos base", "Sumario (borrador)"];

    var html = "";
    order.forEach(function (g) {
      if (!byGroup[g]) return;
      html += '<div class="sr-group"><div class="sr-group-h">' + esc(g) + " · " + byGroup[g].length + "</div>";
      byGroup[g].slice(0, 40).forEach(function (r, i) {
        var idx = searchIndex.indexOf(r);
        html += '<div class="sr" data-i="' + idx + '"><p class="sr-t">' + highlight(r.t, terms) + "</p>" +
          '<p class="sr-x">' + highlight(String(r.x).slice(0, 320) + (String(r.x).length > 320 ? "…" : ""), terms) + "</p>" +
          '<p class="sr-w">' + esc(r.w) + "</p></div>";
      });
      if (byGroup[g].length > 40) html += '<p class="sr-w">… y ' + (byGroup[g].length - 40) + " más</p>";
      html += "</div>";
    });
    q("#searchResults").innerHTML = html;
    qa("#searchResults .sr").forEach(function (n) {
      n.addEventListener("click", function () {
        var r = searchIndex[+n.dataset.i];
        if (r && r.act) r.act();
      });
    });
    show("search", { keepScroll: true });
  }

  var searchTimer = null;
  q("#globalSearch").addEventListener("input", function (e) {
    var v = e.target.value;
    q("#searchClear").hidden = !v;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      if (norm(v).trim().length < 2) {
        if (currentView === "search") show("resumen");
        return;
      }
      runSearch(v);
    }, 180);
  });
  q("#searchClear").addEventListener("click", function () {
    q("#globalSearch").value = "";
    q("#searchClear").hidden = true;
    show("resumen");
  });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault(); q("#globalSearch").focus();
    }
    if (e.key === "Escape" && document.activeElement === q("#globalSearch")) {
      q("#searchClear").click();
    }
  });

  /* ============================================================
     INIT
     ============================================================ */
  q("#cnt-timeline").textContent = AN.timeline.length;
  q("#cnt-decl").textContent = DECL.length;
  q("#cnt-incon").textContent = AN.incongruencias.length;
  q("#cnt-pasos").textContent = AN.pasos.reduce(function (a, b) { return a + b.items.length; }, 0);

  renderPanorama();
  renderTimelineFilters();
  renderTimeline();
  renderDeclTabs();
  renderDeclBody();
  renderIncFilters();
  renderInc();
  renderConclusiones();
  renderPasos();
  renderDocs();
  renderSumario();
  buildIndex();
})();
