import { motion } from "framer-motion";
import { Star } from "lucide-react";
import reviewsData from "@/data/reviews.json";

export function ReviewsSection() {
  const reviews = reviewsData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Customer Reviews</p>
          <h2 className="mt-2 font-display text-6xl md:text-8xl text-foreground leading-none">
            What they say.
          </h2>
          <div className="mt-4 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className={i < 4 ? "fill-gold text-gold" : "fill-gold/30 text-gold/30"} />
            ))}
            <span className="ml-1 font-mono text-[11px] text-muted-foreground">3.7 · 16 reviews on Google Maps</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <img src={review.avatar} alt={review.author} className="h-9 w-9 rounded-full object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[13px] font-medium text-foreground">{review.author}</p>
                      {review.verified && (
                        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Verified Purchase</p>
                      )}
                    </div>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={10} className={j < review.rating ? "fill-gold text-gold" : "fill-border text-border"} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2.5 font-medium text-[13px] text-foreground">{review.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{review.body}</p>

                  {review.outfitImage && (
                    <div className="mt-3 h-28 w-20 overflow-hidden bg-muted">
                      <img src={review.outfitImage} alt="Customer photo" className="h-full w-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to store */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 border border-border bg-card p-8 text-center"
        >
          <p className="font-display text-4xl text-foreground">Come see for yourself.</p>
          <p className="mt-2 text-sm text-muted-foreground">Parkent ko'chasi 283, Tashkent · Open daily 11:00 – 22:00</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+998909248761"
              className="bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-background"
            >
              +998 90 924 87 61
            </a>
            <a
              href="https://t.me/+Sge_eceqOK5xsZtn"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
            >
              Telegram →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
