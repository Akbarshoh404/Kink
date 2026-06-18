import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { i as Phone, j as Send, d as MapPin, C as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-12 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "KINK · Tashkent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-7xl leading-none text-foreground md:text-9xl", children: t("contact_title") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-16 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-16 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -24
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.7
        }, className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [{
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 }),
            label: t("contact_phone_label"),
            value: "+998 90 924 87 61",
            href: "tel:+998909248761"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 15 }),
            label: t("contact_telegram"),
            value: "t.me/+Sge_eceqOK5xsZtn",
            href: "https://t.me/+Sge_eceqOK5xsZtn"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15 }),
            label: t("contact_address_label"),
            value: "Parkent ko'chasi 283, Tashkent",
            href: "https://maps.google.com/?q=Parkent+283+Tashkent"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 15 }),
            label: t("contact_hours_label"),
            value: "11:00 – 22:00",
            href: null
          }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-muted-foreground", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: item.label }),
              item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, target: item.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "mt-0.5 block text-[14px] text-foreground transition-colors hover:text-muted-foreground", children: item.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[14px] text-foreground", children: item.value })
            ] })
          ] }, item.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: t("contact_quick") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [t("contact_q1"), t("contact_q2"), t("contact_q3"), t("contact_q4")].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+998909248761", className: "block border-b border-border/40 pb-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground", children: [
              q,
              " →"
            ] }, q)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
          opacity: 0,
          x: 24
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, onSubmit: (e) => e.preventDefault(), className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 font-display text-4xl leading-none text-foreground", children: t("contact_message") }),
          [{
            label: t("contact_name"),
            type: "text",
            placeholder: "Amir T."
          }, {
            label: t("contact_phone"),
            type: "text",
            placeholder: "+998 90 000 00 00"
          }].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: field.type, placeholder: field.placeholder, className: "w-full border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none" })
          ] }, field.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t("contact_message") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, placeholder: t("contact_message_placeholder"), className: "w-full resize-none border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-opacity hover:opacity-90", children: t("contact_send") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center font-mono text-[10px] text-muted-foreground", children: [
            t("contact_or_call"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+998909248761", className: "text-foreground hover:underline", children: "+998 90 924 87 61" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
