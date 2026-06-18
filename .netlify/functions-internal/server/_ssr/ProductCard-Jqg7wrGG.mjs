import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as useWishlistStore, d as useUIStore, f as formatPrice } from "./router-Emfjchtb.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { E as Eye, H as Heart } from "../_libs/lucide-react.mjs";
const TAG_COLORS = {
  NEW: "bg-foreground text-background",
  BESTSELLER: "bg-gold/20 text-gold border border-gold/30",
  SALE: "bg-destructive/10 text-destructive border border-destructive/20",
  LIMITED: "bg-foreground/10 text-foreground border border-border"
};
function ProductCard({ product, index = 0, showQuickView = true }) {
  const [hovered, setHovered] = reactExports.useState(false);
  const { toggle, has } = useWishlistStore();
  const openQuickView = useUIStore((s) => s.openQuickView);
  const isWishlisted = has(product.id);
  const hasSecondImage = product.images.length > 1;
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
      className: "group relative",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$productId", params: { productId: product.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: product.images[0],
              alt: product.name,
              loading: "lazy",
              animate: { opacity: hovered && hasSecondImage ? 0 : 1 },
              transition: { duration: 0.4 },
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          hasSecondImage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: product.images[1],
              alt: product.name,
              loading: "lazy",
              animate: { opacity: hovered ? 1 : 0 },
              transition: { duration: 0.4 },
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 flex flex-col gap-1.5", children: product.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${TAG_COLORS[tag] ?? "bg-card text-foreground"}`,
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 },
              transition: { duration: 0.25 },
              className: "absolute bottom-3 left-3 right-3 flex gap-2",
              children: showQuickView && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: (e) => {
                    e.preventDefault();
                    openQuickView(product);
                  },
                  className: "flex flex-1 items-center justify-center gap-1.5 bg-background/90 backdrop-blur-sm py-2.5 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11 }),
                    " ",
                    t("quick_view")
                  ]
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toggle(product.id),
            className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": "Add to wishlist",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                size: 14,
                className: isWishlisted ? "fill-foreground text-foreground" : ""
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: product.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$productId", params: { productId: product.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-foreground leading-snug hover:text-muted-foreground transition-colors", children: product.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[13px] text-foreground", children: formatPrice(product.price) }),
            product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground line-through", children: formatPrice(product.originalPrice) })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
