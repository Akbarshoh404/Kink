import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { getFeatured } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedProducts() {
  const featured = getFeatured().slice(0, 6);

  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              ▌ In Stock Now
            </p>
            <h2 className="mt-2 font-display text-6xl md:text-8xl text-foreground">
              Featured
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/shop"
              className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              View All →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/shop"
            className="border border-border px-8 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
