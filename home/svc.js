/* Ecom Swift LLC - service pages (/service/<slug>). Renders the Classic Gig layout from home/svc/<slug>.json,
   handles package choice, extras, the requirement form, the cart drawer and checkout. No shadow DOM. */
(function () {
  "use strict";
  if (window.__esSvc) return;
  window.__esSvc = {};
  var BASE = window.__ES_SVC_BASE || "https://ecomswiftllc.github.io/legal/home/";
  var VER = "2";
  var MEDIA = "https://static.wixstatic.com/media/";
  var CAT = ["b2970c_b39d8eeda7d44d74a9b3df1972529b96~mv2.webp", "b2970c_3f1b4de685a44fc1b4f591b83cc58dcc~mv2.webp", "b2970c_472efb37848341a282994ac5f3ed5984~mv2.webp", "b2970c_af682593689f4db7a1257efefc1fd529~mv2.webp", "b2970c_be4aa33273ae42628091dda77265b61f~mv2.webp", "b2970c_a0af11a457c142e9b65a8c646f9d96f1~mv2.webp", "b2970c_c8c44784d1bb4d08be5153ec34739872~mv2.webp", "b2970c_a78b1bf7074542cebda4698a46949cce~mv2.webp", "b2970c_5916c892023e4839ac399d36c9b612b5~mv2.webp", "b2970c_08543b0ada414be6842af4111c1890ab~mv2.webp", "b2970c_0b167f6c84e44ebfa84b88e78dcb5b8d~mv2.webp", "b2970c_3a7d8f117b944a90a72d6c050d8bb182~mv2.webp"];
  var ALT = ["Laptop beside a shopping cart", "Code on a computer screen", "Shipping box marked fragile", "Website wireframes sketched beside a phone", "Hands sorting clothes on a rack", "Team meeting around a table", "Analytics chart on a tablet", "Phone showing app icons", "Parcel being packed beside a laptop", "Letter tiles spelling SEO", "Hands holding a gift-wrapped package", "Clipboard with a calculator and notes"];
  var NAMES = { basic: "Basic", standard: "Standard", premium: "Premium" };
  var REVS = { basic: 2, standard: 4, premium: 6 };
  var CK = "es_svc_cart", RK = "es_svc_req";
  var FORMS = {
    store: { head: "Tell us about your store", url: "Your store link", ph: "https://yourstore.com", none: "I do not have a store yet. Build one from scratch.", name: "Store name", nph: "For example, Oak and Linen", nsmall: "You can change it later.", sell: "What will you sell?", sph: "For example, skincare or home decor", kind: ["Your products", "I have my own products", "I want to dropship"], mkt: "Primary market", mph: "For example, United States", msmall: "The country or region you mainly sell to.", eurl: "Enter your store link, or tick the box if you do not have a store yet.", ename: "Enter a store name. You can change it later.", esell: "Tell us what you plan to sell.", ekind: "Choose whether you have your own products or want to dropship.", emkt: "Enter the country or region you mainly sell to.", thing: "store" },
    site: { head: "Tell us about your website", url: "Your website link", ph: "https://yoursite.com", none: "I do not have a website yet. Build one from scratch.", name: "Website name", nph: "For example, Oak and Linen Studio", nsmall: "You can change it later.", sell: "What is the website for?", sph: "For example, a portfolio for a design studio", mkt: "Primary market", mph: "For example, United States", msmall: "The country or region you mainly serve.", eurl: "Enter your website link, or tick the box if you do not have a website yet.", ename: "Enter a website name. You can change it later.", esell: "Tell us what the website is for.", emkt: "Enter the country or region you mainly serve.", thing: "website" },
    app: { head: "Tell us about your app", url: "Link to your app or listing", ph: "https://apps.apple.com/...", none: "I do not have an app yet. Start from scratch.", name: "App name", nph: "For example, Tidepool", nsmall: "You can change it later.", sell: "What should it do?", sph: "For example, track daily water intake", mkt: "Main audience or market", mph: "For example, small shops in the United States", msmall: "Who the app is for.", eurl: "Enter a link to your app or listing, or tick the box if you do not have an app yet.", ename: "Enter an app name. You can change it later.", esell: "Tell us what the app should do.", emkt: "Tell us who the app is for.", thing: "app" },
    account: { head: "Tell us about your account", url: "Link to your store or seller page", ph: "https://", none: "I do not have an account yet. Set one up for me.", name: "Store or brand name", nph: "For example, Oak and Linen", nsmall: "You can change it later.", sell: "What will you sell?", sph: "For example, kitchen tools or handmade candles", kind: ["Your products", "I have my own products", "I resell other brands"], mkt: "Main marketplace or country", mph: "For example, Amazon US", msmall: "Where you sell or plan to sell.", eurl: "Enter a link to your store or seller page, or tick the box if you do not have an account yet.", ename: "Enter a store or brand name. You can change it later.", esell: "Tell us what you plan to sell.", ekind: "Choose whether you have your own products or resell other brands.", emkt: "Enter the marketplace or country you sell in.", thing: "account" },
    project: { head: "Tell us about your project", url: "Your website or store link", ph: "https://yourbusiness.com", none: "I do not have a website yet.", name: "Business name", nph: "For example, Oak and Linen", nsmall: "You can change it later.", sell: "What does your business do?", sph: "For example, we sell skincare online", goal: "What should we do for you?", gph: "For example, set up a chatbot for my store", mkt: "Primary market", mph: "For example, United States", msmall: "The country or region you mainly sell to.", eurl: "Enter your website or store link, or tick the box if you do not have a website yet.", ename: "Enter your business name.", esell: "Tell us what your business does.", egoal: "Tell us what you want us to do.", emkt: "Enter the country or region you mainly sell to.", thing: "project" }
  };
  var ic = {
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    rev: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.4-5.7M20 4v5h-5"/></svg>',
    cart: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>',
    lock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    tag: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12V4h8l9 9-8 8-9-9z"/><circle cx="7.5" cy="8.5" r="1"/></svg>',
    key: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="14" r="4"/><path d="M11 11l9-9M16 6l3 3"/></svg>'
  };

  var D = null, st = null, root = null, ui = null, mountedSlug = "", cache = {}, lastFocus = null, busy = false;

  function usd(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function $(s, r) { return (r || document).querySelector(s); }
  function img(i) { return MEDIA + CAT[i % CAT.length]; }
  function rush(p) { return Math.max(50, Math.round(p * 0.2 / 50) * 50); }
  function slugNow() { var m = /^\/service\/([a-z0-9-]+)\/?$/i.exec(location.pathname); return m ? m[1].toLowerCase() : null; }
  function jget(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }

  /* ---- data helpers ---- */
  function pk() { return D.pkgs.map(function (p, i) { var id = ["basic", "standard", "premium"][i]; return { id: id, name: NAMES[id], price: p.price, days: p.days, rev: REVS[id], blurb: p.blurb, list: p.list }; }); }
  function P() { return pk().filter(function (p) { return p.id === st.pkg; })[0]; }
  function addList(p) { var a = D.add.map(function (x, i) { return { id: "a" + i, name: x[0], desc: x[1], price: x[2] }; }); a.push({ id: "rush", name: "Rush delivery", desc: "About half the delivery time.", price: rush(p.price) }); return a; }
  function picked() { var p = P(); return addList(p).filter(function (a) { return st.add[a.id]; }); }
  function days() { var d = P().days; return st.add.rush ? Math.ceil(d / 2) : d; }
  function total() { var p = P(); return p.price + picked().reduce(function (s, a) { return s + a.price; }, 0); }
  function checks(a) { return '<ul class="checks">' + a.map(function (t) { return "<li>" + ic.check + "<span>" + esc(t) + "</span></li>"; }).join("") + "</ul>"; }

  /* ---- views ---- */
  function gallery() {
    var m = D.imgs[st.img];
    return '<div class="gal"><div class="main"><img src="' + img(m) + '" alt="' + esc(ALT[m]) + '" width="720" height="450"></div><div class="th">' +
      D.imgs.map(function (k, i) { return '<button type="button" data-img="' + i + '" aria-label="Show image: ' + esc(ALT[k]) + '" aria-current="' + (i === st.img) + '"><img src="' + img(k) + '" alt="" loading="lazy"></button>'; }).join("") + "</div></div>";
  }
  function compare() {
    var P3 = pk();
    var rows = [["Delivery", P3.map(function (p) { return p.days + " days"; })]].concat(D.cmp).concat([["Revisions", P3.map(function (p) { return String(p.rev); })]]);
    return '<div class="tbl"><table><thead><tr><th scope="col"><span class="sr">Feature</span></th>' + P3.map(function (p) { return '<th scope="col">' + p.name + "<small>" + usd(p.price) + "</small></th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + "</th>" + r[1].map(function (v) { return "<td>" + esc(v) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  function reqForm() {
    var f = FORMS[D.req], r = st.req, sc = D.scratch, ns = sc && r.nostore;
    var h = '<details class="reqd" id="reqd"' + (st.reqOpen ? " open" : "") + "><summary>" + esc(f.head) + "</summary>" +
      '<form class="req" id="req" novalidate aria-label="' + esc(f.head) + '" onsubmit="return false">' +
      '<label class="fld"><span>' + esc(f.url) + '</span><input type="url" id="f-url" inputmode="url" autocomplete="url" placeholder="' + esc(f.ph) + '" value="' + esc(r.url) + '"' + (ns ? " disabled" : "") + "></label>";
    if (sc) h += '<label class="chk"><input type="checkbox" id="f-no"' + (r.nostore ? " checked" : "") + "><span>" + esc(f.none) + "</span></label>";
    if (sc) {
      h += '<div class="newf" id="newf"' + (ns ? "" : " hidden") + ">" +
        '<label class="fld"><span>' + esc(f.name) + '</span><input type="text" id="f-name" autocomplete="organization" placeholder="' + esc(f.nph) + '" value="' + esc(r.name) + '"><small>' + esc(f.nsmall) + "</small></label>" +
        '<label class="fld"><span>' + esc(f.sell) + '</span><input type="text" id="f-sell" placeholder="' + esc(f.sph || "") + '" value="' + esc(r.sell) + '"></label>';
      if (f.kind) h += '<fieldset class="kind"><legend>' + esc(f.kind[0]) + '</legend><label class="rad"><input type="radio" name="kind" value="own"' + (r.kind === "own" ? " checked" : "") + "><span>" + esc(f.kind[1]) + '</span></label><label class="rad"><input type="radio" name="kind" value="other"' + (r.kind === "other" ? " checked" : "") + "><span>" + esc(f.kind[2]) + "</span></label></fieldset>";
      h += "</div>";
    }
    if (f.goal) h += '<label class="fld"><span>' + esc(f.goal) + '</span><textarea id="f-goal" rows="3" placeholder="' + esc(f.gph) + '">' + esc(r.goal) + "</textarea></label>";
    h += '<label class="fld"><span>' + esc(f.mkt) + '</span><input type="text" id="f-market" autocomplete="country-name" placeholder="' + esc(f.mph) + '" value="' + esc(r.market) + '"><small>' + esc(f.msmall) + "</small></label>" +
      '<p class="err" id="req-err" role="alert" hidden></p></form></details>';
    return h;
  }
  function buy() {
    var p = P(), tt = total(), d = days(), al = addList(p);
    return '<aside class="stick" aria-label="Order this service"><div class="buy"><div class="in">' +
      '<div class="seg" role="group" aria-label="Choose a package">' + pk().map(function (k) { return '<button type="button" data-pk="' + k.id + '" aria-pressed="' + (k.id === st.pkg) + '">' + k.name + "</button>"; }).join("") + "</div>" +
      '<div class="top"><b>' + p.name + ' package</b><span class="price">' + usd(tt) + "</span></div>" +
      '<p class="blurb">' + esc(p.blurb) + "</p>" +
      '<div class="meta"><span>' + ic.clock + d + "-day delivery</span><span>" + ic.rev + p.rev + " revisions</span></div>" +
      checks(p.list) +
      '<details class="extras"' + (Object.keys(st.add).length ? " open" : "") + "><summary>Add extras</summary><div class=\"lst\">" + al.map(function (a) { return '<label class="opt"><input type="checkbox" name="ad" value="' + a.id + '"' + (st.add[a.id] ? " checked" : "") + "><span><b>" + esc(a.name) + "</b><small>" + esc(a.desc) + '</small></span><span class="p">+' + usd(a.price) + "</span></label>"; }).join("") + "</div></details>" +
      '<div class="cta"><button type="button" class="btn block" data-buy>Buy now (' + usd(tt) + ')</button><button type="button" class="btn ghost block" data-atc>' + ic.cart + "Add to cart</button></div>" +
      reqForm() +
      '<div class="safe"><span>' + ic.lock + "Secure checkout</span><span>" + ic.tag + "Fixed price, delivered in 7 days or less</span><span>" + ic.key + "Done in your own accounts, no passwords shared</span></div>" +
      '<p class="fine">Need something bigger? <a href="/contact">Request a quote</a></p>' +
      "</div></div></aside>";
  }
  function steps() {
    var th = FORMS[D.req].thing, see = (D.req === "account" || D.req === "project") ? ["See the work", "Drafts and updates are shared before anything goes live."] : ["See a preview", "A private link to look through before it goes live."];
    return [["Send your brief", "Your " + th + " link and what you want done."], ["We confirm the scope", "You see what is included, in writing."], see, ["Review and revise", "Changes happen inside your revision rounds."], ["Launch and handover", "We finish, hand over and answer your questions."]];
  }
  function faqs() {
    var th = FORMS[D.req].thing;
    var a = [["How long does it take?", "Basic is delivered in 3 days, Standard in 5 days and Premium in 7 days. The clock starts when we have your brief and access. Nothing goes beyond 7 days, and Rush delivery makes it faster."]];
    a = a.concat(D.faq);
    a.push(["What do I need to send you?", "A link to your " + th + ", access for us as a collaborator or staff user (never your password), and any brand files or notes you have. We send a short checklist after you order."]);
    a.push(["Is the price fixed?", "Each package is a fixed price for the scope listed. If you need more than Premium covers, send a brief and we reply with a written quote in US dollars."]);
    return a;
  }
  function view() {
    var p = P(), tt = total();
    var h = '<div class="wrap"><div class="page"><div class="left">' +
      '<div class="topline"><div class="crumbs"><a href="/">Home</a> / <a href="/services">Services</a> / <a href="/' + esc(D.platform) + '">' + esc(D.pname) + "</a> / <span>" + esc(D.title) + '</span></div><button type="button" class="cartbtn" data-opencart aria-label="Open cart">' + ic.cart + '<em data-cartn hidden>0</em></button></div>' +
      "<h1>" + esc(D.h1) + "</h1>" +
      '<div class="seller"><i>E</i><b>Ecom Swift LLC</b><span class="chip">' + esc(D.chip) + "</span></div>" +
      gallery() +
      '<div class="content">' +
      '<section><h2 id="included">What you get</h2><p class="body">' + esc(D.overview) + "</p></section>" +
      '<section><h2 id="packages">Compare packages</h2><p class="lead">Every package is delivered in 7 days or less.</p>' + compare() + "</section>" +
      '<section><h2 id="process">How it works</h2><ol class="steps">' + steps().map(function (s) { return "<li><div><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></div></li>"; }).join("") + "</ol></section>" +
      '<section class="faq"><h2 id="faq">Frequently asked questions</h2>' + faqs().map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</section>" +
      '<section><h2>Related services</h2><div class="rel">' + D.rel.map(function (r) { return '<a href="/service/' + esc(r.s) + '" data-hard><img src="' + img(r.i) + '" alt="" loading="lazy" width="360" height="240"><span>' + esc(r.t) + "<small>From " + usd(r.p) + "</small></span></a>"; }).join("") + "</div></section>" +
      "</div></div>" + buy() + "</div></div>" +
      '<div class="mbar"><button type="button" class="t" data-jump aria-label="Change package, currently ' + p.name + '"><b>' + usd(tt) + "</b><span>" + p.name + ", " + days() + ' days. Change</span></button><button type="button" class="btn ghost sm" data-atc>Add to cart</button><button type="button" class="btn sm" data-buy>Buy now</button></div>';
    return h;
  }
  function uiHtml() {
    return '<div class="ov" data-closecart hidden></div><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="es-dh" hidden>' +
      '<header><h2 id="es-dh">Your cart</h2><button type="button" class="x" data-closecart aria-label="Close cart">&times;</button></header>' +
      '<div class="lines" data-lines></div>' +
      '<footer><div class="tot"><span>Subtotal</span><span data-sub>$0</span></div>' +
      '<p class="fine" style="margin:0">Tax is added at checkout. Work starts after you send your brief.</p>' +
      '<p class="err" data-coerr role="alert" hidden></p>' +
      '<button type="button" class="btn block" data-checkout>Go to checkout</button><button type="button" class="btn ghost block" data-closecart>Keep browsing</button></footer></aside>';
  }

  /* ---- requirement check ---- */
  function reqCheck() {
    var f = FORMS[D.req], r = st.req, msg = "", id = "", ns = D.scratch && r.nostore;
    if (!ns) { if (!/^(https?:\/\/)?[^\s\/.]+(\.[^\s\/.]+)+(\/\S*)?$/i.test(r.url.trim())) { msg = D.scratch ? f.eurl : f.eurl.split(", or tick")[0] + "."; id = "f-url"; } }
    else if (!r.name.trim()) { msg = f.ename; id = "f-name"; }
    else if (!r.sell.trim()) { msg = f.esell; id = "f-sell"; }
    else if (f.kind && !r.kind) { msg = f.ekind; id = "kind"; }
    if (!msg && f.goal && !r.goal.trim()) { msg = f.egoal; id = "f-goal"; }
    if (!msg && !r.market.trim()) { msg = f.emkt; id = "f-market"; }
    var e = $("#req-err", root); if (e) { e.textContent = msg; e.hidden = !msg; }
    [].forEach.call(root.querySelectorAll("#req input,#req textarea"), function (i) { i.removeAttribute("aria-invalid"); });
    if (msg) {
      var dd = $("#reqd", root); if (dd && !dd.open) { dd.open = true; st.reqOpen = true; }
      var el = id === "kind" ? root.querySelector("#req input[name=kind]") : $("#" + id, root);
      if (el) { el.setAttribute("aria-invalid", "true"); el.focus({ preventScroll: true }); }
      var box = $("#req", root); if (box) box.scrollIntoView({ block: "center" });
    }
    return !msg;
  }
  function reqSummary() {
    var f = FORMS[D.req], r = st.req, ns = D.scratch && r.nostore, o = [];
    if (ns) {
      o.push("Starting from scratch. " + f.name + ": " + r.name.trim() + ". " + f.sell + " " + r.sell.trim());
      if (f.kind && r.kind) o.push(f.kind[0] + ": " + (r.kind === "own" ? f.kind[1] : f.kind[2]));
    } else o.push(f.url + ": " + r.url.trim());
    if (f.goal) o.push("Goal: " + r.goal.trim());
    o.push(f.mkt + ": " + r.market.trim());
    return o.join(". ").slice(0, 900);
  }
  function lineFromState() {
    var p = P(), ad = picked();
    return { slug: D.slug, title: D.title, pkg: p.id, pname: p.name, adds: ad.map(function (a) { return a.id; }), addNames: ad.map(function (a) { return a.name; }), days: days(), price: total(), img: D.imgs[0], summary: reqSummary(), req: { nostore: !!(D.scratch && st.req.nostore), url: st.req.url, name: st.req.name, sell: st.req.sell, kind: st.req.kind, goal: st.req.goal, market: st.req.market } };
  }

  /* ---- cart ---- */
  function cart() { var c = jget(CK, []); return Array.isArray(c) ? c.filter(function (x) { return x && x.slug && x.price; }) : []; }
  function saveCart(c) { jset(CK, c); paintCart(); }
  function paintCart() {
    var c = cart(), n = c.length;
    [].forEach.call(document.querySelectorAll("[data-cartn]"), function (b) { b.hidden = !n; b.textContent = n; });
    if (!ui) return;
    var L = $("[data-lines]", ui);
    L.innerHTML = n ? c.map(function (x, i) { return '<div class="ln"><img src="' + img(x.img || 0) + '" alt=""><div><b>' + esc(x.title) + ": " + esc(x.pname) + "</b><small>" + esc(x.summary) + " " + x.days + "-day delivery" + (x.addNames && x.addNames.length ? ", " + esc(x.addNames.join(", ")) : "") + '.</small><button type="button" data-rm="' + i + '">Remove</button></div><b>' + usd(x.price) + "</b></div>"; }).join("") : '<p style="color:var(--muted);padding:18px 0">Your cart is empty. Choose a package to get started.</p>';
    $("[data-sub]", ui).textContent = usd(c.reduce(function (s, x) { return s + x.price; }, 0));
    $("[data-checkout]", ui).disabled = !n;
  }
  function openCart() { lastFocus = document.activeElement; paintCart(); $(".ov", ui).hidden = false; $(".drawer", ui).hidden = false; var e = $("[data-coerr]", ui); e.hidden = true; $(".x", ui).focus(); }
  function closeCart() { $(".ov", ui).hidden = true; $(".drawer", ui).hidden = true; if (lastFocus && document.contains(lastFocus)) lastFocus.focus(); }
  function addToCart() { var c = cart(); c.push(lineFromState()); saveCart(c); openCart(); }
  function persistReq() { jset(RK, { url: st.req.url, name: st.req.name, sell: st.req.sell, kind: st.req.kind, goal: st.req.goal, market: st.req.market }); }

  function checkout(lines, btn) {
    if (busy) return; busy = true;
    var old = btn && btn.innerHTML; if (btn) { btn.setAttribute("aria-busy", "true"); btn.textContent = "Opening checkout..."; }
    var done = function () { busy = false; if (btn) { btn.removeAttribute("aria-busy"); btn.innerHTML = old; } };
    var fail = function () {
      done();
      var msg = "We could not open checkout. Please try again, or send us a message and we will help.";
      var e = $("[data-coerr]", ui);
      if (!ui.querySelector(".drawer").hidden) { e.textContent = msg; e.hidden = false; }
      else { var re = $("#req-err", root); if (re) { re.textContent = msg; re.hidden = false; } }
    };
    var body = lines.map(function (x) { return { slug: x.slug, pkg: x.pkg, adds: x.adds, summary: x.summary }; });
    fetch("/_functions/svcCheckout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lines: body }) })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (j) {
        if (!j || !j.checkoutUrl) return fail();
        if (lines.length > 1 || lines.fromCart) jset(CK, []);
        location.href = j.checkoutUrl;
      })["catch"](fail);
  }

  /* ---- events ---- */
  function focusKey(a) {
    if (!a || a === document.body || !root || !root.contains(a)) return null;
    if (a.dataset && a.dataset.pk) return '[data-pk="' + a.dataset.pk + '"]';
    if (a.dataset && a.dataset.img) return '[data-img="' + a.dataset.img + '"]';
    if (a.id && /^f-/.test(a.id)) return "#" + a.id;
    if (a.name) return '[name="' + a.name + '"][value="' + a.value + '"]';
    return null;
  }
  function render() {
    var y = window.scrollY, key = focusKey(document.activeElement);
    root.innerHTML = view();
    window.scrollTo(0, y);
    if (key) { var n = root.querySelector(key); if (n) n.focus({ preventScroll: true }); }
    paintCart();
  }
  function bind() {
    root.addEventListener("click", function (e) {
      var t = e.target.closest("button,a"); if (!t) return;
      if (t.hasAttribute("data-hard") && !(e.metaKey || e.ctrlKey || e.shiftKey || e.button)) { e.preventDefault(); location.assign(t.getAttribute("href")); return; }
      if ("jump" in t.dataset) { var s = $(".stick", root); if (s) s.scrollIntoView({ block: "start" }); return; }
      if ("opencart" in t.dataset) { openCart(); return; }
      if (t.dataset.img) { st.img = +t.dataset.img; render(); return; }
      if (t.dataset.pk) { st.pkg = t.dataset.pk; render(); return; }
      if ("atc" in t.dataset) { if (reqCheck()) { persistReq(); addToCart(); } return; }
      if ("buy" in t.dataset) { if (reqCheck()) { persistReq(); checkout([lineFromState()], t); } return; }
    });
    root.addEventListener("toggle", function (e) { if (e.target.id === "reqd") st.reqOpen = e.target.open; }, true);
    root.addEventListener("input", function (e) {
      var k = { "f-url": "url", "f-name": "name", "f-sell": "sell", "f-market": "market", "f-goal": "goal" }[e.target.id];
      if (k) { st.req[k] = e.target.value; var er = $("#req-err", root); if (er) er.hidden = true; e.target.removeAttribute("aria-invalid"); }
    });
    root.addEventListener("change", function (e) {
      if (e.target.id === "f-no") { st.req.nostore = e.target.checked; var u = $("#f-url", root); if (u) u.disabled = st.req.nostore; var n = $("#newf", root); if (n) n.hidden = !st.req.nostore; var er = $("#req-err", root); if (er) er.hidden = true; return; }
      if (e.target.name === "kind") { st.req.kind = e.target.value; return; }
      if (e.target.name === "ad") { if (e.target.checked) st.add[e.target.value] = 1; else delete st.add[e.target.value]; render(); }
    });
    ui.addEventListener("click", function (e) {
      var t = e.target.closest("button"); if (!t) return;
      if ("closecart" in t.dataset) { closeCart(); return; }
      if (t.dataset.rm !== undefined) { var c = cart(); c.splice(+t.dataset.rm, 1); saveCart(c); return; }
      if ("checkout" in t.dataset) { var cc = cart(); if (cc.length) { cc.fromCart = true; checkout(cc, t); } return; }
    });
    ui.addEventListener("click", function (e) { if (e.target.classList.contains("ov")) closeCart(); });
    ui.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = [].slice.call($(".drawer", ui).querySelectorAll("button:not([disabled]),a[href]")), a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && ui && !$(".drawer", ui).hidden) closeCart(); });
  }

  /* ---- structured data ---- */
  function ld() {
    var P3 = pk(), th = FORMS[D.req].thing;
    var g = [
      { "@type": "Service", name: D.h1, serviceType: D.title, description: D.meta, url: location.origin + "/service/" + D.slug, areaServed: "Worldwide", provider: { "@type": "Organization", name: "Ecom Swift LLC", url: "https://www.ecomswiftllc.com" },
        offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: P3[0].price, highPrice: P3[2].price, offerCount: 3, offers: P3.map(function (p) { return { "@type": "Offer", name: D.title + ": " + p.name + " package, delivered in " + p.days + " days", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock", url: location.origin + "/service/" + D.slug }; }) } },
      { "@type": "FAQPage", mainEntity: faqs().map(function (f) { return { "@type": "Question", name: f[0], acceptedAnswer: { "@type": "Answer", text: f[1] } }; }) },
      { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], [D.pname, "/" + D.platform], [D.title, "/service/" + D.slug]].map(function (b, i) { return { "@type": "ListItem", position: i + 1, name: b[0], item: location.origin + b[1] }; }) }
    ];
    var s = document.getElementById("es-svc-ld");
    if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = "es-svc-ld"; document.head.appendChild(s); }
    s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": g });
  }

  /* ---- mount ---- */
  function takeover() {
    var sp = document.querySelector("#SITE_PAGES") || document.querySelector("#PAGES_CONTAINER") || document.querySelector("main");
    if (!sp) return false;
    [].forEach.call(sp.children, function (c) { if (c.id !== "es-svc") c.style.setProperty("display", "none", "important"); });
    if (!document.getElementById("es-svc")) {
      root = document.createElement("div"); root.id = "es-svc"; root.className = "es-svc"; sp.appendChild(root);
      ui = document.getElementById("es-svc-ui");
      if (!ui) { ui = document.createElement("div"); ui.id = "es-svc-ui"; ui.className = "es-svc"; document.body.appendChild(ui); }
      ui.innerHTML = uiHtml();
      bind(); return true;
    }
    return true;
  }
  function ensureCss() {
    if (document.getElementById("es-svc-css")) return;
    var l = document.createElement("link"); l.id = "es-svc-css"; l.rel = "stylesheet"; l.href = BASE + "svc.css?v=" + VER; document.head.appendChild(l);
    if (!document.getElementById("es-svc-font")) { var f = document.createElement("link"); f.id = "es-svc-font"; f.rel = "stylesheet"; f.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Manrope:wght@400;500;600;700&display=swap"; document.head.appendChild(f); }
  }
  function boot(d, slug) {
    D = d; D.slug = slug; mountedSlug = slug;
    var saved = jget(RK, {});
    st = { pkg: "standard", img: 0, add: {}, reqOpen: false, req: { nostore: false, url: saved.url || "", name: saved.name || "", sell: saved.sell || "", kind: saved.kind || "", goal: saved.goal || "", market: saved.market || "" } };
    ensureCss();
    if (!takeover()) { mountedSlug = ""; return; }
    render(); ld();
    document.documentElement.classList.add("es-svc-page");
  }
  function mount() {
    var slug = slugNow(); if (!slug) return;
    if (mountedSlug === slug && document.getElementById("es-svc") && D) { takeover(); return; }
    if (cache[slug] && cache[slug].then === undefined) { boot(cache[slug], slug); return; }
    if (cache[slug]) return;
    cache[slug] = fetch(BASE + "svc/" + slug + ".json?v=" + VER).then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); }).then(function (d) { cache[slug] = d; if (slugNow() === slug) boot(d, slug); })["catch"](function () { delete cache[slug]; });
  }
  var tm;
  function later() { clearTimeout(tm); tm = setTimeout(mount, 200); }
  try { new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { /* keep page usable */ }
  window.addEventListener("popstate", later);
  window.__esSvc.mount = mount;
  mount();
})();
