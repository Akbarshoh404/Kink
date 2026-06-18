import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as products, f as formatPrice } from "./router-Emfjchtb.mjs";
import "../_libs/i18next.mjs";
import { P as Plus, g as Search, v as Pen, T as Trash2, X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/zustand.mjs";
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AdminProducts() {
  const [productList, setProductList] = reactExports.useState(products);
  const [search, setSearch] = reactExports.useState("");
  const [editProduct, setEditProduct] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  const filtered = productList.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
  const handleDelete = (id) => {
    if (confirm("Delete this product?")) {
      setProductList((p) => p.filter((x) => x.id !== id));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Catalog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-5xl text-foreground", children: "Products" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setEditProduct(null);
        setShowForm(true);
      }, className: "flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
        " Add Product"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 13, className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search products...", className: "w-full max-w-sm border border-border bg-transparent pl-9 pr-4 py-2.5 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted", children: ["Product", "Brand", "Category", "Price", "Stock", "Rating", ""].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: h }, h)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filtered.map((p) => {
        const totalStock = Object.values(p.stock).reduce((s, v) => s + v, 0);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.tr, { layout: true, className: "bg-card hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-8 bg-muted flex-shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: p.name, className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground", children: p.name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-[11px] text-muted-foreground", children: p.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-[11px] text-muted-foreground", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-[12px] text-foreground", children: formatPrice(p.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase px-2 py-1 ${totalStock <= 5 ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-400"}`, children: totalStock }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-mono text-[11px] text-muted-foreground", children: [
            "★ ",
            p.rating
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setEditProduct(p);
              setShowForm(true);
            }, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 13 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(p.id), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 }) })
          ] }) })
        ] }, p.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "fixed inset-0 z-50 bg-background/70 backdrop-blur-sm", onClick: () => setShowForm(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, exit: {
        opacity: 0,
        scale: 0.95
      }, className: "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-background border border-border p-8 max-h-[85vh] overflow-y-auto shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground", children: editProduct ? "Edit Product" : "New Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowForm(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-muted-foreground" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: editProduct ? `Editing: ${editProduct.name}` : "Create a new product in the catalog." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: ["Name", "Brand", "Price", "Category", "Description"].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: editProduct ? String(editProduct[field.toLowerCase()]) : "", className: "w-full border border-border bg-transparent px-3 py-2.5 text-[13px] text-foreground focus:border-foreground focus:outline-none" })
        ] }, field)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowForm(false), className: "flex-1 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowForm(false), className: "flex-1 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background", children: editProduct ? "Save Changes" : "Create Product" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminProducts as component
};
