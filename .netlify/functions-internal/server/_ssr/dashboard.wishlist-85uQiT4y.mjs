import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as useWishlistStore, e as getProductById } from "./router-Emfjchtb.mjs";
import { P as ProductCard } from "./ProductCard-Jqg7wrGG.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/i18next.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
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
function WishlistPage() {
  const {
    ids
  } = useWishlistStore();
  const wishlistProducts = ids.map((id) => getProductById(id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Saved Pieces" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-5xl text-foreground", children: "Wishlist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        ids.length,
        " items"
      ] })
    ] }),
    ids.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-muted-foreground", children: "Nothing saved yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-6 inline-block font-mono text-[11px] uppercase tracking-widest underline text-foreground", children: "Explore the Collection" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6", children: wishlistProducts.filter(Boolean).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
  ] });
}
export {
  WishlistPage as component
};
