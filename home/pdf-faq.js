/* /pdf-tools: render the FAQ text as the same glass accordion used on the home page (details/summary, no libraries). */
(function () {
  if (window.__esPdfFaq) return; window.__esPdfFaq = 1;
  var CSS = [
    ".es-faq-root{position:relative!important;margin:0!important;height:auto!important;padding:0!important;--es-sans:'Schibsted Grotesk','Helvetica Neue',Arial,system-ui,sans-serif;font-family:var(--es-sans)!important;color:#fff;-webkit-font-smoothing:antialiased}",
    ".es-faq-root *{font-family:var(--es-sans)!important;letter-spacing:normal;box-sizing:border-box}",
    ".es-faq-root span{color:inherit!important;font-size:inherit!important;font-weight:inherit!important}",
    ".es-faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:stretch;padding:0}",
    ".es-faq-col{display:flex;flex-direction:column;gap:12px;min-width:0}",
    ".es-faq-l{flex:1 1 auto;display:flex;flex-direction:column;padding:clamp(22px,2.4vw,32px);border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.17);-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2)}",
    ".es-faq-l h2{margin:0!important;font:600 clamp(1.7rem,3vw,2.4rem)/1.08 var(--es-sans)!important;letter-spacing:-.025em!important;color:#fff!important;text-align:left!important;text-wrap:balance}",
    ".es-faq-l p{margin:14px 0 0!important;max-width:34ch;font-size:16px!important;line-height:1.55!important;color:rgba(255,255,255,.74)!important;text-align:left!important}",
    ".es-faq-l p:nth-of-type(1){margin-bottom:24px!important}",
    ".es-faq-l p:nth-of-type(2){margin-top:auto!important;padding-top:18px;border-top:1px solid rgba(255,255,255,.12);max-width:none;font-size:15px!important;color:rgba(255,255,255,.7)!important}",
    ".es-faq-l a{color:#fff!important;text-decoration:underline!important;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.4)}",
    ".es-faq-l a:hover{text-decoration-color:#fff!important}",
    ".es-qa{border-radius:16px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.14);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);transition:border-color .3s,background .3s}",
    ".es-qa:hover{border-color:rgba(255,255,255,.28)}",
    ".es-qa[open]{border-color:rgba(255,255,255,.32);background:linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,.08))}",
    ".es-qa summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:72px;padding:12px 22px;border-radius:16px}",
    ".es-qa summary::-webkit-details-marker{display:none}",
    ".es-qa summary:focus-visible{outline:2px solid #fff;outline-offset:-3px}",
    ".es-qa h3{margin:0!important;font:600 clamp(1rem,1.3vw,1.1rem)/1.35 var(--es-sans)!important;letter-spacing:-.01em!important;color:#fff!important;text-align:left!important;text-wrap:balance}",
    ".es-pm{position:relative;flex:none;width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.28);transition:background .3s}",
    ".es-pm::before,.es-pm::after{content:\"\";position:absolute;left:50%;top:50%;width:10px;height:1.5px;background:#fff;transform:translate(-50%,-50%);transition:transform .4s cubic-bezier(.22,.7,.2,1)}",
    ".es-pm::after{transform:translate(-50%,-50%) rotate(90deg)}",
    ".es-qa[open] .es-pm{background:rgba(255,255,255,.12)}",
    ".es-qa[open] .es-pm::after{transform:translate(-50%,-50%) rotate(0)}",
    ".es-ans{padding:0 22px 22px}",
    ".es-ans p{margin:0!important;max-width:64ch;font-size:16px!important;line-height:1.7!important;color:rgba(255,255,255,.8)!important;text-align:left!important}",
    ".es-ans a{color:#fff!important;text-decoration:underline!important;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.45)}",
    ".es-qa[open] .es-ans{animation:esAnsIn .45s cubic-bezier(.22,.7,.2,1)}",
    "@keyframes esAnsIn{from{opacity:0;transform:translateY(-6px)}}",
    "@media (max-width:860px){.es-faq{display:flex;flex-direction:column}.es-faq-col{display:contents}.es-faq-l p{max-width:46ch}}",
    "@media (prefers-reduced-motion:reduce){.es-qa[open] .es-ans{animation:none}.es-pm,.es-pm::before,.es-pm::after{transition:none}}"
  ].join("\n");

  var HUB = /^\/pdf-tools\/?$/.test(location.pathname);
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
  function build() {
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
    root.classList.add('es-faq-root');
    var wrap = document.createElement('div'); wrap.className = 'es-faq';
    var c1 = document.createElement('div'), c2 = document.createElement('div'); c1.className = c2.className = 'es-faq-col';
    var l = document.createElement('div'); l.className = 'es-faq-l'; intro.forEach(function (n) { l.appendChild(n); }); c1.appendChild(l);
    var firstCol = Math.max(1, Math.round(rest.length / 8)); // items that sit under the heading card (keeps both columns about equally tall)
    for (var j = 0; j < rest.length; j += 2) {
      var d = document.createElement('details'), sm = document.createElement('summary'), h = document.createElement('h3'), pm = document.createElement('span'), an = document.createElement('div');
      d.className = 'es-qa'; h.textContent = rest[j].textContent.trim(); pm.className = 'es-pm'; pm.setAttribute('aria-hidden', 'true');
      sm.appendChild(h); sm.appendChild(pm); an.className = 'es-ans'; an.appendChild(rest[j + 1]); d.appendChild(sm); d.appendChild(an);
      (j / 2 < firstCol ? c1 : c2).appendChild(d); if (rest[j].parentNode) rest[j].parentNode.removeChild(rest[j]);
    }
    wrap.appendChild(c1); wrap.appendChild(c2); root.appendChild(wrap); layout();
    return true;
  }
  var BG = "html body{background:radial-gradient(1200px 620px at 50% -120px,rgba(150,170,255,.26),rgba(150,170,255,0) 70%),linear-gradient(180deg,#34407a 0,#2b3665 720px,#262f5c 100%),#262f5c!important;background-repeat:no-repeat!important;background-size:100% 760px,100% 100%,auto!important}" +
    "main [id^=bgLayers_comp-] *,#PAGES_CONTAINER [id^=bgLayers_comp-] *,#SITE_PAGES [id^=bgLayers_comp-] *{background-color:transparent!important}" +
    "#ecs-fi{background:linear-gradient(rgba(24,31,68,.55),rgba(24,31,68,.88))!important}";
  var st = document.createElement('style'); st.id = 'es-pdf-faq-css'; st.textContent = BG + (HUB ? CSS : ''); document.head.appendChild(st);
  if (HUB && !document.getElementById('es-font')) { var f = document.createElement('link'); f.id = 'es-font'; f.rel = 'stylesheet'; f.href = 'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap'; document.head.appendChild(f); }
  // Wix draws a dark tint over each page section; clear it so the soft background shows (matched by colour, since Wix re-creates these layers after load).
  function clearTint() {
    var els = document.querySelectorAll('main div, #PAGES_CONTAINER div');
    for (var i = 0; i < els.length; i++) {
      var c = els[i].style && getComputedStyle(els[i]).backgroundColor;
      if (c === 'rgba(6, 9, 22, 0.38)') els[i].style.setProperty('background-color', 'transparent', 'important');
    }
  }
  var n = 0, iv = setInterval(function () { clearTint(); if (HUB) { layout(); build(); } if (++n > 240) clearInterval(iv); }, 500);  // keeps checking: Wix can re-draw the text box after load
  clearTint();
  if (HUB) { layout(); build(); addEventListener('resize', function () { layout(); build(); }); }
})();
