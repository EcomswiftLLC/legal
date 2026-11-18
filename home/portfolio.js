(function () {
"use strict";
/* Ecom Swift LLC - /portfolio. The native Wix page holds the same copy as real text for search engines; this script draws the page.
   Facts used here come from our public Shopify listings and the Shopify Partner Directory reviews (quote.ecomswiftllc.com/reviews.json). */
if (window.__esPort) return;
var P = location.pathname.replace(/\/+$/, "").toLowerCase();
if (P !== "/portfolio") return;
window.__esPort = 1;

var BASE = "https://ecomswiftllc.github.io/legal/home/portfolio/";
var DIRECTORY = "https://www.shopify.com/partners/directory/partner/waowy";
var APP_URL = "https://apps.shopify.com/sleek-bundles-upsell";
var QUOTE = "https://quote.ecomswiftllc.com/";

var CSS = ":host{display:block;--bg:#FBFAF7;--paper:#FFFFFF;--soft:#F5F3EC;--ink:#14120E;--ink2:#3A362D;--muted:#5E584B;--line:#E7E3D9;--line2:#D6D0C1;--gold:#B8923A;--gold-ink:#7A5A12;--gold-soft:#F5EDDA;--band:#14120E;--band-2:#1D1A14;--band-fg:#F5F1E6;--band-muted:#B9B09B;--band-gold:#DDB85F;--shadow:0 30px 60px -34px rgba(20,18,14,.45);--head:'Schibsted Grotesk','Segoe UI',system-ui,sans-serif;--body:'Hanken Grotesk','Segoe UI',system-ui,sans-serif;color-scheme:light}"
+ "*{box-sizing:border-box}"
+ ".es{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased;text-align:left;padding-top:8px;overflow-x:clip}"
+ ".w{max-width:1200px;margin:0 auto;padding-inline:max(16px,env(safe-area-inset-left,0px)) max(16px,env(safe-area-inset-right,0px));padding-inline:max(20px,3.4vw)}"
+ "a{color:inherit}button{font:inherit;color:inherit}"
+ ":focus-visible{outline:2px solid var(--gold);outline-offset:3px;border-radius:6px}"
+ "h1,h2,h3,p,ul,dl,dd,figure{margin:0}ul{padding:0;list-style:none}"
+ "h1,h2,h3{font-family:var(--head);color:inherit;text-wrap:balance}"
+ ".kick{display:inline-flex;align-items:center;gap:8px;font:600 12.5px/1 var(--body);letter-spacing:.02em;color:var(--gold-ink);background:var(--gold-soft);border-radius:999px;padding:8px 13px}"
+ ".btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:12px 24px;border-radius:12px;border:1px solid var(--ink);background:var(--ink);color:#fff;font:600 15.5px/1 var(--body);text-decoration:none;cursor:pointer;transition:background .18s,transform .18s,box-shadow .18s}"
+ ".btn:hover{background:#2A261E;transform:translateY(-1px)}"
+ ".btn.ghost{background:transparent;color:var(--ink);border-color:var(--line2)}.btn.ghost:hover{background:var(--gold-soft);border-color:var(--gold)}"
+ ".btn.gold{background:var(--band-gold);border-color:var(--band-gold);color:var(--ink)}.btn.gold:hover{background:#EBC879}"
+ ".btn.line{background:transparent;color:var(--band-fg);border-color:rgba(245,241,230,.35)}.btn.line:hover{background:rgba(245,241,230,.08);border-color:var(--band-gold)}"
/* hero */
+ ".hero{padding-block:clamp(28px,4vw,56px) clamp(32px,5vw,64px)}"
+ ".hgrid{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:clamp(28px,5vw,72px);align-items:center}"
+ ".hero h1{font-weight:700;font-size:clamp(40px,6.4vw,84px);line-height:1;letter-spacing:-.045em;margin:20px 0 22px;max-width:12ch}"
+ ".hero .sub{font-size:clamp(17px,1.6vw,20px);line-height:1.6;color:var(--ink2);max-width:52ch;margin-bottom:30px}"
+ ".cta{display:flex;flex-wrap:wrap;gap:12px}"
+ ".stack{position:relative;display:grid;gap:14px;padding:6px 0 6px 18px}"
+ ".stack:before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:3px;border-radius:3px;background:linear-gradient(180deg,var(--gold),rgba(184,146,58,0))}"
+ ".stack .rv{box-shadow:var(--shadow)}"
+ ".stack .rv:nth-child(2){margin-left:clamp(0px,3vw,38px)}"
+ ".stack .rv:nth-child(3){margin-left:clamp(0px,1.2vw,14px)}"
/* review card */
+ ".rv{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:20px 22px;display:flex;flex-direction:column;gap:12px;break-inside:avoid}"
+ ".rv-top{display:flex;align-items:center;justify-content:space-between;gap:10px}"
+ ".stars{color:#8F6B1B;letter-spacing:2px;font-size:15px}"
+ ".vb{font:600 12px/1 var(--body);color:#2F6B4F;background:#E8F2EC;border-radius:999px;padding:6px 10px;white-space:nowrap}"
+ ".rv-t{font-size:16px;line-height:1.6;color:var(--ink)}"
+ ".rv-f{display:flex;flex-direction:column;gap:2px;font-size:14px;color:var(--muted)}.rv-f b{font:700 15px/1.3 var(--head);color:var(--ink);letter-spacing:-.01em}"
/* proof strip */
+ ".proof{border-block:1px solid var(--line);background:var(--paper)}"
+ ".pgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}"
+ ".pgrid>div{padding:clamp(20px,3vw,34px) clamp(14px,2vw,28px);border-left:1px solid var(--line)}.pgrid>div:first-child{border-left:0;padding-left:0}"
+ ".pgrid dt{font:700 clamp(32px,4.2vw,52px)/1 var(--head);letter-spacing:-.04em;color:var(--ink)}"
+ ".pgrid dd{margin-top:8px;color:var(--muted);font-size:14.5px;line-height:1.45;max-width:26ch}"
/* sections */
+ ".sec{padding-block:clamp(52px,8vw,108px)}"
+ ".shead{display:grid;gap:12px;margin-bottom:clamp(26px,4vw,48px);max-width:62ch}"
+ ".shead h2{font-weight:700;font-size:clamp(30px,4vw,50px);line-height:1.04;letter-spacing:-.035em}"
+ ".shead p{color:var(--muted);font-size:clamp(16px,1.4vw,18px);line-height:1.6}"
+ ".svc{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;border:1px solid var(--line2);border-radius:20px;overflow:hidden;background:var(--paper)}"
+ ".sv{display:flex;flex-direction:column;gap:10px;padding:clamp(20px,2.4vw,30px);border-left:1px solid var(--line);border-top:1px solid var(--line);text-decoration:none;color:inherit;transition:background .2s}"
+ ".sv:nth-child(-n+4){border-top:0}.sv:nth-child(4n+1){border-left:0}"
+ ".sv:hover{background:var(--gold-soft)}"
+ ".ico{width:44px;height:44px;border-radius:12px;background:var(--gold-soft);color:var(--gold-ink);display:grid;place-items:center;transition:background .2s,color .2s}"
+ ".sv:hover .ico{background:var(--ink);color:var(--band-gold)}"
+ ".sv h3{font-weight:700;font-size:20px;line-height:1.2;letter-spacing:-.02em;margin-top:6px}"
+ ".sv p{color:var(--muted);font-size:15px;line-height:1.55}"
+ ".sv .go{margin-top:auto;padding-top:8px;font-weight:600;font-size:14.5px;display:inline-flex;gap:8px;align-items:center}"
/* app band */
+ ".app{background:var(--band);color:var(--band-fg);position:relative;overflow:hidden}"
+ ".app:before{content:'';position:absolute;inset:-30% -10% auto auto;width:760px;height:760px;background:radial-gradient(closest-side,rgba(221,184,95,.16),rgba(221,184,95,0));pointer-events:none}"
+ ".agrid{position:relative;display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:clamp(30px,5vw,76px);align-items:center}"
+ ".app .kick{background:rgba(221,184,95,.14);color:var(--band-gold)}"
+ ".app h2{font-weight:700;font-size:clamp(34px,4.6vw,60px);line-height:1;letter-spacing:-.04em;margin:18px 0 16px}"
+ ".app .lead{color:#D8D1BF;font-size:clamp(17px,1.5vw,19px);line-height:1.6;max-width:50ch}"
+ ".arate{display:flex;flex-wrap:wrap;align-items:center;gap:8px 18px;margin:24px 0}"
+ ".arate b{font:700 38px/1 var(--head);letter-spacing:-.03em;color:var(--band-gold)}"
+ ".arate span{color:var(--band-muted);font-size:14.5px;line-height:1.4}"
+ ".tick{display:grid;gap:12px;margin:0 0 26px;max-width:52ch}"
+ ".tick li{display:grid;grid-template-columns:24px 1fr;gap:12px;color:#E8E2D2;font-size:16px;line-height:1.5}"
+ ".tk{width:22px;height:22px;border-radius:50%;background:rgba(221,184,95,.18);color:var(--band-gold);display:grid;place-items:center;margin-top:2px}"
+ ".types{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 28px}"
+ ".types li{font:500 13.5px/1 var(--body);color:#E8E2D2;border:1px solid rgba(245,241,230,.22);border-radius:999px;padding:8px 12px}"
+ ".shots{display:grid;gap:16px}"
+ ".shots figure{border-radius:16px;overflow:hidden;background:#F4F1EA;box-shadow:0 30px 70px -30px rgba(0,0,0,.7);border:1px solid rgba(245,241,230,.12)}"
+ ".shots img{display:block;width:100%;height:auto}"
+ ".shots figure:nth-child(2){margin-left:clamp(0px,5vw,64px)}"
/* work */
+ ".work{background:var(--soft);border-block:1px solid var(--line)}"
+ ".wgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}"
+ ".wc{display:flex;flex-direction:column;background:var(--paper);border:1px solid var(--line2);border-radius:18px;overflow:hidden;text-decoration:none;color:inherit;transition:transform .2s,box-shadow .2s,border-color .2s}"
+ ".wc:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:var(--gold)}"
+ ".wstat{background:var(--band);color:var(--band-fg);padding:24px 22px 20px;display:grid;gap:6px;min-height:150px;align-content:end}"
+ ".wstat b{font:700 clamp(38px,4.2vw,54px)/1 var(--head);letter-spacing:-.04em;color:var(--band-gold)}"
+ ".wstat span{font-size:14px;line-height:1.4;color:var(--band-muted)}"
+ ".wbody{display:flex;flex-direction:column;gap:8px;padding:20px 22px 22px;flex:1}"
+ ".wbody i{font:600 12.5px/1.2 var(--body);font-style:normal;color:var(--gold-ink)}"
+ ".wbody h3{font-weight:700;font-size:18px;line-height:1.25;letter-spacing:-.015em}"
+ ".wbody p{color:var(--muted);font-size:14.5px;line-height:1.55}"
+ ".wbody .more{margin-top:auto;padding-top:8px;font-weight:600;font-size:14.5px}"
+ ".below{margin-top:26px;display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center}"
/* reviews */
+ ".rtools{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 26px}"
+ ".chip{min-height:44px;padding:10px 18px;border-radius:999px;border:1px solid var(--line2);background:var(--paper);font:600 14.5px/1 var(--body);cursor:pointer;transition:background .15s,border-color .15s}"
+ ".chip:hover{border-color:var(--gold)}.chip[aria-pressed='true']{background:var(--ink);border-color:var(--ink);color:#fff}"
+ ".chip small{font:500 12.5px/1 var(--body);opacity:.7;margin-left:6px}"
+ ".cols{column-count:3;column-gap:16px}.cols .rv{margin:0 0 16px;display:flex}"
+ ".rmore{margin-top:14px;display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center}"
+ ".note{color:var(--muted);font-size:14px}a.note{display:inline-flex;align-items:center;min-height:44px}"
/* end */
+ ".end{background:var(--band);color:var(--band-fg)}"
+ ".egrid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(28px,5vw,72px);align-items:center}"
+ ".end h2{font-weight:700;font-size:clamp(32px,4.4vw,56px);line-height:1.04;letter-spacing:-.04em;max-width:15ch}"
+ ".end .lead{margin:18px 0 28px;color:#D8D1BF;font-size:clamp(16px,1.4vw,18px);max-width:48ch}"
+ ".steps{display:grid;gap:0;border:1px solid rgba(245,241,230,.18);border-radius:18px;overflow:hidden}"
+ ".steps li{display:grid;grid-template-columns:40px 1fr;gap:16px;padding:20px 22px;border-top:1px solid rgba(245,241,230,.14)}.steps li:first-child{border-top:0}"
+ ".num{width:34px;height:34px;border-radius:50%;background:var(--band-gold);color:var(--ink);display:grid;place-items:center;font:700 15px/1 var(--head)}"
+ ".steps b{display:block;font:700 17px/1.3 var(--head);letter-spacing:-.01em;margin-bottom:2px}"
+ ".steps div span{color:var(--band-muted);font-size:15px;line-height:1.5}"
+ ".steps li .num{color:var(--ink)}"
+ ".contact{margin-top:22px;color:var(--band-muted);font-size:14.5px}.contact a{color:var(--band-gold)}"
+ ".sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
/* responsive */
+ "@media(max-width:1020px){.svc{grid-template-columns:repeat(2,minmax(0,1fr))}.sv{border-top:1px solid var(--line)!important;border-left:1px solid var(--line)!important}.sv:nth-child(-n+2){border-top:0!important}.sv:nth-child(2n+1){border-left:0!important}.wgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.cols{column-count:2}}"
+ "@media(max-width:860px){.hgrid,.agrid,.egrid{grid-template-columns:1fr}.hero h1{max-width:12ch}.stack{padding-left:14px}.stack .rv:nth-child(n){margin-left:0}.shots figure:nth-child(2){margin-left:0}.pgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.pgrid>div{border-top:1px solid var(--line);padding-left:clamp(14px,2vw,28px)}.pgrid>div:nth-child(-n+2){border-top:0}.pgrid>div:nth-child(odd){border-left:0;padding-left:0}}"
+ "@media(max-width:600px){.svc{grid-template-columns:1fr}.sv{border-left:0!important;border-top:1px solid var(--line)!important}.sv:first-child{border-top:0!important}.wgrid{grid-template-columns:1fr}.cols{column-count:1}.cta .btn{width:100%}}"
+ "@media(prefers-reduced-motion:reduce){*{transition:none!important}}";

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function ic(d, s) { return '<svg width="' + (s || 22) + '" height="' + (s || 22) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="' + d + '"/></svg>'; }
var CHECK = "M5 12.5l4.2 4.2L19 7";
var ARROW = "M5 12h14M13 6l6 6-6 6";
var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* A few real reviews are embedded so the page stands even if the full list cannot load. */
var FEATURED = [
  { t: "Work done was very successful! Brough many of pages to 90+ on mobile (they were at ~67 previously). All work completed within the specified time frame too!", n: "Danceddiction", s: "Site performance and speed", d: "2025-04", c: 5, q: 5 },
  { t: "Did an excellent job from beginning to end. Great communication and impressive final product. They really improved my Shopify store. Well worth the investment", n: "Digital Constructive", s: "Conversion rate optimization", d: "2026-05", c: 5, q: 5 },
  { t: "Great work, amazing attention to detail, always giving updates and always open for questions, they went beyond what I paid for, I highly recommend them.", n: "NexaGear", s: "Product descriptions", d: "2026-08", c: 5, q: 5 }
];

var SERVICES = [
  ["M5 8h14l-1 12H6L5 8z M9 8V6a3 3 0 0 1 6 0v2", "Shopify", "Store builds and redesigns, themes, checkout, speed and SEO for Shopify merchants.", "/shopify"],
  ["M3 5h18v14H3z M3 9.5h18 M6.5 7.2h.01 M9.5 7.2h.01", "Wix and Wix Studio", "Websites, redesigns, SEO and custom features on Wix and Wix Studio.", "/wix"],
  ["M6 3h12v6H6z M6 9h12l-6 6-6-6z M6 15h6v6z", "Framer", "Fast, carefully designed Framer sites for brands, studios and creators.", "/framer"],
  ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z", "AI for business", "Agents, chatbots and workflow automation that take repeat work off your team.", "/ai-for-ecommerce"],
  ["M3 17l6-6 4 4 8-8 M15 7h6v6", "Marketing and SEO", "Technical and on-page SEO, email and SMS, paid ads and tracking you can trust.", "/ecommerce-seo"],
  ["M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z", "More platforms", "WordPress, WooCommerce, Webflow, Squarespace, BigCommerce, Magento, Drupal and PrestaShop.", "/wordpress"],
  ["M3 9l2-5h14l2 5 M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z M5 14v6h14v-6", "Marketplaces", "Amazon, eBay, Etsy and Walmart listings, ads and day-to-day management.", "/amazon-management"],
  ["M8 8l-4 4 4 4 M16 8l4 4-4 4 M13.5 5l-3 14", "Custom development", "Integrations, APIs and custom builds for when an off-the-shelf tool will not do.", "/custom-development"]
];

var WORK = [
  ["-34%", "homepage weight, measured on the live store", "Shopify speed optimisation", "Half of this store's homepage was one app. We cut page weight by a third.", "A parts retailer's pages took almost 20 seconds to become usable on a phone. We shipped the fastest option inside a 24-hour rush window.", "/case-studies/shopify-speed-page-weight-cut-34-percent"],
  ["0", "owner settings overwritten", "Shopify theme updates", "Two theme upgrades in one day without losing a single customisation", "A heavily customised theme was one release behind, then a new major version dropped. We merged both, file by file.", "/case-studies/shopify-theme-upgrade-keeping-customisations"],
  ["1 item", "added per tap, even when the theme script loads late", "Shopify bug fix", "Shoppers from Facebook and Instagram ads were adding items twice", "The cart doubled, but only for visitors from Meta ads. We found the cause in how the theme delivers its JavaScript.", "/case-studies/shopify-meta-ads-add-to-cart-bug"],
  ["0", "failures across 3,204 changes", "Shopify catalogue and CRO", "6,751 products to a focused 3,547, with nothing deleted", "A dropshipping store had grown to 58 suppliers. We moved 3,204 products to Draft in a way the owner could undo with one click.", "/case-studies/shopify-catalogue-cut-6751-to-3547-products"]
];

var TYPES = ["Quantity breaks", "Mix and match", "Frequently bought together", "Buy X get Y (BOGO)", "Fixed classic kit", "Configurable variants kit", "Variants bundle", "Product add-ons", "Cart add-on upsell"];

var GROUPS = [
  ["all", "All reviews", function () { return true; }],
  ["seo", "SEO", function (r) { return r.s === "SEO"; }],
  ["speed", "Site speed", function (r) { return r.s === "Site performance and speed"; }],
  ["build", "Store build and redesign", function (r) { return /Store build|Theme|Store migration|Product and collection|Store settings|Custom domain/.test(r.s); }],
  ["cro", "Conversion and analytics", function (r) { return /Conversion|Analytics|audit/i.test(r.s); }],
  ["other", "Content and support", function (r) { return /Product descriptions|Content|Website and marketing|Troubleshooting|Shopify service/.test(r.s); }]
];

var ALL = FEATURED.slice();
var filter = "all", shown = 9, R = null, host = null;

function stars(r) { var a = Math.max(1, Math.min(5, Math.round((r.c + r.q) / 2))); return '<span class="stars" role="img" aria-label="Rated ' + a + ' out of 5">' + "★★★★★".slice(0, a) + "☆☆☆☆☆".slice(0, 5 - a) + "</span>"; }
function card(r) {
  var d = String(r.d).split("-");
  return '<article class="rv"><div class="rv-top">' + stars(r) + '<span class="vb">Verified by Shopify</span></div><p class="rv-t">' + esc(r.t) + '</p><div class="rv-f"><b>' + esc(r.n) + "</b><span>" + esc(r.s) + " · " + MON[(+d[1] || 1) - 1] + " " + d[0] + "</span></div></article>";
}
function groupFn(k) { for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i][0] === k) return GROUPS[i][2]; return GROUPS[0][2]; }

function reviewsHTML() {
  var fn = groupFn(filter), list = ALL.filter(fn);
  var out = '<div class="cols">' + list.slice(0, shown).map(card).join("") + "</div>";
  return { html: out, total: list.length, more: list.length > shown };
}
function chips() {
  return GROUPS.map(function (g) {
    var n = ALL.filter(g[2]).length;
    return '<button type="button" class="chip" data-f="' + g[0] + '" aria-pressed="' + (g[0] === filter) + '">' + esc(g[1]) + "<small>" + n + "</small></button>";
  }).join("");
}
function drawReviews() {
  if (!R) return;
  var box = R.getElementById("rbox"), ch = R.getElementById("rchips"), mo = R.getElementById("rmore"), cnt = R.getElementById("rcount");
  var v = reviewsHTML();
  box.innerHTML = v.html; ch.innerHTML = chips();
  cnt.textContent = "Showing " + Math.min(shown, v.total) + " of " + v.total;
  mo.hidden = !v.more;
}

function build() {
  var h = '<div class="es"><main id="main">';
  /* hero */
  h += '<section class="w hero"><div class="hgrid"><div><p class="kick">Portfolio</p><h1>Built to sell. Proven by 380+ client reviews.</h1>';
  h += '<p class="sub">We build, fix and grow Shopify, Wix and Framer stores and sites, with the AI and marketing around them. Here is what we do, the app we ship, and what our clients say.</p>';
  h += '<div class="cta"><a class="btn" href="' + QUOTE + '">Request a quote ' + ic(ARROW, 18) + '</a><a class="btn ghost" href="#reviews">Read client reviews</a></div></div>';
  h += '<div class="stack" aria-label="Recent client reviews">' + FEATURED.map(card).join("") + "</div></div></section>";
  /* proof */
  h += '<section class="proof" aria-label="At a glance"><div class="w"><dl class="pgrid">';
  h += "<div><dt>380+</dt><dd>client reviews on our Shopify Partner Directory profile</dd></div>";
  h += "<div><dt>4.9</dt><dd>average rating across 297 written reviews</dd></div>";
  h += "<div><dt>4.9</dt><dd>rating for the Sleek Bundles App on the Shopify App Store</dd></div>";
  h += "<div><dt>1</dt><dd>fixed price, in writing, before you pay anything</dd></div></dl></div></section>";
  /* services */
  h += '<section class="sec" id="services" aria-labelledby="t-s"><div class="w"><div class="shead"><h2 id="t-s">What we build and run</h2><p>One team for the store, the site, the automation and the marketing around it. Pick a platform to see the full service.</p></div><div class="svc">';
  SERVICES.forEach(function (s) { h += '<a class="sv" href="' + esc(s[3]) + '"><span class="ico">' + ic(s[0], 22) + "</span><h3>" + esc(s[1]) + "</h3><p>" + esc(s[2]) + '</p><span class="go">Explore ' + ic(ARROW, 16) + "</span></a>"; });
  h += "</div></div></section>";
  /* app */
  h += '<section class="sec app" id="app" aria-labelledby="t-a"><div class="w agrid"><div><p class="kick">Our Shopify app</p><h2 id="t-a">Sleek Bundles App</h2>';
  h += '<p class="lead">Create product bundles, multipacks, gifts and cart upsells, with the discount applied at checkout. Built by us, listed on the Shopify App Store.</p>';
  h += '<div class="arate"><b>4.9</b><span>10 reviews on the<br>Shopify App Store</span><span>Free to install</span></div>';
  h += '<ul class="tick">';
  ["Widgets sit on your product pages and in the cart drawer, and use your theme's own Add to cart.", "Discounts apply at checkout through Shopify Functions, with no codes.", "Edit each bundle next to a live preview, then check your setup in the Installation Guide."].forEach(function (t) { h += '<li><span class="tk">' + ic(CHECK, 14) + "</span><span>" + esc(t) + "</span></li>"; });
  h += '</ul><ul class="types" aria-label="Nine bundle types">' + TYPES.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  h += '<div class="cta"><a class="btn gold" href="' + APP_URL + '" rel="noopener">View on the Shopify App Store ' + ic(ARROW, 18) + '</a><a class="btn line" href="' + QUOTE + '">Ask us to set it up</a></div></div>';
  h += '<div class="shots"><figure><img src="' + BASE + 'sb-tiers.webp" alt="Sleek Bundles App: choose perks for each bundle tier in the editor, and how the tiers look to shoppers on a product page." width="1400" height="787" loading="lazy"></figure>';
  h += '<figure><img src="' + BASE + 'sb-gifts.webp" alt="Sleek Bundles App: set a free gift for each bundle tier, and the Select your bundle widget shoppers see." width="1400" height="787" loading="lazy"></figure></div></div></section>';
  /* work */
  h += '<section class="sec work" id="work" aria-labelledby="t-w"><div class="w"><div class="shead"><h2 id="t-w">Selected client work</h2><p>Real problems from client stores, with the measured result. Client details are always withheld.</p></div><div class="wgrid">';
  WORK.forEach(function (c) { h += '<a class="wc" href="' + esc(c[5]) + '"><div class="wstat"><b>' + esc(c[0]) + "</b><span>" + esc(c[1]) + '</span></div><div class="wbody"><i>' + esc(c[2]) + "</i><h3>" + esc(c[3]) + "</h3><p>" + esc(c[4]) + '</p><span class="more">Read the case study</span></div></a>'; });
  h += '</div><div class="below"><a class="btn ghost" href="/case-studies">All case studies</a></div></div></section>';
  /* reviews */
  h += '<section class="sec" id="reviews" aria-labelledby="t-r"><div class="w"><div class="shead"><h2 id="t-r">What clients say</h2><p>Written reviews from our Shopify Partner Directory profile, verified by Shopify.</p></div>';
  h += '<div class="rtools" id="rchips" role="group" aria-label="Filter reviews by service"></div><div id="rbox" aria-live="polite"></div>';
  h += '<div class="rmore"><button type="button" class="btn ghost" id="rmore" hidden>Show more reviews</button><span class="note" id="rcount"></span><a class="note" href="' + DIRECTORY + '" rel="noopener">Read all reviews on Shopify</a></div></div></section>';
  /* end */
  h += '<section class="sec end" aria-labelledby="t-e"><div class="w egrid"><div><h2 id="t-e">Tell us what you need.</h2><p class="lead">We reply by email with a plan, the exact scope and a fixed price. Free store audit available.</p><div class="cta"><a class="btn gold" href="' + QUOTE + '">Request a quote ' + ic(ARROW, 18) + '</a><a class="btn line" href="/contact">Contact us</a></div><p class="contact">Prefer to write? <a href="mailto:support@ecomswiftllc.com">support@ecomswiftllc.com</a></p></div>';
  h += '<ol class="steps" style="list-style:none;margin:0;padding:0"><li><span class="num">1</span><div><b>You send the request</b><span>Takes about a minute. You are copied on the email.</span></div></li><li><span class="num">2</span><div><b>We reply with a plan and price</b><span>By email, in the same thread, with the exact scope.</span></div></li><li><span class="num">3</span><div><b>We start once you approve</b><span>Work begins after the invoice is paid and access is shared.</span></div></li></ol></div></section>';
  return h + "</main></div>";
}

function ld() {
  var old = document.getElementById("es-port-ld"); if (old) old.remove();
  var s = document.createElement("script"); s.type = "application/ld+json"; s.id = "es-port-ld";
  s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ecomswiftllc.com/" }, { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.ecomswiftllc.com/portfolio" }] },
    { "@type": "CollectionPage", "@id": "https://www.ecomswiftllc.com/portfolio", "name": "Portfolio | Ecom Swift LLC", "url": "https://www.ecomswiftllc.com/portfolio", "isPartOf": { "@type": "WebSite", "name": "Ecom Swift LLC", "url": "https://www.ecomswiftllc.com/" } }
  ] });
  document.head.appendChild(s);
}

function bind() {
  R.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("button,a") : null; if (!t) return;
    if (t.getAttribute("data-f")) { filter = t.getAttribute("data-f"); shown = 9; drawReviews(); return; }
    if (t.id === "rmore") { shown += 9; drawReviews(); return; }
    var href = t.getAttribute && t.getAttribute("href");
    if (href === "#reviews") { e.preventDefault(); var el = R.getElementById("reviews"); if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
}

function takeover() {
  var sp = document.querySelector("#SITE_PAGES") || document.querySelector("#PAGES_CONTAINER") || document.querySelector("main");
  if (!sp) return false;
  [].forEach.call(sp.children, function (c) {
    if (c === host) return;
    c.style.setProperty("position", "absolute", "important"); c.style.setProperty("width", "1px", "important"); c.style.setProperty("height", "1px", "important");
    c.style.setProperty("overflow", "hidden", "important"); c.style.setProperty("clip", "rect(0 0 0 0)", "important"); c.style.setProperty("opacity", "0", "important");
    c.setAttribute("aria-hidden", "true"); c.setAttribute("tabindex", "-1");
  });
  if (!host) {
    host = document.createElement("div"); host.id = "es-doc-host";
    R = host.attachShadow({ mode: "open" });
    R.innerHTML = "<style>" + CSS + "</style>" + build();
    bind(); drawReviews();
    loadReviews();
  }
  if (!host.isConnected) sp.appendChild(host);
  return true;
}
function loadReviews() {
  try {
    fetch(BASE + "reviews.json").then(function (r) { return r.json(); }).then(function (list) {
      var clean = list.filter(function (x) { return x && x.t && x.n && String(x.t).indexOf("�") < 0; });
      if (clean.length) { ALL = clean; drawReviews(); }
    }).catch(function () { /* the embedded reviews stay */ });
  } catch (e) { /* ignore */ }
}
var HIDE = "html.es-proc-page #SITE_PAGES>*:not(#es-doc-host){position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;opacity:0!important;pointer-events:none!important}";
function ensureAssets() {
  if (!document.getElementById("es-doc-hide")) { var hs = document.createElement("style"); hs.id = "es-doc-hide"; hs.textContent = HIDE; document.head.appendChild(hs); }
  if (!document.getElementById("es-font")) { var l = document.createElement("link"); l.id = "es-font"; l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap"; document.head.appendChild(l); }
  if (!document.getElementById("es-proc-font")) { var f = document.createElement("link"); f.id = "es-proc-font"; f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap"; document.head.appendChild(f); }
}
var done = false;
function ready() {
  ensureAssets();
  if (!takeover()) return false;
  document.documentElement.classList.add("es-proc-page");
  var pe = document.getElementById("es-pre"); if (pe) pe.remove();
  if (!done) { done = true; ld(); }
  return true;
}
var tries = 0;
function go() { if (ready()) return; if (++tries < 60) setTimeout(go, 150); }
function again() {
  if (!host) return;
  if (!document.documentElement.classList.contains("es-proc-page")) document.documentElement.classList.add("es-proc-page");
  var sp = document.querySelector("#SITE_PAGES") || document.querySelector("#PAGES_CONTAINER") || document.querySelector("main");
  if (!sp) return;
  if (!host.isConnected) sp.appendChild(host);
  [].forEach.call(sp.children, function (c) { if (c !== host && c.getAttribute("aria-hidden") !== "true") takeover(); });
}
try { new MutationObserver(again).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { /* keep the native page usable */ }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
