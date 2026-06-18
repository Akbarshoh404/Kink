import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { d as MapPin, C as Clock, i as Phone, I as Instagram, j as Send } from "../_libs/lucide-react.mjs";
function Footer() {
  const { t } = useTranslation();
  const links = {
    [t("footer_shop")]: [
      { label: t("footer_new"), to: "/shop?tag=NEW" },
      { label: t("footer_hot"), to: "/shop?tag=HOT" },
      { label: t("footer_sale"), to: "/shop?tag=SALE" },
      { label: t("footer_all"), to: "/shop" }
    ],
    [t("footer_categories")]: [
      { label: t("footer_sneakers"), to: "/shop?category=Sneakers" },
      { label: t("footer_tshirts"), to: "/shop?subcategory=T-Shirts" },
      { label: t("footer_jeans"), to: "/shop?subcategory=Jeans" },
      { label: t("footer_accessories"), to: "/shop?category=Accessories" }
    ],
    [t("footer_care")]: [
      { label: t("footer_size_guide"), to: "/about" },
      { label: t("footer_returns"), to: "/about" },
      { label: t("footer_warranty"), to: "/about" },
      { label: t("footer_contact"), to: "/contact" }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl leading-none tracking-tight text-foreground", children: "KINK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground", children: "Tashkent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed text-muted-foreground", children: t("footer_tagline") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-[12px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, className: "shrink-0" }),
            t("footer_address")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "shrink-0" }),
            t("footer_hours")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12, className: "shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+998909248761", className: "hover:text-foreground", children: "+998 90 924 87 61" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://instagram.com",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Instagram",
              className: "text-muted-foreground transition-colors hover:text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://t.me/+Sge_eceqOK5xsZtn",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Telegram",
              className: "text-muted-foreground transition-colors hover:text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 15 })
            }
          )
        ] })
      ] }),
      Object.entries(links).map(([group, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "text-[13px] text-muted-foreground transition-colors hover:text-foreground",
            children: item.label
          }
        ) }, item.label)) })
      ] }, group))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[11px] text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " KINK Tashkent. ",
        t("footer_rights")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" })
      ] })
    ] })
  ] }) });
}
export {
  Footer as F
};
