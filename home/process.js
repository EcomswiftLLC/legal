(function () {
"use strict";
/* Ecom Swift LLC - /process ("How to order"). The native Wix page holds the same copy as real text for search engines; this script draws the page with a live service picker. */
if (window.__esProc) return;
var P = location.pathname.replace(/\/+$/, "");
if (P !== "/process") return;
window.__esProc = 1;
var BASE = "https://ecomswiftllc.github.io/legal/home/";
var VER = "2";
var CSS = ":host{display:block;--bg:#FBFAF7;--paper:#FFFFFF;--soft:#F8F7F4;--ink:#14120E;--ink2:#3A362D;--muted:#5E584B;--line:#E7E3D9;--line2:#D6D0C1;--gold:#B8923A;--gold-ink:#7A5A12;--gold-soft:#F5EDDA;--ok:#2F6B4F;--band:#14120E;--band-fg:#F5F1E6;--band-muted:#B9B09B;--band-gold:#DDB85F;--shadow:0 18px 40px -26px rgba(20,18,14,.35);--head:\"Schibsted Grotesk\",\"Segoe UI\",system-ui,sans-serif;--body:\"Hanken Grotesk\",\"Segoe UI\",system-ui,sans-serif;color-scheme:light}\n*{box-sizing:border-box}\n.es{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased;padding:84px max(16px,env(safe-area-inset-right,0px)) 56px max(16px,env(safe-area-inset-left,0px));text-align:left}\n.wrap{max-width:1160px;margin:0 auto}\n.frame{background:var(--paper);border:1px solid var(--line2);border-radius:16px;overflow:hidden;container-type:inline-size;container-name:pg;box-shadow:0 24px 50px -36px rgba(20,18,14,.4)}\nbutton,a,input{font:inherit}\na{color:inherit}\n:focus-visible{outline:2px solid var(--gold);outline-offset:2px}\n.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.in{padding-inline:clamp(16px,4.5cqi,48px)}\n.sec{padding-block:clamp(26px,4.6cqi,46px)}\n.sec+.sec{border-top:1px solid var(--line)}\nh1,h2,h3{margin:0;color:var(--ink);text-wrap:balance}\nh2{font:700 clamp(22px,3.2cqi,30px)/1.15 var(--head);margin:0 0 6px;letter-spacing:-.02em}\n.lead{color:var(--muted);margin:0;max-width:62ch;font-size:15px}\n.head{display:grid;gap:4px;margin-bottom:18px}\n.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:10px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);padding:10px 20px;font-weight:600;font-size:14.5px;min-height:44px;text-decoration:none;cursor:pointer}\n.btn:hover{background:#2A261E}\n.btn.ghost{background:var(--paper);color:var(--ink);border-color:var(--line2)}\n.btn.ghost:hover{border-color:var(--gold);background:var(--gold-soft)}\n.btn.sm{padding:7px 14px;font-size:13.5px;min-height:38px}\n.cta{display:flex;flex-wrap:wrap;gap:10px}\n.hero{padding-block:clamp(24px,4.4cqi,46px);display:grid;grid-template-columns:.78fr 1.22fr;gap:clamp(20px,4cqi,48px);align-items:start}\n.hero h1{font:700 clamp(30px,4cqi,40px)/1.08 var(--head);margin:0;letter-spacing:-.03em}\n.hero .sub{color:var(--muted);margin:10px 0 0;max-width:46ch}\n.stepsh{display:inline-flex;font:600 12.5px/1 var(--body);letter-spacing:0;color:var(--gold-ink);background:var(--gold-soft);border-radius:999px;padding:6px 11px;margin:24px 0 0}\n.os{list-style:none;margin:14px 0 0;padding:0;display:grid;gap:14px;counter-reset:o}\n.os li{display:grid;grid-template-columns:30px 1fr;gap:0 12px;align-items:start}\n.os li::before{counter-increment:o;content:counter(o);grid-row:1/3;width:30px;height:30px;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font:700 13.5px var(--head)}\n.os h3{font:600 15.5px/1.3 var(--head)}\n.os p{margin:0;color:var(--muted);font-size:13.5px}\n.trust{display:flex;flex-wrap:wrap;gap:6px 14px;margin:20px 0 0;padding:14px 0 0;border-top:1px solid var(--line);list-style:none;font-size:13px;color:var(--ink2);font-weight:500}\n.trust li{display:flex;gap:6px;align-items:center}\n.trust svg{color:var(--ok);flex:none}\n@container pg (max-width:860px){.hero{grid-template-columns:1fr}.hero .picker{order:-1}}\n.picker{border:1px solid var(--line2);background:var(--paper);border-radius:16px;box-shadow:var(--shadow);padding:16px;display:grid;gap:12px}\n.picker h2{font-size:18px;margin:0}\n.search{position:relative}\n.search svg{position:absolute;left:13px;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none}\n.search input{width:100%;min-height:48px;border:1px solid var(--line2);border-radius:12px;background:var(--soft);color:var(--ink);padding:10px 14px 10px 40px;font-size:15.5px;-webkit-appearance:none;appearance:none}\n.search input::placeholder{color:#7A7364}\n.search input:focus-visible{outline:2px solid var(--gold);outline-offset:1px;border-color:var(--gold);background:var(--paper)}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n@container pg (max-width:520px){.chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin-inline:-16px;padding-inline:16px}.chips::-webkit-scrollbar{display:none}}\n.chips button{flex:none;border:1px solid var(--line2);background:var(--paper);color:var(--ink2);border-radius:999px;padding:6px 12px;font-weight:600;font-size:13px;min-height:36px;cursor:pointer;white-space:nowrap}\n.chips button[aria-pressed=\"true\"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}\n.count{margin:0;font-size:12.5px;color:var(--muted)}\n.res{list-style:none;margin:0;padding:0;display:grid;border:1px solid var(--line);border-radius:12px;overflow:hidden}\n.res li{display:grid;grid-template-columns:36px 1fr auto auto;gap:12px;align-items:center;padding:11px 12px;border-top:1px solid var(--line);background:var(--paper)}\n.res li:first-child{border-top:0}\n.res li:hover{background:var(--soft)}\n.gi{width:36px;height:36px;border-radius:10px;background:var(--gold-soft);color:var(--gold-ink);display:grid;place-items:center}\n.res .nm{min-width:0}\n.res .nm b{display:block;font:600 14.5px/1.3 var(--head);overflow-wrap:anywhere}\n.res .nm span{font-size:12.5px;color:var(--muted)}\n.res .pr{text-align:right;line-height:1.25}\n.res .pr b{display:block;font:700 15px var(--head);font-variant-numeric:tabular-nums}\n.res .pr span{font-size:12px;color:var(--muted)}\n.more{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;justify-content:space-between}\n.more .lnk{background:none;border:0;color:var(--gold-ink);font-weight:600;font-size:13.5px;padding:8px 0;min-height:40px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.empty{border:1px dashed var(--line2);border-radius:12px;padding:18px;text-align:center;color:var(--muted);font-size:14px;width:100%}\n.empty b{display:block;color:var(--ink);margin-bottom:4px}\n.empty .btn{margin-top:12px}\n@container pg (max-width:520px){.res li{grid-template-columns:1fr auto;grid-template-areas:\"n p\" \"n b\";gap:4px 12px}.res .gi{display:none}.res .nm{grid-area:n}.res .pr{grid-area:p}.res .btn{grid-area:b;justify-self:end}}\n.flow{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}\n.flow li{border:1px solid var(--line);border-radius:12px;padding:14px;background:var(--paper);display:grid;gap:5px;align-content:start}\n.flow .t{font-size:12px;font-weight:700;color:var(--gold-ink)}\n.flow h3{font:600 15.5px/1.25 var(--head)}\n.flow p{margin:0;font-size:13.5px;color:var(--muted)}\n@container pg (max-width:860px){.flow{grid-template-columns:1fr 1fr}}\n@container pg (max-width:520px){.flow{grid-template-columns:1fr;gap:8px}}\n.tabs{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;margin-bottom:14px;scrollbar-width:thin}\n.tabs button{flex:none;border:1px solid var(--line2);background:var(--paper);color:var(--ink2);border-radius:10px;padding:8px 14px;font-weight:600;font-size:13.5px;min-height:40px;cursor:pointer;white-space:nowrap}\n.tabs button[aria-selected=\"true\"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}\n.panel{border:1px solid var(--line);border-radius:14px;background:var(--soft);padding:18px;display:grid;gap:14px}\n.panel .top{display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center;justify-content:space-between}\n.panel .ex{margin:0;font-size:13.5px;color:var(--muted);max-width:70ch}\n.panel .ex b{color:var(--ink);font-weight:600}\n.cells{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}\n.cell{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:13px 14px}\n.cell h4{margin:0 0 6px;font:700 12px var(--head);letter-spacing:.05em;text-transform:uppercase;color:var(--gold-ink)}\n.cell p{margin:0;font-size:13.5px;line-height:1.5;color:var(--ink2)}\n@container pg (max-width:980px){.cells{grid-template-columns:1fr 1fr}}\n@container pg (max-width:520px){.cells{grid-template-columns:1fr}}\n.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n@container pg (max-width:760px){.two{grid-template-columns:1fr}}\n.box{border:1px solid var(--line);border-radius:14px;padding:18px;background:var(--paper)}\n.box h2{font:700 17px/1.2 var(--head);margin:0 0 12px;letter-spacing:-.015em}\n.list{list-style:none;margin:0;padding:0;display:grid;gap:10px}\n.list li{display:grid;grid-template-columns:20px 1fr;gap:10px;font-size:14px;color:var(--ink2)}\n.list svg{margin-top:2px;color:var(--ok)}\n.pk{display:grid;gap:8px}\n.pk .r{display:grid;grid-template-columns:74px 1fr 78px;gap:10px;align-items:center;font-size:13.5px}\n.pk .r b{font-weight:600}\n.pk .bar2{height:10px;border-radius:5px;background:var(--line);position:relative;overflow:hidden}\n.pk .bar2 i{position:absolute;inset:0 auto 0 0;background:var(--gold);border-radius:5px}\n.pk .bar2 i.rush{background:repeating-linear-gradient(135deg,var(--gold) 0 4px,transparent 4px 7px);outline:1px dashed var(--gold);outline-offset:-1px}\n.pk .r span{text-align:right;color:var(--muted)}\n.box .fine{margin:12px 0 0;font-size:13px;color:var(--muted)}\n.box .fine a{color:var(--gold-ink);font-weight:600;text-decoration:underline;text-underline-offset:2px}\ndetails{border-top:1px solid var(--line)}\ndetails:last-of-type{border-bottom:1px solid var(--line)}\nsummary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:13px 0;min-height:44px}\nsummary::-webkit-details-marker{display:none}\nsummary h3{font:600 15px/1.35 var(--head)}\nsummary::after{content:\"+\";color:var(--gold-ink);font-size:20px;font-weight:500;line-height:1;flex:none}\ndetails[open] summary::after{content:\"\\2212\"}\ndetails p{margin:0 0 14px;color:var(--muted);max-width:66ch;font-size:14.5px}\n.end{background:var(--band);color:var(--band-fg)}\n.end .row2{display:flex;flex-wrap:wrap;gap:14px 28px;align-items:center;justify-content:space-between}\n.end h2{color:var(--band-fg);margin:0}\n.end p{margin:4px 0 0;color:var(--band-muted);font-size:14.5px}\n.end .btn{background:var(--band-gold);border-color:var(--band-gold);color:#14120E}\n.end .btn.ghost{background:transparent;color:var(--band-fg);border-color:#4A4334}\n.end .btn.ghost:hover{border-color:var(--band-gold)}\n@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}\n";
var TYPES = [["Websites and stores", "Shopify, Wix, WordPress, WooCommerce, BigCommerce, Magento, Webflow, Framer, Squarespace and migrations.", "Your store or site link, brand assets and what you want built or changed.", "A collaborator code on Shopify, or a collaborator invite on other platforms.", "On an unpublished copy inside your own store or site. You review it through a private preview link.", "A live, tested store or site and a short handover note."], ["Apps", "iOS, Android, Flutter, React Native, browser extensions, Shopify, Wix and WooCommerce apps.", "What the app should do, design references and your listing link if it exists.", "Developer account invites (Apple, Google Play) only when we publish for you.", "Test builds you can install and try: TestFlight, Play internal testing or an extension file.", "The finished app, store submission support and the source code."], ["SaaS", "MVPs, web apps, dashboards, user accounts, subscription billing, API integrations, hosting and CRM.", "A product brief, the main user flows and your repository if you already have one.", "Invites to your repository and hosting. Keys and secrets stay in your accounts.", "A staging site with a test login that updates as we build, so you can use it before launch.", "A deployed product, the source code and setup notes."], ["AI", "AI agents, chatbots, workflows, integrations, audits and training, and AI for ecommerce.", "The task to automate, sample questions or data, and the tools it should connect to.", "Your own AI, workspace or API accounts. You create the keys, we never ask for them in chat.", "A working prototype tested on your real examples before it goes live.", "A live agent or workflow, its prompts and docs, and a short walkthrough."], ["Marketing", "SEO, paid ads, email and SMS, social media, lead funnels, conversion optimization and analytics.", "Your goals, primary market, main competitors and top products or pages.", "Viewer or manager access to Analytics, Search Console or ad accounts, by invite.", "Audit, plan and setup. No ad spend and no live page changes before you approve the plan.", "Live changes or campaigns, and a report with clear next steps."], ["Marketplaces", "Amazon, eBay and Etsy management, product and marketplace listings, and order management.", "Your seller account link, product details and the marketplace you sell on.", "An invite as a user with limited permissions. We never ask for your login.", "Listing and account changes are drafted for you to approve before they are published.", "Published listings and a change log you can keep."]];
var DATA = null, root = null, host = null, R = null;
var st = { q: "", cat: -1, limit: 6 };
var POP = { all: ["shopify-store-development", "ios-app-build", "mvp-build", "website-chatbot", "ecommerce-seo-audit", "amazon-account-setup"],
  0: ["shopify-store-development", "wix-website-build", "wordpress-site-build", "woocommerce-store-build"],
  1: ["ios-app-build", "android-app-build", "shopify-app-build", "browser-extension-build"],
  2: ["mvp-build", "custom-web-apps", "web-app-internal-tools", "mvp-product-scoping"],
  3: ["website-chatbot", "ai-agent-planning", "ai-opportunity-audit", "ai-support-instant-answers"],
  4: ["ecommerce-seo-audit", "email-sms-welcome-flows", "analytics-setup", "cro-conversion-audit"],
  5: ["amazon-account-setup", "amazon-listing-optimization", "etsy-shop-setup", "ebay-account-setup"] };
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function ic(p, w) { return '<svg width="' + (w || 18) + '" height="' + (w || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; }
var CHECK = '<path d="M5 12.5l4.5 4.5L19 7.5"/>';
var GI = [
  ic('<path d="M3 9l2-5h14l2 5"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/>'),
  ic('<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>'),
  ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'),
  ic('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M18 16l.7 1.8 1.8.7-1.8.7L18 21l-.7-1.8-1.8-.7 1.8-.7L18 16z"/>'),
  ic('<path d="M4 17l5-5 4 4 7-8"/><path d="M15 8h5v5"/>'),
  ic('<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 016 0"/>')
];
var FAQ = [
  ["What happens right after I pay?", "Our team contacts you within 1-3 hours. We confirm what you need, ask for anything missing and send the access request."],
  ["Do I need to share my password?", "No. We ask for collaborator access, an invite or an access code, and you can remove it at any time."],
  ["How many changes can I ask for?", "Basic includes 2 revision rounds, Standard 4 and Premium 6."],
  ["Can I get it faster, or is my project bigger than a package?", "Add rush delivery on the service page to cut the delivery time roughly in half. For bigger or ongoing work, request a quote and we will scope it with you."]
];

function build() {
  var h = '<div class="es"><div class="wrap"><div class="frame">';
  h += '<main>';
  h += '<section class="in hero" id="order"><div class="copy">';
  h += '<h1>Find your service and order in minutes</h1>';
  h += '<p class="sub">Websites, apps, SaaS, AI, marketing and marketplace management. Every service has a fixed price and a fixed delivery date.</p>';
  h += '<h2 class="stepsh">Order in three steps</h2><ol class="os">' + [["Pick a service and a package", "Basic, Standard or Premium, with optional extras."], ["Provide the requirements", "Your link, email and, if needed, a collaborator code."], ["Pay securely", "Our team contacts you within 1-3 hours to start."]].map(function (x) { return "<li><h3>" + x[0] + "</h3><p>" + x[1] + "</p></li>"; }).join("") + "</ol>";
  h += '<ul class="trust">' + ["Fixed price", "Delivered in 3, 5 or 7 days", "No passwords shared"].map(function (x) { return "<li>" + ic(CHECK, 15) + x + "</li>"; }).join("") + "</ul></div>";
  h += '<div class="picker" role="search" aria-label="Find your service"><h2>Find your service</h2>';
  h += '<div class="search">' + ic('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>') + '<input type="search" id="q" autocomplete="off" placeholder="Search, e.g. chatbot or Shopify" aria-label="Search services"></div>';
  h += '<div class="chips" id="chips" role="group" aria-label="Service type"></div><p class="count" id="count" aria-live="polite"></p><ul class="res" id="res"></ul><div class="more" id="more"></div></div></section>';

  h += '<section class="sec in" aria-labelledby="h-flow"><div class="head"><h2 id="h-flow">What happens after you order</h2><p class="lead">You are only needed to answer our questions and to review the work.</p></div><ol class="flow">';
  h += [["Within 1-3 hours", "We contact you", "We confirm the scope, request access and set your delivery date."], ["Days 1 to 7", "We build", "Work happens in your own accounts. You get a private preview or test link."], ["Before launch", "You review", "Send your changes. Every package includes revision rounds."], ["On your approval", "Launch and handover", "We publish, hand everything over and remove access when you ask."]].map(function (x) { return '<li><span class="t">' + x[0] + "</span><h3>" + x[1] + "</h3><p>" + x[2] + "</p></li>"; }).join("");
  h += "</ol></section>";

  h += '<section class="sec in" aria-labelledby="h-type"><div class="head"><h2 id="h-type">What it looks like for your service</h2><p class="lead">The steps stay the same. What you provide and what you receive depends on what you order.</p></div><div class="tabs" role="tablist" aria-label="Service type" id="tabs"></div><div class="panel" role="tabpanel" id="panel" aria-live="polite"></div></section>';

  h += '<section class="sec in"><div class="two"><div class="box"><h2>Your accounts stay yours</h2><ul class="list">';
  h += ["We work through collaborator access, an invite or a code. Never a password.", "You approve every access request from your own settings.", "Nothing goes live, and no ad spend starts, until you approve it.", "When we finish, we remove our access whenever you ask."].map(function (x) { return "<li>" + ic(CHECK) + "<span>" + x + "</span></li>"; }).join("");
  h += '</ul></div><div class="box"><h2>Delivery and revisions</h2><div class="pk" role="img" aria-label="Basic: 3 days, 2 revisions. Standard: 5 days, 4 revisions. Premium: 7 days, 6 revisions. Rush delivery takes about half the time.">';
  h += [["Basic", "43%", "3 days", ""], ["Standard", "71%", "5 days", ""], ["Premium", "100%", "7 days", ""], ["Rush", "50%", "half the time", " rush"]].map(function (x) { return '<div class="r"><b>' + x[0] + '</b><div class="bar2"><i class="' + x[3].trim() + '" style="width:' + x[1] + '"></i></div><span>' + x[2] + "</span></div>"; }).join("");
  h += '</div><p class="fine">Revision rounds: 2 on Basic, 4 on Standard, 6 on Premium. Bigger or ongoing work, such as a full SaaS build? <a href="/contact">Request a quote</a>.</p></div></div></section>';

  h += '<section class="sec in" aria-labelledby="h-faq"><div class="head"><h2 id="h-faq">Questions before you order</h2></div>';
  h += FAQ.map(function (f) { return "<details><summary><h3>" + esc(f[0]) + "</h3></summary><p>" + esc(f[1]) + "</p></details>"; }).join("");
  h += "</section>";

  h += '<section class="sec in end"><div class="row2"><div><h2>Not sure what you need?</h2><p>Tell us the goal and we will point you to the right service, or send a quote.</p></div><div class="cta"><a class="btn" href="#order" id="again">Find your service</a><a class="btn ghost" href="/contact">Request a quote</a></div></div></section>';
  h += "</main></div></div></div>";
  return h;
}

/* ---- picker ---- */
function list() {
  var NAMES = DATA.names, IDX = DATA.idx, BY = DATA.by;
  var terms = st.q.toLowerCase().split(/\s+/).filter(Boolean), out;
  if (terms.length) {
    out = IDX.filter(function (r) { if (st.cat >= 0 && r[3] !== st.cat) return false; var hay = (r[1] + " " + r[2] + " " + NAMES[r[3]]).toLowerCase(); return terms.every(function (t) { return hay.indexOf(t) > -1; }); });
    out.sort(function (a, b) { var sa = a[1].toLowerCase().indexOf(terms[0]) === 0 ? 0 : 1, sb = b[1].toLowerCase().indexOf(terms[0]) === 0 ? 0 : 1; return sa - sb; });
    return { rows: out, total: out.length, label: "results" };
  }
  if (st.cat < 0) { out = POP.all.map(function (s) { return BY[s]; }).filter(Boolean); return { rows: out, total: IDX.length, label: "popular" }; }
  var pop = POP[st.cat].map(function (s) { return BY[s]; }).filter(Boolean);
  var rest = IDX.filter(function (r) { return r[3] === st.cat && POP[st.cat].indexOf(r[0]) < 0; });
  out = pop.concat(rest);
  return { rows: out, total: out.length, label: "cat" };
}
function render() {
  var $ = function (id) { return R.getElementById(id); };
  var res = $("res"), more = $("more"), count = $("count");
  if (!DATA) { count.textContent = "Loading services"; return; }
  var NAMES = DATA.names;
  var L = list(), rows = L.rows.slice(0, st.limit);
  if (!rows.length) {
    count.textContent = "No services match";
    res.innerHTML = ""; res.hidden = true;
    more.innerHTML = '<div class="empty"><b>No service matches "' + esc(st.q) + '"</b>Try a shorter word, or tell us what you need and we will quote it.<br><a class="btn sm" href="/contact">Request a quote</a></div>';
    return;
  }
  res.hidden = false;
  count.textContent = L.label === "popular" ? "Popular services. Choose a type or search all " + L.total + "." : "Showing " + rows.length + " of " + L.total + (L.label === "cat" ? " " + NAMES[st.cat] + " services" : " results");
  res.innerHTML = rows.map(function (r) {
    return '<li><span class="gi">' + GI[r[3]] + '</span><div class="nm"><b>' + esc(r[1]) + "</b><span>" + esc(r[2]) + " &middot; " + esc(NAMES[r[3]]) + '</span></div><div class="pr"><b>From $' + r[4] + '</b><span>3-7 days</span></div><a class="btn sm" href="/service/' + esc(r[0]) + '" aria-label="Order ' + esc(r[1]) + ", " + esc(r[2]) + '">Order now</a></li>';
  }).join("");
  var left = L.rows.length - rows.length;
  more.innerHTML = left > 0 ? '<button type="button" class="lnk" id="showmore">Show ' + Math.min(8, left) + ' more</button><span class="count">' + left + " not shown</span>" : "";
}
function setChips() { var c = R.getElementById("chips"); [].forEach.call(c.children, function (b) { b.setAttribute("aria-pressed", +b.getAttribute("data-c") === st.cat ? "true" : "false"); }); }

function wire() {
  var $ = function (id) { return R.getElementById(id); };
  var chips = $("chips"), more = $("more"), q = $("q"), tabs = $("tabs"), panel = $("panel"), cur = 0;
  var NAMES = DATA ? DATA.names : TYPES.map(function (t) { return t[0]; });
  chips.innerHTML = ["Popular"].concat(NAMES).map(function (n, i) { return '<button type="button" data-c="' + (i - 1) + '" aria-pressed="' + (i === 0) + '"' + (n === "Websites and stores" ? ' title="Websites and stores" aria-label="Websites and stores"' : "") + ">" + esc(n === "Websites and stores" ? "Websites" : n) + "</button>"; }).join("");
  chips.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; st.cat = +b.getAttribute("data-c"); st.limit = 6; setChips(); render(); });
  more.addEventListener("click", function (e) { if (e.target.id === "showmore") { st.limit += 8; render(); } });
  q.addEventListener("input", function () { st.q = q.value.trim(); st.limit = 6; render(); });
  render();
  tabs.innerHTML = TYPES.map(function (x, i) { return '<button type="button" role="tab" id="tab' + i + '" aria-controls="panel" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(x[0]) + "</button>"; }).join("");
  function show(i, focus) {
    cur = i; var x = TYPES[i];
    [].forEach.call(tabs.children, function (b, j) { b.setAttribute("aria-selected", j === i); b.tabIndex = j === i ? 0 : -1; });
    if (focus) tabs.children[i].focus();
    panel.setAttribute("aria-labelledby", "tab" + i);
    panel.innerHTML = '<div class="top"><p class="ex"><b>Includes:</b> ' + esc(x[1]) + '</p><button type="button" class="btn sm" data-go="' + i + '">Browse ' + esc(x[0].toLowerCase()) + " services</button></div>" +
      '<div class="cells"><div class="cell"><h4>You provide</h4><p>' + esc(x[2]) + '</p></div><div class="cell"><h4>Access we ask for</h4><p>' + esc(x[3]) + '</p></div><div class="cell"><h4>How we build</h4><p>' + esc(x[4]) + '</p></div><div class="cell"><h4>You receive</h4><p>' + esc(x[5]) + "</p></div></div>";
  }
  tabs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) show([].indexOf.call(tabs.children, b)); });
  tabs.addEventListener("keydown", function (e) {
    var k = e.key, n = TYPES.length;
    if (k === "ArrowRight") { e.preventDefault(); show((cur + 1) % n, true); }
    else if (k === "ArrowLeft") { e.preventDefault(); show((cur + n - 1) % n, true); }
    else if (k === "Home") { e.preventDefault(); show(0, true); }
    else if (k === "End") { e.preventDefault(); show(n - 1, true); }
  });
  function toTop() { var o = $("order"); if (o && o.scrollIntoView) o.scrollIntoView({ behavior: "smooth", block: "start" }); }
  panel.addEventListener("click", function (e) { var b = e.target.closest("[data-go]"); if (!b) return; st.cat = +b.getAttribute("data-go"); st.q = ""; q.value = ""; st.limit = 6; setChips(); render(); toTop(); });
  $("again").addEventListener("click", function (e) { e.preventDefault(); toTop(); q.focus({ preventScroll: true }); });
  show(0);
}

function ld() {
  var old = document.getElementById("es-proc-ld"); if (old) old.remove();
  var s = document.createElement("script"); s.type = "application/ld+json"; s.id = "es-proc-ld";
  s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ecomswiftllc.com/" }, { "@type": "ListItem", "position": 2, "name": "How to order", "item": "https://www.ecomswiftllc.com/process" }] },
    { "@type": "HowTo", "name": "How to order a service from Ecom Swift LLC", "step": [
      { "@type": "HowToStep", "name": "Pick a service and a package", "text": "Basic, Standard or Premium, with optional extras." },
      { "@type": "HowToStep", "name": "Provide the requirements", "text": "Your link, email and, if needed, a collaborator code." },
      { "@type": "HowToStep", "name": "Pay securely", "text": "Our team contacts you within 1-3 hours to start." }] },
    { "@type": "FAQPage", "mainEntity": FAQ.map(function (f) { return { "@type": "Question", "name": f[0], "acceptedAnswer": { "@type": "Answer", "text": f[1] } }; }) }
  ] });
  document.head.appendChild(s);
}

/* ---- mount ---- */
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
    host = document.createElement("div"); host.id = "es-proc-host";
    R = host.attachShadow({ mode: "open" });
    R.innerHTML = "<style>" + CSS + "</style>" + build();
  }
  if (!host.isConnected) sp.appendChild(host);
  return true;
}
function ensureAssets() {
  if (!document.getElementById("es-font")) { var l = document.createElement("link"); l.id = "es-font"; l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap"; document.head.appendChild(l); }
  if (!document.getElementById("es-proc-font")) { var f = document.createElement("link"); f.id = "es-proc-font"; f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap"; document.head.appendChild(f); }
}
function prep(d) {
  d.by = {}; d.idx.forEach(function (r) { d.by[r[0]] = r; });
  return d;
}
function boot() {
  ensureAssets();
  if (!takeover()) return false;
  document.documentElement.classList.add("es-proc-page");
  var pe = document.getElementById("es-pre"); if (pe) pe.remove();
  return true;
}
var wired = false;
function ready() {
  if (!boot()) return false;
  if (!wired) { wired = true; wire(); ld(); }
  return true;
}
fetch(BASE + "process-index.json?v=" + VER).then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); }).then(function (d) { DATA = prep(d); if (wired) { render(); } }).catch(function () { DATA = prep({ names: TYPES.map(function (t) { return t[0]; }), idx: [] }); });
var tries = 0;
function go() {
  if (ready()) return;
  if (++tries < 60) setTimeout(go, 150);
}
function again() {
  if (!host) return;
  var sp = document.querySelector("#SITE_PAGES") || document.querySelector("#PAGES_CONTAINER") || document.querySelector("main");
  if (!sp) return;
  if (!host.isConnected) sp.appendChild(host);
  [].forEach.call(sp.children, function (c) { if (c !== host && c.getAttribute("aria-hidden") !== "true") takeover(); });
}
try { new MutationObserver(again).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { /* keep the native page usable */ }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
