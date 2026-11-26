/* /pdf-tools and /pdf-tools/<tool>: soft page background, and the Wix text blocks (FAQ, steps, related tools) drawn as frosted-glass cards (details/summary, no libraries). */
(function () {
  if (window.__esPdfFaq) return; window.__esPdfFaq = 1;
  var P = location.pathname;
  var HUB = /^\/pdf-tools\/?$/.test(P), TOOL = /^\/pdf-tools\/[a-z0-9-]+\/?$/.test(P);
  var GLASS = "background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.045));border:1px solid rgba(255,255,255,.16);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)";
  var CSS = [
    ".es-faq-root{position:relative!important;height:auto!important;padding:0!important;--es-sans:'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif;font-family:var(--es-sans)!important;color:#fff;-webkit-font-smoothing:antialiased}",
    ".es-faq-root.es-hubroot{margin:0!important}",
    ".es-faq-root *{font-family:var(--es-sans)!important;letter-spacing:normal;box-sizing:border-box}",
    ".es-faq-root span{color:inherit!important;font-size:inherit!important;font-weight:inherit!important}",
    /* accordion (shared) */
    ".es-qa{border-radius:16px;" + GLASS + ";transition:border-color .3s,background .3s}",
    ".es-qa:hover{border-color:rgba(255,255,255,.3)}",
    ".es-qa[open]{border-color:rgba(255,255,255,.34);background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.08))}",
    ".es-qa summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:72px;padding:12px 22px;border-radius:16px}",
    ".es-qa summary::-webkit-details-marker{display:none}",
    ".es-qa summary:focus-visible,.es-rg a:focus-visible,.es-back:focus-visible{outline:2px solid #fff;outline-offset:-3px}",
    ".es-qa h3{margin:0!important;font:600 clamp(1rem,1.3vw,1.1rem)/1.35 var(--es-sans)!important;letter-spacing:-.01em!important;color:#fff!important;text-align:left!important;text-wrap:balance}",
    ".es-pm{position:relative;flex:none;width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.3);transition:background .3s}",
    ".es-pm::before,.es-pm::after{content:\"\";position:absolute;left:50%;top:50%;width:10px;height:1.5px;background:#fff;transform:translate(-50%,-50%);transition:transform .4s cubic-bezier(.22,.7,.2,1)}",
    ".es-pm::after{transform:translate(-50%,-50%) rotate(90deg)}",
    ".es-qa[open] .es-pm{background:rgba(255,255,255,.14)}",
    ".es-qa[open] .es-pm::after{transform:translate(-50%,-50%) rotate(0)}",
    ".es-ans{padding:0 22px 22px}",
    ".es-ans p{margin:0!important;max-width:66ch;font-size:16px!important;line-height:1.7!important;color:rgba(255,255,255,.84)!important;text-align:left!important}",
    ".es-ans a{color:#fff!important;text-decoration:underline!important;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.45)}",
    ".es-qa[open] .es-ans{animation:esAnsIn .45s cubic-bezier(.22,.7,.2,1)}",
    "@keyframes esAnsIn{from{opacity:0;transform:translateY(-6px)}}",
    /* hub FAQ: heading card + two columns */
    ".es-faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:stretch;padding:0}",
    ".es-faq-col{display:flex;flex-direction:column;gap:12px;min-width:0}",
    ".es-faq-l{flex:1 1 auto;display:flex;flex-direction:column;padding:clamp(22px,2.4vw,32px);border-radius:18px;" + GLASS + "}",
    ".es-faq-l h2{margin:0!important;font:600 clamp(1.7rem,3vw,2.4rem)/1.08 var(--es-sans)!important;letter-spacing:-.025em!important;color:#fff!important;text-align:left!important;text-wrap:balance}",
    ".es-faq-l p{margin:14px 0 0!important;max-width:34ch;font-size:16px!important;line-height:1.55!important;color:rgba(255,255,255,.76)!important;text-align:left!important}",
    ".es-faq-l p:nth-of-type(1){margin-bottom:24px!important}",
    ".es-faq-l p:nth-of-type(2){margin-top:auto!important;padding-top:18px;border-top:1px solid rgba(255,255,255,.12);max-width:none;font-size:15px!important;color:rgba(255,255,255,.72)!important}",
    ".es-faq-l a{color:#fff!important;text-decoration:underline!important;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.4)}",
    /* tool page: steps, FAQ list, related tools */
    ".es-tp{display:grid;gap:52px;padding:14px 0 40px}",
    ".es-tp h2{margin:0 0 18px!important;font:600 clamp(1.55rem,2.8vw,2rem)/1.15 var(--es-sans)!important;letter-spacing:-.025em!important;color:#fff!important;text-align:left!important;text-wrap:balance}",
    ".es-st{list-style:none!important;margin:0!important;padding:0!important;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}",
    ".es-st li{display:flex;gap:14px;align-items:flex-start;margin:0!important;padding:20px;border-radius:18px;" + GLASS + "}",
    ".es-st .n{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.32);font:600 15px/1 var(--es-sans)!important}",
    ".es-st p{margin:3px 0 0!important;font-size:16px!important;line-height:1.55!important;color:rgba(255,255,255,.9)!important;text-align:left!important}",
    ".es-ql{display:grid;gap:12px}",
    ".es-rg{list-style:none!important;margin:0!important;padding:0!important;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}",
    ".es-rg li{margin:0!important}",
    ".es-rg a{display:flex;flex-direction:column;gap:6px;height:100%;padding:18px;border-radius:18px;text-decoration:none!important;color:#fff!important;" + GLASS + ";transition:border-color .25s,transform .25s,background .25s}",
    ".es-rg a:hover{border-color:rgba(255,255,255,.4);transform:translateY(-3px);background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.07))}",
    ".es-rg strong{display:block;font:600 16.5px/1.3 var(--es-sans)!important;color:#fff!important}",
    ".es-rg em{display:block;font:400 14.5px/1.45 var(--es-sans)!important;font-style:normal;color:rgba(255,255,255,.76)!important}",
    ".es-all{margin-top:14px;display:inline-flex;align-items:center;gap:6px;color:#fff!important;font:600 15px var(--es-sans)!important;text-decoration:none!important}",
    ".es-all:hover{text-decoration:underline!important;text-underline-offset:4px}",
    "@media (max-width:860px){.es-faq{display:flex;flex-direction:column}.es-faq-col{display:contents}.es-faq-l p{max-width:46ch}.es-st{grid-template-columns:1fr}.es-rg{grid-template-columns:repeat(2,minmax(0,1fr))}.es-tp{gap:40px}}",
    "@media (max-width:440px){.es-rg{grid-template-columns:1fr}}",
    "@media (prefers-reduced-motion:reduce){.es-qa[open] .es-ans{animation:none}.es-pm,.es-pm::before,.es-pm::after,.es-rg a{transition:none}}"
  ].join("\n");

  // tool pages: heading, intro and the breadcrumb button
  var TCSS = [
    "main [data-testid=\"richTextElement\"] h1,main [data-testid=\"richTextElement\"] h1 span{font-family:'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif!important;font-weight:600!important;letter-spacing:-.03em!important;line-height:1.08!important;font-size:clamp(34px,4.6vw,50px)!important}",
    ".es-lede,.es-lede *{font-family:'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif!important;font-size:clamp(17px,1.6vw,19.5px)!important;line-height:1.6!important;color:rgba(255,255,255,.84)!important;font-weight:400!important}",
    ".es-backc [data-testid=\"linkElement\"]{width:100%!important;height:100%!important;display:flex!important;align-items:center;justify-content:center;border-radius:999px!important;background:rgba(255,255,255,.1)!important;border:1px solid rgba(255,255,255,.26)!important;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:background .25s,border-color .25s}",
    ".es-backc:hover [data-testid=\"linkElement\"]{background:rgba(255,255,255,.18)!important;border-color:rgba(255,255,255,.5)!important}",
    ".es-backc [data-testid=\"linkElement\"] span{font:500 15px/1 'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif!important;color:#fff!important;letter-spacing:0!important}"
  ].join("\n");

  var BLURB = {
    'merge-pdf': 'Combine several PDFs into one file', 'split-pdf': 'Cut a PDF by range, every N pages or per page',
    'extract-pdf-pages': 'Keep only the pages you need', 'delete-pdf-pages': 'Remove unwanted pages',
    'reorder-pdf-pages': 'Drag pages into a new order', 'rotate-pdf': 'Fix sideways pages',
    'jpg-to-pdf': 'Turn images into one PDF', 'pdf-to-jpg': 'Save pages as JPG or PNG images',
    'compress-pdf': 'Make PDF files smaller', 'add-page-numbers-to-pdf': 'Number every page', 'watermark-pdf': 'Stamp text across your pages'
  };

  // Wix puts these boxes at their editor X/width; widen the tool hub and the FAQ together and centre them (desktop only, the phone layout is left alone).
  function place(el, w) {
    if (!el) return;
    var cs = getComputedStyle(el), cur = parseFloat(cs.left) || 0;
    if (Math.abs(parseFloat(cs.width) - w) > 1) el.style.setProperty('width', w + 'px', 'important');
    var d = (innerWidth - w) / 2 - el.getBoundingClientRect().left;
    if (Math.abs(d) > 1) el.style.setProperty('left', (cur + d) + 'px', 'important');
  }
  function layout() {
    if (!HUB || innerWidth < 1000) return;
    var w = Math.min(1060, innerWidth - 80), h = document.querySelector('pdf-toolkit-app');
    if (h) { place(h.closest('[id^="comp-"]'), w); h.style.setProperty('width', '100%', 'important'); }
    var r = document.querySelector('.es-faq-root'); if (r) place(r, w);
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function qa(q, aNode) {
    var d = el('details', 'es-qa'), sm = el('summary'), h = el('h3', null, q), pm = el('span', 'es-pm'), an = el('div', 'es-ans');
    pm.setAttribute('aria-hidden', 'true'); sm.appendChild(h); sm.appendChild(pm); an.appendChild(aNode); d.appendChild(sm); d.appendChild(an); return d;
  }

  function buildHub() {
    var all = document.querySelectorAll('[data-testid="richTextElement"]'), root = null;
    for (var i = 0; i < all.length; i++) {
      var t = all[i].textContent || '';
      if (t.indexOf('Frequently asked questions') > -1 && t.indexOf('Does it work on my phone?') > -1) { root = all[i]; break; }
    }
    if (!root) return false;
    if (root.querySelector('.es-faq')) return true;
    var k = [].filter.call(root.children, function (c) { return /^(H[1-6]|P)$/.test(c.tagName) && (c.textContent || '').trim(); });
    var intro = k.slice(0, 3), rest = k.slice(3);
    if (intro.length < 3 || rest.length < 2 || rest.length % 2) return false;
    root.classList.add('es-faq-root', 'es-hubroot');
    var wrap = el('div', 'es-faq'), c1 = el('div', 'es-faq-col'), c2 = el('div', 'es-faq-col'), l = el('div', 'es-faq-l');
    intro.forEach(function (n) { l.appendChild(n); }); c1.appendChild(l);
    var firstCol = Math.max(1, Math.round(rest.length / 8)); // items that sit under the heading card (keeps both columns about equally tall)
    for (var j = 0; j < rest.length; j += 2) {
      var d = qa(rest[j].textContent.trim(), rest[j + 1]);
      (j / 2 < firstCol ? c1 : c2).appendChild(d); if (rest[j].parentNode) rest[j].parentNode.removeChild(rest[j]);
    }
    wrap.appendChild(c1); wrap.appendChild(c2); root.appendChild(wrap); layout();
    return true;
  }

  // tool page text block: "How to use it" list, FAQ and related-tool links -> cards
  function buildTool() {
    var all = document.querySelectorAll('[data-testid="richTextElement"]'), root = null;
    for (var i = 0; i < all.length; i++) {
      var t = all[i].textContent || '';
      if (t.indexOf('How to use it') > -1 && t.indexOf('Frequently asked questions') > -1) { root = all[i]; break; }
    }
    if (!root) return false;
    if (root.querySelector('.es-tp')) return true;
    var steps = [], faq = [], rel = [], mode = '';
    [].forEach.call(root.children, function (k) {
      var tx = (k.textContent || '').trim();
      if (k.tagName === 'H2') { mode = /how to use/i.test(tx) ? 's' : /frequently/i.test(tx) ? 'f' : /more pdf/i.test(tx) ? 'r' : ''; return; }
      if (mode === 's' && k.tagName === 'OL') [].forEach.call(k.querySelectorAll('li'), function (li) { steps.push((li.textContent || '').trim()); });
      else if (mode === 'f') { if (k.tagName === 'H3') faq.push({ q: tx, a: null }); else if (k.tagName === 'P' && faq.length && !faq[faq.length - 1].a) faq[faq.length - 1].a = tx; }
      else if (mode === 'r' && k.tagName === 'P') [].forEach.call(k.querySelectorAll('a'), function (a) { rel.push({ h: a.getAttribute('href') || '', t: (a.textContent || '').trim() }); });
    });
    if (!steps.length || !faq.length) return false;
    var tp = el('div', 'es-tp');
    var s1 = el('section'), h1 = el('h2', null, 'How to use it'), ol = el('ol', 'es-st');
    steps.forEach(function (s, i) { var li = el('li'), n = el('span', 'n', String(i + 1)), p = el('p', null, s); n.setAttribute('aria-hidden', 'true'); li.appendChild(n); li.appendChild(p); ol.appendChild(li); });
    s1.appendChild(h1); s1.appendChild(ol); tp.appendChild(s1);
    var s2 = el('section'), h2 = el('h2', null, 'Frequently asked questions'), ql = el('div', 'es-ql');
    faq.forEach(function (f) { if (!f.a) return; ql.appendChild(qa(f.q, el('p', null, f.a))); });
    s2.appendChild(h2); s2.appendChild(ql); tp.appendChild(s2);
    if (rel.length) {
      var s3 = el('section'), h3 = el('h2', null, 'More PDF tools'), ul = el('ul', 'es-rg');
      rel.forEach(function (r) {
        var slug = r.h.replace(/^.*\/pdf-tools\//, '').replace(/\/$/, ''), li = el('li'), a = el('a'); a.href = r.h;
        a.appendChild(el('strong', null, r.t)); a.appendChild(el('em', null, BLURB[slug] || 'Free and private, in your browser')); li.appendChild(a); ul.appendChild(li);
      });
      s3.appendChild(h3); s3.appendChild(ul);
      var all2 = el('a', 'es-all', 'See all PDF tools'); all2.href = '/pdf-tools'; s3.appendChild(all2);
      tp.appendChild(s3);
    }
    root.classList.add('es-faq-root');
    while (root.firstChild) root.removeChild(root.firstChild);
    root.appendChild(tp);
    return true;
  }

  // the Wix "< Back" button becomes a breadcrumb pill that goes to the toolkit page
  function fixBack() {
    var spans = document.querySelectorAll('main [data-testid="linkElement"] span, main [role="button"] span'), sp = null;
    for (var i = 0; i < spans.length; i++) if (/^\s*<?\s*Back\s*$/.test(spans[i].textContent || '')) { sp = spans[i]; break; }
    var comp = sp && sp.closest('[id^="comp-"]');
    if (!comp) return;
    if (!comp.classList.contains('es-backc')) {
      comp.classList.add('es-backc'); sp.textContent = 'All PDF tools'; comp.setAttribute('aria-label', 'All PDF tools');
      comp.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); location.href = '/pdf-tools'; }, true);
      comp.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); location.href = '/pdf-tools'; } }, true);
    }
    var h1 = document.querySelector('main h1'), hc = h1 && h1.closest('[id^="comp-"]');
    if (hc) {
      var d = hc.getBoundingClientRect().left - comp.getBoundingClientRect().left;
      if (Math.abs(d) > 1) comp.style.setProperty('left', ((parseFloat(getComputedStyle(comp).left) || 0) + d) + 'px', 'important');
    }
    if (parseFloat(getComputedStyle(comp).width) < 150) comp.style.setProperty('width', '150px', 'important');
  }
  function markLede() {
    var h1 = document.querySelector('main h1'), hc = h1 && h1.closest('[id^="comp-"]');
    if (!hc) return;
    var all = [].slice.call(document.querySelectorAll('[data-testid="richTextElement"]')), i = all.indexOf(hc.querySelector('[data-testid="richTextElement"]') || hc);
    var n = all[i + 1];
    if (n && !n.classList.contains('es-lede') && !/How to use it/.test(n.textContent || '')) n.classList.add('es-lede');
  }

  var BG = "html body{background:radial-gradient(1200px 620px at 50% -120px,rgba(150,170,255,.26),rgba(150,170,255,0) 70%),linear-gradient(180deg,#34407a 0,#2b3665 720px,#262f5c 100%),#262f5c!important;background-repeat:no-repeat!important;background-size:100% 760px,100% 100%,auto!important}" +
    "main [id^=bgLayers_comp-] *,#PAGES_CONTAINER [id^=bgLayers_comp-] *,#SITE_PAGES [id^=bgLayers_comp-] *{background-color:transparent!important}" +
    "#ecs-fi{background:linear-gradient(rgba(24,31,68,.55),rgba(24,31,68,.88))!important}";
  var st = document.createElement('style'); st.id = 'es-pdf-faq-css'; st.textContent = BG + ((HUB || TOOL) ? CSS : '') + (TOOL ? TCSS : ''); document.head.appendChild(st);
  if ((HUB || TOOL) && !document.getElementById('es-font')) { var f = document.createElement('link'); f.id = 'es-font'; f.rel = 'stylesheet'; f.href = 'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap'; document.head.appendChild(f); }
  // Wix draws a dark tint over each page section; clear it so the soft background shows (matched by colour, since Wix re-creates these layers after load).
  function clearTint() {
    var els = document.querySelectorAll('main div, #PAGES_CONTAINER div');
    for (var i = 0; i < els.length; i++) {
      var c = els[i].style && getComputedStyle(els[i]).backgroundColor;
      if (c === 'rgba(6, 9, 22, 0.38)') els[i].style.setProperty('background-color', 'transparent', 'important');
    }
  }
  function tick() { clearTint(); if (HUB) { layout(); buildHub(); } if (TOOL) { fixBack(); markLede(); buildTool(); } }
  var n = 0, iv = setInterval(function () { tick(); if (++n > 240) clearInterval(iv); }, 500);  // keeps checking: Wix can re-draw the text box after load
  tick();
  if (HUB || TOOL) addEventListener('resize', tick);
})();
