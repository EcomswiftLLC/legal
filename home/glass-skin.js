/* Ecom Swift LLC - glass skin for native Wix pages (not home, not /shopify).
   Turns section and card backgrounds into the same navy glass as the home page and
   keeps text readable. Runs in the page, no shadow DOM. */
(function () {
  "use strict";
  var GLASS = "linear-gradient(180deg,rgba(6,9,22,.62),rgba(6,9,22,.48))";
  var VEIL = "rgba(6,9,22,.38)";
  var SKIP = /^\/($|shopify\/?$|cart|checkout|thank-you|my-account|account|member|search|store(\/|$)|product-page|category|donation-thank-you-page)/i;
  function active() {
    var p = location.pathname.replace(/\/+$/, "") || "/";
    if (p === "/") return false;
    return !SKIP.test(p);
  }
  /* Services pages use the soft white, black and gold look instead of the navy glass. */
  var LIGHT = /^\/(sleek-bundles-upsell|services|shopify-store-build-and-redesign|shopify-conversion-rate-optimization|shopify-seo-and-speed-optimization|wix-seo-services|wix-website-development|wix-website-redesign|platforms\/[a-z0-9-]+|wordpress|woocommerce|framer|webflow|wix|squarespace|magento|bigcommerce|drupal|prestashop|custom-development|ios-apps|android-apps|flutter-apps|react-native-apps|shopify-apps|wix-apps|woocommerce-plugins|browser-extensions|product-listings|order-management|store-maintenance|ecommerce-seo|conversion-optimization|marketplace-listings|analytics-and-tracking|store-migrations|saas-mvp-development|saas-user-accounts|subscription-billing|saas-dashboards|api-integrations|cloud-hosting|web-app-development|saas-ongoing-development|ai-integration|business-automation|ai-workflows|ai-chatbots|ai-agents|data-and-documents|ai-for-ecommerce|ai-audit-and-training|ai-customer-support|ai-sales-assistant|ai-product-recommendations|ai-marketing|paid-ads-management|email-and-sms-marketing|social-media-marketing|lead-generation-funnels|crm-and-sales-pipelines|amazon-management|ebay-management|etsy-management|shopify-management)$/i;
  var CHROME = "#es-nav-host{filter:drop-shadow(0 8px 22px rgba(22,19,15,.14)) drop-shadow(0 0 .6px rgba(22,19,15,.35))}" +
    "#ecs-fi{background:#16130F!important;border-top:1px solid #B8923A!important;color:rgba(255,255,255,.8)!important}#ecs-fi a{color:#fff!important}#ecs-fi a:focus-visible{outline-color:#B8923A!important}";
  function isLight() {
    var p = location.pathname.replace(/\/+$/, "") || "/";
    return LIGHT.test(p) || !!document.querySelector('iframe[src*="/legal/services/"]');
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
    if (isLight()) return "html,#SITE_CONTAINER,#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#site-root,#main_MF,[id^=pageBackground_],[id^=pageBackground_] *,#BACKGROUND_GROUP_TRANSITION_GROUP,#BACKGROUND_GROUP_TRANSITION_GROUP *{background:transparent!important}body{background:#FBFAF7!important;color:#16130F}" + CHROME;
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
  /* CMS platform pages (/platforms/<slug>): load their layout CSS and the FAQ accordion script. */
  var PSLUG = /^\/(wordpress|woocommerce|framer|webflow|wix|squarespace|magento|bigcommerce|drupal|prestashop|custom-development|ios-apps|android-apps|flutter-apps|react-native-apps|shopify-apps|wix-apps|woocommerce-plugins|browser-extensions|product-listings|order-management|store-maintenance|ecommerce-seo|conversion-optimization|marketplace-listings|analytics-and-tracking|store-migrations|saas-mvp-development|saas-user-accounts|subscription-billing|saas-dashboards|api-integrations|cloud-hosting|web-app-development|saas-ongoing-development|ai-integration|business-automation|ai-workflows|ai-chatbots|ai-agents|data-and-documents|ai-for-ecommerce|ai-audit-and-training|ai-customer-support|ai-sales-assistant|ai-product-recommendations|ai-marketing|paid-ads-management|email-and-sms-marketing|social-media-marketing|lead-generation-funnels|crm-and-sales-pipelines|amazon-management|ebay-management|etsy-management|shopify-management)$/i;
  function platformAssets() {
    var p = location.pathname.replace(/\/+$/, "");
    var m = PSLUG.exec(p), old = /^\/platforms\//i.test(p);
    if (!m && !old) return;
    var base = "https://ecomswiftllc.github.io/legal/home/";
    if (!document.getElementById("es-plat-css")) {
      var l = document.createElement("link"); l.id = "es-plat-css"; l.rel = "stylesheet";
      l.href = m ? base + "plat/" + m[1].toLowerCase() + ".css?v=3" : base + "platform-page.css?v=7";
      document.head.appendChild(l);
    }
    if (!window.__esPFaqL) {
      window.__esPFaqL = 1;
      var sc = document.createElement("script"); sc.src = base + "platform-faq.js?v=2"; sc.defer = true; document.head.appendChild(sc);
    }
  }
  /* Long legal text pages: reading layout and an "On this page" index. */
  var LEGAL = /^\/(sleek-bundles-upsell)$/i;
  function legalAssets() {
    var p = location.pathname.replace(/\/+$/, "");
    if (!LEGAL.test(p)) return;
    var base = "https://ecomswiftllc.github.io/legal/home/";
    if (!document.getElementById("es-legal-css")) {
      var l = document.createElement("link"); l.id = "es-legal-css"; l.rel = "stylesheet";
      l.href = base + "legal-page.css?v=3"; document.head.appendChild(l);
    }
    if (!window.__esLegalL) {
      window.__esLegalL = 1;
      var sc = document.createElement("script"); sc.src = base + "legal-page.js?v=1"; sc.defer = true; document.head.appendChild(sc);
    }
  }
  var t;
  function run() {
    var st = document.getElementById("es-skin");
    if (!active()) { if (st) st.remove(); return; }
    var light = isLight();
    if (st && st.getAttribute("data-light") !== (light ? "1" : "0")) { st.remove(); st = null; }
    if (!st) { st = document.createElement("style"); st.id = "es-skin"; st.setAttribute("data-light", light ? "1" : "0"); st.textContent = css(); document.head.appendChild(st); }
    if (light) { document.documentElement.classList.add("es-light"); platformAssets(); legalAssets(); return; }
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
