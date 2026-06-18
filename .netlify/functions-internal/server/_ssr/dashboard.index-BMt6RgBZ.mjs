import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { o as ordersData } from "./orders-C1yX3zPQ.mjs";
import { u as usersData } from "./users-DTAho2sm.mjs";
import { f as formatPrice } from "./router-Emfjchtb.mjs";
import "../_libs/i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as Package, H as Heart, b as Star } from "../_libs/lucide-react.mjs";
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
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DashboardOverview() {
  const user = usersData[0];
  const orders = ordersData.filter((o) => o.userId === user.id);
  const stats = [{
    label: "Total Orders",
    value: orders.length,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18 }),
    to: "/dashboard/orders"
  }, {
    label: "Wishlist Items",
    value: user.wishlist.length,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 }),
    to: "/dashboard/wishlist"
  }, {
    label: "Loyalty Points",
    value: user.loyaltyPoints,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18 }),
    to: "/dashboard"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Welcome back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-5xl text-foreground", children: user.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.1
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: stat.to, className: "block border border-border bg-card p-5 hover:border-foreground/40 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mb-3", children: stat.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-foreground", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: stat.label })
    ] }) }, stat.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground", children: "Recent Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/orders", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground", children: "View All →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: orders.slice(0, 3).map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            "#",
            order.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[14px] text-foreground", children: [
            order.items.length,
            " item(s)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase tracking-widest px-2 py-1 ${order.status === "delivered" ? "bg-green-500/10 text-green-400" : order.status === "processing" ? "bg-gold/10 text-gold" : "bg-muted text-muted-foreground"}`, children: order.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-[12px] text-foreground", children: formatPrice(order.total) })
        ] })
      ] }) }, order.id)) })
    ] })
  ] });
}
export {
  DashboardOverview as component
};
