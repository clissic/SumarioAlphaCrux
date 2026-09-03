/* ============================================================
   Mapa conceptual — grafo dirigido por fuerzas (SVG, sin dependencias)
   ============================================================ */
(function () {
  "use strict";

  var G = window.ANALISIS.grafo;
  var SVGNS = "http://www.w3.org/2000/svg";

  var svg = document.getElementById("mapSvg");
  var wrap = svg.parentNode;
  var detail = document.getElementById("mapDetail");

  var nodes = [], links = [], byId = {};
  var catColor = {}, catLabel = {}, catOn = {};
  var showEdgeLabels = true;
  var selected = null;
  var started = false;

  var view = { x: 0, y: 0, k: 1 };
  var W = 900, H = 600;

  var LINK_STYLE = {
    causa: { color: "#d68b4b", w: 2.1, dash: "" },
    conflicto: { color: "#a970c8", w: 2.1, dash: "5 4" },
    orden: { color: "#4fa3d1", w: 1.5, dash: "" },
    declara: { color: "#6f7d8e", w: 1.1, dash: "2 3" },
    accion: { color: "#57b894", w: 1.4, dash: "" },
    estructura: { color: "#3a4a5c", w: 1.1, dash: "" },
    deficiencia: { color: "#c0392b", w: 1.3, dash: "3 3" },
    instruccion: { color: "#4a5a6c", w: 1, dash: "1 4" }
  };

  G.categorias.forEach(function (c) {
    catColor[c.id] = c.color; catLabel[c.id] = c.label; catOn[c.id] = true;
  });

  /* ---------------------------------------------------- estructura */
  function build() {
    nodes = G.nodos.map(function (n, i) {
      var a = (i / G.nodos.length) * Math.PI * 2;
      var r = 150 + (i % 7) * 34;
      return {
        id: n.id, label: n.label, cat: n.cat, det: n.det || "",
        ref: n.ref || null,
        size: n.size || 14,
        x: W / 2 + Math.cos(a) * r,
        y: H / 2 + Math.sin(a) * r,
        vx: 0, vy: 0, fixed: false, deg: 0
      };
    });
    nodes.forEach(function (n) { byId[n.id] = n; });

    links = [];
    G.enlaces.forEach(function (e) {
      var s = byId[e.s], t = byId[e.t];
      if (!s || !t) return;
      s.deg++; t.deg++;
      links.push({ s: s, t: t, l: e.l || "", tipo: e.tipo || "estructura" });
    });
  }

  /* ---------------------------------------------------- simulación */
  var alpha = 1, ticker = null;

  function step() {
    var i, j, a, b, dx, dy, d, f;

    // repulsión
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      for (j = i + 1; j < nodes.length; j++) {
        b = nodes[j];
        dx = b.x - a.x; dy = b.y - a.y;
        d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        if (d > 620) continue;
        f = (a.size + b.size) * 46 / (d * d);
        dx = (dx / d) * f; dy = (dy / d) * f;
        if (!a.fixed) { a.vx -= dx; a.vy -= dy; }
        if (!b.fixed) { b.vx += dx; b.vy += dy; }
      }
    }

    // resortes
    links.forEach(function (L) {
      a = L.s; b = L.t;
      dx = b.x - a.x; dy = b.y - a.y;
      d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      var rest = 118 + a.size + b.size;
      f = (d - rest) * 0.014;
      dx = (dx / d) * f; dy = (dy / d) * f;
      if (!a.fixed) { a.vx += dx; a.vy += dy; }
      if (!b.fixed) { b.vx -= dx; b.vy -= dy; }
    });

    // gravedad al centro y colisión mínima
    nodes.forEach(function (n) {
      if (n.fixed) { n.vx = n.vy = 0; return; }
      n.vx += (W / 2 - n.x) * 0.0022;
      n.vy += (H / 2 - n.y) * 0.0026;
      n.vx *= 0.84; n.vy *= 0.84;
      n.x += n.vx * alpha; n.y += n.vy * alpha;
    });

    alpha *= 0.994;
    if (alpha < 0.02) alpha = 0.02;
    paint();
  }

  function reheat() {
    alpha = 1;
    if (ticker) clearInterval(ticker);
    ticker = setInterval(step, 26);
    setTimeout(function () {
      if (ticker) { clearInterval(ticker); ticker = null; }
      paint();
    }, 7000);
  }

  /* ---------------------------------------------------- render SVG */
  var gRoot, gLinks, gLabels, gNodes, gTexts;

  function initSvg() {
    svg.innerHTML = "";
    var defs = document.createElementNS(SVGNS, "defs");
    Object.keys(LINK_STYLE).forEach(function (k) {
      var m = document.createElementNS(SVGNS, "marker");
      m.setAttribute("id", "ah-" + k);
      m.setAttribute("viewBox", "0 0 10 10");
      m.setAttribute("refX", "9"); m.setAttribute("refY", "5");
      m.setAttribute("markerWidth", "5"); m.setAttribute("markerHeight", "5");
      m.setAttribute("orient", "auto-start-reverse");
      var p = document.createElementNS(SVGNS, "path");
      p.setAttribute("d", "M0,0 L10,5 L0,10 z");
      p.setAttribute("fill", LINK_STYLE[k].color);
      m.appendChild(p); defs.appendChild(m);
    });
    svg.appendChild(defs);

    gRoot = document.createElementNS(SVGNS, "g");
    gLinks = document.createElementNS(SVGNS, "g");
    gLabels = document.createElementNS(SVGNS, "g");
    gNodes = document.createElementNS(SVGNS, "g");
    gTexts = document.createElementNS(SVGNS, "g");
    gRoot.appendChild(gLinks); gRoot.appendChild(gLabels);
    gRoot.appendChild(gNodes); gRoot.appendChild(gTexts);
    svg.appendChild(gRoot);

    links.forEach(function (L) {
      var st = LINK_STYLE[L.tipo] || LINK_STYLE.estructura;
      L.el = document.createElementNS(SVGNS, "line");
      L.el.setAttribute("class", "e-line");
      L.el.setAttribute("stroke", st.color);
      L.el.setAttribute("stroke-width", st.w);
      if (st.dash) L.el.setAttribute("stroke-dasharray", st.dash);
      L.el.setAttribute("stroke-opacity", ".55");
      L.el.setAttribute("marker-end", "url(#ah-" + L.tipo + ")");
      gLinks.appendChild(L.el);

      if (L.l) {
        L.tx = document.createElementNS(SVGNS, "text");
        L.tx.setAttribute("class", "e-label");
        L.tx.setAttribute("text-anchor", "middle");
        L.tx.textContent = L.l.length > 42 ? L.l.slice(0, 40) + "…" : L.l;
        gLabels.appendChild(L.tx);
      }
    });

    nodes.forEach(function (n) {
      n.r = 5 + n.size * 0.42;
      n.g = document.createElementNS(SVGNS, "g");
      n.g.setAttribute("class", "n-group");

      var c = document.createElementNS(SVGNS, "circle");
      c.setAttribute("class", "n-circle");
      c.setAttribute("r", n.r);
      c.setAttribute("fill", catColor[n.cat] || "#888");
      c.setAttribute("fill-opacity", ".88");
      c.setAttribute("stroke", "#0b1017");
      c.setAttribute("stroke-width", "1.6");
      n.circle = c;
      n.g.appendChild(c);
      gNodes.appendChild(n.g);

      n.text = document.createElementNS(SVGNS, "text");
      n.text.setAttribute("class", "n-label" + (n.size >= 21 ? " big" : ""));
      n.text.setAttribute("text-anchor", "middle");
      n.text.textContent = n.label.length > 34 ? n.label.slice(0, 32) + "…" : n.label;
      gTexts.appendChild(n.text);

      attachDrag(n);
      n.g.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (!n.moved) select(n.id);
      });
    });

    svg.addEventListener("click", function () { select(null); });
  }

  function paint() {
    gRoot.setAttribute("transform", "translate(" + view.x + "," + view.y + ") scale(" + view.k + ")");

    links.forEach(function (L) {
      var vis = catOn[L.s.cat] && catOn[L.t.cat];
      L.el.setAttribute("display", vis ? "" : "none");
      if (L.tx) L.tx.setAttribute("display", vis && showEdgeLabels && view.k > 0.72 ? "" : "none");
      if (!vis) return;
      var dx = L.t.x - L.s.x, dy = L.t.y - L.s.y;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var ox = (dx / d) * (L.s.r + 2), oy = (dy / d) * (L.s.r + 2);
      var tx = (dx / d) * (L.t.r + 6), ty = (dy / d) * (L.t.r + 6);
      L.el.setAttribute("x1", L.s.x + ox); L.el.setAttribute("y1", L.s.y + oy);
      L.el.setAttribute("x2", L.t.x - tx); L.el.setAttribute("y2", L.t.y - ty);
      if (L.tx) {
        L.tx.setAttribute("x", (L.s.x + L.t.x) / 2);
        L.tx.setAttribute("y", (L.s.y + L.t.y) / 2 - 4);
      }
    });

    nodes.forEach(function (n) {
      var vis = catOn[n.cat];
      n.g.setAttribute("display", vis ? "" : "none");
      n.text.setAttribute("display", vis ? "" : "none");
      if (!vis) return;
      n.g.setAttribute("transform", "translate(" + n.x + "," + n.y + ")");
      n.text.setAttribute("x", n.x);
      n.text.setAttribute("y", n.y + n.r + 12);
    });
  }

  /* ---------------------------------------------------- selección */
  function neighborsOf(id) {
    var set = {};
    set[id] = true;
    links.forEach(function (L) {
      if (L.s.id === id) set[L.t.id] = true;
      if (L.t.id === id) set[L.s.id] = true;
    });
    return set;
  }

  function select(id) {
    selected = id;
    if (!id) {
      nodes.forEach(function (n) {
        n.circle.classList.remove("dim");
        n.text.classList.remove("dim");
        n.g.classList.remove("hl-node");
      });
      links.forEach(function (L) {
        L.el.classList.remove("dim");
        if (L.tx) L.tx.classList.remove("dim");
      });
      renderEmptyDetail();
      return;
    }
    var near = neighborsOf(id);
    nodes.forEach(function (n) {
      var on = !!near[n.id];
      n.circle.classList.toggle("dim", !on);
      n.text.classList.toggle("dim", !on);
      n.g.classList.toggle("hl-node", n.id === id);
    });
    links.forEach(function (L) {
      var on = L.s.id === id || L.t.id === id;
      L.el.classList.toggle("dim", !on);
      if (L.tx) L.tx.classList.toggle("dim", !on);
    });
    renderDetail(byId[id]);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderEmptyDetail() {
    detail.innerHTML =
      '<div class="md-empty"><div class="md-empty-ico">⁙</div>' +
      "<p>Seleccioná un nodo del mapa para ver su descripción, su categoría y todos sus vínculos con el resto del caso.</p></div>";
  }

  function renderDetail(n) {
    var out = links.filter(function (L) { return L.s.id === n.id; });
    var inc = links.filter(function (L) { return L.t.id === n.id; });

    function rows(list, dir) {
      return list.map(function (L) {
        var other = dir === "out" ? L.t : L.s;
        return '<div class="md-link" data-go="' + other.id + '">' +
          '<span class="mdl-dir">' + (dir === "out" ? "→" : "←") + "</span>" +
          '<span class="mdl-body"><span class="mdl-to">' + esc(other.label) + "</span>" +
          (L.l ? '<span class="mdl-lbl">' + esc(L.l) + "</span>" : "") +
          "</span></div>";
      }).join("");
    }

    detail.innerHTML =
      '<div class="md-cat" style="color:' + (catColor[n.cat] || "#888") + '">' +
      '<i style="background:' + (catColor[n.cat] || "#888") + '"></i>' + esc(catLabel[n.cat] || n.cat) + "</div>" +
      "<h3>" + esc(n.label) + "</h3>" +
      (n.det ? '<p class="md-det">' + esc(n.det) + "</p>" : "") +
      (out.length ? '<p class="md-links-h">Vínculos salientes · ' + out.length + "</p>" + rows(out, "out") : "") +
      (inc.length ? '<p class="md-links-h" style="margin-top:16px">Vínculos entrantes · ' + inc.length + "</p>" + rows(inc, "in") : "") +
      (n.ref ? '<button class="btn md-goto" data-ref="' + n.ref + '">Abrir la fuente completa →</button>' : "");

    Array.prototype.slice.call(detail.querySelectorAll(".md-link")).forEach(function (r) {
      r.addEventListener("click", function () { focus(r.dataset.go); });
    });
    var goto = detail.querySelector(".md-goto");
    if (goto) goto.addEventListener("click", function () { window.gotoRef(goto.dataset.ref); });
  }

  function focus(id) {
    var n = byId[id];
    if (!n) return;
    if (!catOn[n.cat]) {
      catOn[n.cat] = true;
      var lg = document.querySelector('.lg[data-cat="' + n.cat + '"]');
      if (lg) lg.classList.remove("off");
    }
    var rect = wrap.getBoundingClientRect();
    view.k = Math.max(view.k, 0.95);
    view.x = rect.width / 2 - n.x * view.k;
    view.y = rect.height / 2 - n.y * view.k;
    select(id);
    paint();
  }

  /* ---------------------------------------------------- interacción */
  function toLocal(ev) {
    var r = svg.getBoundingClientRect();
    return {
      x: (ev.clientX - r.left - view.x) / view.k,
      y: (ev.clientY - r.top - view.y) / view.k
    };
  }

  function attachDrag(n) {
    n.g.addEventListener("pointerdown", function (ev) {
      ev.stopPropagation();
      n.g.setPointerCapture(ev.pointerId);
      n.dragging = true; n.moved = false; n.fixed = true;
      var p = toLocal(ev);
      n.offx = n.x - p.x; n.offy = n.y - p.y;
    });
    n.g.addEventListener("pointermove", function (ev) {
      if (!n.dragging) return;
      var p = toLocal(ev);
      n.x = p.x + n.offx; n.y = p.y + n.offy;
      n.moved = true;
      alpha = Math.max(alpha, 0.25);
      if (!ticker) ticker = setInterval(step, 26);
      paint();
    });
    n.g.addEventListener("pointerup", function (ev) {
      n.dragging = false;
      try { n.g.releasePointerCapture(ev.pointerId); } catch (e) {}
      setTimeout(function () { n.fixed = false; n.moved = false; }, 40);
      if (ticker) { setTimeout(function () { if (ticker) { clearInterval(ticker); ticker = null; } }, 2200); }
    });
  }

  var panning = false, panStart = null;
  svg.addEventListener("pointerdown", function (ev) {
    if (ev.target.closest && ev.target.closest(".n-group")) return;
    panning = true;
    svg.classList.add("dragging");
    panStart = { mx: ev.clientX, my: ev.clientY, vx: view.x, vy: view.y };
    svg.setPointerCapture(ev.pointerId);
  });
  svg.addEventListener("pointermove", function (ev) {
    if (!panning) return;
    view.x = panStart.vx + (ev.clientX - panStart.mx);
    view.y = panStart.vy + (ev.clientY - panStart.my);
    paint();
  });
  svg.addEventListener("pointerup", function (ev) {
    panning = false; svg.classList.remove("dragging");
    try { svg.releasePointerCapture(ev.pointerId); } catch (e) {}
  });
  svg.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    var r = svg.getBoundingClientRect();
    var mx = ev.clientX - r.left, my = ev.clientY - r.top;
    var k2 = Math.min(2.6, Math.max(0.28, view.k * (ev.deltaY < 0 ? 1.12 : 0.89)));
    view.x = mx - (mx - view.x) * (k2 / view.k);
    view.y = my - (my - view.y) * (k2 / view.k);
    view.k = k2;
    paint();
  }, { passive: false });

  /* ---------------------------------------------------- toolbar */
  function renderLegend() {
    document.getElementById("mapLegend").innerHTML = G.categorias.map(function (c) {
      var n = G.nodos.filter(function (x) { return x.cat === c.id; }).length;
      return '<span class="lg" data-cat="' + c.id + '"><i style="background:' + c.color + '"></i>' +
        esc(c.label) + " (" + n + ")</span>";
    }).join("");
    Array.prototype.slice.call(document.querySelectorAll("#mapLegend .lg")).forEach(function (n) {
      n.addEventListener("click", function () {
        var id = n.dataset.cat;
        catOn[id] = !catOn[id];
        n.classList.toggle("off", !catOn[id]);
        paint();
      });
    });
  }

  function fit() {
    var r = wrap.getBoundingClientRect();
    W = r.width || 900; H = r.height || 600;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  }

  function center() {
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(function (n) {
      if (!catOn[n.cat]) return;
      minX = Math.min(minX, n.x - n.r); maxX = Math.max(maxX, n.x + n.r);
      minY = Math.min(minY, n.y - n.r); maxY = Math.max(maxY, n.y + n.r);
    });
    if (minX === Infinity) return;
    var r = wrap.getBoundingClientRect();
    var pad = 60;
    var k = Math.min((r.width - pad * 2) / (maxX - minX), (r.height - pad * 2) / (maxY - minY));
    view.k = Math.min(1.5, Math.max(0.26, k));
    view.x = r.width / 2 - ((minX + maxX) / 2) * view.k;
    view.y = r.height / 2 - ((minY + maxY) / 2) * view.k;
    paint();
  }

  document.getElementById("mapReheat").addEventListener("click", function () {
    nodes.forEach(function (n) { n.fixed = false; });
    reheat();
  });
  document.getElementById("mapReset").addEventListener("click", center);
  document.getElementById("mapLabels").addEventListener("change", function (e) {
    showEdgeLabels = e.target.checked; paint();
  });

  var rz = null;
  window.addEventListener("resize", function () {
    if (!started) return;
    clearTimeout(rz);
    rz = setTimeout(function () { fit(); paint(); }, 160);
  });

  /* ---------------------------------------------------- API */
  window.MAPA = {
    ensure: function () {
      if (started) { fit(); paint(); return; }
      started = true;
      fit();
      build();
      renderLegend();
      initSvg();
      renderEmptyDetail();
      // pre-relajación sin pintar, para arrancar ordenado
      for (var i = 0; i < 260; i++) {
        var save = alpha; alpha = 1;
        stepSilent();
        alpha = save;
      }
      center();
      reheat();
    },
    focus: function (id) {
      var self = this;
      this.ensure();
      setTimeout(function () { focus(id); }, 40);
    }
  };

  function stepSilent() {
    var p = paint;
    paint = function () {};
    step();
    paint = p;
  }
})();
