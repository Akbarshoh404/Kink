import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as ordersData } from "./orders-C1yX3zPQ.mjs";
import { u as usersData } from "./users-DTAho2sm.mjs";
import { p as products, f as formatPrice } from "./router-Emfjchtb.mjs";
import "../_libs/i18next.mjs";
import { r as TrendingUp, n as ShoppingCart, U as Users, c as Package } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { R as ResponsiveContainer, L as LineChart, X as XAxis, Y as YAxis, T as Tooltip, a as Line, B as BarChart, b as Bar } from "../_libs/recharts.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const revenueData = [{
  month: "Jul",
  revenue: 124e5
}, {
  month: "Aug",
  revenue: 189e5
}, {
  month: "Sep",
  revenue: 241e5
}, {
  month: "Oct",
  revenue: 312e5
}, {
  month: "Nov",
  revenue: 428e5
}, {
  month: "Dec",
  revenue: 586e5
}];
const categoryData = [{
  name: "Outerwear",
  sales: 48
}, {
  name: "Tops",
  sales: 82
}, {
  name: "Bottoms",
  sales: 36
}, {
  name: "Dresses",
  sales: 29
}, {
  name: "Accessories",
  sales: 55
}];
function AdminAnalytics() {
  const totalRevenue = ordersData.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = ordersData.length;
  const totalCustomers = usersData.length;
  const totalProducts = products.length;
  const kpis = [{
    label: "Revenue",
    value: formatPrice(totalRevenue),
    trend: "+24%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
    positive: true
  }, {
    label: "Orders",
    value: totalOrders,
    trend: "+12%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }),
    positive: true
  }, {
    label: "Customers",
    value: totalCustomers,
    trend: "+8%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
    positive: true
  }, {
    label: "Products",
    value: totalProducts,
    trend: "Active",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16 }),
    positive: null
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-5xl text-foreground", children: "Analytics" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 lg:grid-cols-4", children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.08
    }, className: "border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: kpi.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] ${kpi.positive === true ? "text-green-400" : kpi.positive === false ? "text-destructive" : "text-muted-foreground"}`, children: kpi.trend })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-3xl text-foreground", children: kpi.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: kpi.label })
    ] }, kpi.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6", children: "Revenue (Last 6 months)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: revenueData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: {
            fontSize: 10,
            fill: "var(--color-muted-foreground)",
            fontFamily: "JetBrains Mono"
          }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 10,
            fill: "var(--color-muted-foreground)",
            fontFamily: "JetBrains Mono"
          }, axisLine: false, tickLine: false, tickFormatter: (v) => `${(v / 1e6).toFixed(0)}M` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 0,
            fontFamily: "JetBrains Mono",
            fontSize: 11
          }, formatter: (v) => [formatPrice(v), "Revenue"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "revenue", stroke: "var(--color-foreground)", strokeWidth: 1.5, dot: false })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6", children: "Sales by Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: categoryData, barSize: 20, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: {
            fontSize: 10,
            fill: "var(--color-muted-foreground)",
            fontFamily: "JetBrains Mono"
          }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 10,
            fill: "var(--color-muted-foreground)",
            fontFamily: "JetBrains Mono"
          }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 0,
            fontFamily: "JetBrains Mono",
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "sales", fill: "var(--color-foreground)", opacity: 0.9 })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground", children: "Recent Orders" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: ordersData.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] text-foreground", children: [
            "#",
            order.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-muted-foreground", children: order.address.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-foreground", children: formatPrice(order.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[9px] uppercase ${order.status === "delivered" ? "text-green-400" : "text-gold"}`, children: order.status })
        ] })
      ] }, order.id)) })
    ] })
  ] });
}
export {
  AdminAnalytics as component
};
