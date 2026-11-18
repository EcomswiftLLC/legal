/* /donate and /donation-thank-you-page: warm navy + gold restyle around the Wix Donations widget.
   The widget itself (frequency, amount, fee box, Donate button) is untouched; we only restyle it and
   replace the broken left image with a real panel. Everything is additive and fails safe. */
(function () {
  'use strict';
  if (window.__esDonate) return; window.__esDonate = 1;
  var path = location.pathname.replace(/\/+$/, '').toLowerCase();
  var isThanks = path === '/donation-thank-you-page';


  /* fonts */
  if (!document.getElementById('es-donate-font')) {
    var fl = document.createElement('link'); fl.id = 'es-donate-font'; fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Schibsted+Grotesk:wght@400;500;600&display=swap';
    document.head.appendChild(fl);
  }

  /* page-level CSS: restyles the Wix widget through its stable class names */
  var G = '#E8C27A', G2 = '#C9A55C', NAVY = '#0D1226';
  var css =
    'section[id^="comp-"].wixui-column-strip,#SITE_PAGES [class*="wixui-column-strip"]{--es-gold:' + G + '}' +
    '#img_comp-mttgfay64,#bgMedia_comp-mttgfay64{display:none!important}' +
    '#comp-mttgfay64{position:relative}' +
    /* one continuous background: a single gradient on <html>, everything above it transparent */
    'html,html body{background:' + NAVY + '!important;background-image:none!important}' +
    '#SITE_CONTAINER{background:radial-gradient(1100px 760px at 78% 0,#1A2147 0%,' + NAVY + ' 100%) ' + NAVY + ' no-repeat!important}' +
    '#masterPage,#PAGES_CONTAINER,#SITE_PAGES,html body #SITE_HEADER,html body #SITE_HEADER [id^="bgLayers"],html body #SITE_FOOTER,html body #SITE_FOOTER [id^="bgLayers"],html body #SITE_FOOTER [id^="bgMedia"],#comp-mttgfaxd,#comp-mttgfaxd [id^="bgLayers_"],#comp-mttgfaxd [id^="bgMedia_"],#comp-mttgfaxz,#comp-mttgfayi,#comp-mttgfay64{background:transparent!important}' +
    '@media(max-width:750px){#comp-mttgfaxd,#comp-mttgfaxz,#comp-mttgfay64{height:auto!important;min-height:0!important}#es-donate-left{position:relative!important;inset:auto!important}#comp-mttgfay64{display:block!important}#comp-mttgfay64>*:not(#es-donate-left){position:absolute!important;inset:0!important;height:100%!important}}' +
    '@media(min-width:751px){#comp-mttgfaxd,#comp-mttgfaxz,#comp-mttgfay64,#comp-mttgfayi{min-height:840px!important}}' +
    '#comp-mttgfayk{position:relative;isolation:isolate}' +
    '#comp-mttgfayk::before{content:"";position:absolute;inset:-34px -38px -66px;z-index:-1;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.02));border:1px solid rgba(232,194,122,.3);box-shadow:0 32px 90px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.09)}' +
    '@media(max-width:750px){#comp-mttgfayk::before{inset:-18px -14px;border-radius:22px}}' +
    '#comp-mttgfayk [class*="SelectableContainercomponent"][class*="__wrapper"]{border-radius:12px!important;overflow:hidden}' +
    '#comp-mttgfayk [class*="__wrapper"] .wixui-multi-state-box,#comp-mttgfayk [class*="__wrapper"] .wixui-box,#comp-mttgfayk [class*="__wrapper"] .inner-box{border:0!important;background:transparent!important;box-shadow:none!important;border-radius:12px!important}' +
    '#comp-mttgfayk .wixui-selectable-container{border:1px solid rgba(255,255,255,.18)!important;border-radius:12px!important;background:rgba(255,255,255,.05)!important;transition:border-color .15s,background .15s}' +
    '#comp-mttgfayk .wixui-selectable-container:hover{border-color:rgba(232,194,122,.6)!important}' +
    '#comp-mttgfayk .wixui-selectable-container.selected{border:2px solid ' + G + '!important;background:rgba(232,194,122,.16)!important}' +
    '#comp-mttgfayk .wixui-selectable-container-input__label{color:#fff!important;font-family:"Schibsted Grotesk",system-ui,sans-serif!important;font-weight:500!important}' +
    '#comp-mttgfayk .wixui-text-box__input{background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:12px!important;color:#fff!important}' +
    '#comp-mttgfayk .wixui-text-box__input:focus{border-color:' + G + '!important;outline:2px solid rgba(232,194,122,.45)!important;outline-offset:1px}' +
    '#comp-mttgfayk .wixui-button{background:linear-gradient(180deg,#F1D08D,' + G2 + ')!important;border:0!important;border-radius:12px!important;box-shadow:0 10px 28px rgba(201,165,92,.28)!important;transition:transform .15s,box-shadow .15s}' +
    '#comp-mttgfayk .wixui-button:hover{transform:translateY(-1px);box-shadow:0 14px 32px rgba(201,165,92,.4)!important}' +
    '#comp-mttgfayk .wixui-button .wixui-button__label{color:' + NAVY + '!important;-webkit-text-fill-color:' + NAVY + '!important;font-weight:600!important;font-family:"Schibsted Grotesk",system-ui,sans-serif!important}' +
    '#comp-mttgfayk .wixui-button svg,#comp-mttgfayk .wixui-button svg path{fill:' + NAVY + '!important}' +
    '#comp-mttgfayk .wixui-button:focus-visible,#comp-mttgfayk .wixui-selectable-container-input__label:focus-visible{outline:3px solid #fff!important;outline-offset:2px}' +
    '#comp-mttgfayk input[type=radio]:focus-visible+div,#comp-mttgfayk input:focus-visible{outline:2px solid ' + G + '!important}' +
    '#comp-mttgfayk h1,#comp-mttgfayk h2,#comp-mttgfayk h3{font-family:"Fraunces",Georgia,serif!important;font-weight:600!important;letter-spacing:-.01em}' +
    '#comp-mttgfayk p{font-family:"Schibsted Grotesk",system-ui,sans-serif!important}' +
    '#comp-mttgfayk [class*=wixui-rich-text] p{color:#E9E6DE}';
  if (isThanks) {
    css = '#SITE_PAGES,#comp-mttgf9zi,[id^="bgLayers_comp-mttgf9zi"],[id^="bgMedia_comp-mttgf9zi"]{background:' + NAVY + '!important}' +
      'html,body{background:' + NAVY + '!important}' +
      '#comp-mttgf9zi h1,#comp-mttgf9zi h2,#comp-mttgf9zi h3,#comp-mttgf9zi [class*="font_"]{font-family:"Fraunces",Georgia,serif!important;font-weight:600!important;letter-spacing:-.01em;color:#F3EFE6!important;text-wrap:balance}' +
      '#masterPage,#SITE_CONTAINER,#PAGES_CONTAINER,#SITE_HEADER,#comp-mttgf9zi *:not(svg):not(path):not(img){background-color:transparent!important}' +
      '#comp-mttgf9zi p[class*="font_"]{font-family:"Schibsted Grotesk",system-ui,sans-serif!important;font-weight:400!important;letter-spacing:0}' +
      '#comp-mttgf9zi p{font-family:"Schibsted Grotesk",system-ui,sans-serif!important;color:#E9E6DE!important}' +
      '#comp-mttgf9zi p:first-of-type,#comp-mttgf9zi h2{color:#F3EFE6!important}';
    css += '#comp-mttgf9zi h1,#comp-mttgf9zi h2,#comp-mttgf9zi h3{-webkit-text-fill-color:#F3EFE6!important}#comp-mttgf9zi p,#comp-mttgf9zi span{-webkit-text-fill-color:#E9E6DE!important}';
    css += '#masterPage,#SITE_CONTAINER,#PAGES_CONTAINER,#SITE_HEADER{background:' + NAVY + '!important}';
  }
  var st = document.createElement('style'); st.id = 'es-donate-css'; st.textContent = css; document.head.appendChild(st);

  function icon(name) {
    var p = {
      wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z"/>',
      spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
      shield: '<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
      star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
      share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
      chat: '<path d="M4 5h16v11H9l-5 4z"/>'
    }[name];
    return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  var BASECSS =
    ':host{display:block;color:#F3EFE6;font-family:"Schibsted Grotesk",system-ui,sans-serif;font-size:16px;line-height:1.6}' +
    '*{box-sizing:border-box}h2,h3,p{margin:0}a{color:inherit}' +
    '.serif{font-family:"Fraunces",Georgia,serif;font-weight:600;letter-spacing:-.015em;line-height:1.12;text-wrap:balance}' +
    ':focus-visible{outline:3px solid #fff;outline-offset:3px;border-radius:6px}' +
    '@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}';

  var ART = '<svg class="art" viewBox="-40 -30 180 160" aria-hidden="true" focusable="false"><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6DDA6"/><stop offset="1" stop-color="#B98E45"/></linearGradient><radialGradient id="gl" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#E8C27A" stop-opacity=".28"/><stop offset="1" stop-color="#E8C27A" stop-opacity="0"/></radialGradient></defs><circle cx="50" cy="46" r="86" fill="url(#gl)"/><g fill="none" stroke="url(#gg)" stroke-width="1.1"><path transform="translate(50 46) scale(0.18) translate(-50 -46)" stroke-opacity="1" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(0.36) translate(-50 -46)" stroke-opacity="0.9" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(0.56) translate(-50 -46)" stroke-opacity="0.75" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(0.78) translate(-50 -46)" stroke-opacity="0.58" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(1.02) translate(-50 -46)" stroke-opacity="0.42" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(1.28) translate(-50 -46)" stroke-opacity="0.28" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(1.58) translate(-50 -46)" stroke-opacity="0.16" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/><path transform="translate(50 46) scale(1.92) translate(-50 -46)" stroke-opacity="0.08" d="M50 84C20 60 6 44 6 28C6 16 15 8 27 8C37 8 45 13 50 21C55 13 63 8 73 8C85 8 94 16 94 28C94 44 80 60 50 84Z"/></g></svg>';

  function leftPanel() {
    return '<style>' + BASECSS +
      ':host{position:relative;display:block;height:100%}' +
      '.art{overflow:visible;position:absolute;right:6%;top:96px;width:min(380px,62%);height:auto;pointer-events:none;z-index:0}' +
      '.art path{vector-effect:non-scaling-stroke}' +
      '.w{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:26px;padding:clamp(110px,10vw,140px) clamp(24px,5vw,72px) 72px;min-height:100%}' +
      '.k{display:inline-flex;align-items:center;gap:10px;color:' + G + ';font-weight:500;font-size:14px;border:1px solid rgba(232,194,122,.35);background:rgba(232,194,122,.08);border-radius:999px;padding:7px 14px 7px 12px}' +
      '.k:before{content:"";width:7px;height:7px;border-radius:50%;background:' + G + ';box-shadow:0 0 0 4px rgba(232,194,122,.18)}' +
      'h2{font-size:clamp(34px,3.6vw,54px);max-width:12em;text-wrap:balance}' +
      '.lead{color:#D9D6CE;font-size:clamp(16px,1.25vw,18px);max-width:31em}' +
      '.f{list-style:none;margin:6px 0 0;padding:20px 0 0;border-top:1px solid rgba(232,194,122,.25);display:flex;flex-direction:column;gap:14px;max-width:31em;width:100%}' +
      '.f li{position:relative;padding-left:34px;color:#F3EFE6;font-size:17px}' +
      '.f li:before{content:"";position:absolute;left:0;top:3px;width:20px;height:20px;border-radius:50%;background:rgba(232,194,122,.16) url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M5.5 10.5l3 3 6-7%27 fill=%27none%27 stroke=%27%23E8C27A%27 stroke-width=%271.8%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E") center/contain no-repeat}' +
      '@media(max-width:750px){:host{height:auto}.art{right:-70px;top:-10px;bottom:auto;width:300px;opacity:.4}.w{min-height:0;justify-content:flex-start;padding:36px 24px 44px;gap:20px}.f li{font-size:16px}h2{font-size:32px}.lead{padding-right:8px}}' +
      '</style>' + ART + '<div class="w">' +
      '<p class="k">100+ apps across platforms</p>' +
      '<h2 class="serif">Free for everyone, backed by people like you.</h2>' +
      '<p class="lead">All of our apps are fully free for everyone. They’re backed by donations, which help us fix bugs, keep them up to date and build the next ones.</p>' +
      '<ul class="f"><li>100+ apps, fully free for everyone</li><li>Backed by donations, not paywalls</li><li>Every gift goes into fixes, updates and new apps</li></ul>' +
      '</div>';
  }

  function thanksPanel() {
    function item(ic, h, p) { return '<div class="i"><span class="ic">' + icon(ic) + '</span><h3 class="serif">' + h + '</h3><p>' + p + '</p></div>'; }
    return '<style>' + BASECSS +
      ':host{background:' + NAVY + '}' +
      '.w{max-width:960px;margin:0 auto;padding:24px clamp(20px,4vw,40px) 88px;display:flex;flex-direction:column;gap:36px}' +
      'h2{font-size:clamp(26px,3vw,36px);text-align:center}' +
      '.row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}' +
      '.i{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:10px;min-width:0}' +
      '.ic{width:44px;height:44px;border-radius:12px;background:rgba(232,194,122,.14);color:' + G + ';display:grid;place-items:center}' +
      'h3{font-size:20px}.i p{color:#CFCCC4}.i a{color:' + G + '}' +
      '.btn{align-self:center;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 26px;border-radius:12px;background:linear-gradient(180deg,#F1D08D,' + G2 + ');color:' + NAVY + ';font-weight:600;text-decoration:none}' +
      '@media(max-width:760px){.row{grid-template-columns:1fr}}' +
      '</style><div class="w"><h2 class="serif">Want to help a little more?</h2><div class="row">' +
      item('star', 'Leave a review', 'An honest rating, wherever you found us, helps other people find an app they’ll use.') +
      item('share', 'Share an app', 'Send one to someone who’d get something out of it.') +
      item('chat', 'Say hello', 'Tell us what you like or what to fix. <a href="/contact">Send us a message</a>.') +
      '</div><a class="btn" href="/">Back to Ecom Swift LLC</a></div>';
  }

  function mount(el, html, how, ref) {
    var h = document.createElement('div'); h.id = 'es-donate-' + how;
    var sr = h.attachShadow({ mode: 'open' }); sr.innerHTML = html;
    return h;
  }

    function build() {
    if (isThanks) {
      var ts = document.getElementById('comp-mttgf9zi');
      if (ts && !document.getElementById('es-donate-thanks')) {
        ts.insertAdjacentElement('afterend', mount(null, thanksPanel(), 'thanks'));
      }
      return;
    }
    var col = document.getElementById('comp-mttgfay64'), strip = document.getElementById('comp-mttgfaxd');
    if (!col || !strip) return;
    if (!document.getElementById('es-donate-left')) {
      var l = mount(null, leftPanel(), 'left');
      l.style.cssText = 'position:absolute;inset:0;z-index:2;overflow:hidden';
      col.appendChild(l);
    }
    var old = document.getElementById('es-donate-below'); if (old) old.remove();
  }
  /* Wix can re-render the page after we mount, so keep the panels attached */
  var readyDone = false;
  function ready() {
    if (readyDone) return;
    if (document.getElementById('es-donate-left') || document.getElementById('es-donate-thanks')) {
      readyDone = true;
      setTimeout(function () { document.documentElement.classList.add('es-donate-ready'); }, 450);
    }
  }
  build(); ready();
  setInterval(function () { build(); ready(); }, 300);
})();
