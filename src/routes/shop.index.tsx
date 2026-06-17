import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, allCategories, allBrands } from "@/lib/products";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const searchSchema = z.object({
  category: z.string().optional(),
  subcategory: z.string().optional(),
  tag: z.string().optional(),
  brand: z.string().optional(),
  q: z.string().optional(),
  collection: z.string().optional(),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [{ title: "Shop — KINK Tashkent" }],
  }),
  component: ShopPage,
});

type SortKey = "newest" | "price-asc" | "price-desc" | "rating";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "rating", label: "Top Rated" },
];

function ShopPage() {
  const search = useSearch({ from: "/shop/" });
  const [sortKey, setSortKey] = useState<SortKey>("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    search.category ? [search.category] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    search.brand ? [search.brand] : []
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(search.tag ?? null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQ, setSearchQ] = useState(search.q ?? "");

  const allTags = ["NEW", "BESTSELLER", "SALE", "LIMITED"];

  const filtered = useMemo(() => {
    let result = [...products];
    if (searchQ) {
      const q = searchQ.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategories.length) result = result.filter((p) => selectedCategories.includes(p.category));
    if (selectedBrands.length) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (selectedTag) result = result.filter((p) => p.tags.includes(selectedTag));
    if (search.subcategory) result = result.filter((p) => p.subcategory === search.subcategory);
    return result.sort((a, b) => {
      if (sortKey === "newest") return b.releaseOrder - a.releaseOrder;
      if (sortKey === "price-asc") return a.price - b.price;
      if (sortKey === "price-desc") return b.price - a.price;
      if (sortKey === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [searchQ, selectedCategories, selectedBrands, selectedTag, sortKey, search.subcategory]);

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const activeFilterCount = selectedCategories.length + selectedBrands.length + (selectedTag ? 1 : 0);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Page Header */}
        <div className="border-b border-border py-12 px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">KINK · Tashkent</p>
            <h1 className="mt-2 font-display text-6xl text-foreground md:text-8xl">{t("shop_title")}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{filtered.length} {t("shop_pieces")}</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  value={searchQ}
                  onChange={(e) => setSearchQ(e.target.value)}
                  placeholder={t("shop_search")}
                  className="w-56 border border-border bg-transparent px-4 py-2 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
              >
                <SlidersHorizontal size={13} />
                {t("shop_filters")}
                {activeFilterCount > 0 && (
                  <span className="bg-foreground text-background w-4 h-4 flex items-center justify-center text-[9px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="flex items-center gap-1 border border-border px-3 py-2 font-mono text-[10px] text-foreground hover:bg-muted"
                >
                  {selectedTag} <X size={10} />
                </button>
              )}
            </div>
            <div className="relative">
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="appearance-none border border-border bg-background px-4 py-2 pr-8 font-mono text-[11px] text-foreground focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.key} value={o.key}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <p className="font-display text-4xl text-muted-foreground">{t("shop_empty")}</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setSelectedTag(null);
                    setSearchQ("");
                  }}
                  className="mt-6 font-mono text-[11px] uppercase tracking-widest text-foreground underline"
                >
                  {t("shop_empty_clear")}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Filters Drawer (from LEFT on desktop, but clean overlay) */}
      <AnimatePresence>
        {filtersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <span className="font-display text-xl tracking-widest">Filters</span>
                <button onClick={() => setFiltersOpen(false)}>
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Filter by Tag</p>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                          selectedTag === tag
                            ? "bg-foreground text-background"
                            : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Category</p>
                  <div className="space-y-2">
                    {allCategories.map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleCategory(cat)}
                          className={`h-4 w-4 border transition-colors cursor-pointer flex items-center justify-center ${
                            selectedCategories.includes(cat)
                              ? "bg-foreground border-foreground"
                              : "border-border group-hover:border-foreground"
                          }`}
                        >
                          {selectedCategories.includes(cat) && (
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <path d="M1 3L3 5L7 1" stroke="currentColor" strokeWidth="1.5" className="text-background" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[13px] text-foreground">{cat}</span>
                        <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                          {products.filter((p) => p.category === cat).length}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Brand</p>
                  <div className="space-y-2">
                    {allBrands.map((brand) => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleBrand(brand)}
                          className={`h-4 w-4 border transition-colors cursor-pointer flex items-center justify-center ${
                            selectedBrands.includes(brand)
                              ? "bg-foreground border-foreground"
                              : "border-border group-hover:border-foreground"
                          }`}
                        >
                          {selectedBrands.includes(brand) && (
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <path d="M1 3L3 5L7 1" stroke="currentColor" strokeWidth="1.5" className="text-background" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[13px] text-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-border px-6 py-4 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setSelectedTag(null);
                  }}
                  className="flex-1 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="flex-1 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background"
                >
                  View {filtered.length}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
