/* Ecom Swift LLC - glass pass for embedded HTML pages (runs inside the iframe).
   Page background becomes transparent so the Wix page's navy skyline shows through,
   cards become translucent glass, text and borders switch to light colours. */
(function () {
  "use strict";
  if (window.__esEmbed) return;
  window.__esEmbed = 1;
  var SKY = "https://ecomswiftllc.github.io/legal/home/assets/glass-sky.svg";
  var GLASS = "linear-gradient(180deg,rgba(6,9,22,.62),rgba(6,9,22,.48))";
  var NAVY = "#0D1226";

  function parse(c) {
    var m = /rgba?\(([^)]+)\)/.exec(c || "");
    if (!m) return null;
    var a = m[1].split(/[ ,\/]+/).map(parseFloat);
    return { r: a[0], g: a[1], b: a[2], a: a.length > 3 && !isNaN(a[3]) ? a[3] : 1 };
  }
  function lum(c) {
    function f(v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function sat(c) { return Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b); }
  function mix(c, t) {
    function m(v) { return Math.round(v + (255 - v) * t); }
    return "rgb(" + m(c.r) + "," + m(c.g) + "," + m(c.b) + ")";
  }
  function imp(el, k, v) { el.style.setProperty(k, v, "important"); }

  var st = document.createElement("style");
  st.textContent = "html,body{background:transparent!important}" +
    (window.top === window ? "html{background:" + NAVY + " url(" + SKY + ") center bottom/cover no-repeat fixed!important}" : "") +
    "body{color:rgba(255,255,255,.82)}" +
    "::selection{background:rgba(255,255,255,.28)}" +
    "a:focus-visible,button:focus-visible{outline:2px solid #fff!important;outline-offset:3px}";
  document.head.appendChild(st);

  var SKIPTAG = /^(HTML|BODY|HEAD|SCRIPT|STYLE|IMG|SVG|PATH|VIDEO|PICTURE|SOURCE|IFRAME|INPUT|TEXTAREA|SELECT|OPTION)$/;

  function boxes() {
    var all = document.body.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.getAttribute("data-esg") || SKIPTAG.test(el.tagName.toUpperCase())) continue;
      var cs = getComputedStyle(el);
      var bg = parse(cs.backgroundColor);
      var r = el.getBoundingClientRect();
      var isBtn = el.tagName === "A" || el.tagName === "BUTTON" || /\b(btn|bt|chip|pill|tag|badge|cta-btn)\b/.test(el.className + "");
      if (bg && bg.a > 0.5) {
        var l = lum(bg);
        el.setAttribute("data-esg", "1");
        if (isBtn || r.width < 150 || r.height < 52) {
          // small control: keep brand colours, lift near-black fills to white so they read on navy
          if (l < 0.06) { imp(el, "background", "#fff"); imp(el, "color", NAVY); imp(el, "border-color", "#fff"); el.setAttribute("data-esb", "1"); }
          else if (l > 0.8) { imp(el, "background", "rgba(255,255,255,.08)"); imp(el, "border-color", "rgba(255,255,255,.22)"); el.setAttribute("data-esc2", "1"); }
          continue;
        }
        imp(el, "background", GLASS);
        imp(el, "backdrop-filter", "blur(14px)");
        imp(el, "-webkit-backdrop-filter", "blur(14px)");
        el.setAttribute("data-esp", "1");
      }
      var bd = parse(cs.borderTopColor);
      if (bd && bd.a > 0.3 && parseFloat(cs.borderTopWidth) > 0 && lum(bd) > 0.5 && !el.getAttribute("data-esb")) {
        imp(el, "border-color", "rgba(255,255,255,.12)");
      }
      var bb = parse(cs.borderBottomColor);
      if (bb && bb.a > 0.3 && parseFloat(cs.borderBottomWidth) > 0 && lum(bb) > 0.5 && !el.getAttribute("data-esb")) {
        imp(el, "border-bottom-color", "rgba(255,255,255,.12)");
      }
    }
  }
  function hasText(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    return false;
  }
  function onPanel(el) {
    for (var e = el; e && e !== document.body; e = e.parentElement) {
      if (e.getAttribute && (e.getAttribute("data-esb"))) return "dark-fill";
      if (e.getAttribute && (e.getAttribute("data-esp") || e.getAttribute("data-esc2"))) return "dark";
      var b = parse(getComputedStyle(e).backgroundColor);
      if (b && b.a > 0.5) return lum(b) > 0.45 ? "light" : "dark";
    }
    return "dark";
  }
  function text() {
    var els = document.body.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span,a,li,label,strong,em,div,td,th,small,b,i,figcaption,summary,dt,dd");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute("data-est") || !hasText(el)) continue;
      el.setAttribute("data-est", "1");
      var cs = getComputedStyle(el);
      var fg = parse(cs.color);
      if (!fg) continue;
      var where = onPanel(el);
      if (where === "dark-fill") { imp(el, "color", NAVY); continue; }
      if (lum(fg) > 0.45 || where === "light") continue;
      var big = parseFloat(cs.fontSize) >= 26 || /^H[1-3]$/.test(el.tagName);
      if (sat(fg) > 40 && !big) imp(el, "color", mix(fg, 0.62));
      else imp(el, "color", big ? "#fff" : "rgba(255,255,255,.8)");
    }
  }
  function run() { try { boxes(); text(); } catch (e) { /* page stays usable */ } }
  var t;
  function later() { clearTimeout(t); t = setTimeout(run, 120); }
  run();
  addEventListener("load", function () { run(); setTimeout(run, 800); });
  try { new MutationObserver(later).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
})();
