import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Package, Heart, MapPin, RotateCcw, Star, Clock } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Account — KINK" }] }),
  component: DashboardLayout,
});

const sideNav = [
  { to: "/dashboard", label: "Overview", icon: <Star size={14} /> },
  { to: "/dashboard/orders", label: "Orders", icon: <Package size={14} /> },
  { to: "/dashboard/wishlist", label: "Wishlist", icon: <Heart size={14} /> },
  { to: "/dashboard/addresses", label: "Addresses", icon: <MapPin size={14} /> },
  { to: "/dashboard/returns", label: "Returns", icon: <RotateCcw size={14} /> },
  { to: "/dashboard/recently-viewed", label: "Recently Viewed", icon: <Clock size={14} /> },
];

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-4">My Account</p>
              {sideNav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to as "/"}
                  activeOptions={{ exact: n.to === "/dashboard" }}
                  className="flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-muted"
                  activeProps={{ className: "flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground bg-muted rounded-sm" }}
                >
                  {n.icon}
                  {n.label}
                </Link>
              ))}
            </aside>
            {/* Content */}
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
