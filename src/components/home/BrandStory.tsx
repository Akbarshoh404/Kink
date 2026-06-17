import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "The Brands",
    body: "Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan — all under one roof. Plus our own KINK label built in Tashkent.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=90",
  },
  {
    number: "02",
    title: "The Store",
    body: "Two floors, lit shelves, every size in the back. Come through, try on, and walk out with your next pair. No pressure, no scripts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=90",
  },
  {
    number: "03",
    title: "The Guarantee",
    body: "14-day exchange on all items. 1-month warranty on footwear against manufacturing defects. We stand behind everything we sell.",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=90",
  },
];

export function BrandStory() {
  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">About KINK</p>
          <h2 className="mt-3 font-display text-6xl md:text-8xl text-foreground leading-none">
            Tashkent's<br />sneaker spot.
          </h2>
        </motion.div>

        <div className="space-y-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 gap-10 md:grid-cols-2`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} aspect-[4/3] overflow-hidden bg-muted`}>
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{pillar.number}</span>
                <h3 className="mt-3 font-display text-6xl md:text-7xl text-foreground leading-none">{pillar.title}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-sm">{pillar.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
