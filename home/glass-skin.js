/* Ecom Swift LLC - glass skin for native Wix pages (not home, not /shopify).
   Turns section and card backgrounds into the same navy glass as the home page and
   keeps text readable. Runs in the page, no shadow DOM. */
(function () {
  "use strict";
  var GLASS = "linear-gradient(180deg,rgba(6,9,22,.62),rgba(6,9,22,.48))";
  var VEIL = "rgba(6,9,22,.38)";
  var SKIP = /^\/($|shopify\/?$|cart|checkout|thank-you|my-account|account|member|search|store|product-page|category|donation-thank-you-page)/i;
  function active() {
    var p = location.pathname.replace(/\/+$/, "") || "/";
    if (p === "/") return false;
    return !SKIP.test(p);
  }
  function parse(c) {
    var m = /rgba?\(([^)]+)\)/.exec(c || "");
    if (!m) return null;
    var a = m[1].split(",").map(function (x) { return parseFloat(x); });
    return { r: a[0], g: a[1], b: a[2], a: a.length > 3 ? a[3] : 1 };
  }
  function lum(c) {
    function f(v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function css() {
    return "body{background:#0D1226 linear-gradient(180deg,#151c3d 0,#0D1226 640px)!important;color:#fff}" +
      "html,#SITE_CONTAINER,#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#site-root,#main_MF,[id^=pageBackground_],[id^=pageBackground_] *,#BACKGROUND_GROUP_TRANSITION_GROUP,#BACKGROUND_GROUP_TRANSITION_GROUP *{background:transparent!important}";
  }
  function setImp(el, k, v) { el.style.setProperty(k, v, "important"); }

  function glassify() {
    var us = document.querySelectorAll('[data-testid="colorUnderlay"]');
    for (var i = 0; i < us.length; i++) {
      var u = us[i];
      if (u.getAttribute("data-es")) continue;
      var bgl = u.closest('[id^="bgLayers_"]');
      if (!bgl || bgl.id.indexOf("pageBackground") > -1) continue;
      var owner = bgl.parentElement;
      var c = parse(getComputedStyle(u).backgroundColor);
      if (!c || c.a < 0.05) continue;
      u.setAttribute("data-es", "1");
      owner.setAttribute("data-es-g", "1");
      var big = owner.tagName === "SECTION" || owner.id === "SITE_FOOTER" || owner.id === "SITE_HEADER" ||
        owner.getBoundingClientRect().width > innerWidth * 0.9;
      if (owner.id === "SITE_HEADER") continue;
      if (big) {
        setImp(u, "background", VEIL);
      } else {
        setImp(u, "background", GLASS);
        setImp(u, "backdrop-filter", "blur(14px)");
        setImp(u, "-webkit-backdrop-filter", "blur(14px)");
        setImp(u, "box-shadow", "inset 0 0 0 1px rgba(255,255,255,.09)");
        setImp(u, "border-radius", getComputedStyle(owner).borderRadius !== "0px" ? getComputedStyle(owner).borderRadius : "16px");
      }
    }
  }
  function bgOf(el) {
    for (var e = el; e && e !== document.documentElement; e = e.parentElement) {
      if (e.getAttribute && e.getAttribute("data-es-g")) return { r: 6, g: 9, b: 22, a: 1 };
      if (e.tagName === "BODY") break;
      var c = parse(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0.5) return c;
    }
    return { r: 13, g: 18, b: 38, a: 1 };
  }
  function hasText(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    return false;
  }
  function recolor() {
    var els = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span,a,li,label,strong,em,div,td,th");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute("data-esc")) continue;
      if (el.closest("#es-nav-host,#SITE_HEADER,svg")) continue;
      if (!hasText(el)) continue;
      var cs = getComputedStyle(el);
      var fg = parse(cs.color);
      if (!fg) continue;
      el.setAttribute("data-esc", "1");
      if (lum(fg) > 0.45) continue;
      var bg = bgOf(el);
      if (lum(bg) > 0.45) continue;
      var big = parseFloat(cs.fontSize) >= 26 || /^H[1-3]$/.test(el.tagName);
      setImp(el, "color", big ? "#fff" : "rgba(255,255,255,.8)");
    }
  }
  var t;
  function run() {
    var st = document.getElementById("es-skin");
    if (!active()) { if (st) st.remove(); return; }
    if (!st) { st = document.createElement("style"); st.id = "es-skin"; st.textContent = css(); document.head.appendChild(st); }
    try { glassify(); recolor(); } catch (e) { /* keep page usable */ }
  }
  function later() { clearTimeout(t); t = setTimeout(run, 160); }
  if (!window.__esSkin) {
    window.__esSkin = 1;
    try { new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
    addEventListener("popstate", later);
    addEventListener("load", later);
  }
  if (document.body) run(); else document.addEventListener("DOMContentLoaded", run);
  setTimeout(run, 1200); setTimeout(run, 3000);
})();
