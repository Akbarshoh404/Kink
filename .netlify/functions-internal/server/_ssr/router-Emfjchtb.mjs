import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { u as useTranslation, i as initReactI18next } from "../_libs/react-i18next.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, M as Minus, P as Plus, T as Trash2, a as Tag, S as ShoppingBag, H as Heart } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PROMO_CODES = {
  KINK10: 0.1,
  KINK15: 0.15,
  VIP20: 0.2
};
const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      promoCode: null,
      promoDiscount: 0,
      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.size === item.size && i.color === item.color
          );
          if (existing) {
            return {
              items: state.items.map(
                (i) => i.productId === item.productId && i.size === item.size && i.color === item.color ? { ...i, quantity: i.quantity + item.quantity } : i
              )
            };
          }
          return { items: [...state.items, item] };
        });
      },
      removeItem: (productId, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size && i.color === color)
          )
        }));
      },
      updateQuantity: (productId, size, color, qty) => {
        if (qty <= 0) {
          get().removeItem(productId, size, color);
          return;
        }
        set((state) => ({
          items: state.items.map(
            (i) => i.productId === productId && i.size === size && i.color === color ? { ...i, quantity: qty } : i
          )
        }));
      },
      clearCart: () => set({ items: [], promoCode: null, promoDiscount: 0 }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      applyPromo: (code) => {
        const discount = PROMO_CODES[code.toUpperCase()];
        if (discount) {
          set({ promoCode: code.toUpperCase(), promoDiscount: discount });
          return true;
        }
        return false;
      },
      removePromo: () => set({ promoCode: null, promoDiscount: 0 }),
      getSubtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().promoDiscount;
        return subtotal * (1 - discount);
      },
      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0)
    }),
    { name: "kink-cart" }
  )
);
const productsData = /* @__PURE__ */ JSON.parse(`[{"id":"p001","name":"Air Force 1 '07","brand":"Nike","price":1450000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":["BESTSELLER"],"images":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6da4186-4c37-4234-8bfa-26c0a86df85f/air-force-1-07-shoes-WrLlWX.png","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png"],"colors":["White","Black","Triple Black"],"sizes":["39","40","41","42","43","44","45"],"stock":{"39":3,"40":6,"41":8,"42":10,"43":7,"44":4,"45":2},"description":"A classic that never goes out of style. The AF1 defined a generation and still runs the block. Full-grain leather upper, Air-Sole unit, and the cleanest silhouette in the game.","fabric":"Full-grain leather upper, rubber outsole","care":"Wipe with damp cloth. Use sneaker cleaner for deep cleans.","origin":"Vietnam","rating":4.9,"reviewCount":312,"featured":true,"releaseOrder":20,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p002","name":"Dunk Low Panda","brand":"Nike","price":1650000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":["NEW","HOT"],"images":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b49280b-f77e-4e54-88f1-4e97879a5817/dunk-low-retro-shoes-WrLlWX.png","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/85f87ede-1085-4b46-a900-8fb35007f5d0/dunk-low-retro-shoes-WrLlWX.png"],"colors":["Black/White"],"sizes":["40","41","42","43","44"],"stock":{"40":2,"41":3,"42":4,"43":2,"44":1},"description":"The most-wanted Dunk of the decade. Classic Panda colorway in black and white leather. Padded collar, low profile, iconic.","fabric":"Leather upper, foam midsole, rubber outsole","care":"Spot clean with sneaker cleaner. Air dry.","origin":"China","rating":4.8,"reviewCount":198,"featured":true,"releaseOrder":19,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p003","name":"Samba OG","brand":"Adidas","price":1390000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":["HOT"],"images":["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbab5c7e1afb45de8613ae5c00c3a77e_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/59004b2a4e1b4e0e8a0dae4200898e11_9366/Samba_OG_Shoes_Black_B75807_02_standard_hover.jpg"],"colors":["Black/White","White/Black","Green"],"sizes":["39","40","41","42","43","44","45"],"stock":{"39":5,"40":7,"41":9,"42":11,"43":8,"44":5,"45":3},"description":"Originally built for indoor football in the 50s. Now it's the shoe of the moment. Suede overlays, gum sole, and a profile that works with everything.","fabric":"Leather and suede upper, rubber cupsole","care":"Brush suede with suede brush. Leather wipe with damp cloth.","origin":"China","rating":4.8,"reviewCount":245,"featured":true,"releaseOrder":18,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p004","name":"Jordan 1 Mid","brand":"Jordan","price":1890000,"originalPrice":null,"category":"Sneakers","subcategory":"Mid-Top","tags":["HOT"],"images":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/be0e0a5a-7f93-4efa-a7cf-c5b6b38a1636/jordan-1-mid-shoes-X5pM3n.png","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/52b3a2c9-7b1c-4e5f-8d20-3d6d0ccd0e67/jordan-1-mid-shoes.png"],"colors":["Black/Gym Red/White","University Blue"],"sizes":["40","41","42","43","44","45"],"stock":{"40":2,"41":3,"42":5,"43":4,"44":2,"45":1},"description":"The Jordan 1 Mid keeps the iconic heritage of the original with a mid-cut silhouette. Premium leather, Air-Sole unit, and the Wings logo on the collar.","fabric":"Leather upper, Air-Sole unit, rubber outsole","care":"Wipe with damp cloth. Use sneaker protector spray.","origin":"Vietnam","rating":4.7,"reviewCount":176,"featured":true,"releaseOrder":17,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p005","name":"550 White/Green","brand":"New Balance","price":1750000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":["NEW"],"images":["https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&fmt=webp&wid=880&hei=880","https://nb.scene7.com/is/image/NB/bb550wt1_nb_05_i?$pdpflexf2$&fmt=webp&wid=880&hei=880"],"colors":["White/Green","White/Grey","Cream"],"sizes":["39","40","41","42","43","44"],"stock":{"39":4,"40":6,"41":8,"42":7,"43":5,"44":3},"description":"Originally designed for basketball in 1989. Back with a court-ready silhouette and a leather upper that ages beautifully. One of the cleanest shoes of the year.","fabric":"Leather upper, foam midsole, rubber outsole","care":"Wipe with dry cloth. Spot clean with mild soap.","origin":"China","rating":4.8,"reviewCount":134,"featured":true,"releaseOrder":16,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p006","name":"Gel-Kayano 14","brand":"Asics","price":1690000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":["NEW"],"images":["https://images.asics.com/is/image/asics/1201A019_020_SR_RT_GLB?$zoom$&wid=900&hei=600","https://images.asics.com/is/image/asics/1201A019_020_SR_LT_GLB?$zoom$&wid=900&hei=600"],"colors":["Cream/Gold","Black/Silver","Blue"],"sizes":["39","40","41","42","43","44","45"],"stock":{"39":3,"40":5,"41":7,"42":9,"43":6,"44":4,"45":2},"description":"The GEL-KAYANO™ 14 is back. Y2K-era silhouette with GEL technology in both the heel and forefoot. Runs the street as hard as it ran the track.","fabric":"Mesh and leather upper, GEL cushioning, rubber outsole","care":"Remove insoles, hand wash with mild detergent. Air dry.","origin":"Vietnam","rating":4.9,"reviewCount":221,"featured":true,"releaseOrder":15,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p007","name":"Old Skool","brand":"Vans","price":890000,"originalPrice":null,"category":"Sneakers","subcategory":"Low-Top","tags":[],"images":["https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$1600x1600$","https://images.vans.com/is/image/VansEU/VN000D3HY28-ALT1?$1600x1600$"],"colors":["Black/White","True White","Navy"],"sizes":["38","39","40","41","42","43","44"],"stock":{"38":4,"39":7,"40":9,"41":10,"42":8,"43":6,"44":4},"description":"The Original since '77. Sturdy canvas upper, the iconic sidestripe, and a waffle outsole built for the streets. Nothing more, nothing less.","fabric":"Canvas upper, vulcanized rubber outsole","care":"Machine wash cold, air dry. Do not tumble dry.","origin":"China","rating":4.7,"reviewCount":389,"featured":false,"releaseOrder":14,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p008","name":"Suede Classic XXI","brand":"Puma","price":980000,"originalPrice":1200000,"category":"Sneakers","subcategory":"Low-Top","tags":["SALE"],"images":["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/374915/01/bv/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers"],"colors":["Peacoat/White","Black/Black","Archive Beige"],"sizes":["39","40","41","42","43","44"],"stock":{"39":6,"40":8,"41":10,"42":9,"43":7,"44":5},"description":"The Suede has been a street icon since 1968. Soft suede upper, formstrip on the side, and a cupsole that's served skaters, b-boys, and block kids for decades.","fabric":"Suede upper, rubber outsole","care":"Brush with suede brush. Use suede protector spray.","origin":"Vietnam","rating":4.6,"reviewCount":143,"featured":false,"releaseOrder":13,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p009","name":"Tech Fleece Hoodie","brand":"Nike","price":1290000,"originalPrice":null,"category":"Apparel","subcategory":"Hoodies","tags":["NEW"],"images":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-09b8b64a-4df8-41bc-ae41-da78f940c863/sportswear-tech-fleece-full-zip-hoodie-VwnjDp.png","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-4de7e0a2-8a8f-4d27-be32-8ad6e0e73b7f/sportswear-tech-fleece-full-zip-hoodie-VwnjDp.png"],"colors":["Black","Dark Grey","Navy"],"sizes":["S","M","L","XL","XXL"],"stock":{"S":8,"M":12,"L":15,"XL":10,"XXL":6},"description":"Nike's signature Tech Fleece keeps you warm without the bulk. Double-layer construction, zip pockets, and a tapered silhouette built for the city.","fabric":"59% Cotton / 38% Polyester / 3% Elastane","care":"Machine wash cold. Do not bleach. Tumble dry low.","origin":"Bangladesh","rating":4.8,"reviewCount":167,"featured":true,"releaseOrder":12,"delivery":"1–3 business days","modelHeight":"182 cm","modelWears":"Size L"},{"id":"p010","name":"Trefoil Oversized Tee","brand":"Adidas","price":390000,"originalPrice":null,"category":"Apparel","subcategory":"T-Shirts","tags":[],"images":["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/37e40a15c1444e048939a9d500a3c538_9366/Trefoil_T-Shirt_White_IC9298_21_model.jpg","https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ef4a3e07a9e4f04965dae97011c38fe_9366/Trefoil_T-Shirt_White_IC9298_01_laydown.jpg"],"colors":["White","Black","Grey","Beige"],"sizes":["XS","S","M","L","XL","XXL"],"stock":{"XS":10,"S":15,"M":20,"L":18,"XL":12,"XXL":8},"description":"100% cotton oversized tee with the iconic Trefoil logo. Clean, versatile, and built to last. The foundation of every fit.","fabric":"100% Cotton","care":"Machine wash warm. Do not bleach. Tumble dry medium.","origin":"Bangladesh","rating":4.6,"reviewCount":293,"featured":false,"releaseOrder":11,"delivery":"1–3 business days","modelHeight":"180 cm","modelWears":"Size L"},{"id":"p011","name":"KINK Logo Tee","brand":"KINK","price":320000,"originalPrice":null,"category":"Apparel","subcategory":"T-Shirts","tags":["NEW"],"images":["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=90","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=90"],"colors":["Black","White","Washed Grey"],"sizes":["S","M","L","XL"],"stock":{"S":12,"M":18,"L":20,"XL":14},"description":"The official KINK logo tee. Heavy 220g cotton, screen-printed logo that won't crack or fade. Represent the store.","fabric":"100% Cotton 220g/m²","care":"Machine wash cold, inside out. Air dry.","origin":"Uzbekistan","rating":4.9,"reviewCount":88,"featured":true,"releaseOrder":10,"delivery":"Same day pickup / 1–2 days delivery","modelHeight":"180 cm","modelWears":"Size L"},{"id":"p012","name":"Slim Taper Jeans","brand":"KINK","price":780000,"originalPrice":null,"category":"Apparel","subcategory":"Jeans","tags":["NEW"],"images":["https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=90","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=90"],"colors":["Washed Black","Indigo","Light Wash"],"sizes":["28","29","30","31","32","33","34","36"],"stock":{"28":5,"29":7,"30":9,"31":10,"32":11,"33":8,"34":6,"36":4},"description":"KINK house denim. Slim through the thigh, tapered at the ankle. 12.5oz Japanese-style denim that stretches just enough.","fabric":"98% Cotton / 2% Elastane","care":"Machine wash cold, inside out. Hang to dry.","origin":"Uzbekistan","rating":4.7,"reviewCount":64,"featured":true,"releaseOrder":9,"delivery":"Same day pickup / 1–2 days delivery","modelHeight":"180 cm","modelWears":"Size 32"},{"id":"p013","name":"Heritage Snapback","brand":"New Era","price":490000,"originalPrice":null,"category":"Accessories","subcategory":"Headwear","tags":[],"images":["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=90","https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=90"],"colors":["Black","Navy","Grey"],"sizes":["ONE SIZE"],"stock":{"ONE SIZE":30},"description":"New Era 9FIFTY snapback with structured front panel, flat brim, and adjustable snap closure. The finishing touch.","fabric":"100% Polyester","care":"Hand wash only. Air dry.","origin":"Bangladesh","rating":4.6,"reviewCount":95,"featured":false,"releaseOrder":8,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p014","name":"Crew Socks 3-Pack","brand":"Nike","price":190000,"originalPrice":null,"category":"Accessories","subcategory":"Socks","tags":[],"images":["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6aa1c16d-50cc-4d9e-9a56-8b3e8f4d2d1d/everyday-cushioned-training-crew-socks-3-pairs-rBfLHX.png","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8c3a1b2d-4e5f-6a7b-8c9d-0e1f2a3b4c5d/everyday-cushioned-training-crew-socks.png"],"colors":["White 3-Pack","Black 3-Pack","Mixed"],"sizes":["S (35–38)","M (39–42)","L (43–46)"],"stock":{"S (35–38)":20,"M (39–42)":25,"L (43–46)":20},"description":"Nike Everyday Crew Socks in a 3-pack. Cushioned footbed, arch support, and moisture-wicking fabric. The socks you put on without thinking.","fabric":"76% Cotton / 22% Polyester / 2% Spandex","care":"Machine wash warm. Tumble dry medium.","origin":"China","rating":4.8,"reviewCount":412,"featured":false,"releaseOrder":7,"delivery":"1–3 business days","modelHeight":null,"modelWears":null},{"id":"p015","name":"Track Jacket","brand":"Puma","price":690000,"originalPrice":890000,"category":"Apparel","subcategory":"Jackets","tags":["SALE"],"images":["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/586745/01/mod01/fnd/PNA/fmt/png/T7-Track-Jacket","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/586745/01/sv01/fnd/PNA/fmt/png/T7-Track-Jacket"],"colors":["Black/Gold","Navy/White","Red/White"],"sizes":["XS","S","M","L","XL"],"stock":{"XS":3,"S":6,"M":8,"L":7,"XL":4},"description":"Puma retro track jacket. Woven fabric, full zip, side pockets, and the iconic formstrip on the sleeves. Classic energy.","fabric":"100% Polyester woven","care":"Machine wash cold. Do not iron on print.","origin":"Vietnam","rating":4.5,"reviewCount":78,"featured":false,"releaseOrder":6,"delivery":"1–3 business days","modelHeight":"180 cm","modelWears":"Size L"},{"id":"p016","name":"Chuck 70 Hi","brand":"Converse","price":790000,"originalPrice":null,"category":"Sneakers","subcategory":"High-Top","tags":[],"images":["https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw5a3c8f3a/images/a_107/162050C_A_107X1.jpg?sw=1200","https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwa1c2b3d4/images/a_107/162050C_A_107X3.jpg?sw=1200"],"colors":["Black Hi","White Hi","Egret"],"sizes":["37","38","39","40","41","42","43","44"],"stock":{"37":4,"38":6,"39":8,"40":10,"41":9,"42":7,"43":5,"44":3},"description":"The Chuck 70 takes the original All Star and turns it up a notch. Higher quality materials, cushioned sockliner, and a slightly thicker rubber sole.","fabric":"Durable canvas upper, vulcanized rubber outsole","care":"Remove laces, machine wash cold. Air dry.","origin":"Vietnam","rating":4.7,"reviewCount":201,"featured":false,"releaseOrder":5,"delivery":"1–3 business days","modelHeight":null,"modelWears":null}]`);
const products = productsData;
const allCategories = Array.from(new Set(products.map((p) => p.category))).sort();
const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
const formatPrice = (n) => new Intl.NumberFormat("ru-RU").format(n) + " UZS";
const getProductById = (id) => products.find((p) => p.id === id);
const getFeatured = () => products.filter((p) => p.featured);
const getRelated = (product, limit = 4) => products.filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, limit);
function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getSubtotal, getTotal, promoCode, promoDiscount, applyPromo, removePromo } = useCartStore();
  const [promoInput, setPromoInput] = reactExports.useState("");
  const [promoError, setPromoError] = reactExports.useState(false);
  const { t } = useTranslation();
  const handlePromo = () => {
    const ok = applyPromo(promoInput);
    if (!ok) setPromoError(true);
    else {
      setPromoError(false);
      setPromoInput("");
    }
  };
  const subtotal = getSubtotal();
  const total = getTotal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm",
        onClick: closeCart
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", stiffness: 320, damping: 34 },
        className: "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl tracking-widest text-foreground", children: t("cart_title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 font-mono text-xs text-muted-foreground", children: [
                "(",
                items.length,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeCart, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-4 px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-muted-foreground", children: t("cart_empty") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("cart_empty_sub") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop",
                onClick: closeCart,
                className: "mt-2 border border-border px-8 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors",
                children: t("cart_shop_now")
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-20 flex-shrink-0 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: item.brand }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm font-medium text-foreground leading-tight", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 font-mono text-[10px] text-muted-foreground", children: [
                  item.size,
                  " · ",
                  item.color
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => updateQuantity(item.productId, item.size, item.color, item.quantity - 1),
                      className: "flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs w-4 text-center", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => updateQuantity(item.productId, item.size, item.color, item.quantity + 1),
                      className: "flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground", children: formatPrice(item.price * item.quantity) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => removeItem(item.productId, item.size, item.color),
                      className: "text-muted-foreground hover:text-destructive",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                    }
                  )
                ] })
              ] })
            ] })
          ] }, `${item.productId}-${item.size}-${item.color}`)) }) }),
          items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-6 py-6 space-y-4", children: [
            promoCode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-muted px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 12, className: "text-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-foreground", children: promoCode }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
                  "−",
                  promoDiscount * 100,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: removePromo, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: promoInput,
                  onChange: (e) => {
                    setPromoInput(e.target.value);
                    setPromoError(false);
                  },
                  onKeyDown: (e) => e.key === "Enter" && handlePromo(),
                  placeholder: t("cart_promo"),
                  className: `flex-1 border ${promoError ? "border-destructive" : "border-border"} bg-transparent px-3 py-2 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handlePromo,
                  className: "border border-border px-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors",
                  children: t("cart_apply")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[12px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("cart_subtotal") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: formatPrice(subtotal) })
              ] }),
              promoDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  t("cart_discount"),
                  " (",
                  promoDiscount * 100,
                  "%)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  "−",
                  formatPrice(subtotal * promoDiscount)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("cart_shipping") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: t("cart_shipping_val") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border pt-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("cart_total") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: formatPrice(total) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/checkout",
                onClick: closeCart,
                className: "block w-full bg-foreground py-4 text-center font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity",
                children: t("cart_checkout")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: closeCart,
                className: "block w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground",
                children: t("cart_continue")
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
const useUIStore = create((set, get) => ({
  mobileMenuOpen: false,
  quickViewProduct: null,
  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  openQuickView: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),
  recentlyViewed: [],
  addRecentlyViewed: (id) => {
    const existing = get().recentlyViewed.filter((x) => x !== id);
    set({ recentlyViewed: [id, ...existing].slice(0, 8) });
  }
}));
const useWishlistStore = create()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => set((s) => ({
        ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id]
      })),
      has: (id) => get().ids.includes(id),
      clear: () => set({ ids: [] })
    }),
    { name: "kink-wishlist" }
  )
);
function QuickView() {
  const { quickViewProduct: product, closeQuickView } = useUIStore();
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const { toggle, has } = useWishlistStore();
  const [selectedSize, setSelectedSize] = reactExports.useState(null);
  const [selectedColor, setSelectedColor] = reactExports.useState(null);
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const [error, setError] = reactExports.useState("");
  const handleAdd = () => {
    if (!product) return;
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    if (!selectedColor) {
      setError("Please select a color.");
      return;
    }
    setError("");
    addItem({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
    closeQuickView();
    openCart();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: product && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 bg-background/70 backdrop-blur-md",
        onClick: closeQuickView
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { type: "spring", stiffness: 350, damping: 30 },
        className: "fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-background shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeQuickView, className: "absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.images[activeImg],
                  alt: product.name,
                  className: "h-full w-full object-cover"
                }
              ),
              product.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 flex gap-1.5", children: product.images.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setActiveImg(i),
                  className: `h-1 transition-all ${activeImg === i ? "w-6 bg-foreground" : "w-3 bg-foreground/30"}`
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: product.brand }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-3xl text-foreground", children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg text-foreground", children: formatPrice(product.price) }),
                    product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-muted-foreground line-through", children: formatPrice(product.originalPrice) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed text-muted-foreground", children: product.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    "Color: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedColor ?? "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setSelectedColor(c),
                      className: `px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${selectedColor === c ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`,
                      children: c
                    },
                    c
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    "Size: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedSize ?? "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((s) => {
                    const inStock = (product.stock[s] ?? 0) > 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => inStock && setSelectedSize(s),
                        disabled: !inStock,
                        className: `h-9 min-w-[2.5rem] px-2 font-mono text-[11px] uppercase transition-colors ${!inStock ? "border border-border/30 text-muted-foreground/30 cursor-not-allowed line-through" : selectedSize === s ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`,
                        children: s
                      },
                      s
                    );
                  }) })
                ] }),
                error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-destructive", children: error })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleAdd,
                    className: "flex w-full items-center justify-center gap-2 bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 14 }),
                      " Add to Bag"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => toggle(product.id),
                    className: "flex w-full items-center justify-center gap-2 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 12, className: has(product.id) ? "fill-foreground" : "" }),
                      has(product.id) ? "Saved" : "Save to Wishlist"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/shop/$productId",
                    params: { productId: product.id },
                    onClick: closeQuickView,
                    className: "block w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground",
                    children: "View Full Details →"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "All Products" },
  { to: "/shop?category=Sneakers", label: "Sneakers" },
  { to: "/shop?category=Apparel", label: "Apparel" },
  { to: "/shop?category=Accessories", label: "Accessories" },
  { to: "/shop?tag=NEW", label: "New Arrivals" },
  { to: "/shop?tag=SALE", label: "Sale" },
  { to: "/about", label: "About KINK" },
  { to: "/contact", label: "Contact" }
];
function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUIStore();
  const openCart = useCartStore((s) => s.openCart);
  const cartCount = useCartStore((s) => s.getItemCount());
  const wishlistCount = useWishlistStore((s) => s.ids.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        className: "fixed inset-0 z-50 bg-background/60 backdrop-blur-md",
        onClick: closeMobileMenu
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", stiffness: 340, damping: 36 },
        className: "fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-background",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl leading-none tracking-tight text-foreground", children: "KINK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeMobileMenu, className: "text-muted-foreground transition-colors hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col flex-1 overflow-y-auto px-5 py-6 gap-0.5", children: nav.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.04 * i, duration: 0.25 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: n.to,
                  onClick: closeMobileMenu,
                  className: "block py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground border-b border-border/30",
                  activeProps: { className: "block py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground border-b border-border/30" },
                  activeOptions: { exact: n.to === "/" },
                  children: n.label
                }
              )
            },
            `${n.to}-${i}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: "Store" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-foreground", children: "Parkent ko'chasi 283" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground", children: "Open daily 11:00 – 22:00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+998909248761", className: "mt-1 block font-mono text-[11px] text-foreground hover:text-muted-foreground", children: "+998 90 924 87 61" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/dashboard/wishlist",
                onClick: closeMobileMenu,
                className: "flex flex-1 items-center justify-center gap-2 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 13 }),
                  wishlistCount > 0 ? `(${wishlistCount})` : "Saved"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  closeMobileMenu();
                  openCart();
                },
                className: "flex flex-1 items-center justify-center gap-2 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 13 }),
                  cartCount > 0 ? `Bag (${cartCount})` : "Bag"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
const useThemeStore = create()(
  persist(
    (set) => ({
      theme: "dark",
      toggle: () => set((s) => {
        const next = s.theme === "dark" ? "light" : "dark";
        applyTheme(next);
        return { theme: next };
      }),
      set: (t) => {
        applyTheme(t);
        set({ theme: t });
      }
    }),
    { name: "kink-theme" }
  )
);
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
}
const useLangStore = create()(
  persist(
    (set) => ({
      locale: "en",
      set: (locale) => set({ locale })
    }),
    { name: "kink-lang" }
  )
);
const translations = {
  en: {
    // Nav
    nav_shop: "Shop",
    nav_about: "About",
    nav_contact: "Contact",
    nav_home: "Home",
    nav_accessories: "Accessories",
    nav_sneakers: "Sneakers",
    nav_apparel: "Apparel",
    nav_new: "New Arrivals",
    nav_sale: "Sale",
    nav_about_kink: "About KINK",
    // Hero
    hero_tag: "Parkent 283 · Tashkent · Open 11–22",
    hero_sub: "Nike · Adidas · Puma · Asics · Vans · New Balance. The largest sneaker and streetwear selection in Tashkent.",
    hero_cta_shop: "Browse the Rack",
    hero_cta_call: "Call Us",
    hero_brands: "Brands",
    hero_skus: "SKUs",
    hero_daily: "Daily",
    // Marquee
    marquee_free: "Free Exchange Within 14 Days",
    marquee_address: "Parkent 283, Tashkent · Open 11:00 – 22:00",
    marquee_warranty: "1 Month Warranty on Footwear",
    marquee_authentic: "Authentic Originals Only",
    // Shop
    shop_title: "Shop",
    shop_pieces: "items",
    shop_filters: "Filters",
    shop_sort: "Sort",
    shop_newest: "Newest",
    shop_price_asc: "Price: Low → High",
    shop_price_desc: "Price: High → Low",
    shop_top_rated: "Top Rated",
    shop_filter_tag: "Filter by Tag",
    shop_category: "Category",
    shop_brand: "Brand",
    shop_clear: "Clear",
    shop_view: "View",
    shop_empty: "No items found.",
    shop_empty_clear: "Clear Filters",
    shop_search: "Search...",
    // Product card
    quick_view: "Quick View",
    // Product detail
    pd_brand: "Brand",
    pd_fabric: "Material",
    pd_origin: "Origin",
    pd_care: "Care",
    pd_model: "Model",
    pd_add: "Add to Bag",
    pd_added: "Added ✓",
    pd_save: "Save to Wishlist",
    pd_saved: "Saved",
    pd_color: "Color",
    pd_size: "Size",
    pd_size_guide: "Size Guide",
    pd_delivery: "Delivery",
    pd_returns: "Returns",
    pd_authentic: "Authenticity",
    pd_returns_val: "14-day complimentary exchange",
    pd_authentic_val: "Certified authentic originals",
    pd_reviews: "Customer Reviews",
    pd_complete: "Complete the Look",
    pd_select_size: "Please select a size.",
    pd_select_color: "Please select a color.",
    // Cart
    cart_title: "Your Bag",
    cart_empty: "Your bag is empty.",
    cart_empty_sub: "Nike, Adidas, Puma, Asics and more waiting.",
    cart_shop_now: "Shop Now",
    cart_promo: "Promo code",
    cart_apply: "Apply",
    cart_subtotal: "Subtotal",
    cart_discount: "Discount",
    cart_shipping: "Shipping",
    cart_shipping_val: "Complimentary",
    cart_total: "Total",
    cart_checkout: "Proceed to Checkout",
    cart_continue: "Continue Shopping",
    // Wishlist
    wishlist_title: "Wishlist",
    wishlist_saved: "Saved Items",
    wishlist_empty: "Nothing saved yet.",
    wishlist_explore: "Explore the Collection",
    // Checkout
    checkout_shipping: "Shipping Address",
    checkout_payment: "Payment",
    checkout_continue: "Continue to Payment →",
    checkout_place: "Place Order",
    checkout_confirm_title: "Order Placed.",
    checkout_confirm_sub: "Thank you. You'll receive a confirmation shortly.",
    checkout_continue_shop: "Continue Shopping",
    // Dashboard
    dash_welcome: "Welcome back",
    dash_orders: "Orders",
    dash_wishlist: "Wishlist Items",
    dash_points: "Loyalty Points",
    dash_recent: "Recent Orders",
    dash_view_all: "View All →",
    // Footer
    footer_tagline: "Nike · Adidas · Puma · Asics · Vans · New Balance · Converse + KINK.",
    footer_address: "Parkent 283, Tashkent",
    footer_hours: "Open daily 11:00 – 22:00",
    footer_rights: "All rights reserved.",
    footer_shop: "Shop",
    footer_categories: "Categories",
    footer_care: "Customer Care",
    footer_new: "New Arrivals",
    footer_hot: "Hot Right Now",
    footer_sale: "Sale",
    footer_all: "All Products",
    footer_sneakers: "Sneakers",
    footer_tshirts: "T-Shirts",
    footer_jeans: "Jeans",
    footer_accessories: "Accessories",
    footer_size_guide: "Size Guide",
    footer_returns: "Returns & Exchange",
    footer_warranty: "Warranty",
    footer_contact: "Contact",
    // About
    about_title: "KINK",
    about_p1: "KINK is Tashkent's dedicated sneaker and streetwear destination. We stock Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan — and our own KINK label.",
    about_p2: "You'll find us at Parkent 283, open every day from 11:00 to 22:00. Two floors, proper lighting, every size in the back. Come in, try things on, and leave with the right pair.",
    about_p3: "We know the catalog, we know the sizes, and we'll help you find what fits.",
    about_location: "Location",
    about_hours: "Hours",
    about_contact: "Contact",
    about_hours_val: "11:00 – 22:00",
    about_hours_sub: "Open every day",
    about_contact_sub: "Call or WhatsApp",
    about_policies: "Our Policies",
    about_exchange: "Exchange",
    about_exchange_body: "14-day exchange on all items, provided they haven't been worn and are in original condition with packaging.",
    about_warranty: "Warranty",
    about_warranty_body: "1-month warranty on all footwear against manufacturing defects. We'll swap it, no argument.",
    about_authenticity: "Authenticity",
    about_authenticity_body: "Everything we sell is authentic, original, and sourced from authorized distributors. No replicas, ever.",
    about_sizing: "Sizing Help",
    about_sizing_body: "Not sure about your size? Come in and try them. Our staff knows the fit differences between brands and models.",
    // Contact
    contact_title: "Contact",
    contact_name: "Your Name",
    contact_phone: "Phone / Email",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_or_call: "Or call directly:",
    contact_quick: "Quick Questions",
    contact_q1: "Do you have a specific size in stock?",
    contact_q2: "Can I order something not on the site?",
    contact_q3: "How does the exchange process work?",
    contact_q4: "Do you ship outside Tashkent?",
    contact_phone_label: "Phone / WhatsApp",
    contact_telegram: "Telegram Channel",
    contact_address_label: "Address",
    contact_hours_label: "Hours",
    contact_message_placeholder: "Looking for a specific shoe? Need to check size availability? Ask us anything...",
    // Reviews
    reviews_title: "What they say.",
    reviews_sub: "on Google Maps",
    reviews_cta_title: "Come see for yourself.",
    reviews_cta_sub: "Parkent 283, Tashkent · Open daily 11:00 – 22:00",
    verified: "Verified Purchase"
  },
  ru: {
    nav_shop: "Магазин",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_home: "Главная",
    nav_accessories: "Аксессуары",
    nav_sneakers: "Кроссовки",
    nav_apparel: "Одежда",
    nav_new: "Новинки",
    nav_sale: "Скидки",
    nav_about_kink: "О KINK",
    hero_tag: "Паркент 283 · Ташкент · Открыто 11–22",
    hero_sub: "Nike · Adidas · Puma · Asics · Vans · New Balance. Крупнейший выбор кроссовок и стритвира в Ташкенте.",
    hero_cta_shop: "Смотреть товары",
    hero_cta_call: "Позвонить",
    hero_brands: "Брендов",
    hero_skus: "Товаров",
    hero_daily: "Ежедневно",
    marquee_free: "Обмен в течение 14 дней",
    marquee_address: "Паркент 283, Ташкент · Открыто 11:00 – 22:00",
    marquee_warranty: "Гарантия 1 месяц на обувь",
    marquee_authentic: "Только оригинальные товары",
    shop_title: "Магазин",
    shop_pieces: "товаров",
    shop_filters: "Фильтры",
    shop_sort: "Сортировка",
    shop_newest: "Новинки",
    shop_price_asc: "Цена: по возрастанию",
    shop_price_desc: "Цена: по убыванию",
    shop_top_rated: "Лучшие отзывы",
    shop_filter_tag: "Фильтр по тегу",
    shop_category: "Категория",
    shop_brand: "Бренд",
    shop_clear: "Сбросить",
    shop_view: "Показать",
    shop_empty: "Товары не найдены.",
    shop_empty_clear: "Сбросить фильтры",
    shop_search: "Поиск...",
    quick_view: "Быстрый просмотр",
    pd_brand: "Бренд",
    pd_fabric: "Материал",
    pd_origin: "Производство",
    pd_care: "Уход",
    pd_model: "Модель",
    pd_add: "Добавить в корзину",
    pd_added: "Добавлено ✓",
    pd_save: "Сохранить в избранное",
    pd_saved: "Сохранено",
    pd_color: "Цвет",
    pd_size: "Размер",
    pd_size_guide: "Таблица размеров",
    pd_delivery: "Доставка",
    pd_returns: "Возврат",
    pd_authentic: "Подлинность",
    pd_returns_val: "Обмен в течение 14 дней",
    pd_authentic_val: "Гарантия оригинальности",
    pd_reviews: "Отзывы покупателей",
    pd_complete: "Завершите образ",
    pd_select_size: "Пожалуйста, выберите размер.",
    pd_select_color: "Пожалуйста, выберите цвет.",
    cart_title: "Корзина",
    cart_empty: "Ваша корзина пуста.",
    cart_empty_sub: "Nike, Adidas, Puma, Asics и другие ждут вас.",
    cart_shop_now: "В магазин",
    cart_promo: "Промокод",
    cart_apply: "Применить",
    cart_subtotal: "Сумма",
    cart_discount: "Скидка",
    cart_shipping: "Доставка",
    cart_shipping_val: "Бесплатно",
    cart_total: "Итого",
    cart_checkout: "Оформить заказ",
    cart_continue: "Продолжить покупки",
    wishlist_title: "Избранное",
    wishlist_saved: "Сохранённые товары",
    wishlist_empty: "Ничего не сохранено.",
    wishlist_explore: "Смотреть товары",
    checkout_shipping: "Адрес доставки",
    checkout_payment: "Оплата",
    checkout_continue: "Перейти к оплате →",
    checkout_place: "Оформить заказ",
    checkout_confirm_title: "Заказ оформлен.",
    checkout_confirm_sub: "Спасибо. Подтверждение придёт в ближайшее время.",
    checkout_continue_shop: "Продолжить покупки",
    dash_welcome: "С возвращением",
    dash_orders: "Заказы",
    dash_wishlist: "Избранное",
    dash_points: "Бонусные баллы",
    dash_recent: "Последние заказы",
    dash_view_all: "Все →",
    footer_tagline: "Nike · Adidas · Puma · Asics · Vans · New Balance · Converse + KINK.",
    footer_address: "Паркент 283, Ташкент",
    footer_hours: "Ежедневно 11:00 – 22:00",
    footer_rights: "Все права защищены.",
    footer_shop: "Магазин",
    footer_categories: "Категории",
    footer_care: "Покупателям",
    footer_new: "Новинки",
    footer_hot: "Хиты продаж",
    footer_sale: "Скидки",
    footer_all: "Все товары",
    footer_sneakers: "Кроссовки",
    footer_tshirts: "Футболки",
    footer_jeans: "Джинсы",
    footer_accessories: "Аксессуары",
    footer_size_guide: "Таблица размеров",
    footer_returns: "Возврат и обмен",
    footer_warranty: "Гарантия",
    footer_contact: "Контакты",
    about_title: "KINK",
    about_p1: "KINK — это главный магазин кроссовок и стритвира в Ташкенте. У нас есть Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan — а также собственная марка KINK.",
    about_p2: "Мы находимся на Паркент 283, открыты каждый день с 11:00 до 22:00. Два этажа, хорошее освещение, все размеры в наличии.",
    about_p3: "Мы знаем каталог и поможем вам выбрать нужную пару.",
    about_location: "Адрес",
    about_hours: "Режим работы",
    about_contact: "Контакт",
    about_hours_val: "11:00 – 22:00",
    about_hours_sub: "Ежедневно",
    about_contact_sub: "Звонок или WhatsApp",
    about_policies: "Наши условия",
    about_exchange: "Обмен",
    about_exchange_body: "Обмен товара в течение 14 дней при условии сохранности товарного вида и упаковки.",
    about_warranty: "Гарантия",
    about_warranty_body: "Гарантия 1 месяц на всю обувь при заводском браке. Заменим без лишних вопросов.",
    about_authenticity: "Подлинность",
    about_authenticity_body: "Всё, что мы продаём — оригинал, закупленный у официальных дистрибьюторов. Никаких реплик.",
    about_sizing: "Подбор размера",
    about_sizing_body: "Не уверены в размере? Приходите и примерьте. Наши сотрудники знают особенности посадки каждого бренда.",
    contact_title: "Контакты",
    contact_name: "Ваше имя",
    contact_phone: "Телефон / Email",
    contact_message: "Сообщение",
    contact_send: "Отправить",
    contact_or_call: "Или позвоните:",
    contact_quick: "Частые вопросы",
    contact_q1: "Есть ли нужный размер?",
    contact_q2: "Можно заказать то, чего нет на сайте?",
    contact_q3: "Как оформить обмен?",
    contact_q4: "Доставляете ли за пределы Ташкента?",
    contact_phone_label: "Телефон / WhatsApp",
    contact_telegram: "Telegram-канал",
    contact_address_label: "Адрес",
    contact_hours_label: "Режим работы",
    contact_message_placeholder: "Ищете конкретную модель? Хотите узнать о наличии размера? Спросите нас.",
    reviews_title: "Что говорят.",
    reviews_sub: "отзывов на Google Maps",
    reviews_cta_title: "Убедитесь сами.",
    reviews_cta_sub: "Паркент 283, Ташкент · Ежедневно 11:00 – 22:00",
    verified: "Подтверждённая покупка"
  },
  uz: {
    nav_shop: "Do'kon",
    nav_about: "Biz haqimizda",
    nav_contact: "Aloqa",
    nav_home: "Bosh sahifa",
    nav_accessories: "Aksessuarlar",
    nav_sneakers: "Krossovkalar",
    nav_apparel: "Kiyimlar",
    nav_new: "Yangi kelganlar",
    nav_sale: "Chegirma",
    nav_about_kink: "KINK haqida",
    hero_tag: "Parkent 283 · Toshkent · 11–22 ochiq",
    hero_sub: "Nike · Adidas · Puma · Asics · Vans · New Balance. Toshkentdagi eng katta krossovka va streetwear tanlovi.",
    hero_cta_shop: "Tovarlarni ko'rish",
    hero_cta_call: "Qo'ng'iroq",
    hero_brands: "Brendlar",
    hero_skus: "Mahsulot",
    hero_daily: "Har kuni",
    marquee_free: "14 kun ichida almashtirish",
    marquee_address: "Parkent 283, Toshkent · 11:00 – 22:00 ochiq",
    marquee_warranty: "Oyoq kiyimga 1 oy kafolat",
    marquee_authentic: "Faqat original mahsulotlar",
    shop_title: "Do'kon",
    shop_pieces: "ta mahsulot",
    shop_filters: "Filtrlar",
    shop_sort: "Saralash",
    shop_newest: "Yangilar",
    shop_price_asc: "Narx: arzondan qimmatga",
    shop_price_desc: "Narx: qimmatdan arzonga",
    shop_top_rated: "Eng yuqori baholangan",
    shop_filter_tag: "Teg bo'yicha filtr",
    shop_category: "Kategoriya",
    shop_brand: "Brend",
    shop_clear: "Tozalash",
    shop_view: "Ko'rish",
    shop_empty: "Mahsulotlar topilmadi.",
    shop_empty_clear: "Filtrlarni tozalash",
    shop_search: "Qidirish...",
    quick_view: "Tez ko'rish",
    pd_brand: "Brend",
    pd_fabric: "Material",
    pd_origin: "Ishlab chiqarilgan joy",
    pd_care: "Parvarish",
    pd_model: "Model",
    pd_add: "Savatga qo'shish",
    pd_added: "Qo'shildi ✓",
    pd_save: "Sevimlilarга saqlash",
    pd_saved: "Saqlangan",
    pd_color: "Rang",
    pd_size: "O'lcham",
    pd_size_guide: "O'lchamlar jadvali",
    pd_delivery: "Yetkazib berish",
    pd_returns: "Qaytarish",
    pd_authentic: "Originallik",
    pd_returns_val: "14 kun ichida almashtirish",
    pd_authentic_val: "Original mahsulot kafolati",
    pd_reviews: "Xaridorlar sharhlari",
    pd_complete: "To'liq ko'rinish",
    pd_select_size: "Iltimos, o'lchamni tanlang.",
    pd_select_color: "Iltimos, rangni tanlang.",
    cart_title: "Savat",
    cart_empty: "Savatingiz bo'sh.",
    cart_empty_sub: "Nike, Adidas, Puma, Asics va boshqalar kutmoqda.",
    cart_shop_now: "Do'konga o'tish",
    cart_promo: "Promo kod",
    cart_apply: "Qo'llash",
    cart_subtotal: "Jami",
    cart_discount: "Chegirma",
    cart_shipping: "Yetkazib berish",
    cart_shipping_val: "Bepul",
    cart_total: "Umumiy",
    cart_checkout: "Buyurtma berish",
    cart_continue: "Xaridni davom ettirish",
    wishlist_title: "Sevimlilar",
    wishlist_saved: "Saqlangan mahsulotlar",
    wishlist_empty: "Hali hech narsa saqlanmagan.",
    wishlist_explore: "Tovarlarni ko'rish",
    checkout_shipping: "Yetkazib berish manzili",
    checkout_payment: "To'lov",
    checkout_continue: "To'lovga o'tish →",
    checkout_place: "Buyurtma berish",
    checkout_confirm_title: "Buyurtma qabul qilindi.",
    checkout_confirm_sub: "Rahmat. Tez orada tasdiqlash keladi.",
    checkout_continue_shop: "Xaridni davom ettirish",
    dash_welcome: "Xush kelibsiz",
    dash_orders: "Buyurtmalar",
    dash_wishlist: "Sevimlilar",
    dash_points: "Bonus ballar",
    dash_recent: "So'nggi buyurtmalar",
    dash_view_all: "Hammasini ko'rish →",
    footer_tagline: "Nike · Adidas · Puma · Asics · Vans · New Balance · Converse + KINK.",
    footer_address: "Parkent ko'chasi 283, Toshkent",
    footer_hours: "Har kuni 11:00 – 22:00",
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_shop: "Do'kon",
    footer_categories: "Kategoriyalar",
    footer_care: "Xaridorlar uchun",
    footer_new: "Yangi kelganlar",
    footer_hot: "Eng ko'p sotilgan",
    footer_sale: "Chegirma",
    footer_all: "Barcha mahsulotlar",
    footer_sneakers: "Krossovkalar",
    footer_tshirts: "Futbolkalar",
    footer_jeans: "Jinsilar",
    footer_accessories: "Aksessuarlar",
    footer_size_guide: "O'lchamlar jadvali",
    footer_returns: "Qaytarish va almashtirish",
    footer_warranty: "Kafolat",
    footer_contact: "Aloqa",
    about_title: "KINK",
    about_p1: "KINK — Toshkentdagi asosiy krossovka va streetwear do'koni. Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan — va o'z brendimiz KINK.",
    about_p2: "Biz Parkent ko'chasi 283 da joylashganmiz, har kuni soat 11:00 dan 22:00 gacha ochamiz. Ikki qavat, yaxshi yorug'lik, barcha o'lchamlar mavjud.",
    about_p3: "Biz katalogni yaxshi bilamiz va siz uchun to'g'ri juftlikni topishda yordam beramiz.",
    about_location: "Manzil",
    about_hours: "Ish vaqti",
    about_contact: "Aloqa",
    about_hours_val: "11:00 – 22:00",
    about_hours_sub: "Har kuni",
    about_contact_sub: "Qo'ng'iroq yoki WhatsApp",
    about_policies: "Bizning shartlarimiz",
    about_exchange: "Almashtirish",
    about_exchange_body: "Barcha mahsulotlarni 14 kun ichida almashtirish mumkin, agar ular kiyilmagan va original qadoqda bo'lsa.",
    about_warranty: "Kafolat",
    about_warranty_body: "Barcha oyoq kiyimlarga 1 oy zavod nuqsonlariga kafolat. Hech bir savollarsiz almashtiramiz.",
    about_authenticity: "Originallik",
    about_authenticity_body: "Sotadigan hamma narsalar original va rasmiy distribyutorlardan olingan. Replika yo'q.",
    about_sizing: "O'lcham tanlash",
    about_sizing_body: "O'lchamingizdan ishonchingiz yo'qmi? Kelib ko'ring va o'lchaб koring. Xodimlarimiz har bir brendning o'lcham farqlarini yaxshi bilishadi.",
    contact_title: "Aloqa",
    contact_name: "Ismingiz",
    contact_phone: "Telefon / Email",
    contact_message: "Xabar",
    contact_send: "Yuborish",
    contact_or_call: "Yoki to'g'ridan qo'ng'iroq qiling:",
    contact_quick: "Tez-tez so'raladigan savollar",
    contact_q1: "Kerakli o'lcham bormi?",
    contact_q2: "Saytda yo'q narsani buyurtma qilish mumkinmi?",
    contact_q3: "Almashtirish qanday amalga oshiriladi?",
    contact_q4: "Toshkentdan tashqariga yetkazib berish bormi?",
    contact_phone_label: "Telefon / WhatsApp",
    contact_telegram: "Telegram kanal",
    contact_address_label: "Manzil",
    contact_hours_label: "Ish vaqti",
    contact_message_placeholder: "Muayyan model izlayapsizmi? O'lcham borligini bilmoqchimisiz? Bizga yozing.",
    reviews_title: "Ular nima deydi.",
    reviews_sub: "Google Maps sharhlari",
    reviews_cta_title: "O'zingiz ko'ring.",
    reviews_cta_sub: "Parkent 283, Toshkent · Har kuni 11:00 – 22:00",
    verified: "Tasdiqlangan xarid"
  }
};
instance.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    ru: { translation: translations.ru },
    uz: { translation: translations.uz }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});
const appCss = "/assets/styles-DuLd091D.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KINK — Sneakers & Streetwear, Tashkent" },
      { name: "description", content: "Tashkentning eng katta krossovka do'koni. Nike, Adidas, Puma, Asics va boshqa brendlar. Parkent ko'chasi 283. Har kuni 11:00–22:00." },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "KINK — Sneakers & Streetwear, Tashkent" },
      { name: "twitter:title", content: "KINK — Sneakers & Streetwear, Tashkent" },
      { property: "og:description", content: "Nike, Adidas, Puma, Asics, Vans, New Balance & KINK. Parkent ko'chasi 283, Tashkent." },
      { name: "twitter:description", content: "Tashkent's sneaker & streetwear store. Parkent 283." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function ThemeInit() {
  const theme = useThemeStore((s) => s.theme);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);
  return null;
}
function LangInit() {
  const locale = useLangStore((s) => s.locale);
  const { i18n: i18n2 } = useTranslation();
  reactExports.useEffect(() => {
    i18n2.changeLanguage(locale);
  }, [locale, i18n2]);
  return null;
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeInit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LangInit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickView, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenu, {})
  ] });
}
const BASE_URL = "";
const Route$e = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/shop", priority: "0.9", changefreq: "weekly" },
          { path: "/about", priority: "0.6", changefreq: "monthly" },
          { path: "/contact", priority: "0.7", changefreq: "monthly" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$d = () => import("./shop-BFsOu0JM.mjs");
const Route$d = createFileRoute("/shop")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./dashboard-vy4hqiXx.mjs");
const Route$c = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Account — KINK"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./contact-Dqx5CQCI.mjs");
const Route$b = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — KINK Tashkent"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./checkout-CTx1CF04.mjs");
const Route$a = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout — Maison Noir"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./admin-DMNlYf6n.mjs");
const Route$9 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — KINK"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-nDwWeEjz.mjs");
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — KINK Tashkent"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-CLN2-m7x.mjs");
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "KINK — Sneakers & Streetwear, Tashkent"
    }, {
      name: "description",
      content: "Nike, Adidas, Puma, Asics, Vans, New Balance & KINK. Parkent ko'chasi 283, Tashkent. Open 11–22."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./shop.index-C6PSZIY6.mjs");
const searchSchema = objectType({
  category: stringType().optional(),
  subcategory: stringType().optional(),
  tag: stringType().optional(),
  brand: stringType().optional(),
  q: stringType().optional(),
  collection: stringType().optional()
});
const Route$6 = createFileRoute("/shop/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [{
      title: "Shop — KINK Tashkent"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./dashboard.index-BMt6RgBZ.mjs");
const Route$5 = createFileRoute("/dashboard/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.index-hIVLWdf9.mjs");
const Route$4 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./shop._productId-Caacra2T.mjs");
const Route$3 = createFileRoute("/shop/$productId")({
  head: ({
    params
  }) => {
    const p = getProductById(params.productId);
    return {
      meta: [{
        title: p ? `${p.name} — KINK` : "Product — KINK"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./dashboard.wishlist-85uQiT4y.mjs");
const Route$2 = createFileRoute("/dashboard/wishlist")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./dashboard.orders-CkXpb-Fg.mjs");
const Route$1 = createFileRoute("/dashboard/orders")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.products-OyVNF3SP.mjs");
const Route = createFileRoute("/admin/products")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$e.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$f
});
const ShopRoute = Route$d.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$f
});
const DashboardRoute = Route$c.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const CheckoutRoute = Route$a.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$f
});
const AdminRoute = Route$9.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ShopIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => ShopRoute
});
const DashboardIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => DashboardRoute
});
const AdminIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const ShopProductIdRoute = Route$3.update({
  id: "/$productId",
  path: "/$productId",
  getParentRoute: () => ShopRoute
});
const DashboardWishlistRoute = Route$2.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => DashboardRoute
});
const DashboardOrdersRoute = Route$1.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => DashboardRoute
});
const AdminProductsRoute = Route.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminProductsRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const DashboardRouteChildren = {
  DashboardOrdersRoute,
  DashboardWishlistRoute,
  DashboardIndexRoute
};
const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren
);
const ShopRouteChildren = {
  ShopProductIdRoute,
  ShopIndexRoute
};
const ShopRouteWithChildren = ShopRoute._addFileChildren(ShopRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  CheckoutRoute,
  ContactRoute,
  DashboardRoute: DashboardRouteWithChildren,
  ShopRoute: ShopRouteWithChildren,
  SitemapDotxmlRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$3 as R,
  allCategories as a,
  allBrands as b,
  useWishlistStore as c,
  useUIStore as d,
  getProductById as e,
  formatPrice as f,
  getFeatured as g,
  getRelated as h,
  useThemeStore as i,
  useLangStore as j,
  products as p,
  router as r,
  useCartStore as u
};
