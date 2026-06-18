import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./router-Emfjchtb.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutPage() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[55vh] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=1400&q=90", alt: "KINK Store", className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 to-background/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto flex h-full max-w-7xl items-end px-4 pb-16 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60", children: "Parkent 283, Tashkent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-7xl leading-none text-foreground md:text-9xl", children: t("about_title") })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 py-20 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7
      }, className: "space-y-6 text-[16px] leading-[1.85] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about_p1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about_p2") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about_p3") })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border px-4 py-20 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: [{
        label: t("about_location"),
        value: "Parkent ko'chasi 283",
        sub: "Tashkent, Uzbekistan"
      }, {
        label: t("about_hours"),
        value: t("about_hours_val"),
        sub: t("about_hours_sub")
      }, {
        label: t("about_contact"),
        value: "+998 90 924 87 61",
        sub: t("about_contact_sub")
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.12,
        duration: 0.5
      }, className: "border-t-2 border-border pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-4xl leading-tight text-foreground", children: item.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] text-muted-foreground", children: item.sub })
      ] }, item.label)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border px-4 py-20 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 font-display text-5xl leading-none text-foreground md:text-6xl", children: t("about_policies") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [{
          title: t("about_exchange"),
          body: t("about_exchange_body")
        }, {
          title: t("about_warranty"),
          body: t("about_warranty_body")
        }, {
          title: t("about_authenticity"),
          body: t("about_authenticity_body")
        }, {
          title: t("about_sizing"),
          body: t("about_sizing_body")
        }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.08,
          duration: 0.5
        }, className: "border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[13px] leading-relaxed text-muted-foreground", children: p.body })
        ] }, p.title)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
