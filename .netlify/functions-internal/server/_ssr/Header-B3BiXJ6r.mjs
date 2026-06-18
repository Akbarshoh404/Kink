import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCartStore, c as useWishlistStore, i as useThemeStore, d as useUIStore, j as useLangStore } from "./router-Emfjchtb.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { e as Sun, f as Moon, g as Search, H as Heart, S as ShoppingBag, h as Menu } from "../_libs/lucide-react.mjs";
const LOCALES = ["en", "ru", "uz"];
function Header() {
  const cartCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.ids.length);
  const { theme, toggle: toggleTheme } = useThemeStore();
  const openMobileMenu = useUIStore((s) => s.openMobileMenu);
  const { locale, set: setLocale } = useLangStore();
  const { t } = useTranslation();
  const nav = [
    { to: "/shop", label: t("nav_shop") },
    { to: "/about", label: t("nav_about") },
    { to: "/contact", label: t("nav_contact") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed left-0 right-0 top-0 z-50 glass", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl leading-none tracking-tight text-foreground", children: "KINK" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:inline", children: "Tashkent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-10 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
        activeProps: { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-foreground" },
        children: n.label
      },
      n.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-3 hidden items-center gap-px rounded-sm border border-border/60 bg-muted/40 p-0.5 md:flex", children: LOCALES.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLocale(l),
          className: `h-6 rounded-[2px] px-2 font-mono text-[9px] uppercase tracking-wider transition-all duration-200 ${locale === l ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
          children: l
        },
        l
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3 hidden h-4 w-px bg-border md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: toggleTheme,
          className: "flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
          "aria-label": "Toggle theme",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, rotate: -90, scale: 0.7 },
              animate: { opacity: 1, rotate: 0, scale: 1 },
              exit: { opacity: 0, rotate: 90, scale: 0.7 },
              transition: { duration: 0.18 },
              children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 14 })
            },
            theme
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 hidden h-4 w-px bg-border md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/shop",
          className: "flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
          "aria-label": "Search",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/dashboard/wishlist",
          className: "relative flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
          "aria-label": "Wishlist",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: wishlistCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                exit: { scale: 0 },
                className: "absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center bg-foreground font-mono text-[8px] text-background",
                children: wishlistCount
              },
              wishlistCount
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: openCart,
          className: "relative ml-1 flex h-9 items-center gap-2 border border-border/60 bg-muted/30 px-3 text-muted-foreground transition-all hover:border-foreground/40 hover:bg-muted/60 hover:text-foreground",
          "aria-label": "Cart",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: cartCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0, y: -4 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: "font-mono text-[10px] text-foreground",
                children: cartCount
              },
              cartCount
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                className: "hidden font-mono text-[9px] uppercase tracking-widest md:inline",
                children: "Bag"
              },
              "bag"
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: openMobileMenu,
          className: "ml-2 flex h-9 w-9 items-center justify-center text-muted-foreground md:hidden",
          "aria-label": "Menu",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 17 })
        }
      )
    ] })
  ] }) });
}
export {
  Header as H
};
