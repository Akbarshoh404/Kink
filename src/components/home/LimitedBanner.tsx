import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import bannersData from "@/data/banners.json";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function useCountdown(endsAt: string | null) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!endsAt) return;
    const calc = () => {
      const diff = new Date(endsAt).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  return timeLeft;
}

function Block({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-6xl md:text-7xl text-foreground tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{label}</span>
    </div>
  );
}

export function LimitedBanner() {
  const banner = bannersData.find((b) => b.type === "limited" && b.active);
  const timeLeft = useCountdown(banner?.endsAt ?? null);

  if (!banner) return null;

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img src={banner.image} alt={banner.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="border border-foreground/50 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground">
                Limited Stock
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Drops This Week</p>
            <h2 className="mt-3 font-display text-6xl md:text-7xl text-foreground leading-none">{banner.title}</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground max-w-xs">{banner.description}</p>

            {/* Countdown */}
            {banner.endsAt && (
              <div className="mt-10 flex gap-5 items-end border-t border-b border-border py-8">
                <Block value={timeLeft.days} label="Days" />
                <span className="font-display text-4xl text-muted-foreground mb-3">:</span>
                <Block value={timeLeft.hours} label="Hrs" />
                <span className="font-display text-4xl text-muted-foreground mb-3">:</span>
                <Block value={timeLeft.minutes} label="Min" />
                <span className="font-display text-4xl text-muted-foreground mb-3">:</span>
                <Block value={timeLeft.seconds} label="Sec" />
              </div>
            )}

            <Link
              to={banner.ctaLink as "/"}
              className="mt-8 inline-flex w-fit items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-background hover:opacity-90 transition-opacity"
            >
              {banner.cta} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
