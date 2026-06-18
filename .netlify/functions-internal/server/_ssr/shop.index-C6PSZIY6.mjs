import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useSearch } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import { P as ProductCard } from "./ProductCard-Jqg7wrGG.mjs";
import { p as products, a as allCategories, b as allBrands } from "./router-Emfjchtb.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { p as SlidersHorizontal, X, q as ChevronDown } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SORT_OPTIONS = [{
  key: "newest",
  label: "Newest"
}, {
  key: "price-asc",
  label: "Price: Low → High"
}, {
  key: "price-desc",
  label: "Price: High → Low"
}, {
  key: "rating",
  label: "Top Rated"
}];
function ShopPage() {
  const search = useSearch({
    from: "/shop/"
  });
  const [sortKey, setSortKey] = reactExports.useState("newest");
  const [selectedCategories, setSelectedCategories] = reactExports.useState(search.category ? [search.category] : []);
  const [selectedBrands, setSelectedBrands] = reactExports.useState(search.brand ? [search.brand] : []);
  const [selectedTag, setSelectedTag] = reactExports.useState(search.tag ?? null);
  const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
  const [searchQ, setSearchQ] = reactExports.useState(search.q ?? "");
  const allTags = ["NEW", "BESTSELLER", "SALE", "LIMITED"];
  const filtered = reactExports.useMemo(() => {
    let result = [...products];
    if (searchQ) {
      const q = searchQ.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (selectedCategories.length) result = result.filter((p) => selectedCategories.includes(p.category));
    if (selectedBrands.length) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (selectedTag) result = result.filter((p) => p.tags.includes(selectedTag));
    if (search.subcategory) result = result.filter((p) => p.subcategory === search.subcategory);
    return result.sort((a, b) => {
      if (sortKey === "newest") return b.releaseOrder - a.releaseOrder;
      if (sortKey === "price-asc") return a.price - b.price;
      if (sortKey === "price-desc") return b.price - a.price;
      if (sortKey === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [searchQ, selectedCategories, selectedBrands, selectedTag, sortKey, search.subcategory]);
  const toggleCategory = (cat) => setSelectedCategories((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
  const toggleBrand = (brand) => setSelectedBrands((prev) => prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]);
  const activeFilterCount = selectedCategories.length + selectedBrands.length + (selectedTag ? 1 : 0);
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border py-12 px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "KINK · Tashkent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-6xl text-foreground md:text-8xl", children: t("shop_title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          filtered.length,
          " ",
          t("shop_pieces")
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: searchQ, onChange: (e) => setSearchQ(e.target.value), placeholder: t("shop_search"), className: "w-56 border border-border bg-transparent px-4 py-2 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFiltersOpen(true), className: "flex items-center gap-2 border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13 }),
              t("shop_filters"),
              activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-foreground text-background w-4 h-4 flex items-center justify-center text-[9px]", children: activeFilterCount })
            ] }),
            selectedTag && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedTag(null), className: "flex items-center gap-1 border border-border px-3 py-2 font-mono text-[10px] text-foreground hover:bg-muted", children: [
              selectedTag,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: sortKey, onChange: (e) => setSortKey(e.target.value), className: "appearance-none border border-border bg-background px-4 py-2 pr-8 font-mono text-[11px] text-foreground focus:outline-none cursor-pointer", children: SORT_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.key, children: o.label }, o.key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12, className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, className: "py-24 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-muted-foreground", children: t("shop_empty") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSelectedCategories([]);
            setSelectedBrands([]);
            setSelectedTag(null);
            setSearchQ("");
          }, className: "mt-6 font-mono text-[11px] uppercase tracking-widest text-foreground underline", children: t("shop_empty_clear") })
        ] }, "empty") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6", children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }, product.id)) }, "grid") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filtersOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm", onClick: () => setFiltersOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        x: "-100%"
      }, animate: {
        x: 0
      }, exit: {
        x: "-100%"
      }, transition: {
        type: "spring",
        stiffness: 320,
        damping: 34
      }, className: "fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-background shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl tracking-widest", children: "Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFiltersOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-muted-foreground" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-6 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Filter by Tag" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: allTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedTag(selectedTag === tag ? null : tag), className: `px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${selectedTag === tag ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: tag }, tag)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: allCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => toggleCategory(cat), className: `h-4 w-4 border transition-colors cursor-pointer flex items-center justify-center ${selectedCategories.includes(cat) ? "bg-foreground border-foreground" : "border-border group-hover:border-foreground"}`, children: selectedCategories.includes(cat) && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 3L3 5L7 1", stroke: "currentColor", strokeWidth: "1.5", className: "text-background" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground", children: cat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-mono text-[10px] text-muted-foreground", children: products.filter((p) => p.category === cat).length })
            ] }, cat)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: allBrands.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => toggleBrand(brand), className: `h-4 w-4 border transition-colors cursor-pointer flex items-center justify-center ${selectedBrands.includes(brand) ? "bg-foreground border-foreground" : "border-border group-hover:border-foreground"}`, children: selectedBrands.includes(brand) && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 3L3 5L7 1", stroke: "currentColor", strokeWidth: "1.5", className: "text-background" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground", children: brand })
            ] }, brand)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-6 py-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSelectedCategories([]);
            setSelectedBrands([]);
            setSelectedTag(null);
          }, className: "flex-1 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors", children: "Clear" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFiltersOpen(false), className: "flex-1 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background", children: [
            "View ",
            filtered.length
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ShopPage as component
};
