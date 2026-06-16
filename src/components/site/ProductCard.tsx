import { motion } from "framer-motion";
import { formatPrice, type Product } from "@/lib/products";

const palettes = [
  "from-[oklch(0.25_0.12_25)] to-[oklch(0.1_0_0)]",
  "from-[oklch(0.3_0.15_130)] to-[oklch(0.1_0_0)]",
  "from-[oklch(0.25_0.1_250)] to-[oklch(0.1_0_0)]",
  "from-[oklch(0.28_0.13_60)] to-[oklch(0.1_0_0)]",
  "from-[oklch(0.2_0.05_320)] to-[oklch(0.1_0_0)]",
];

export function ProductCard({ product, i = 0 }: { product: Product; i?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const, delay: Math.min(i, 8) * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative cursor-pointer border border-border bg-card transition-colors hover:border-primary"
    >
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${palettes[i % palettes.length]}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[6rem] leading-none tracking-tighter text-foreground/10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3 md:text-[8rem]">
            {product.brand.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.tag && (
          <span className="absolute left-3 top-3 bg-primary px-2 py-1 font-mono text-[10px] tracking-widest text-primary-foreground">
            {product.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
        {product.sizes && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/90 px-3 py-2 backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sizes</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {product.sizes.map((s) => (
                <span key={s} className="border border-border px-1.5 py-0.5 font-mono text-[10px] text-foreground">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-border p-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
          <h3 className="mt-1 font-display text-xl leading-tight text-foreground">{product.name}</h3>
        </div>
        <p className="font-mono text-xs text-primary">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  );
}
