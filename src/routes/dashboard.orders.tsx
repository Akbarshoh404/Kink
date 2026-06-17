import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ordersData from "@/data/orders.json";
import { formatPrice } from "@/lib/products";
import { Package, Truck } from "lucide-react";

export const Route = createFileRoute("/dashboard/orders")({
  component: OrdersPage,
});

function OrdersPage() {
  const orders = ordersData;

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">History</p>
        <h1 className="mt-1 font-display text-5xl text-foreground">Orders</h1>
      </div>

      <div className="space-y-4">
        {orders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-border bg-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Order #{order.id}</p>
                <p className="mt-0.5 text-[13px] text-foreground">{new Date(order.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
              </div>
              <div className="text-right">
                <span className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 ${
                  order.status === "delivered" ? "bg-green-500/10 text-green-400"
                  : order.status === "processing" ? "bg-gold/10 text-gold"
                  : "bg-muted text-muted-foreground"
                }`}>
                  {order.status}
                </span>
                <p className="mt-1 font-mono text-[13px] font-medium text-foreground">{formatPrice(order.total)}</p>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-border/50">
              {order.items.map((item, j) => (
                <div key={j} className="flex items-center gap-4 px-5 py-4">
                  <Package size={14} className="text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[13px] text-foreground">{item.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{item.size} · {item.color} · Qty {item.quantity}</p>
                  </div>
                  <p className="font-mono text-[12px] text-foreground">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            {/* Tracking */}
            {order.trackingNumber && (
              <div className="border-t border-border px-5 py-3 flex items-center gap-2">
                <Truck size={13} className="text-muted-foreground" />
                <span className="font-mono text-[10px] text-muted-foreground">Tracking: </span>
                <span className="font-mono text-[10px] text-foreground">{order.trackingNumber}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
