import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import "../_libs/i18next.mjs";
import { l as LayoutDashboard, m as ChartNoAxesColumn, c as Package, n as ShoppingCart, U as Users, a as Tag, o as Image } from "../_libs/lucide-react.mjs";
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
  to: "/admin",
  label: "Analytics",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 14 })
}, {
  to: "/admin/products",
  label: "Products",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 14 })
}, {
  to: "/admin/orders",
  label: "Orders",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 14 })
}, {
  to: "/admin/customers",
  label: "Customers",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 })
}, {
  to: "/admin/marketing",
  label: "Marketing",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14 })
}, {
  to: "/admin/banners",
  label: "Banners",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 14 })
}];
function AdminLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[calc(100vh-4rem)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-56 border-r border-border px-4 py-8 flex-shrink-0 hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { size: 14, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Admin Panel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: sideNav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: n.to, activeOptions: {
          exact: n.to === "/admin"
        }, className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors", activeProps: {
          className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground bg-muted rounded-sm"
        }, children: [
          n.icon,
          " ",
          n.label
        ] }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] }) })
  ] });
}
export {
  AdminLayout as component
};
