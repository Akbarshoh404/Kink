import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero-sneaker.jpg";
import storeInterior from "@/assets/store-interior.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KINK — Largest Sneaker Store in Tashkent" },
      { name: "description", content: "Hype sneakers, streetwear, and accessories in Tashkent. Nike, Adidas, Jordan, New Balance and more at Parkent 283." },
      { property: "og:title", content: "KINK — Sneakers & Streetwear, Tashkent" },
      { property: "og:description", content: "Largest sneaker store in Tashkent. Parkent 283. Open daily 11:00–22:00." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 6);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-12 md:grid-cols-12 md:gap-4 md:px-8 md:pt-20">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-primary"
            >
              ◆ Parkent 283 · Tashkent · Since day one
            </motion.p>
            <h1 className="mt-6 font-display text-7xl leading-[0.85] tracking-tight text-foreground md:text-[9rem] lg:text-[11rem]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                WALK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block text-primary"
              >
                LOUD.
              </motion.span>
            </h1>
            <p className="mt-8 max-w-md text-base text-muted-foreground md:text-lg">
              The largest sneaker store in Tashkent. From everyday classics to the
              hardest-to-find drops — racked, lit, and ready.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Browse the rack
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Visit the store
              </Link>
            </div>

            <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-4xl text-primary">10+</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Brands</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">500+</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">SKUs in stock</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">11–22</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Open daily</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:col-span-5"
          >
            <div className="absolute -right-10 -top-10 hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
              ▲ Featured · {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </div>
            <div className="group relative aspect-square w-full overflow-hidden border border-border bg-card">
              <img
                src={hero}
                alt="Featured sneaker on a black backdrop"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-background/80 p-4 backdrop-blur">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Drop 01</p>
                  <p className="font-display text-xl text-foreground">Air Force 1 '07</p>
                </div>
                <p className="font-mono text-xs text-primary">1 450 000 UZS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* FEATURED */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <motion.div {...fadeUp} className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">▌ 01 — Featured</p>
              <h2 className="mt-4 font-display text-5xl tracking-tight text-foreground md:text-7xl">
                On the rack now
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary md:inline"
            >
              View all →
            </Link>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* STORE */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-8">
          <div className="aspect-[4/5] overflow-hidden border border-border bg-card">
            <img
              src={storeInterior}
              alt="Inside the Kink sneaker store in Tashkent"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">▌ 02 — The Store</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight text-foreground md:text-7xl">
              Built for<br />the walk-in.
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Two floors, lit shelves, every size in the back. Come through, try on,
              and walk out with your next pair. Our team knows the catalog cold and
              will sort you with the right fit, the right size, and the right vibe.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Returns</p>
                <p className="mt-2 font-display text-2xl text-foreground">14 days</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Warranty</p>
                <p className="mt-2 font-display text-2xl text-foreground">30 days</p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex w-fit items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Our story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">
              Drop us a line.
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest">
              Looking for a specific pair? We'll track it down.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+998909248761"
              className="bg-background px-6 py-4 font-mono text-xs uppercase tracking-widest text-foreground"
            >
              +998 90 924 87 61
            </a>
            <a
              href="https://t.me/+Sge_eceqOK5xsZtn"
              target="_blank"
              rel="noreferrer"
              className="border border-primary-foreground/30 px-6 py-4 font-mono text-xs uppercase tracking-widest"
            >
              Telegram →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
