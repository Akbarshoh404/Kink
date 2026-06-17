import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, X, Search } from "lucide-react";
import { products as initialProducts, formatPrice } from "@/lib/products";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

function AdminProducts() {
  const [productList, setProductList] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filtered = productList.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Delete this product?")) {
      setProductList((p) => p.filter((x) => x.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Catalog</p>
          <h1 className="mt-1 font-display text-5xl text-foreground">Products</h1>
        </div>
        <button
          onClick={() => { setEditProduct(null); setShowForm(true); }}
          className="flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-background"
        >
          <Plus size={13} /> Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-sm border border-border bg-transparent pl-9 pr-4 py-2.5 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-muted">
              {["Product", "Brand", "Category", "Price", "Stock", "Rating", ""].map((h) => (
                <th key={h} className="px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((p) => {
              const totalStock = Object.values(p.stock).reduce((s, v) => s + v, 0);
              return (
                <motion.tr key={p.id} layout className="bg-card hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-8 bg-muted flex-shrink-0 overflow-hidden">
                        <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <span className="text-[13px] text-foreground">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground">{p.brand}</td>
                  <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground">{p.category}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-foreground">{formatPrice(p.price)}</td>
                  <td className="px-4 py-3">
                    <span className={`font-mono text-[10px] uppercase px-2 py-1 ${totalStock <= 5 ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-400"}`}>
                      {totalStock}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground">★ {p.rating}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => { setEditProduct(p); setShowForm(true); }} className="text-muted-foreground hover:text-foreground">
                        <Edit2 size={13} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Product Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm" onClick={() => setShowForm(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-background border border-border p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-3xl text-foreground">{editProduct ? "Edit Product" : "New Product"}</h2>
                <button onClick={() => setShowForm(false)}>
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                {editProduct ? `Editing: ${editProduct.name}` : "Create a new product in the catalog."}
              </p>
              <div className="mt-6 space-y-4">
                {["Name", "Brand", "Price", "Category", "Description"].map((field) => (
                  <div key={field}>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{field}</label>
                    <input
                      defaultValue={editProduct ? String((editProduct as any)[field.toLowerCase()]) : ""}
                      className="w-full border border-border bg-transparent px-3 py-2.5 text-[13px] text-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setShowForm(false)} className="flex-1 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground">
                  Cancel
                </button>
                <button onClick={() => setShowForm(false)} className="flex-1 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background">
                  {editProduct ? "Save Changes" : "Create Product"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
