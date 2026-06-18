import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import "../_libs/i18next.mjs";
import { b as Star, c as Package, H as Heart, d as MapPin, R as RotateCcw, C as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
const sideNav = [{
  to: "/dashboard",
  label: "Overview",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 })
}, {
  to: "/dashboard/orders",
  label: "Orders",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 14 })
}, {
  to: "/dashboard/wishlist",
  label: "Wishlist",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 })
}, {
  to: "/dashboard/addresses",
  label: "Addresses",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 })
}, {
  to: "/dashboard/returns",
  label: "Returns",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 })
}, {
  to: "/dashboard/recently-viewed",
  label: "Recently Viewed",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 })
}];
function DashboardLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "My Account" }),
        sideNav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: n.to, activeOptions: {
          exact: n.to === "/dashboard"
        }, className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-muted", activeProps: {
          className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground bg-muted rounded-sm"
        }, children: [
          n.icon,
          n.label
        ] }, n.to))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DashboardLayout as component
};
