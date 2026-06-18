import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header } from "./Header-B3BiXJ6r.mjs";
import { F as Footer } from "./Footer-fGbj8gtc.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getFeatured } from "./router-Emfjchtb.mjs";
import { P as ProductCard } from "./ProductCard-Jqg7wrGG.mjs";
import { r as reviewsData } from "./reviews-CXVyNPlL.mjs";
import "../_libs/i18next.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, i as Phone, b as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const MOSAIC = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6da4186-4c37-4234-8bfa-26c0a86df85f/air-force-1-07-shoes-WrLlWX.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbab5c7e1afb45de8613ae5c00c3a77e_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b49280b-f77e-4e54-88f1-4e97879a5817/dunk-low-retro-shoes-WrLlWX.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96ab4f5b89c8419888bfae32014ae701_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369571/63/sv01/fnd/PNA/fmt/png/RS-X-Reinvention-Sneakers"
];
const FALLBACK = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=85",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=85",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=85",
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=85",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=85"
];
function MosaicImage({ src, fallback, alt }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt,
      onError: (e) => {
        e.currentTarget.src = fallback;
      },
      className: "h-full w-full object-contain p-2 transition-transform duration-700 hover:scale-105"
    }
  );
}
function HeroSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[calc(100vh-64px)] flex-col overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none absolute inset-0 opacity-[0.035]",
        style: {
          backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 overflow-hidden px-4 py-8 md:grid-cols-[1fr_420px] md:px-8 lg:grid-cols-[1fr_500px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5 },
            className: "mb-5 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-foreground/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground", children: t("hero_tag") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { y: "100%" },
            animate: { y: 0 },
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            className: "font-display leading-none tracking-tight text-foreground",
            style: { fontSize: "clamp(4.5rem,11vw,9rem)" },
            children: "WALK"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { y: "100%" },
            animate: { y: 0 },
            transition: { duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            className: "font-display leading-none tracking-tight",
            style: {
              fontSize: "clamp(4.5rem,11vw,9rem)",
              WebkitTextStroke: "1.5px var(--color-foreground)",
              color: "transparent"
            },
            children: "LOUD."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.35 },
            className: "mt-5 max-w-xs text-[13px] leading-relaxed text-muted-foreground",
            children: t("hero_sub")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.5 },
            className: "mt-7 flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop",
                  className: "group flex items-center gap-2.5 bg-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85",
                  children: [
                    t("hero_cta_shop"),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 11, className: "transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:+998909248761",
                  className: "flex items-center gap-2.5 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11 }),
                    t("hero_cta_call")
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.75, duration: 0.5 },
            className: "mt-8 grid max-w-xs grid-cols-3 gap-3 border-t border-border/40 pt-6",
            children: [
              { val: "10+", key: "hero_brands" },
              { val: "500+", key: "hero_skus" },
              { val: "11–22", key: "hero_daily" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-foreground", children: s.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground", children: t(s.key) })
            ] }, s.key))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
          className: "hidden h-full items-center md:flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full max-h-[calc(100vh-180px)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-full grid-cols-2 gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 + i * 0.08 },
                  className: `overflow-hidden bg-card ${i === 1 ? "flex-[1.8]" : "flex-1"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MosaicImage, { src: MOSAIC[i], fallback: FALLBACK[i], alt: "KINK product" })
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5 pt-10", children: [3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.38 + (i - 3) * 0.08 },
                  className: `overflow-hidden bg-card ${i === 4 ? "flex-[1.8]" : "flex-1"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MosaicImage, { src: MOSAIC[i], fallback: FALLBACK[i], alt: "KINK product" })
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.9, duration: 0.4 },
                className: "absolute -left-5 top-1/2 -translate-y-1/2 bg-foreground px-4 py-3 text-background shadow-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl leading-none", children: "KINK" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-background/60", children: "Tashkent" })
                ]
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1, duration: 0.4 },
        className: "relative shrink-0 border-t border-border/30 py-3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: [0, 1].map((pass) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": pass === 1,
            className: "marquee flex shrink-0 items-center gap-12 pr-12",
            children: ["NIKE", "ADIDAS", "PUMA", "ASICS", "VANS", "NEW BALANCE", "CONVERSE", "JORDAN", "KINK"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40", children: b }, b))
          },
          pass
        )) })
      }
    )
  ] });
}
const items = [
  "Nike · Adidas · Puma · Asics · Vans · New Balance · Converse · Jordan · KINK",
  "Free Exchange Within 14 Days",
  "Parkent ko'chasi 283, Tashkent · Open 11:00 – 22:00",
  "1 Month Warranty on Footwear",
  "Authentic Originals Only",
  "+998 90 924 87 61"
];
function MarqueeStrip() {
  const repeated = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-y border-border bg-foreground py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee flex gap-0 whitespace-nowrap", children: repeated.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-background", children: [
    item,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-8 opacity-30", children: "·" })
  ] }, i)) }) });
}
function FeaturedProducts() {
  const featured = getFeatured().slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "▌ In Stock Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-6xl md:text-8xl text-foreground", children: "Featured" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              className: "hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors",
              children: "View All →"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5", children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }, product.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/shop",
        className: "border border-border px-8 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors",
        children: "View All"
      }
    ) })
  ] }) });
}
const pillars = [
  {
    number: "01",
    title: "The Brands",
    body: "Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan — all under one roof. Plus our own KINK label built in Tashkent.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=90"
  },
  {
    number: "02",
    title: "The Store",
    body: "Two floors, lit shelves, every size in the back. Come through, try on, and walk out with your next pair. No pressure, no scripts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=90"
  },
  {
    number: "03",
    title: "The Guarantee",
    body: "14-day exchange on all items. 1-month warranty on footwear against manufacturing defects. We stand behind everything we sell.",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=90"
  }
];
function BrandStory() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "max-w-xl mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "About KINK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-6xl md:text-8xl text-foreground leading-none", children: [
            "Tashkent's",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "sneaker spot."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: pillars.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        className: `grid grid-cols-1 gap-10 md:grid-cols-2`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${i % 2 === 1 ? "md:order-2" : ""} aspect-[4/3] overflow-hidden bg-muted`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: pillar.image,
              alt: pillar.title,
              loading: "lazy",
              whileHover: { scale: 1.04 },
              transition: { duration: 0.5 },
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.3em] text-muted-foreground", children: pillar.number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-6xl md:text-7xl text-foreground leading-none", children: pillar.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-sm", children: pillar.body })
          ] })
        ]
      },
      pillar.number
    )) })
  ] }) });
}
const bannersData = [
  {
    id: "b001",
    title: "New Season Drop",
    subtitle: "Nike. Adidas. Asics. New Balance.",
    description: "Fresh stock just landed. Sneakers, tees, jeans, and accessories — all in one spot in Tashkent.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=90",
    cta: "Shop New Arrivals",
    ctaLink: "/shop?tag=NEW",
    endsAt: null,
    active: true,
    type: "hero"
  },
  {
    id: "b002",
    title: "Limited Pairs — Week 48",
    subtitle: "Dunk Low Panda · Jordan 1 Mid · NB 550",
    description: "Limited sizes available in-store and online. First come, first served. No holds.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=90",
    cta: "Grab Your Size",
    ctaLink: "/shop?tag=HOT",
    endsAt: "2025-02-01T22:00:00Z",
    active: true,
    type: "limited"
  },
  {
    id: "b003",
    title: "Archive Sale — Up to 20% Off",
    subtitle: "Puma, Converse, selected Nike styles.",
    description: "Previous season stock. Same quality, reduced prices.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=90",
    cta: "View Sale",
    ctaLink: "/shop?tag=SALE",
    endsAt: null,
    active: true,
    type: "promo"
  }
];
function useCountdown(endsAt) {
  const [timeLeft, setTimeLeft] = reactExports.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  reactExports.useEffect(() => {
    if (!endsAt) return;
    const calc = () => {
      const diff = new Date(endsAt).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 864e5),
        hours: Math.floor(diff % 864e5 / 36e5),
        minutes: Math.floor(diff % 36e5 / 6e4),
        seconds: Math.floor(diff % 6e4 / 1e3)
      });
    };
    calc();
    const id = setInterval(calc, 1e3);
    return () => clearInterval(id);
  }, [endsAt]);
  return timeLeft;
}
function Block({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl md:text-7xl text-foreground tabular-nums leading-none", children: String(value).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-2", children: label })
  ] });
}
function LimitedBanner() {
  const banner = bannersData.find((b) => b.type === "limited" && b.active);
  const timeLeft = useCountdown(banner?.endsAt ?? null);
  if (!banner) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -32 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        className: "relative aspect-[4/5] overflow-hidden bg-muted",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: banner.image, alt: banner.title, className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 left-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-foreground/50 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground", children: "Limited Stock" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 32 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
        className: "flex flex-col justify-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Drops This Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-6xl md:text-7xl text-foreground leading-none", children: banner.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[14px] leading-relaxed text-muted-foreground max-w-xs", children: banner.description }),
          banner.endsAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex gap-5 items-end border-t border-b border-border py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { value: timeLeft.days, label: "Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-muted-foreground mb-3", children: ":" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { value: timeLeft.hours, label: "Hrs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-muted-foreground mb-3", children: ":" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { value: timeLeft.minutes, label: "Min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-muted-foreground mb-3", children: ":" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { value: timeLeft.seconds, label: "Sec" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: banner.ctaLink,
              className: "mt-8 inline-flex w-fit items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-background hover:opacity-90 transition-opacity",
              children: [
                banner.cta,
                " →"
              ]
            }
          )
        ]
      }
    )
  ] }) }) });
}
function ReviewsSection() {
  const reviews = reviewsData.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Customer Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-6xl md:text-8xl text-foreground leading-none", children: "What they say." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
            Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, className: i < 4 ? "fill-gold text-gold" : "fill-gold/30 text-gold/30" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-mono text-[11px] text-muted-foreground", children: "3.7 · 16 reviews on Google Maps" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: reviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-30px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "border border-border bg-card p-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: review.avatar, alt: review.author, className: "h-9 w-9 rounded-full object-cover flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: review.author }),
                review.verified && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: "Verified Purchase" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 flex-shrink-0", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: j < review.rating ? "fill-gold text-gold" : "fill-border text-border" }, j)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 font-medium text-[13px] text-foreground", children: review.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-relaxed text-muted-foreground", children: review.body }),
            review.outfitImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-28 w-20 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: review.outfitImage, alt: "Customer photo", className: "h-full w-full object-cover" }) })
          ] })
        ] })
      },
      review.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.3, duration: 0.5 },
        className: "mt-12 border border-border bg-card p-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-foreground", children: "Come see for yourself." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Parkent ko'chasi 283, Tashkent · Open daily 11:00 – 22:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+998909248761",
                className: "bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-background",
                children: "+998 90 924 87 61"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://t.me/+Sge_eceqOK5xsZtn",
                target: "_blank",
                rel: "noreferrer",
                className: "border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors",
                children: "Telegram →"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProducts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrandStory, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LimitedBanner, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};
