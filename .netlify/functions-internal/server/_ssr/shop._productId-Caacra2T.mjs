import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import { P as ProductCard } from "./ProductCard-Jqg7wrGG.mjs";
import { R as Route$3, u as useCartStore, c as useWishlistStore, d as useUIStore, e as getProductById, h as getRelated, f as formatPrice } from "./router-Emfjchtb.mjs";
import { r as reviewsData } from "./reviews-CXVyNPlL.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { b as Star, s as Ruler, S as ShoppingBag, H as Heart, t as Truck, R as RotateCcw, u as Shield } from "../_libs/lucide-react.mjs";
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
function ProductDetailPage() {
  const {
    productId
  } = Route$3.useParams();
  const {
    t
  } = useTranslation();
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const {
    toggle,
    has
  } = useWishlistStore();
  const {
    addRecentlyViewed
  } = useUIStore();
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [selectedSize, setSelectedSize] = reactExports.useState(null);
  const [selectedColor, setSelectedColor] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const [added, setAdded] = reactExports.useState(false);
  const product = getProductById(productId);
  reactExports.useEffect(() => {
    if (product) {
      addRecentlyViewed(product.id);
      setSelectedColor(product.colors[0] ?? null);
      setSelectedSize(null);
      setActiveImage(0);
    }
  }, [product?.id]);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-6xl text-muted-foreground", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Product not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-6 inline-block font-mono text-[11px] uppercase tracking-widest underline text-foreground", children: "Back to Shop" })
    ] }) });
  }
  const related = getRelated(product);
  const productReviews = reviewsData.filter((r) => r.productId === product.id);
  const handleAdd = () => {
    if (!selectedSize) {
      setError(t("pd_select_size"));
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
      color: selectedColor ?? product.colors[0],
      quantity: 1
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
    openCart();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "KINK" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: t("nav_shop") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, transition: {
              duration: 0.35
            }, className: "aspect-square overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[activeImage], alt: product.name, className: "h-full w-full object-contain p-4" }) }, activeImage),
            product.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: product.images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImage(i), className: `aspect-square overflow-hidden bg-muted border-2 transition-colors ${activeImage === i ? "border-foreground" : "border-transparent"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "", className: "h-full w-full object-contain p-2" }) }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 lg:sticky lg:top-24 lg:self-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: product.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: tag }, tag)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: product.brand }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-5xl leading-tight text-foreground md:text-6xl", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1", children: [
                Array.from({
                  length: 5
                }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-muted" }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 font-mono text-[11px] text-muted-foreground", children: [
                  "(",
                  product.reviewCount,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-2xl text-foreground", children: formatPrice(product.price) }),
                product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-base text-muted-foreground line-through", children: formatPrice(product.originalPrice) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                t("pd_color"),
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedColor })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedColor(c), className: `px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${selectedColor === c ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: c }, c)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2.5 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                  t("pd_size"),
                  ": ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedSize ?? "—" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { size: 11 }),
                  " ",
                  t("pd_size_guide")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((s) => {
                const inStock = (product.stock[s] ?? 0) > 0;
                const lowStock = (product.stock[s] ?? 0) <= 3 && inStock;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => inStock && setSelectedSize(s), disabled: !inStock, className: `relative h-11 min-w-[2.75rem] px-3 font-mono text-[12px] uppercase transition-colors ${!inStock ? "cursor-not-allowed border border-border/30 text-muted-foreground/30" : selectedSize === s ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: [
                  s,
                  !inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-px w-full rotate-45 bg-border/30" }) }),
                  lowStock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" })
                ] }, s);
              }) }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-[10px] text-destructive", children: error })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAdd, className: "flex w-full items-center justify-center gap-2 bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-opacity hover:opacity-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 15 }),
                added ? t("pd_added") : t("pd_add")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(product.id), className: "flex w-full items-center justify-center gap-2 border border-border py-3.5 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-muted", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 13, className: has(product.id) ? "fill-foreground" : "" }),
                has(product.id) ? t("pd_saved") : t("pd_save")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t border-border pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed text-muted-foreground", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 border-b border-t border-border py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: t("pd_fabric") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-foreground", children: product.fabric })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: t("pd_origin") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-foreground", children: product.origin })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: t("pd_care") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-foreground", children: product.care })
                ] }),
                product.modelHeight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: t("pd_model") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] text-foreground", children: [
                    product.modelHeight,
                    " · ",
                    product.modelWears
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14 }),
                label: t("pd_delivery"),
                value: product.delivery
              }, {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 }),
                label: t("pd_returns"),
                value: t("pd_returns_val")
              }, {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14 }),
                label: t("pd_authentic"),
                value: t("pd_authentic_val")
              }].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: d.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: [
                    d.label,
                    ": "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground", children: d.value })
                ] })
              ] }, d.label)) })
            ] })
          ] })
        ] }),
        productReviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 border-t border-border pt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground md:text-5xl", children: t("pd_reviews") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2", children: productReviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: review.avatar, alt: review.author, className: "h-10 w-10 rounded-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: review.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({
                  length: review.rating
                }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, className: "fill-gold text-gold" }, j)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] font-medium text-foreground", children: review.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] leading-relaxed text-muted-foreground", children: review.body })
            ] })
          ] }) }, review.id)) })
        ] }),
        related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 border-t border-border pt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 font-display text-4xl text-foreground md:text-5xl", children: t("pd_complete") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProductDetailPage as component
};
