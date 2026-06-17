import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

// Official brand product images from Nike/Adidas/Puma CDNs
const MOSAIC = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6da4186-4c37-4234-8bfa-26c0a86df85f/air-force-1-07-shoes-WrLlWX.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbab5c7e1afb45de8613ae5c00c3a77e_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b49280b-f77e-4e54-88f1-4e97879a5817/dunk-low-retro-shoes-WrLlWX.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96ab4f5b89c8419888bfae32014ae701_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369571/63/sv01/fnd/PNA/fmt/png/RS-X-Reinvention-Sneakers",
];

// Fallback Unsplash images if CDN fails
const FALLBACK = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=85",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=85",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=85",
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=85",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=85",
];

function MosaicImage({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback; }}
      className="h-full w-full object-contain p-2 transition-transform duration-700 hover:scale-105"
    />
  );
}

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex h-[calc(100vh-64px)] flex-col overflow-hidden bg-background">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Main content — grows to fill */}
      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 overflow-hidden px-4 py-8 md:grid-cols-[1fr_420px] md:px-8 lg:grid-cols-[1fr_500px]">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-6 bg-foreground/30" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              {t("hero_tag")}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none tracking-tight text-foreground"
              style={{ fontSize: "clamp(4.5rem,11vw,9rem)" }}
            >
              WALK
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none tracking-tight"
              style={{
                fontSize: "clamp(4.5rem,11vw,9rem)",
                WebkitTextStroke: "1.5px var(--color-foreground)",
                color: "transparent",
              }}
            >
              LOUD.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted-foreground"
          >
            {t("hero_sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              to="/shop"
              className="group flex items-center gap-2.5 bg-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              {t("hero_cta_shop")}
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+998909248761"
              className="flex items-center gap-2.5 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60"
            >
              <Phone size={11} />
              {t("hero_cta_call")}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-8 grid max-w-xs grid-cols-3 gap-3 border-t border-border/40 pt-6"
          >
            {[
              { val: "10+", key: "hero_brands" },
              { val: "500+", key: "hero_skus" },
              { val: "11–22", key: "hero_daily" },
            ].map((s) => (
              <div key={s.key}>
                <p className="font-display text-3xl text-foreground">{s.val}</p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t(s.key as any)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: mosaic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden h-full items-center md:flex"
        >
          <div className="relative h-full w-full max-h-[calc(100vh-180px)]">
            <div className="grid h-full grid-cols-2 gap-2.5">
              {/* Left col */}
              <div className="flex flex-col gap-2.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                    className={`overflow-hidden bg-card ${i === 1 ? "flex-[1.8]" : "flex-1"}`}
                  >
                    <MosaicImage src={MOSAIC[i]} fallback={FALLBACK[i]} alt="KINK product" />
                  </motion.div>
                ))}
              </div>
              {/* Right col — offset */}
              <div className="flex flex-col gap-2.5 pt-10">
                {[3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 + (i - 3) * 0.08 }}
                    className={`overflow-hidden bg-card ${i === 4 ? "flex-[1.8]" : "flex-1"}`}
                  >
                    <MosaicImage src={MOSAIC[i]} fallback={FALLBACK[i]} alt="KINK product" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating KINK badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -left-5 top-1/2 -translate-y-1/2 bg-foreground px-4 py-3 text-background shadow-xl"
            >
              <p className="font-display text-3xl leading-none">KINK</p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-background/60">Tashkent</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom brands strip — pinned to bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="relative shrink-0 border-t border-border/30 py-3"
      >
        <div className="flex overflow-hidden">
          {[0, 1].map((pass) => (
            <div
              key={pass}
              aria-hidden={pass === 1}
              className="marquee flex shrink-0 items-center gap-12 pr-12"
            >
              {["NIKE", "ADIDAS", "PUMA", "ASICS", "VANS", "NEW BALANCE", "CONVERSE", "JORDAN", "KINK"].map((b) => (
                <span key={b} className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
                  {b}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
