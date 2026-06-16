import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

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

const filters = ["All", "Sneakers", "Apparel", "Accessories"] as const;

function ShopPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">▌ Catalogue</p>
          <h1 className="mt-4 font-display text-6xl tracking-tight text-foreground md:text-9xl">
            The full rack.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            What you see is a slice — visit Parkent 283 for the full inventory or
            ping us on Telegram for size checks.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors " +
                  (active === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary")
                }
              >
                {f}
              </button>
            ))}
            <span className="ml-auto self-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {filtered.length} items
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} i={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
