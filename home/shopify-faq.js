/* Ecom Swift LLC - FAQ accordion for the native /shopify page, same design as the home page FAQ.
   Reads the page's own FAQ text boxes (headline, intro, question/answer pairs), builds glass
   accordion rows from them and hides the original boxes. Nothing is added that is not on the page. */
(function () {
  "use strict";
  if (window.__esSFaq) return;
  window.__esSFaq = 1;
  var CSS = ".es-sfaq{box-sizing:border-box;margin-left:var(--ml,16px);margin-right:16px;width:var(--w,calc(100% - 32px));max-width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:stretch;padding:8px 0 48px;--sans:'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif;font-family:var(--sans);color:#fff;-webkit-font-smoothing:antialiased}" +
    ".es-sfaq *{box-sizing:border-box;font-family:var(--sans)!important;letter-spacing:normal}" +
    ".es-sfaq .col{display:flex;flex-direction:column;gap:12px;min-width:0}" +
    ".es-sfaq .intro{flex:1 1 auto;display:flex;flex-direction:column;padding:clamp(24px,2.6vw,36px);border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2)}" +
    ".es-sfaq h2{margin:0;font:600 clamp(1.7rem,2.9vw,2.6rem)/1.1 var(--sans)!important;letter-spacing:-.025em!important;color:#fff;text-align:left;text-wrap:balance}" +
    ".es-sfaq .intro p{margin:16px 0 0;max-width:36ch;font-size:16.5px;line-height:1.55;color:rgba(255,255,255,.74);text-align:left}" +
    ".es-sfaq .intro p.help{margin-top:auto;padding-top:20px;border-top:1px solid rgba(255,255,255,.12);max-width:none;font-size:15px;color:rgba(255,255,255,.7)}" +
    ".es-sfaq .intro p.lead{margin-bottom:28px}" +
    ".es-sfaq .intro a{color:#fff;text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.4)}" +
    ".es-sfaq .intro a:hover{text-decoration-color:#fff}" +
    ".es-sfaq details{border-radius:16px;background:linear-gradient(180deg,rgba(6,9,22,.62),rgba(6,9,22,.48));border:1px solid rgba(255,255,255,.09);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);transition:border-color .3s,background .3s}" +
    ".es-sfaq details:hover{border-color:rgba(255,255,255,.22)}" +
    ".es-sfaq details[open]{border-color:rgba(255,255,255,.3);background:linear-gradient(180deg,rgba(14,19,40,.72),rgba(10,14,30,.6))}" +
    ".es-sfaq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:72px;padding:12px 22px;border-radius:16px}" +
    ".es-sfaq summary::-webkit-details-marker{display:none}" +
    ".es-sfaq summary:focus-visible{outline:2px solid #fff;outline-offset:-3px}" +
    ".es-sfaq h3{margin:0;font:600 clamp(1rem,1.3vw,1.12rem)/1.35 var(--sans)!important;letter-spacing:-.01em!important;color:#fff;text-align:left;text-wrap:balance}" +
    ".es-sfaq .pm{position:relative;flex:none;width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.28);transition:background .3s}" +
    ".es-sfaq .pm::before,.es-sfaq .pm::after{content:'';position:absolute;left:50%;top:50%;width:10px;height:1.5px;background:#fff;transform:translate(-50%,-50%);transition:transform .4s cubic-bezier(.22,.7,.2,1)}" +
    ".es-sfaq .pm::after{transform:translate(-50%,-50%) rotate(90deg)}" +
    ".es-sfaq details[open] .pm{background:rgba(255,255,255,.12)}" +
    ".es-sfaq details[open] .pm::after{transform:translate(-50%,-50%) rotate(0)}" +
    ".es-sfaq .ans{padding:0 22px 22px}" +
    ".es-sfaq .ans p{margin:0;max-width:64ch;font-size:16px;line-height:1.7;color:rgba(255,255,255,.8);text-align:left}" +
    ".es-sfaq details[open] .ans{animation:esSfIn .45s cubic-bezier(.22,.7,.2,1)}" +
    "@keyframes esSfIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}" +
    "@media(max-width:900px){.es-sfaq{display:flex;flex-direction:column}.es-sfaq .col{display:contents}.es-sfaq .intro p{max-width:46ch}}" +
    "@media(prefers-reduced-motion:reduce){.es-sfaq details[open] .ans{animation:none}.es-sfaq .pm,.es-sfaq .pm::before,.es-sfaq .pm::after{transition:none}}" +
    ".es-sfaq-hide{display:none!important}";

  function txt(e) { return (e.textContent || "").replace(/\s+/g, " ").trim(); }
  function build() {
    if (document.querySelector(".es-sfaq")) return true;
    var head = document.getElementById("comp-mwjb4q1o"), sub = document.getElementById("comp-mwjb1bab");
    if (!head || !sub || !/frequently asked/i.test(txt(head))) return false;
    var grid = head.parentElement, kids = [].slice.call(grid.children), items = [];
    function rowOf(c) { return parseInt(getComputedStyle(c).gridRowStart, 10) || 0; }
    function xOf(c) { return Math.round(c.getBoundingClientRect().x); }
    var subRow = rowOf(sub);
    kids.forEach(function (c) {
      if (c === head || c === sub || c.id === "" || c.classList.contains("es-sfaq")) return;
      var row = rowOf(c);
      if (row <= subRow) return;
      var h = c.querySelector("h3,h4,h2"), p = c.querySelector("p");
      if (h && txt(h) && txt(h).slice(-1) === "?") items.push({ el: c, q: txt(h), x: xOf(c), row: row });
      else if (p && txt(p)) items.push({ el: c, a: p, x: xOf(c), row: row });
    });
    var qs = items.filter(function (i) { return i.q; }).sort(function (a, b) { return a.row === b.row ? a.x - b.x : a.row - b.row; });
    var pairs = [];
    qs.forEach(function (q) {
      var best = null;
      items.forEach(function (a) { if (a.a && Math.abs(a.x - q.x) < 8 && a.row > q.row && (!best || a.row < best.row)) best = a; });
      if (best) pairs.push({ q: q, a: best });
    });
    if (pairs.length < 2) return false;
    var st = document.createElement("style"); st.id = "es-sfaq-css"; st.textContent = CSS; document.head.appendChild(st);
    var wrap = document.createElement("div"); wrap.className = "es-sfaq";
    var c1 = document.createElement("div"), c2 = document.createElement("div"); c1.className = c2.className = "col";
    var intro = document.createElement("div"); intro.className = "intro";
    var h2 = document.createElement("h2"); h2.textContent = txt(head);
    var lead = document.createElement("p"); lead.className = "lead"; lead.textContent = txt(sub);
    var help = document.createElement("p"); help.className = "help";
    help.appendChild(document.createTextNode("Still have a question? Email "));
    var mail = document.createElement("a"); mail.href = "mailto:support@ecomswiftllc.com"; mail.textContent = "support@ecomswiftllc.com";
    help.appendChild(mail);
    intro.appendChild(h2); intro.appendChild(lead); intro.appendChild(help); c1.appendChild(intro);
    pairs.forEach(function (pr, i) {
      var d = document.createElement("details"), sm = document.createElement("summary"), h = document.createElement("h3"), pm = document.createElement("span"), an = document.createElement("div"), p = document.createElement("p");
      h.textContent = pr.q.q; pm.className = "pm"; pm.setAttribute("aria-hidden", "true");
      p.textContent = txt(pr.a.a); an.className = "ans"; an.appendChild(p);
      sm.appendChild(h); sm.appendChild(pm); d.appendChild(sm); d.appendChild(an);
      (i < 1 ? c1 : c2).appendChild(d);
    });
    wrap.appendChild(c1); wrap.appendChild(c2);
    var first = pairs[0].q.el;
    var ga = getComputedStyle(first).gridArea;
    wrap.style.gridArea = ga;
    grid.insertBefore(wrap, first);
    [head, sub].concat(items.map(function (i) { return i.el; })).forEach(function (e) { e.classList.add("es-sfaq-hide"); });
    return true;
  }
  var done = false, timer;
  function attempt() {
    if (done) return;
    try { if (build()) { done = true; if (mo) mo.disconnect(); } } catch (e) { /* retry on next change */ }
  }
  var mo = null;
  try { mo = new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(attempt, 150); }); mo.observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
  attempt();
  var n = 0, iv = setInterval(function () { attempt(); if (done || ++n > 150) { clearInterval(iv); if (mo) mo.disconnect(); } }, 1000);
})();
