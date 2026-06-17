import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, BarChart2, Image } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — KINK" }] }),
  component: AdminLayout,
});

const sideNav = [
  { to: "/admin", label: "Analytics", icon: <BarChart2 size={14} /> },
  { to: "/admin/products", label: "Products", icon: <Package size={14} /> },
  { to: "/admin/orders", label: "Orders", icon: <ShoppingCart size={14} /> },
  { to: "/admin/customers", label: "Customers", icon: <Users size={14} /> },
  { to: "/admin/marketing", label: "Marketing", icon: <Tag size={14} /> },
  { to: "/admin/banners", label: "Banners", icon: <Image size={14} /> },
];

function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="flex min-h-[calc(100vh-4rem)]">
          {/* Sidebar */}
          <aside className="w-56 border-r border-border px-4 py-8 flex-shrink-0 hidden md:block">
            <div className="flex items-center gap-2 mb-8">
              <LayoutDashboard size={14} className="text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Admin Panel</span>
            </div>
            <nav className="space-y-1">
              {sideNav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to as "/"}
                  activeOptions={{ exact: n.to === "/admin" }}
                  className="flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                  activeProps={{ className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground bg-muted rounded-sm" }}
                >
                  {n.icon} {n.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 px-6 py-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
