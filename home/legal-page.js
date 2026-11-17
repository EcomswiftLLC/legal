/* Ecom Swift LLC - long legal text pages: finds the policy text, marks the title, date, section headings
   and spacer lines, turns keycap-emoji numbers into plain "1." and builds an "On this page" index.
   No wording is changed. */
(function () {
  "use strict";
  if (window.__esLegal) return;
  window.__esLegal = 1;
  var ZW = /[\s​‌‍ ﻿]/g;
  var KEYCAP = /((?:[0-9]️?⃣)+|🔟)\s*/;
  function keycapNum(m) { return m.indexOf("🔟") === 0 ? "10" : m.replace(/[^0-9]/g, ""); }
  function txt(el) { return (el.textContent || "").replace(ZW, ""); }
  function slug(t, i) {
    var s = t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return "sec-" + (i + 1) + (s ? "-" + s.slice(0, 40) : "");
  }
  function findRoot() {
    var best = null, len = 0;
    var all = document.querySelectorAll('[data-testid="richTextElement"]');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (e.closest("#SITE_HEADER,#SITE_FOOTER,#es-nav-host")) continue;
      var l = (e.innerText || "").length;
      if (l > 300 && l > len) { best = e; len = l; }
    }
    return best;
  }
  function plainNumbers(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      if (KEYCAP.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(KEYCAP, function (m, g) { return keycapNum(g) + ". "; });
      n.nodeValue = n.nodeValue.replace(/^[\s✅✔☑️]+(?=\S)/, "");
    }
  }
  function isHeadingLike(k) {
    var t = k.textContent.trim();
    if (!txt(k) || t.length > 110) return false;
    if (/^H[2-6]$/.test(k.tagName)) return true;
    if (k.tagName === "P") {
      var fs = parseFloat(k.style.fontSize || (k.querySelector("[style*=font-size]") || {style: {}}).style.fontSize) || 0;
      if (fs >= 20) return true;
      if (/^(\d+[.)]|\d️?⃣)\s*\S/.test(t) && k.querySelector("strong,b") && t.length < 90) return true;
    }
    return false;
  }
  function run() {
    var root = findRoot();
    if (!root) return;
    if (!root.classList.contains("es-legal-text")) {
      root.classList.add("es-legal-text");
      for (var e = root.parentElement; e && e.tagName !== "MAIN" && e.tagName !== "BODY"; e = e.parentElement) {
        e.classList.add("es-legal-wrap");
        if (e.tagName === "SECTION") break;
      }
    }
    /* some pages keep the title in its own text box above the policy text: bring a copy in and hide the original */
    if (!root.getAttribute("data-es-title")) {
      root.setAttribute("data-es-title", "1");
      var first = null;
      for (var q = 0; q < root.children.length; q++) { if (txt(root.children[q])) { first = root.children[q]; break; } }
      if (first && !/^H[1-3]$/.test(first.tagName)) {
        var cands = document.querySelectorAll('[data-testid="richTextElement"]'), ext = null, extH = null;
        for (var c = 0; c < cands.length; c++) {
          var ce = cands[c];
          if (ce === root || ce.closest("#SITE_HEADER,#SITE_FOOTER,#es-nav-host")) continue;
          if (!(ce.compareDocumentPosition(root) & 4)) continue;
          var hh = [].filter.call(ce.querySelectorAll("h1,h2,h3"), function (x) { return txt(x); });
          if (hh.length === 1 && ce.textContent.trim().length < 90) { ext = ce; extH = hh[0]; }
        }
        if (ext) {
          var cl = extH.cloneNode(true);
          cl.removeAttribute("id");
          root.insertBefore(cl, root.firstChild);
          ext.classList.add("es-lg-hide");
          ext.setAttribute("aria-hidden", "true");
        }
      }
    }
    var kids = root.children, title = null, heads = [], badge = null, i, k;
    for (i = 0; i < kids.length; i++) {
      k = kids[i];
      if (k.classList.contains("es-toc")) continue;
      if (!txt(k)) { k.classList.add("es-lg-empty"); k.setAttribute("aria-hidden", "true"); continue; }
      if (!title && /^H[1-3]$/.test(k.tagName)) { title = k; k.classList.add("es-lg-title"); continue; }
      if (isHeadingLike(k)) {
        k.classList.add("es-lg-h");
        k.setAttribute("role", "heading");
        k.setAttribute("aria-level", "2");
        heads.push(k);
      } else if (!badge && !heads.length && k.tagName === "P" && k.textContent.length < 90 && /(effective|last updated|updated)/i.test(k.textContent)) {
        badge = k; k.classList.add("es-lg-badge");
      }
    }
    if (title) {
      var tt = title.textContent.trim();
      if (tt.length > 3 && tt === tt.toUpperCase() && /[A-Z]/.test(tt)) {
        var w = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, null), n;
        while ((n = w.nextNode())) {
          n.nodeValue = n.nodeValue.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, a, b) { return a + b.toUpperCase(); }).replace(/\b(Of|And|The|For|To|In)\b/g, function (m) { return m.toLowerCase(); }).replace(/^./, function (c) { return c.toUpperCase(); });
        }
      }
    }
    for (i = 0; i < heads.length; i++) plainNumbers(heads[i]);
    if (heads.length < 3 || root.querySelector(".es-toc")) return;
    var nav = document.createElement("nav");
    nav.className = "es-toc";
    nav.setAttribute("aria-label", "On this page");
    var t = document.createElement("p");
    t.className = "es-toc-t";
    t.textContent = "On this page";
    var ol = document.createElement("ol");
    for (var j = 0; j < heads.length; j++) {
      var h = heads[j];
      if (!h.id) h.id = slug(h.textContent.trim(), j);
      var li = document.createElement("li"), a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      ol.appendChild(li);
    }
    nav.appendChild(t);
    nav.appendChild(ol);
    heads[0].parentNode.insertBefore(nav, heads[0]);
  }
  var tm;
  function later() { clearTimeout(tm); tm = setTimeout(run, 200); }
  try { new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
  run();
  setTimeout(run, 1200);
  setTimeout(run, 3000);
})();
