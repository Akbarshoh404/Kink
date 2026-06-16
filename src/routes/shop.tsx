import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products, allBrands, formatPrice } from "@/lib/products";
import { Search, X, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Sneakers & Streetwear — KINK Tashkent" },
      { name: "description", content: "Browse sneakers from Nike, Adidas, Jordan, New Balance, Asics, Vans and Converse at KINK Tashkent." },
      { property: "og:title", content: "Shop — KINK Tashkent" },
      { property: "og:description", content: "Sneakers, apparel, and accessories. Parkent 283, Tashkent." },
    ],
  }),
  component: ShopPage,
});

const categories = ["All", "Sneakers", "Apparel", "Accessories"] as const;
const sorts = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price ↑" },
  { id: "price-desc", label: "Price ↓" },
] as const;

const MAX_PRICE = Math.max(...products.map((p) => p.price));
const MIN_PRICE = Math.min(...products.map((p) => p.price));

function ShopPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [brands, setBrands] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState<(typeof sorts)[number]["id"]>("featured");
  const [panelOpen, setPanelOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (brands.length) list = list.filter((p) => brands.includes(p.brand));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    list = list.filter((p) => p.price <= maxPrice);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest") list.sort((a, b) => b.releaseOrder - a.releaseOrder);
    return list;
  }, [category, brands, query, maxPrice, sort]);

  const toggleBrand = (b: string) =>
    setBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  const activeFilterCount =
    (category !== "All" ? 1 : 0) + brands.length + (query ? 1 : 0) + (maxPrice < MAX_PRICE ? 1 : 0);

  const clearAll = () => {
    setCategory("All");
    setBrands([]);
    setQuery("");
    setMaxPrice(MAX_PRICE);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-xs uppercase tracking-widest text-primary"
          >
            ▌ Catalogue
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-display text-6xl tracking-tight text-foreground md:text-9xl"
          >
            The full rack.
          </motion.h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            What you see is a slice — visit Parkent 283 for the full inventory or
            ping us on Telegram for size checks.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          {/* Top bar: search + category pills + sort */}
          <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center">
            <div className="relative flex-1 md:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand or model"
                className="w-full border border-border bg-card py-2.5 pl-9 pr-9 font-mono text-xs uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((f) => (
                <button
                  key={f}
                  onClick={() => setCategory(f)}
                  className={
                    "relative px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors " +
                    (category === f
                      ? "text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary")
                  }
                >
                  {category === f && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 md:ml-auto">
              <button
                onClick={() => setPanelOpen((s) => !s)}
                className="flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs uppercase tracking-widest text-foreground hover:border-primary hover:text-primary"
              >
                <SlidersHorizontal className="size-3.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">{activeFilterCount}</span>
                )}
              </button>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="border border-border bg-card px-3 py-2 font-mono text-xs uppercase tracking-widest text-foreground focus:border-primary focus:outline-none"
              >
                {sorts.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Expandable filter panel */}
          <AnimatePresence initial={false}>
            {panelOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                className="overflow-hidden border-b border-border"
              >
                <div className="grid gap-8 py-6 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Brand</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {allBrands.map((b) => {
                        const active = brands.includes(b);
                        return (
                          <button
                            key={b}
                            onClick={() => toggleBrand(b)}
                            className={
                              "border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors " +
                              (active
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-muted-foreground hover:border-primary hover:text-primary")
                            }
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Max price</p>
                      <p className="font-mono text-[11px] text-primary">{formatPrice(maxPrice)}</p>
                    </div>
                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      step={50000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="mt-4 w-full accent-primary"
                    />
                    <div className="mt-1 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>{formatPrice(MIN_PRICE)}</span>
                      <span>{formatPrice(MAX_PRICE)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Meta row */}
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "item" : "items"}
            </span>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAll}
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                Clear all ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Grid */}
          <motion.div layout className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 border border-dashed border-border p-12 text-center"
            >
              <p className="font-display text-4xl text-foreground">No matches.</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Loosen the filters or hit us on Telegram.
              </p>
              <button
                onClick={clearAll}
                className="mt-6 bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
