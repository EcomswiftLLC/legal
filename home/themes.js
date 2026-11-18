(function () {
"use strict";
/* Ecom Swift LLC - /shopify-themes shop page. The native Wix page holds the same copy as real text for search engines; this script draws the page. */
if (window.__esThemes) return;
var P = location.pathname.replace(/\/+$/, "").toLowerCase();
if (P !== "/shopify-themes") return;
window.__esThemes = 1;
var VER = 1;
var IMG = "https://ecomswiftllc.github.io/legal/home/themes/";
/*DATA*/
var DATA = {
  title: "Shopify themes: premium themes for online stores | Ecom Swift LLC",
  kicker: "Shopify themes",
  h1: "Shopify themes for fashion and apparel stores",
  sub: "Three original Online Store 2.0 themes from Ecom Swift LLC. Each costs $49.99 once. You get the theme file straight after checkout and upload it to your own Shopify store.",
  quick: ["$49.99 per theme, paid once", "Download straight after checkout", "One licence covers one store"],
  themes: [
    {
      id: "footlight", name: "Footlight", font: "footlight", price: "49.99",
      title: "Footlight Shopify theme for clothing stores",
      tagline: "An editorial theme that lets clothing photography lead the page.",
      forWho: "Independent clothing brands and small fashion labels that sell through photography and want a calmer, more editorial store than a standard product grid.",
      features: [
        "Full-screen menu with up to three levels and optional pictures that change as visitors move between links",
        "Home page scenes: hero slideshow, campaign chapters, film, gallery, shoppable looks, press and testimonials",
        "Product pages built from blocks: stacked or grid gallery with zoom, swatches, size guide, complete the look, pickup availability and trust badges",
        "Quick view, recently viewed products, filtering, sorting and predictive search",
        "Slide-out cart or full cart page with order note, discounts and subscription plans",
        "Six color schemes, visible focus states and reduced-motion support"
      ],
      facts: [["Version", "1.0.0"], ["Fonts", "EB Garamond and Work Sans"], ["Color schemes", "6"]],
      buy: "/product-page/footlight-shopify-theme", docs: "/footlight-documentation",
      stage: "dark",
      shots: [{ label: "Footlight", desktop: "footlight-home.jpg", dw: 1200, dh: 900, mobile: "footlight-mobile.jpg", mw: 520, mh: 925,
        alt: "Footlight home page on desktop: a full-height hero with a dark editorial scene and a large serif headline, collection tiles below.",
        malt: "Footlight home page on a phone: the hero with the menu, search and bag icons above it." }]
    },
    {
      id: "ourlet", name: "Ourlet", font: "ourlet", price: "49.99",
      title: "Ourlet Shopify theme for women's fashion stores",
      tagline: "Editorial storefronts for women's fashion labels, in three art directions.",
      forWho: "Women's fashion labels that want to start from a finished look: editorial, soft and romantic, or bold and led by the campaign.",
      features: [
        "Three presets, Ourlet, Toile and Bias, each with its own colors, fonts, header, footer and starting layouts",
        "Mega menu with an optional promotion image and a featured product or collection",
        "Product cards with color dots, size chips, quick add and quick view",
        "Four collection layouts, including an editorial rhythm layout, with filtering and sorting",
        "Product page blocks: swatches, size guide, bundles, complementary products, trust badges and a sticky add to bag bar",
        "Cart drawer with free shipping progress, plus a gift card page with copy code and QR code"
      ],
      facts: [["Version", "1.0.0"], ["Presets", "Ourlet, Toile, Bias"], ["Color schemes", "6 per preset"]],
      buy: "/product-page/ourlet-shopify-theme", docs: "/ourlet-documentation",
      stage: "paper",
      shots: [
        { label: "Ourlet", desktop: "ourlet-home.jpg", dw: 900, dh: 1123, mobile: "ourlet-mobile.jpg", mw: 520, mh: 925,
          alt: "Ourlet preset home page on desktop: an ivory page with a serif headline, an overlapping pair of fashion photographs and a collections row.",
          malt: "Ourlet preset home page on a phone: ivory header with the wordmark, search, account and bag icons, and a fashion photograph." },
        { label: "Toile", desktop: "toile-home.jpg", dw: 900, dh: 1123, mobile: "toile-mobile.jpg", mw: 520, mh: 925,
          alt: "Toile preset home page on desktop: a full-width slideshow with a romantic serif headline over a garden photograph, then a collections row.",
          malt: "Toile preset home page on a phone: a sage announcement bar, the header and a full-height slideshow with a serif headline." },
        { label: "Bias", desktop: "bias-home.jpg", dw: 900, dh: 1123, mobile: "bias-mobile.jpg", mw: 520, mh: 925,
          alt: "Bias preset home page on desktop: a dark header and a full-screen campaign hero in warm red, then a five-column new arrivals grid.",
          malt: "Bias preset home page on a phone: an oxblood announcement bar, a charcoal header and a full-height campaign photograph." }
      ]
    },
    {
      id: "vyvora", name: "Vyvora", font: "vyvora", price: "49.99",
      title: "Vyvora Shopify theme for streetwear and activewear stores",
      tagline: "Bold color fields and signage-style type for streetwear and activewear.",
      forWho: "Street and active apparel brands that release new pieces in drops and want a store that looks like their campaigns.",
      features: [
        "Rail, Index and Dock navigation: a vertical rail on desktop, a full-screen index with collection images, and a dock with search and the bag on mobile",
        "Five color schemes that each section can pick, so the home page reads as stacked blocks of color",
        "Home sections for drops: drop board, season stack, ranked best sellers, shoppable lookbook and video campaign",
        "Size tiles with sold-out marking, a low-stock line from real inventory, pickup availability and a mobile buy bar",
        "Build the fit: shoppers pick one item per category and add the whole outfit in one step",
        "Cart drawer, quick view, quick add, predictive search, filtering and sorting"
      ],
      facts: [["Version", "1.0.0"], ["Fonts", "Bricolage Grotesque and Schibsted Grotesk"], ["Color schemes", "5"]],
      buy: "/product-page/vyvora-shopify-theme", docs: "/vyvora-documentation",
      stage: "volt",
      shots: [{ label: "Vyvora", desktop: "vyvora-home.jpg", dw: 1200, dh: 706, mobile: "vyvora-mobile.jpg", mw: 520, mh: 1139,
        alt: "Vyvora home page on desktop: a volt-green page with a vertical navigation rail, a huge black headline and a night-run photograph.",
        malt: "Vyvora product page on a phone: a volt-green ticker, a black header, a product photograph and the dock with menu, search, new, account and bag." }]
    }
  ],
  stepsH2: "How buying works",
  steps: [
    ["Pay at checkout", "Click Buy, then pay securely at checkout. Prices are in US dollars."],
    ["Download the zip", "A download link appears on the confirmation page and arrives by email. The zip holds the theme file, an install guide and the licence."],
    ["Upload it to Shopify", "In your Shopify admin open Online Store, Themes, Add theme, then Upload zip file and choose the theme file from the zip."],
    ["Customize and publish", "Add your products and photos in the theme editor. Work on it unpublished first, so your live store stays untouched until you publish."]
  ],
  faqH2: "Questions before you buy",
  faq: [
    ["Which Shopify plans can use these themes?", "Any plan that lets you upload a theme. All three use Online Store 2.0, the current Shopify theme architecture."],
    ["Are the photos and products in the screenshots included?", "No. The screenshots come from demo stores with sample photography and products. You get the theme itself, with starter layouts that you fill with your own content."],
    ["Can I use one theme on more than one store?", "One licence covers one Shopify store. If you build for clients, buy one licence for each client store."],
    ["Does support come with the price?", "Yes. We answer within 2 business days and help with installing the theme, its settings and bugs in the theme. Custom design, code changes and adding your products are paid services."],
    ["Can I see more before I buy?", "Each theme has full documentation that lists every section and setting. If you have a question, write to support@ecomswiftllc.com."],
    ["What if the theme is not right for me?", "Refunds follow our refund policy at www.ecomswiftllc.com/refund-policy."],
    ["Will I get updates?", "If we fix a confirmed bug, ask support and we send you the latest zip."]
  ],
  cta: { h2: "Want the theme installed and customized for you?", p: "We install themes, set them up with your products and adjust the design to your brand.", btn: "See theme setup services", href: "/service/shopify-theme-edits" },
  foot: "Prices are in US dollars and are one-time. Screenshots show demo stores with sample content. Shopify is a trademark of Shopify Inc.; these themes are made by Ecom Swift LLC and are not endorsed by Shopify."
};
/*END*/
var CSS = ":host{display:block;--bg:#FBFAF7;--paper:#FFFFFF;--soft:#F8F7F4;--ink:#14120E;--ink2:#3A362D;--muted:#5E584B;--line:#E7E3D9;--line2:#D6D0C1;--gold:#B8923A;--gold-ink:#7A5A12;--gold-soft:#F5EDDA;--band:#14120E;--band-fg:#F5F1E6;--band-muted:#B9B09B;--band-gold:#DDB85F;--shadow:0 18px 40px -26px rgba(20,18,14,.35);--head:\"Schibsted Grotesk\",\"Segoe UI\",system-ui,sans-serif;--body:\"Hanken Grotesk\",\"Segoe UI\",system-ui,sans-serif;color-scheme:light}" +
"*{box-sizing:border-box}" +
".es{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased;padding:84px max(16px,env(safe-area-inset-right,0px)) 56px max(16px,env(safe-area-inset-left,0px));text-align:left}" +
".wrap{max-width:1160px;margin:0 auto}" +
".frame{background:var(--paper);border:1px solid var(--line2);border-radius:16px;overflow:hidden;container-type:inline-size;container-name:pg;box-shadow:0 24px 50px -36px rgba(20,18,14,.4)}" +
"button,a{font:inherit}a{color:inherit}" +
":focus-visible{outline:2px solid var(--gold);outline-offset:2px}" +
".in{padding-inline:clamp(16px,4.5cqi,48px)}" +
"h1,h2,h3{margin:0;color:var(--ink);text-wrap:balance}" +
".crumbs{padding-top:18px}.crumbs ol{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none;font-size:13.5px;color:var(--muted)}.crumbs li:not(:last-child)::after{content:\"/\";margin:0 8px;opacity:.5}.crumbs a{color:var(--muted);text-decoration:underline;text-underline-offset:3px}.crumbs a:hover{color:var(--ink)}.crumbs [aria-current]{color:var(--ink);font-weight:600}" +
".hero{padding-block:clamp(26px,4.6cqi,52px) clamp(22px,3.6cqi,36px)}" +
".kick{margin:0 0 14px;display:inline-flex;font:600 12.5px/1 var(--body);color:var(--gold-ink);background:var(--gold-soft);border-radius:999px;padding:7px 12px}" +
".hero h1{font:700 clamp(32px,5.4cqi,54px)/1.05 var(--head);letter-spacing:-.03em;max-width:18ch}" +
".hero .sub{color:var(--muted);font-size:clamp(16px,1.9cqi,18px);line-height:1.55;max-width:60ch;margin:14px 0 0}" +
".quick{display:flex;flex-wrap:wrap;gap:10px 22px;margin:22px 0 0;padding:0;list-style:none}" +
".quick li{display:flex;align-items:center;gap:9px;font-weight:600;font-size:14.5px;color:var(--ink)}" +
".tk{flex:none;width:24px;height:24px;border-radius:50%;background:var(--gold-soft);color:var(--gold-ink);display:grid;place-items:center}" +
".pick{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:26px 0 0;padding:0;list-style:none}" +
".pick a{display:grid;gap:2px;padding:14px 16px;border:1px solid var(--line2);border-radius:12px;text-decoration:none;background:var(--paper);min-height:68px;align-content:center;transition:border-color .2s,background .2s}" +
".pick a:hover{border-color:var(--gold);background:var(--gold-soft)}" +
".pick b{font:700 17px/1.2 var(--head);letter-spacing:-.01em}.pick span{font-size:13.5px;color:var(--muted)}" +
"@container pg (max-width:640px){.pick{display:flex;flex-wrap:wrap;gap:8px}.pick li{flex:1 1 auto}.pick a{min-height:48px;padding:10px 16px;text-align:center}.pick span{display:none}}" +
".theme{display:grid;gap:clamp(20px,3.4cqi,36px);padding-block:clamp(28px,5cqi,56px);border-top:1px solid var(--line);scroll-margin-top:90px}" +
".tbody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(20px,4cqi,56px);align-items:start}" +
"@container pg (max-width:820px){.tbody{grid-template-columns:1fr}}" +
".copy{display:grid;gap:16px;align-content:start;min-width:0}.more{display:grid;gap:18px;align-content:start;min-width:0}" +
".tname{font-size:clamp(44px,7cqi,72px);line-height:.98;color:var(--ink)}" +
".tname.f-footlight{font-family:\"EB Garamond\",Georgia,serif;font-weight:500;letter-spacing:-.01em}" +
".tname.f-ourlet{font-family:\"Cormorant Garamond\",Georgia,serif;font-weight:600;letter-spacing:-.005em}" +
".tname.f-vyvora{font-family:\"Bricolage Grotesque\",var(--head);font-weight:800;letter-spacing:-.045em}" +
".tag{margin:0;font:600 clamp(17px,2cqi,20px)/1.4 var(--head);letter-spacing:-.01em;color:var(--ink);max-width:34ch}" +
".who{margin:0;color:var(--ink2);font-size:15.5px;line-height:1.6;max-width:52ch}" +
".buyrow{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px;padding:16px 0 0}" +
".price{display:flex;align-items:baseline;gap:8px;margin-right:2px}.price b{font:700 clamp(28px,3.6cqi,36px)/1 var(--head);letter-spacing:-.03em}.price span{color:var(--muted);font-size:13.5px}" +
".btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:10px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);padding:10px 22px;font-weight:600;font-size:15px;min-height:48px;text-decoration:none;cursor:pointer;transition:background .2s}" +
".btn:hover{background:#2A261E}" +
".btn.gold{background:var(--band-gold);border-color:var(--band-gold);color:var(--ink)}.btn.gold:hover{background:#E8C676}" +
".lnk{display:inline-flex;align-items:center;min-height:44px;font-weight:600;font-size:14.5px;color:var(--ink);text-decoration:underline;text-underline-offset:4px}.lnk:hover{color:var(--gold-ink)}" +
".ticks{display:grid;gap:10px;margin:0;padding:0;list-style:none}" +
".ticks li{display:grid;grid-template-columns:24px 1fr;gap:12px;font-size:15px;line-height:1.55;color:var(--ink2)}.ticks .tk{margin-top:1px}" +
".facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:0;margin:0;padding:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--soft)}" +
".facts>div{padding:12px 16px;border-left:1px solid var(--line)}.facts>div:first-child{border-left:0}" +
".facts dt{font:600 12.5px/1.2 var(--body);color:var(--gold-ink);margin:0 0 4px}.facts dd{margin:0;font-size:14.5px;line-height:1.35;color:var(--ink)}" +
"@container pg (max-width:620px){.facts>div{border-left:0;border-top:1px solid var(--line)}.facts>div:first-child{border-top:0}}" +
".stage{position:relative;border-radius:18px;padding:clamp(24px,5cqi,56px) clamp(16px,4cqi,48px);padding-bottom:clamp(30px,6cqi,68px);min-width:0;overflow:hidden;isolation:isolate}" +
".stage.dark{background:linear-gradient(150deg,#3A2A22 0,#1A130F 100%)}.stage.paper{background:#E9DECB}.stage.volt{background:#C8F032}" +
".pv{position:relative;width:64%;margin:0 auto}" +
"@container pg (max-width:700px){.pv{width:86%}}" +
".shot{margin:0}" +
".shot img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;height:auto;border-radius:10px;box-shadow:0 26px 50px -24px rgba(0,0,0,.6);background:#fff}" +
".phone{position:absolute;right:-13%;bottom:-17%;width:25%;margin:0}" +
"@container pg (max-width:700px){.phone{right:-5%;bottom:-12%;width:30%}}" +
".phone img{display:block;width:100%;height:auto;border-radius:16px;border:3px solid #101010;box-shadow:0 22px 40px -18px rgba(0,0,0,.6);background:#fff}" +
".stage.paper .shot img{box-shadow:0 22px 44px -26px rgba(60,40,10,.5)}" +
".sw{position:relative;z-index:2;display:flex;gap:6px;margin:0 0 20px;padding:4px;border-radius:999px;background:rgba(255,255,255,.6);width:fit-content;max-width:100%}" +
".sw button{border:0;background:transparent;color:var(--ink);padding:0 16px;min-height:44px;border-radius:999px;font-weight:600;font-size:14.5px;cursor:pointer}" +
".sw button[aria-pressed=true]{background:var(--ink);color:#fff}.sw button:not([aria-pressed=true]):hover{background:rgba(255,255,255,.85)}" +
".sec{padding-block:clamp(28px,4.8cqi,48px);border-top:1px solid var(--line)}" +
".sec h2{font:700 clamp(24px,3.4cqi,32px)/1.15 var(--head);letter-spacing:-.02em;margin:0 0 18px}" +
".steps{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:0;padding:0;list-style:none}" +
"@container pg (max-width:900px){.steps{grid-template-columns:1fr 1fr}}@container pg (max-width:560px){.steps{grid-template-columns:1fr}}" +
".steps li{border:1px solid var(--line);border-radius:14px;padding:18px;background:var(--soft);display:grid;gap:8px;align-content:start}" +
".num{width:32px;height:32px;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font:700 14px/1 var(--head)}" +
".steps h3{font:700 17px/1.25 var(--head);letter-spacing:-.01em}.steps p{margin:0;color:var(--ink2);font-size:14.5px;line-height:1.55}" +
".faq{display:grid;gap:0;max-width:820px;border:1px solid var(--line);border-radius:14px;overflow:hidden}" +
".faq details{border-top:1px solid var(--line)}.faq details:first-child{border-top:0}" +
".faq summary{list-style:none;cursor:pointer;padding:16px 20px;font:600 16px/1.35 var(--head);letter-spacing:-.01em;display:flex;justify-content:space-between;gap:16px;align-items:center;min-height:56px}" +
".faq summary::-webkit-details-marker{display:none}.faq summary::after{content:\"+\";font:400 24px/1 var(--body);color:var(--gold-ink);flex:none}.faq details[open] summary::after{content:\"\\2212\"}" +
".faq summary:hover{background:var(--soft)}" +
".faq p{margin:0;padding:0 20px 18px;color:var(--ink2);font-size:15px;line-height:1.6;max-width:68ch}.faq p a{color:var(--ink);text-underline-offset:3px}" +
".end{background:var(--band);color:var(--band-fg);display:flex;flex-wrap:wrap;gap:16px 28px;align-items:center;justify-content:space-between;padding-block:clamp(26px,4.4cqi,44px)}" +
".end h2{font:700 clamp(22px,3.2cqi,30px)/1.15 var(--head);letter-spacing:-.02em;color:var(--band-fg);margin:0 0 6px}.end p{margin:0;color:var(--band-muted);max-width:56ch}" +
".foot{margin:0;padding-block:18px 24px;color:var(--muted);font-size:13px;line-height:1.5;border-top:1px solid var(--line)}" +
"@media (max-width:560px){.buyrow .btn{width:100%}}" +
"@media (prefers-reduced-motion:no-preference){.btn,.pick a{transition:background .2s,border-color .2s}}" +
"@media (prefers-reduced-motion:reduce){*{transition:none!important}}";
var host = null, R = null;
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function ic(p, w) { return '<svg width="' + (w || 14) + '" height="' + (w || 14) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; }
var CHECK = '<path d="M5 12.5l4.5 4.5L19 7.5"/>';
function tick(t) { return '<li><span class="tk">' + ic(CHECK, 13) + "</span><span>" + esc(t) + "</span></li>"; }
function shotHtml(t, s, first) {
  return '<figure class="shot"><img src="' + IMG + s.desktop + '" width="' + s.dw + '" height="' + s.dh + '" alt="' + esc(s.alt) + '"' + (first ? "" : ' loading="lazy"') + '></figure>' +
    '<figure class="phone"><img src="' + IMG + s.mobile + '" width="' + s.mw + '" height="' + s.mh + '" alt="' + esc(s.malt) + '"' + (first ? "" : ' loading="lazy"') + "></figure>";
}
function theme(t, i) {
  var h = '<section class="theme in" id="' + t.id + '" aria-labelledby="h-' + t.id + '">';
  h += '<div class="stage ' + t.stage + '">';
  if (t.shots.length > 1) {
    h += '<div class="sw" role="group" aria-label="Choose a preset to preview">' + t.shots.map(function (s, n) { return '<button type="button" data-t="' + t.id + '" data-n="' + n + '" aria-pressed="' + (n === 0 ? "true" : "false") + '">' + esc(s.label) + "</button>"; }).join("") + "</div>";
  }
  h += '<div class="pv" data-pv="' + t.id + '">' + shotHtml(t, t.shots[0], i === 0) + "</div></div>";
  h += '<div class="tbody"><div class="copy"><h2 class="tname f-' + t.font + '" id="h-' + t.id + '">' + esc(t.name) + "</h2>";
  h += '<p class="tag">' + esc(t.tagline) + '</p><p class="who">' + esc(t.forWho) + "</p>";
  h += '<div class="buyrow"><div class="price"><b>$' + esc(t.price) + '</b><span>one-time, USD</span></div>';
  h += '<a class="btn" href="' + esc(t.buy) + '">Buy ' + esc(t.name) + '</a><a class="lnk" href="' + esc(t.docs) + '">Read the documentation</a></div></div>';
  h += '<div class="more"><ul class="ticks" aria-label="' + esc(t.name) + ' features">' + t.features.map(tick).join("") + "</ul>";
  h += '<dl class="facts">' + t.facts.map(function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("") + "</dl></div></div></section>";
  return h;
}
function build() {
  var h = '<div class="es"><div class="wrap"><div class="frame"><main>';
  h += '<nav class="crumbs in" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Shopify themes</span></li></ol></nav>';
  h += '<section class="hero in"><h1>' + esc(DATA.h1) + '</h1><p class="sub">' + esc(DATA.sub) + "</p>";
  h += '<ul class="quick">' + DATA.quick.map(tick).join("") + "</ul>";
  h += '<ul class="pick" aria-label="Jump to a theme">' + DATA.themes.map(function (t) { return '<li><a href="#' + t.id + '"><b>' + esc(t.name) + "</b><span>" + esc(t.tagline.split(",")[0].replace(/\.$/, "")) + ", $" + esc(t.price) + "</span></a></li>"; }).join("") + "</ul></section>";
  h += DATA.themes.map(theme).join("");
  h += '<section class="sec in" aria-labelledby="hs"><h2 id="hs">' + esc(DATA.stepsH2) + '</h2><ol class="steps">' + DATA.steps.map(function (s, n) { return '<li><span class="num" aria-hidden="true">' + (n + 1) + "</span><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></li>"; }).join("") + "</ol></section>";
  h += '<section class="sec in" aria-labelledby="hq"><h2 id="hq">' + esc(DATA.faqH2) + '</h2><div class="faq">' + DATA.faq.map(function (q) { return "<details><summary>" + esc(q[0]) + "</summary><p>" + esc(q[1]) + "</p></details>"; }).join("") + "</div></section>";
  h += '<section class="in end"><div><h2>' + esc(DATA.cta.h2) + "</h2><p>" + esc(DATA.cta.p) + '</p></div><a class="btn gold" href="' + esc(DATA.cta.href) + '">' + esc(DATA.cta.btn) + "</a></section>";
  h += '<p class="in foot">' + esc(DATA.foot) + "</p>";
  return h + "</main></div></div></div>";
}
function bind() {
  if (!R) return;
  R.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("button[data-t]") : null;
    if (!b) return;
    var t = DATA.themes.filter(function (x) { return x.id === b.getAttribute("data-t"); })[0];
    var s = t.shots[+b.getAttribute("data-n")];
    var pv = R.querySelector('[data-pv="' + t.id + '"]');
    pv.innerHTML = shotHtml(t, s, true);
    [].forEach.call(R.querySelectorAll('button[data-t="' + t.id + '"]'), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
  });
}
function ld() {
  var old = document.getElementById("es-themes-ld"); if (old) old.remove();
  var s = document.createElement("script"); s.type = "application/ld+json"; s.id = "es-themes-ld";
  var items = DATA.themes.map(function (t, i) {
    return { "@type": "ListItem", "position": i + 1, "item": { "@type": "Product", "name": t.title, "description": t.tagline + " " + t.forWho, "brand": { "@type": "Brand", "name": "Ecom Swift LLC" }, "image": IMG + t.shots[0].desktop, "url": "https://www.ecomswiftllc.com" + t.buy, "offers": { "@type": "Offer", "price": t.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://www.ecomswiftllc.com" + t.buy } } };
  });
  s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ecomswiftllc.com/" }, { "@type": "ListItem", "position": 2, "name": "Shopify themes", "item": "https://www.ecomswiftllc.com/shopify-themes" }] },
    { "@type": "ItemList", "name": "Shopify themes by Ecom Swift LLC", "itemListElement": items }
  ] });
  document.head.appendChild(s);
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
    host = document.createElement("div"); host.id = "es-themes-host";
    R = host.attachShadow({ mode: "open" });
    R.innerHTML = "<style>" + CSS + "</style>" + build();
    bind();
  }
  if (!host.isConnected) sp.appendChild(host);
  return true;
}
var HIDE = "html.es-proc-page #SITE_PAGES>*:not(#es-themes-host){position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;opacity:0!important;pointer-events:none!important}html.es-proc-page,html.es-proc-page body{background:#FBFAF7!important}";
function ensureAssets() {
  if (!document.getElementById("es-themes-hide")) { var hs = document.createElement("style"); hs.id = "es-themes-hide"; hs.textContent = HIDE; document.head.appendChild(hs); }
  if (!document.getElementById("es-font")) { var l = document.createElement("link"); l.id = "es-font"; l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap"; document.head.appendChild(l); }
  if (!document.getElementById("es-proc-font")) { var f = document.createElement("link"); f.id = "es-proc-font"; f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap"; document.head.appendChild(f); }
  if (!document.getElementById("es-themes-font")) { var g = document.createElement("link"); g.id = "es-themes-font"; g.rel = "stylesheet"; g.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Cormorant+Garamond:wght@600&family=Bricolage+Grotesque:wght@800&display=swap"; document.head.appendChild(g); }
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
