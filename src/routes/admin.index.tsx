import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Users, Package } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import ordersData from "@/data/orders.json";
import usersData from "@/data/users.json";
import { products, formatPrice } from "@/lib/products";

export const Route = createFileRoute("/admin/")({
  component: AdminAnalytics,
});

const revenueData = [
  { month: "Jul", revenue: 12400000 },
  { month: "Aug", revenue: 18900000 },
  { month: "Sep", revenue: 24100000 },
  { month: "Oct", revenue: 31200000 },
  { month: "Nov", revenue: 42800000 },
  { month: "Dec", revenue: 58600000 },
];

const categoryData = [
  { name: "Outerwear", sales: 48 },
  { name: "Tops", sales: 82 },
  { name: "Bottoms", sales: 36 },
  { name: "Dresses", sales: 29 },
  { name: "Accessories", sales: 55 },
];

function AdminAnalytics() {
  const totalRevenue = ordersData.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = ordersData.length;
  const totalCustomers = usersData.length;
  const totalProducts = products.length;

  const kpis = [
    { label: "Revenue", value: formatPrice(totalRevenue), trend: "+24%", icon: <TrendingUp size={16} />, positive: true },
    { label: "Orders", value: totalOrders, trend: "+12%", icon: <ShoppingCart size={16} />, positive: true },
    { label: "Customers", value: totalCustomers, trend: "+8%", icon: <Users size={16} />, positive: true },
    { label: "Products", value: totalProducts, trend: "Active", icon: <Package size={16} />, positive: null },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
        <h1 className="mt-1 font-display text-5xl text-foreground">Analytics</h1>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{kpi.icon}</span>
              <span className={`font-mono text-[10px] ${kpi.positive === true ? "text-green-400" : kpi.positive === false ? "text-destructive" : "text-muted-foreground"}`}>
                {kpi.trend}
              </span>
            </div>
            <p className="mt-3 font-display text-3xl text-foreground">{kpi.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{kpi.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">Revenue (Last 6 months)</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "var(--color-muted-foreground)", fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "var(--color-muted-foreground)", fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000000).toFixed(0)}M`} />
              <Tooltip
                contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 0, fontFamily: "JetBrains Mono", fontSize: 11 }}
                formatter={(v: number) => [formatPrice(v), "Revenue"]}
              />
              <Line type="monotone" dataKey="revenue" stroke="var(--color-foreground)" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="border border-border bg-card p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">Sales by Category</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={categoryData} barSize={20}>
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "var(--color-muted-foreground)", fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "var(--color-muted-foreground)", fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 0, fontFamily: "JetBrains Mono", fontSize: 11 }}
              />
              <Bar dataKey="sales" fill="var(--color-foreground)" opacity={0.9} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="border border-border">
        <div className="border-b border-border px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground">Recent Orders</p>
        </div>
        <div className="divide-y divide-border">
          {ordersData.map((order) => (
            <div key={order.id} className="flex items-center justify-between px-5 py-3">
              <div>
                <p className="font-mono text-[11px] text-foreground">#{order.id}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{order.address.name}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] text-foreground">{formatPrice(order.total)}</p>
                <span className={`font-mono text-[9px] uppercase ${order.status === "delivered" ? "text-green-400" : "text-gold"}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
