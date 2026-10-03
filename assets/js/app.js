/* ================= EDIT YOUR STORE DETAILS HERE ================= */
const CFG = {
  name: "Rangrez Fashion",
  season: "Festive Collection 2026",
  heroTitle: "Style that fits your story",
  heroSub: "Ethnic wear, western wear and everyday essentials. Pick your size and colour, then order on WhatsApp.",
  whatsapp: "919999999999",          // store owner's number: country code + number, no + or spaces
  phone: "+91 99999 99999",
  address: "Main Road, Your City, West Bengal",
  hours: "Open daily 10:30 AM – 9:00 PM",
  currency: "₹",
  adminPin: "1234",                  // CHANGE THIS. Owner PIN for the stock panel
  lowStock: 3                        // "Only N left" shows at or below this
};

/* Seasonal offers. 'ends' = last valid date (YYYY-MM-DD). Customers type the code in the order box. */
const OFFERS = [
  {title: "Festive Sale",     percent: 15, code: "FESTIVE15", ends: "2026-11-30", desc: "On all ethnic wear"},
  {title: "New Customer",     percent: 10, code: "WELCOME10", ends: "2026-12-31", desc: "On your first order"},
  {title: "Winter Clearance", percent: 20, code: "WINTER20",  ends: "2027-01-31", desc: "On jackets and sweaters"}
];

/* Products. img = file in assets/images/ (optional). stock = units per size. */
const COL = {Maroon:"#7b1e2b",Navy:"#1f2a55",Mustard:"#d9a21b",Black:"#1c1c1c",White:"#f4f4f2",Olive:"#6b7a3a",Pink:"#e58aa6",Sky:"#8ec5e8",Beige:"#d8c3a5",Green:"#2f7d57"};
const mk = (id,name,cat,price,mrp,icon,img,cols,sizes,stock,isNew=false) =>
  ({id,name,cat,price,mrp,icon,img,colors:cols.map(n=>({n,c:COL[n]})),sizes,stock,vis:true,isNew});
const PRODUCTS = [
  mk("p1","Floral Cotton Kurti","Women",799,1099,"👗","floral-kurti.jpg",["Maroon","Mustard","Navy"],["S","M","L","XL"],{S:6,M:9,L:5,XL:2},true),
  mk("p2","Anarkali Festive Suit","Women",1899,2599,"👘","anarkali-suit.jpg",["Maroon","Green"],["S","M","L","XL"],{S:3,M:4,L:2,XL:0},true),
  mk("p3","Palazzo Set","Women",999,1399,"👖","palazzo-set.jpg",["Black","Pink","Beige"],["M","L","XL"],{M:8,L:6,XL:4}),
  mk("p4","Printed Maxi Dress","Women",1299,1799,"👗","maxi-dress.jpg",["Sky","Pink"],["S","M","L"],{S:4,M:5,L:1}),
  mk("p5","Classic Formal Shirt","Men",899,1199,"👔","formal-shirt.jpg",["White","Sky","Navy"],["M","L","XL","XXL"],{M:10,L:12,XL:7,XXL:3}),
  mk("p6","Slim Fit Chinos","Men",1199,1599,"👖","chinos.jpg",["Olive","Beige","Black"],["30","32","34","36"],{"30":4,"32":8,"34":6,"36":2}),
  mk("p7","Festive Kurta Pyjama","Men",1599,2199,"🥻","kurta-pyjama.jpg",["Mustard","White","Maroon"],["M","L","XL"],{M:5,L:7,XL:3},true),
  mk("p8","Graphic Cotton T-Shirt","Men",499,699,"👕","tshirt.jpg",["Black","White","Olive"],["S","M","L","XL"],{S:12,M:15,L:11,XL:6}),
  mk("p9","Padded Winter Jacket","Men",2499,3499,"🧥","winter-jacket.jpg",["Black","Navy","Olive"],["M","L","XL"],{M:3,L:4,XL:2}),
  mk("p10","Kids Party Frock","Kids",899,1299,"👗","kids-frock.jpg",["Pink","Sky"],["2-3Y","4-5Y","6-7Y"],{"2-3Y":5,"4-5Y":4,"6-7Y":0}),
  mk("p11","Kids Cotton Tee Set","Kids",599,799,"👕","kids-tee-set.jpg",["Sky","Mustard"],["2-3Y","4-5Y","6-7Y","8-9Y"],{"2-3Y":8,"4-5Y":9,"6-7Y":6,"8-9Y":3}),
  mk("p12","Embroidered Dupatta","Accessories",449,649,"🧣","dupatta.jpg",["Maroon","Beige","Pink"],["Free"],{Free:14})
];
/* Small details shown on each product (card + product window) */
const DETAILS = {
  p1:{desc:"Light everyday kurti with a soft floral print. Easy to pair with leggings or palazzos.",fabric:"100% Cotton",fit:"Regular fit",care:"Machine wash cold"},
  p2:{desc:"Flowy festive Anarkali with embroidered neckline and matching dupatta.",fabric:"Georgette with lining",fit:"Flared fit",care:"Dry clean only"},
  p3:{desc:"Comfortable kurti-palazzo set for work, travel and casual outings.",fabric:"Rayon blend",fit:"Relaxed fit",care:"Hand wash cold"},
  p4:{desc:"Breezy printed maxi with a cinched waist and side pockets.",fabric:"Viscose crepe",fit:"A-line fit",care:"Gentle machine wash"},
  p5:{desc:"Crisp full-sleeve shirt that looks sharp from office to dinner.",fabric:"Cotton poplin",fit:"Regular fit",care:"Machine wash, iron medium"},
  p6:{desc:"Stretch chinos with a clean tapered leg. Smart-casual all day.",fabric:"Cotton with 2% elastane",fit:"Slim fit",care:"Machine wash cold"},
  p7:{desc:"Festive kurta with contrast pyjama and subtle thread detailing.",fabric:"Cotton silk blend",fit:"Regular fit",care:"Dry clean recommended"},
  p8:{desc:"Soft everyday tee with a durable graphic print that won't crack.",fabric:"180 GSM combed cotton",fit:"Regular fit",care:"Wash inside out"},
  p9:{desc:"Lightweight padded jacket with zip pockets, warm without the bulk.",fabric:"Polyester shell, fibre fill",fit:"Regular fit",care:"Machine wash gentle"},
  p10:{desc:"Twirl-ready party frock with soft net layers and a bow at the back.",fabric:"Cotton lining with net",fit:"Flared fit",care:"Hand wash cold"},
  p11:{desc:"Two-piece tee and shorts set, soft on sensitive skin.",fabric:"Single jersey cotton",fit:"Relaxed fit",care:"Machine wash cold"},
  p12:{desc:"Lightly embroidered dupatta that lifts any plain suit.",fabric:"Chanderi blend",fit:"Free size, 2.25 m",care:"Dry clean only"}
};
PRODUCTS.forEach(p => p.details = DETAILS[p.id]);
/* ================================================================= */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money = n => CFG.currency + Math.round(n).toLocaleString("en-IN");
const waLink = (text, num) => "https://wa.me/" + (num || "") + (text ? "?text=" + encodeURIComponent(text) : "");
const pageUrl = () => location.origin.startsWith("http") ? location.origin + location.pathname : "";
const KEY = "fashion_store_products_v1";

/* ---------- state ---------- */
function loadProducts() {
  try {
    const s = localStorage.getItem(KEY);
    if (s) { const d = JSON.parse(s); d.forEach(p => { if (!p.details) p.details = DETAILS[p.id] || {}; }); return d; }
  } catch (e) {}
  return JSON.parse(JSON.stringify(PRODUCTS));
}
function saveProducts() { try { localStorage.setItem(KEY, JSON.stringify(products)); } catch (e) {} }
let products = loadProducts();
let cart = [];            // {id,size,ci,qty}
let coupon = null;        // offer object
let cat = "All", query = "", sortBy = "new";
let sel = {id: null, size: null, ci: 0, qty: 1};

const findP = id => products.find(p => p.id === id);
const stockOf = (p, size) => Number(p.stock[size]) || 0;
const totalStock = p => p.sizes.reduce((s, z) => s + stockOf(p, z), 0);
const inCart = (id, size) => cart.filter(l => l.id === id && l.size === size).reduce((s, l) => s + l.qty, 0);
const today = () => new Date().toISOString().slice(0, 10);
const activeOffers = () => OFFERS.filter(o => o.ends >= today());
const offPct = p => p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
const fmtDate = d => new Date(d + "T00:00").toLocaleDateString("en-IN", {day: "numeric", month: "short"});

/* ---------- static content ---------- */
document.title = CFG.name + " — Catalog, Offers & WhatsApp Orders";
$("logo").textContent = CFG.name;
$("season").textContent = CFG.season;
$("hTitle").textContent = CFG.heroTitle;
$("hSub").textContent = CFG.heroSub;
$("addr").textContent = CFG.address;
$("hours").textContent = CFG.hours;
$("waBtn").href = waLink("Hi " + CFG.name + "! I have a question.", CFG.whatsapp);
$("callBtn").href = "tel:" + CFG.phone.replace(/\s/g, "");
$("callBtn").textContent = "Call " + CFG.phone;
$("foot").textContent = "© " + new Date().getFullYear() + " " + CFG.name;

/* ---------- offers ---------- */
function renderOffers() {
  const act = activeOffers();
  if (act.length) {
    $("topbar").hidden = false;
    $("topbar").textContent = `${act[0].title}: ${act[0].percent}% OFF with code ${act[0].code}. Ends ${fmtDate(act[0].ends)}`;
  }
  $("offerList").innerHTML = act.length ? act.map(o =>
    `<div class="offer"><b class="big">${o.percent}% OFF</b><b>${esc(o.title)}</b><div>${esc(o.desc)}</div>
     <span class="code" data-code="${esc(o.code)}" title="Click to copy">${esc(o.code)}</span>
     <small>Valid till ${fmtDate(o.ends)}</small></div>`).join("") : "<p>New offers coming soon.</p>";
}
$("offerList").addEventListener("click", e => {
  const c = e.target.closest("[data-code]"); if (!c) return;
  navigator.clipboard && navigator.clipboard.writeText(c.dataset.code);
  c.textContent = "Copied!"; setTimeout(() => c.textContent = c.dataset.code, 1200);
});

/* ---------- catalog grid ---------- */
function picHTML(p, ci) {
  const col = p.colors[ci] ? p.colors[ci].c : "#ddd";
  return `<div class="pic" style="background:${col}55">${p.icon}<img src="assets/images/${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()"></div>`;
}
const d0 = p => p.details || {};
function renderCats() {
  const cats = ["All", ...new Set(products.filter(p => p.vis).map(p => p.cat))];
  if (!cats.includes(cat)) cat = "All";
  $("cats").innerHTML = cats.map(c => `<button class="${c === cat ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}
function renderGrid() {
  let list = products.filter(p => p.vis && (cat === "All" || p.cat === cat) && p.name.toLowerCase().includes(query.toLowerCase()));
  if (sortBy === "lo") list.sort((a, b) => a.price - b.price);
  else if (sortBy === "hi") list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  $("empty").hidden = list.length > 0;
  $("grid").innerHTML = list.map(p => {
    const t = totalStock(p), d = offPct(p);
    const badge = t === 0 ? `<span class="badge out">Sold out</span>`
      : t <= CFG.lowStock ? `<span class="badge warn">Only ${t} left</span>`
      : d ? `<span class="badge">${d}% OFF</span>` : (p.isNew ? `<span class="badge">New</span>` : "");
    return `<article class="card ${t === 0 ? "soldout" : ""}" data-id="${p.id}">
      <div style="position:relative">${badge}${picHTML(p, 0)}</div>
      <div class="info"><h3>${esc(p.name)}</h3>
        <div class="price"><b>${money(p.price)}</b>${p.mrp > p.price ? `<s>${money(p.mrp)}</s>` : ""}</div>
        <div class="short">${esc([d0(p).fabric, d0(p).fit].filter(Boolean).join(" · "))}</div>
        <div class="dots">${p.colors.map(c => `<span class="dot" style="background:${c.c}" title="${esc(c.n)}"></span>`).join("")}</div>
        <button class="btn qadd" data-quick="${p.id}" ${t === 0 ? "disabled" : ""}>${t === 0 ? "Sold out" : "Add to cart"}</button>
      </div></article>`;
  }).join("");
}
$("cats").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { cat = b.dataset.c; renderCats(); renderGrid(); } });
$("q").addEventListener("input", e => { query = e.target.value; renderGrid(); });
$("sort").addEventListener("change", e => { sortBy = e.target.value; renderGrid(); });
$("grid").addEventListener("click", e => {
  const q = e.target.closest("[data-quick]");
  if (q) { if (!q.disabled) openProduct(q.dataset.quick); return; }
  const c = e.target.closest(".card"); if (c) openProduct(c.dataset.id);
});

/* ---------- product dialog ---------- */
function openProduct(id) {
  const p = findP(id);
  const first = p.sizes.find(s => stockOf(p, s) > 0) || null;
  sel = {id, size: first, ci: 0, qty: 1};
  renderPD(); $("pd").showModal();
}
function renderPD() {
  const p = findP(sel.id), left = sel.size ? stockOf(p, sel.size) - inCart(p.id, sel.size) : 0;
  const stockTxt = !sel.size ? `<div class="stock none">Currently sold out</div>`
    : left <= 0 ? `<div class="stock none">Maximum quantity already in your order</div>`
    : left <= CFG.lowStock ? `<div class="stock low">Only ${left} left in size ${esc(sel.size)}</div>`
    : `<div class="stock">In stock</div>`;
  $("pdBody").innerHTML = `
    <div class="pdgrid">
      ${picHTML(p, sel.ci)}
      <div>
        <h3>${esc(p.name)}</h3>
        <div class="price"><b>${money(p.price)}</b>${p.mrp > p.price ? `<s>${money(p.mrp)}</s> <span style="color:var(--accent);font-weight:700">${offPct(p)}% off</span>` : ""}</div>
        <div class="opts"><b>Colour: ${esc(p.colors[sel.ci].n)}</b>
          <div class="chips">${p.colors.map((c, i) => `<button class="sw ${i === sel.ci ? "on" : ""}" data-ci="${i}" style="background:${c.c}" aria-label="${esc(c.n)}"></button>`).join("")}</div></div>
        <div class="opts"><b>Size</b>
          <div class="chips">${p.sizes.map(s => `<button class="chip ${s === sel.size ? "on" : ""}" data-size="${esc(s)}" ${stockOf(p, s) <= 0 ? "disabled" : ""}>${esc(s)}</button>`).join("")}</div></div>
        ${stockTxt}
        <div class="opts"><b>Quantity</b><div class="qty"><button data-q="-1">−</button><b>${sel.qty}</b><button data-q="1">+</button></div></div>
      </div>
    </div>
    <div class="det">
      ${d0(p).desc ? `<p>${esc(d0(p).desc)}</p>` : ""}
      <table>
        ${d0(p).fabric ? `<tr><td>Fabric</td><td>${esc(d0(p).fabric)}</td></tr>` : ""}
        ${d0(p).fit ? `<tr><td>Fit</td><td>${esc(d0(p).fit)}</td></tr>` : ""}
        ${d0(p).care ? `<tr><td>Care</td><td>${esc(d0(p).care)}</td></tr>` : ""}
        <tr><td>Category</td><td>${esc(p.cat)}</td></tr>
        <tr><td>Colours</td><td>${esc(p.colors.map(c => c.n).join(", "))}</td></tr>
      </table>
    </div>
    <div class="actions">
      <button class="btn ghost" data-act="close">Close</button>
      <button class="btn ghost" data-act="share">Share on WhatsApp</button>
      <button class="btn wa grow" data-act="add" ${left <= 0 ? "disabled" : ""}>Add to cart</button>
    </div>`;
}
$("pdBody").addEventListener("click", e => {
  const p = findP(sel.id), t = e.target.closest("button"); if (!t) return;
  if (t.dataset.ci !== undefined) sel.ci = +t.dataset.ci;
  else if (t.dataset.size) { sel.size = t.dataset.size; sel.qty = 1; }
  else if (t.dataset.q) {
    const max = sel.size ? stockOf(p, sel.size) - inCart(p.id, sel.size) : 0;
    sel.qty = Math.min(Math.max(1, sel.qty + +t.dataset.q), Math.max(1, max));
  } else if (t.dataset.act === "close") return $("pd").close();
  else if (t.dataset.act === "share") return window.open(waLink(productText(p)), "_blank");
  else if (t.dataset.act === "add") {
    const max = stockOf(p, sel.size) - inCart(p.id, sel.size);
    const q = Math.min(sel.qty, max);
    const ex = cart.find(l => l.id === p.id && l.size === sel.size && l.ci === sel.ci);
    if (ex) ex.qty += q; else cart.push({id: p.id, size: sel.size, ci: sel.ci, qty: q});
    updateCart(); $("pd").close();
    toast(`Added to cart: ${p.name} (${p.colors[sel.ci].n}, ${sel.size})`); return;
  }
  renderPD();
});
$("pd").addEventListener("click", e => { if (e.target === $("pd")) $("pd").close(); });

function toast(msg) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- WhatsApp catalog sharing ---------- */
function productText(p) {
  const sizes = p.sizes.filter(s => stockOf(p, s) > 0).join(", ") || "Sold out";
  return `*${p.name}* — ${money(p.price)}${p.mrp > p.price ? ` (MRP ${money(p.mrp)})` : ""}\nColours: ${p.colors.map(c => c.n).join(", ")}\nSizes: ${sizes}\n${pageUrl()}\n\nFrom ${CFG.name}`;
}
function catalogText() {
  let t = `*${CFG.name} — Catalog*\n`;
  const off = activeOffers()[0];
  if (off) t += `${off.title}: ${off.percent}% OFF, code ${off.code}\n`;
  const list = products.filter(p => p.vis && totalStock(p) > 0 && (cat === "All" || p.cat === cat));
  [...new Set(list.map(p => p.cat))].forEach(c => {
    t += `\n*${c}*\n`;
    list.filter(p => p.cat === c).forEach(p => {
      t += `• ${p.name} — ${money(p.price)} | ${p.colors.map(x => x.n).join("/")} | ${p.sizes.filter(s => stockOf(p, s) > 0).join(",")}\n`;
    });
  });
  return t + `\nOrder here: ${pageUrl()}`;
}
const shareCatalog = () => window.open(waLink(catalogText()), "_blank");
$("shareCatalog").onclick = shareCatalog;
$("shareCatalogHero").onclick = shareCatalog;

/* ---------- cart + order ---------- */
function lineTotal(l) { return findP(l.id).price * l.qty; }
function calc() {
  const sub = cart.reduce((s, l) => s + lineTotal(l), 0);
  const disc = coupon ? Math.round(sub * coupon.percent / 100) : 0;
  return {sub, disc, total: sub - disc};
}
function updateCart() {
  const count = cart.reduce((s, l) => s + l.qty, 0);
  $("cartbar").classList.toggle("show", count > 0);
  $("cartTxt").textContent = `${count} ${count === 1 ? "item" : "items"} · ${money(calc().total)}`;
  if ($("od").open) renderOrder();
  if (!count && $("od").open) $("od").close();
}
function renderOrder() {
  $("oLines").innerHTML = cart.map((l, i) => {
    const p = findP(l.id);
    return `<div class="line"><span>${l.qty} × ${esc(p.name)}<br><small>${esc(p.colors[l.ci].n)} · ${esc(l.size)}</small></span>
      <span>${money(lineTotal(l))}<br><button class="x" data-rm="${i}">Remove</button></span></div>`;
  }).join("");
  const c = calc();
  $("oTotals").innerHTML = `<div><span>Subtotal</span><span>${money(c.sub)}</span></div>` +
    (coupon ? `<div><span>${esc(coupon.code)} (${coupon.percent}% off)</span><span>− ${money(c.disc)}</span></div>` : "") +
    `<div class="tot"><span>Total</span><span>${money(c.total)}</span></div>`;
}
$("cartBtn").onclick = () => { renderOrder(); $("od").showModal(); };
$("oClose").onclick = () => $("od").close();
$("oLines").addEventListener("click", e => {
  const b = e.target.closest("[data-rm]"); if (!b) return;
  cart.splice(+b.dataset.rm, 1); updateCart();
});
$("oApply").onclick = () => {
  const code = $("oCode").value.trim().toUpperCase(), o = activeOffers().find(x => x.code === code);
  coupon = o || null;
  $("oMsg").className = "msg" + (o ? "" : " bad");
  $("oMsg").textContent = o ? `Code applied: ${o.percent}% off` : "Invalid or expired code";
  updateCart(); renderOrder();
};
$("oSend").onclick = () => {
  if (!cart.length) return;
  const c = calc();
  let m = `*New order — ${CFG.name}*\nName: ${$("oName").value.trim() || "-"}\nAddress/Pickup: ${$("oAddr").value.trim() || "-"}\n\n`;
  m += cart.map(l => { const p = findP(l.id); return `${l.qty} x ${p.name} (${p.colors[l.ci].n}, ${l.size}) — ${money(lineTotal(l))}`; }).join("\n");
  m += `\n\nSubtotal: ${money(c.sub)}`;
  if (coupon) m += `\nCode ${coupon.code}: − ${money(c.disc)}`;
  m += `\n*Total: ${money(c.total)}*`;
  window.open(waLink(m, CFG.whatsapp), "_blank");
};

/* ---------- owner stock panel ---------- */
$("adminBtn").onclick = () => {
  const pin = prompt("Enter owner PIN");
  if (pin === null) return;
  if (pin !== CFG.adminPin) return alert("Wrong PIN");
  renderAdmin(); $("ad").showModal();
};
function renderAdmin() {
  $("adBody").innerHTML = `
    <h3>Inventory & products</h3>
    <p class="note">Changes save on this device and update the shop instantly. Use Export to keep a backup or move stock to another device.</p>
    <div class="scroll"><table class="adm"><tr><th>Product</th><th>Price</th><th>Stock by size</th><th>Show</th><th></th></tr>
    ${products.map(p => `<tr>
      <td class="nm">${esc(p.name)}<br><small>${esc(p.cat)}</small></td>
      <td><input type="number" min="0" data-id="${p.id}" data-k="price" value="${p.price}"></td>
      <td>${p.sizes.map(s => `<label style="display:inline-block;margin:0 6px 4px 0;font-size:12px">${esc(s)}<br><input type="number" min="0" data-id="${p.id}" data-k="stock" data-s="${esc(s)}" value="${stockOf(p, s)}"></label>`).join("")}</td>
      <td><input type="checkbox" data-id="${p.id}" data-k="vis" ${p.vis ? "checked" : ""}></td>
      <td><button class="link" data-del="${p.id}">Delete</button></td></tr>`).join("")}
    </table></div>
    <h3 style="margin-top:18px;font-size:18px">Add product</h3>
    <div class="addform" id="af">
      <input name="name" placeholder="Product name">
      <input name="cat" placeholder="Category (e.g. Women)">
      <input name="price" type="number" placeholder="Price">
      <input name="mrp" type="number" placeholder="MRP (optional)">
      <input name="colors" placeholder="Colours: Maroon, Navy">
      <input name="sizes" placeholder="Sizes: S, M, L">
      <input name="qty" type="number" placeholder="Stock per size">
      <input name="img" placeholder="Image file (optional)">
      <input name="fabric" placeholder="Fabric (e.g. Cotton)">
      <input name="fit" placeholder="Fit (e.g. Regular fit)">
      <input name="care" placeholder="Care (e.g. Machine wash)">
      <input name="desc" placeholder="Short description">
    </div>
    <div class="actions">
      <button class="btn dark" data-a="add">Add product</button>
      <button class="btn ghost" data-a="export">Export backup</button>
      <button class="btn ghost" data-a="import">Import</button>
      <button class="btn ghost" data-a="reset">Reset to defaults</button>
      <button class="btn ghost" data-a="close">Close</button>
    </div>
    <input type="file" id="impFile" accept=".json" hidden>
    <p class="note">Stock is stored in this browser only. Customers on other devices see the default stock from the code, so publish updated numbers by editing PRODUCTS in app.js, or ask us to connect a shared database/Google Sheet.</p>`;
}
function refresh() { saveProducts(); renderCats(); renderGrid(); }
$("adBody").addEventListener("change", e => {
  const t = e.target, p = findP(t.dataset.id); if (!p) return;
  if (t.dataset.k === "price") p.price = Math.max(0, +t.value || 0);
  if (t.dataset.k === "stock") p.stock[t.dataset.s] = Math.max(0, parseInt(t.value, 10) || 0);
  if (t.dataset.k === "vis") p.vis = t.checked;
  refresh();
});
$("adBody").addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.del) {
    if (confirm("Delete this product?")) { products = products.filter(p => p.id !== t.dataset.del); cart = cart.filter(l => l.id !== t.dataset.del); refresh(); renderAdmin(); updateCart(); }
    return;
  }
  const a = t.dataset.a;
  if (a === "close") $("ad").close();
  else if (a === "reset") { if (confirm("Reset all products and stock to defaults?")) { products = JSON.parse(JSON.stringify(PRODUCTS)); cart = []; refresh(); renderAdmin(); updateCart(); } }
  else if (a === "export") {
    const l = document.createElement("a");
    l.href = URL.createObjectURL(new Blob([JSON.stringify(products, null, 2)], {type: "application/json"}));
    l.download = "store-products-backup.json"; l.click();
  } else if (a === "import") $("impFile").click();
  else if (a === "add") {
    const g = n => document.querySelector(`#af [name=${n}]`).value.trim();
    const list = v => v.split(",").map(x => x.trim()).filter(Boolean);
    const sizes = list(g("sizes")), cols = list(g("colors"));
    if (!g("name") || !(+g("price") > 0) || !sizes.length || !cols.length) return alert("Enter name, price, at least one colour and one size.");
    const stock = {}; sizes.forEach(s => stock[s] = Math.max(0, parseInt(g("qty"), 10) || 0));
    products.unshift({id: "p" + Date.now(), name: g("name"), cat: g("cat") || "Other", price: +g("price"), mrp: +g("mrp") || +g("price"), icon: "🛍️",
      img: g("img") || "none.jpg", colors: cols.map(n => ({n, c: COL[n] || COL[n[0].toUpperCase() + n.slice(1).toLowerCase()] || "#999"})), sizes, stock, vis: true, isNew: true,
      details: {fabric: g("fabric"), fit: g("fit"), care: g("care"), desc: g("desc")}});
    refresh(); renderAdmin();
  }
});
$("adBody").addEventListener("change", e => {
  if (e.target.id !== "impFile" || !e.target.files[0]) return;
  const r = new FileReader();
  r.onload = () => { try { const d = JSON.parse(r.result); if (!Array.isArray(d)) throw 0; products = d; cart = []; refresh(); renderAdmin(); updateCart(); } catch (x) { alert("Invalid backup file"); } };
  r.readAsText(e.target.files[0]);
});

/* ---------- init ---------- */
renderOffers(); renderCats(); renderGrid(); updateCart();
