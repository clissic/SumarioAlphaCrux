/* ============================================================
   Viento y escenario — OpenSeaMap + partículas
   ============================================================ */
(function () {
  "use strict";

  var V = (window.ANALISIS && window.ANALISIS.viento) || null;
  if (!V) return;

  var map = null;
  var particles = [];
  var animId = 0;
  var current = V.series[V.defaultIdx] || V.series[0];
  var running = false;
  var controlsReady = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function knLabel(kn) {
    return String(kn).replace(".", ",");
  }

  function relativeWind(dir, rumbo) {
    return ((dir - rumbo) % 360 + 360) % 360;
  }

  function relativeDesc(rel) {
    if (rel < 22.5 || rel >= 337.5) return "de proa";
    if (rel < 67.5) return "de aleta de estribor";
    if (rel < 112.5) return "de través de estribor";
    if (rel < 157.5) return "de aleta de popa a estribor";
    if (rel < 202.5) return "de popa";
    if (rel < 247.5) return "de aleta de popa a babor";
    if (rel < 292.5) return "de través de babor";
    return "de aleta de babor";
  }

  function updateReadout() {
    var rel = relativeWind(current.dir, V.rumbo);
    var el = document.getElementById("windReadout");
    if (!el) return;
    el.innerHTML =
      '<div class="wr-item"><span>Velocidad</span><b>' + esc(knLabel(current.kn)) + " nudos</b></div>" +
      '<div class="wr-item"><span>Dirección (viene de)</span><b>' + esc(String(current.dir)) + "°</b></div>" +
      '<div class="wr-item"><span>Respecto del buque</span><b>' + esc(relativeDesc(rel)) +
      " (" + Math.round(rel) + "° rel.)</b></div>";
  }

  function fillControls() {
    var sel = document.getElementById("windTime");
    var meta = document.getElementById("windMeta");
    var analysis = document.getElementById("windAnalysis");
    if (!sel) return;

    if (!controlsReady) {
      sel.innerHTML = V.series.map(function (r, i) {
        return '<option value="' + i + '"' + (i === V.defaultIdx ? " selected" : "") + ">" +
          esc(r.ts) + "</option>";
      }).join("");
      sel.addEventListener("change", function () {
        var idx = parseInt(sel.value, 10);
        current = V.series[idx] || current;
        updateReadout();
        seedParticles(true);
      });
      controlsReady = true;
    }

    if (meta) {
      meta.innerHTML =
        "<div><b>Posición</b> " + esc(V.posLabel) + "</div>" +
        "<div><b>Encabezamiento</b> " + V.rumbo + "°</div>" +
        "<div><b>Fuente</b> " + esc(V.fuente) + "</div>" +
        "<div class=\"wind-note\">" + esc(V.convencion) + "</div>";
    }
    if (analysis) {
      analysis.innerHTML = "<h3>Análisis</h3><p>" + esc(V.analisis) + "</p>";
    }
    updateReadout();
  }

  function showMapError(msg) {
    var el = document.getElementById("windMap");
    if (!el || el.querySelector(".wind-map-error")) return;
    var div = document.createElement("div");
    div.className = "wind-map-error";
    div.textContent = msg;
    el.appendChild(div);
  }

  function shipIcon() {
    var html =
      '<div class="ship-marker" style="transform:rotate(' + V.rumbo + 'deg)">' +
      '<svg viewBox="0 0 40 80" width="28" height="56" aria-hidden="true">' +
      '<path d="M20 2 L34 22 L34 68 L28 76 L12 76 L6 68 L6 22 Z" fill="#c45c26" stroke="#1a1a22" stroke-width="2"/>' +
      '<line x1="20" y1="10" x2="20" y2="50" stroke="#fff" stroke-width="2" opacity="0.7"/>' +
      "</svg></div>";
    return L.divIcon({
      className: "ship-icon-wrap",
      html: html,
      iconSize: [28, 56],
      iconAnchor: [14, 28]
    });
  }

  function initMap() {
    if (!window.L) {
      showMapError("No se pudo cargar Leaflet. Revisá la conexión o recargá la página.");
      return;
    }
    if (map) {
      map.invalidateSize();
      map.setView([V.lat, V.lon], map.getZoom(), { animate: false });
      return;
    }
    var el = document.getElementById("windMap");
    if (!el) return;
    var err = el.querySelector(".wind-map-error");
    if (err) err.remove();

    map = L.map(el, {
      center: [V.lat, V.lon],
      zoom: 15,
      zoomControl: false,
      attributionControl: true,
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    L.tileLayer("https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openseamap.org">OpenSeaMap</a>'
    }).addTo(map);

    L.marker([V.lat, V.lon], { icon: shipIcon(), interactive: false }).addTo(map);

    L.circleMarker([V.lat, V.lon], {
      radius: 4,
      color: "#c45c26",
      fillColor: "#c45c26",
      fillOpacity: 1,
      weight: 1,
      interactive: false
    }).addTo(map);

    map.on("resize", syncCanvas);
    window.addEventListener("resize", function () {
      if (map) {
        map.invalidateSize();
        syncCanvas();
      }
    });

    setTimeout(function () {
      if (!map) return;
      map.invalidateSize();
      map.setView([V.lat, V.lon], 15, { animate: false });
      syncCanvas();
      seedParticles(true);
      startAnim();
    }, 120);
  }

  function syncCanvas() {
    var canvas = document.getElementById("windParticles");
    var shell = document.querySelector(".wind-map-shell");
    if (!canvas || !shell) return;
    var rect = shell.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }

  function seedParticles(reset) {
    var canvas = document.getElementById("windParticles");
    if (!canvas) return;
    if (!canvas.width || !canvas.height) syncCanvas();
    var n = Math.max(40, Math.min(160, Math.round(50 + current.kn * 18)));
    if (reset || particles.length !== n) {
      particles = [];
      for (var i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * (canvas.width || 800),
          y: Math.random() * (canvas.height || 400),
          life: Math.random()
        });
      }
    }
  }

  function blowAngleRad() {
    var toDeg = (current.dir + 180) % 360;
    return (90 - toDeg) * Math.PI / 180;
  }

  function stepParticles() {
    var canvas = document.getElementById("windParticles");
    if (!canvas || !running) return;
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    if (!w || !h) {
      syncCanvas();
      animId = requestAnimationFrame(stepParticles);
      return;
    }

    var ang = blowAngleRad();
    var speed = (0.6 + current.kn * 0.55) * (window.devicePixelRatio || 1);
    var dx = Math.cos(ang) * speed;
    var dy = -Math.sin(ang) * speed;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(60, 120, 180, 0.55)";
    ctx.strokeStyle = "rgba(40, 90, 150, 0.35)";
    ctx.lineWidth = Math.max(1, (window.devicePixelRatio || 1) * 1.2);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += dx;
      p.y += dy;
      p.life += 0.008;
      if (p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10 || p.life > 1) {
        p.x = Math.random() * w;
        p.y = Math.random() * h;
        p.life = 0;
      }
      var len = 6 + current.kn * 1.4;
      ctx.globalAlpha = 0.25 + 0.55 * (1 - Math.abs(p.life - 0.5) * 2);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - dx * len, p.y - dy * len);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.4 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(stepParticles);
  }

  function startAnim() {
    if (running) return;
    running = true;
    cancelAnimationFrame(animId);
    animId = requestAnimationFrame(stepParticles);
  }

  function stopAnim() {
    running = false;
    cancelAnimationFrame(animId);
  }

  function ensure() {
    fillControls();
    var sel = document.getElementById("windTime");
    if (sel && sel.options.length) {
      if (!sel.value) sel.value = String(V.defaultIdx);
      current = V.series[parseInt(sel.value, 10)] || current;
    } else {
      current = V.series[V.defaultIdx] || V.series[0];
    }
    updateReadout();
    initMap();
    syncCanvas();
    seedParticles(true);
    startAnim();
  }

  fillControls();

  window.WIND_MAP = {
    ensure: ensure,
    stop: stopAnim
  };
})();
