/* /donate and /donation-thank-you-page: warm navy + gold restyle around the Wix Donations widget.
   The widget itself (frequency, amount, fee box, Donate button) is untouched; we only restyle it and
   replace the broken left image with a real panel. Everything is additive and fails safe. */
(function () {
  'use strict';
  if (window.__esDonate) return; window.__esDonate = 1;
  var BASE = 'https://ecomswiftllc.github.io/legal/home/donate/';
  var path = location.pathname.replace(/\/+$/, '').toLowerCase();
  var isThanks = path === '/donation-thank-you-page';

  var APPS = [['lullora'], ['abaqo'], ['nestbox'], ['tinylog'], ['homefit'], ['soundmeter'], ['steptrail'], ['squeezo'], ['pagewise'], ['slimpath'], ['tunebeat'], ['cyclebloom']];

  /* fonts */
  if (!document.getElementById('es-donate-font')) {
    var fl = document.createElement('link'); fl.id = 'es-donate-font'; fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Schibsted+Grotesk:wght@400;500;600&display=swap';
    document.head.appendChild(fl);
  }

  /* page-level CSS: restyles the Wix widget through its stable class names */
  var G = '#E8C27A', G2 = '#C9A55C', NAVY = '#0D1226';
  var css =
    '#SITE_PAGES{background:' + NAVY + '}' +
    'section[id^="comp-"].wixui-column-strip,#SITE_PAGES [class*="wixui-column-strip"]{--es-gold:' + G + '}' +
    '#img_comp-mttgfay64,#bgMedia_comp-mttgfay64{display:none!important}' +
    '#comp-mttgfay64{position:relative}' +
    '#comp-mttgfayi,#comp-mttgfay64{background:radial-gradient(120% 80% at 80% 0%,#1A2147 0%,' + NAVY + ' 60%)!important}' +
    '@media(max-width:750px){#comp-mttgfaxd,#comp-mttgfaxz,#comp-mttgfay64{height:auto!important;min-height:0!important}#es-donate-left{position:relative!important;inset:auto!important}#comp-mttgfay64{display:block!important}#comp-mttgfay64>*:not(#es-donate-left){position:absolute!important;inset:0!important;height:100%!important}}' +
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
      '#comp-mttgf9zi p{font-family:"Schibsted Grotesk",system-ui,sans-serif!important;color:#E9E6DE!important}' +
      '#comp-mttgf9zi p:first-of-type,#comp-mttgf9zi h2{color:#F3EFE6!important}';
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

  function leftPanel() {
    var tiles = APPS.map(function (a) {
      return '<div class="t"><img src="' + BASE + a[0] + '.png" width="96" height="96" alt="" loading="eager" decoding="async"></div>';
    }).join('');
    return '<style>' + BASECSS +
      '.w{display:flex;flex-direction:column;justify-content:center;gap:28px;padding:clamp(88px,9vw,120px) clamp(24px,5vw,72px) 56px;min-height:100%}' +
      '.k{color:' + G + ';font-weight:500;font-size:15px}' +
      'h2{font-size:clamp(32px,3.2vw,46px)}' +
      '.lead{color:#D9D6CE;font-size:clamp(16px,1.25vw,18px);max-width:34em}' +
      '.g{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(10px,1.4vw,18px);max-width:440px}' +
      '.t{display:block;aspect-ratio:1;border-radius:22%;overflow:hidden;box-shadow:0 0 0 1px rgba(232,194,122,.35),0 12px 28px rgba(0,0,0,.35);}' +
            '.t img{display:block;width:100%;height:100%;object-fit:cover}' +
      '.cap{color:#B9BED0;font-size:14px}' +
      '@media(max-width:750px){.w{min-height:0;justify-content:flex-start;padding:36px 24px 44px;gap:22px}.g{gap:10px;max-width:none}h2{font-size:31px}.lead{padding-right:8px}}' +
      '</style><div class="w">' +
      '<p class="k">100+ apps across platforms</p>' +
      '<h2 class="serif">Free for everyone, backed by people like you.</h2>' +
      '<p class="lead">All of our apps are fully free for everyone. They’re backed by donations, which help us fix bugs, keep them up to date and build the next ones.</p>' +
      '<div class="g" aria-hidden="true">' + tiles + '</div></div>';
  }

  function belowSections() {
    function item(ic, h, p) { return '<div class="i"><span class="ic">' + icon(ic) + '</span><h3 class="serif">' + h + '</h3><p>' + p + '</p></div>'; }
    return '<style>' + BASECSS +
      ':host{background:#0A0F20}' +
      '.w{max-width:1120px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,4vw,48px);display:flex;flex-direction:column;gap:clamp(48px,6vw,80px)}' +
      'h2{font-size:clamp(28px,3vw,40px);margin-bottom:28px}' +
      '.row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}' +
      '.i{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:26px;display:flex;flex-direction:column;gap:10px;min-width:0}' +
      '.ic{width:44px;height:44px;border-radius:12px;background:rgba(232,194,122,.14);color:' + G + ';display:grid;place-items:center}' +
      'h3{font-size:21px}.i p{color:#CFCCC4;font-size:16px}' +
      '.i a{color:' + G + ';text-underline-offset:3px}' +
      '.note{border-top:1px solid rgba(255,255,255,.12);padding-top:28px;color:#B9BED0;font-size:15px;max-width:46em}' +
      '.note a{color:' + G + '}' +
      '@media(max-width:820px){.row{grid-template-columns:1fr}}' +
      '</style><div class="w">' +
      '<section aria-labelledby="g1"><h2 id="g1" class="serif">Where your donation goes</h2><div class="row">' +
      item('wrench', 'Keeping apps working', 'Bug fixes, updates for new devices and system versions, and replies to your support emails.') +
      item('spark', 'Building new ones', 'New free apps, plus the features people ask for most.') +
      item('shield', 'Staying independent', 'Developer accounts, testing devices and the tools it takes to publish.') +
      '</div></section>' +
      '<section aria-labelledby="g2"><h2 id="g2" class="serif">Can’t give right now? You can still help.</h2><div class="row">' +
      item('star', 'Leave a review', 'An honest rating, wherever you found us, helps other people find an app they’ll use.') +
      item('share', 'Share an app', 'Send one to a friend or family member who’d get something out of it.') +
      item('chat', 'Tell us what to fix', 'Found a bug or have an idea? <a href="/contact">Send us a message</a>.') +
      '</div></section>' +
      '<p class="note">Ecom Swift LLC is a for-profit company, not a charity. Donations are voluntary and are not tax-deductible. Questions about a donation? <a href="/contact">Contact us</a>.</p>' +
      '</div>';
  }

  function thanksPanel() {
    var tiles = APPS.slice(0, 8).map(function (a) {
      return '<div class="t"><img src="' + BASE + a[0] + '.png" width="72" height="72" alt="" decoding="async"></div>';
    }).join('');
    function item(ic, h, p) { return '<div class="i"><span class="ic">' + icon(ic) + '</span><h3 class="serif">' + h + '</h3><p>' + p + '</p></div>'; }
    return '<style>' + BASECSS +
      ':host{background:' + NAVY + '}' +
      '.w{max-width:960px;margin:0 auto;padding:24px clamp(20px,4vw,40px) 88px;display:flex;flex-direction:column;gap:36px}' +
      'h2{font-size:clamp(26px,3vw,36px);text-align:center}' +
      '.row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}' +
      '.i{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:10px;min-width:0}' +
      '.ic{width:44px;height:44px;border-radius:12px;background:rgba(232,194,122,.14);color:' + G + ';display:grid;place-items:center}' +
      'h3{font-size:20px}.i p{color:#CFCCC4}.i a{color:' + G + '}' +
      '.g{display:flex;flex-wrap:wrap;justify-content:center;gap:14px}' +
      '.t{display:block;width:64px;height:64px;border-radius:22%;overflow:hidden;box-shadow:0 0 0 1px rgba(232,194,122,.35)}.t img{display:block;width:100%;height:100%}' +
      '.btn{align-self:center;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 26px;border-radius:12px;background:linear-gradient(180deg,#F1D08D,' + G2 + ');color:' + NAVY + ';font-weight:600;text-decoration:none}' +
      '@media(max-width:760px){.row{grid-template-columns:1fr}}' +
      '</style><div class="w"><h2 class="serif">Want to help a little more?</h2><div class="row">' +
      item('star', 'Leave a review', 'An honest rating, wherever you found us, helps other people find an app they’ll use.') +
      item('share', 'Share an app', 'Send one to someone who’d get something out of it.') +
      item('chat', 'Say hello', 'Tell us what you like or what to fix. <a href="/contact">Send us a message</a>.') +
      '</div><div class="g">' + tiles + '</div><a class="btn" href="/">Back to Ecom Swift LLC</a></div>';
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
    if (!document.getElementById('es-donate-below')) {
      var b = mount(null, belowSections(), 'below');
      strip.insertAdjacentElement('afterend', b);
    }
  }
  /* Wix can re-render the page after we mount, so keep the panels attached */
  build();
  setInterval(build, 700);
})();
