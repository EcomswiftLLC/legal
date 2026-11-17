/* Ecom Swift LLC - long legal text pages: builds an "On this page" index from the numbered section
   headings and hides the empty heading left in the Wix text. No wording is changed. */
(function () {
  "use strict";
  if (window.__esLegal) return;
  window.__esLegal = 1;
  function slug(t, i) {
    var s = t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return "sec-" + (i + 1) + (s ? "-" + s.slice(0, 40) : "");
  }
  function run() {
    var first = document.querySelector("main h2");
    var root = first && first.parentElement;
    if (!root) return;
    root.classList.add("es-legal-text");
    var hs = root.querySelectorAll("h1,h2,h3");
    for (var i = 0; i < hs.length; i++) {
      if (!hs[i].textContent.replace(/[\s​ ]/g, "")) hs[i].setAttribute("aria-hidden", "true");
    }
    var h2 = root.querySelectorAll("h2");
    if (h2.length < 3 || root.querySelector(".es-toc")) return;
    var nav = document.createElement("nav");
    nav.className = "es-toc";
    nav.setAttribute("aria-label", "On this page");
    var t = document.createElement("p");
    t.className = "es-toc-t";
    t.textContent = "On this page";
    var ol = document.createElement("ol");
    for (var j = 0; j < h2.length; j++) {
      var txt = h2[j].textContent.trim();
      if (!txt) continue;
      if (!h2[j].id) h2[j].id = slug(txt, j);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h2[j].id;
      a.textContent = txt;
      li.appendChild(a);
      ol.appendChild(li);
    }
    nav.appendChild(t);
    nav.appendChild(ol);
    h2[0].parentNode.insertBefore(nav, h2[0]);
  }
  var tm;
  function later() { clearTimeout(tm); tm = setTimeout(run, 200); }
  try { new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
  run();
  setTimeout(run, 1200);
  setTimeout(run, 3000);
})();
