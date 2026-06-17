import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Package, Heart, Star } from "lucide-react";
import ordersData from "@/data/orders.json";
import usersData from "@/data/users.json";
import { formatPrice } from "@/lib/products";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardOverview,
});

function DashboardOverview() {
  const user = usersData[0];
  const orders = ordersData.filter((o) => o.userId === user.id);

  const stats = [
    { label: "Total Orders", value: orders.length, icon: <Package size={18} />, to: "/dashboard/orders" },
    { label: "Wishlist Items", value: user.wishlist.length, icon: <Heart size={18} />, to: "/dashboard/wishlist" },
    { label: "Loyalty Points", value: user.loyaltyPoints, icon: <Star size={18} />, to: "/dashboard" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Welcome back</p>
        <h1 className="mt-1 font-display text-5xl text-foreground">{user.name}</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={stat.to as "/"} className="block border border-border bg-card p-5 hover:border-foreground/40 transition-colors">
              <div className="text-muted-foreground mb-3">{stat.icon}</div>
              <p className="font-display text-4xl text-foreground">{stat.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent orders */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-3xl text-foreground">Recent Orders</h2>
          <Link to="/dashboard/orders" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
            View All →
          </Link>
        </div>
        <div className="space-y-3">
          {orders.slice(0, 3).map((order) => (
            <div key={order.id} className="border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">#{order.id}</p>
                  <p className="mt-1 text-[14px] text-foreground">{order.items.length} item(s)</p>
                </div>
                <div className="text-right">
                  <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 ${
                    order.status === "delivered" ? "bg-green-500/10 text-green-400"
                    : order.status === "processing" ? "bg-gold/10 text-gold"
                    : "bg-muted text-muted-foreground"
                  }`}>
                    {order.status}
                  </span>
                  <p className="mt-1 font-mono text-[12px] text-foreground">{formatPrice(order.total)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
