import { formatPrice, type Product } from "@/lib/products";

const palettes = [
  "from-[oklch(0.25_0.12_25)] to-[oklch(0.12_0_0)]",
  "from-[oklch(0.3_0.15_130)] to-[oklch(0.12_0_0)]",
  "from-[oklch(0.25_0.1_250)] to-[oklch(0.12_0_0)]",
  "from-[oklch(0.28_0.13_60)] to-[oklch(0.12_0_0)]",
  "from-[oklch(0.2_0.05_320)] to-[oklch(0.12_0_0)]",
];

export function ProductCard({ product, i = 0 }: { product: Product; i?: number }) {
  return (
    <div className="group cursor-pointer border border-border bg-card transition-colors hover:border-primary">
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${palettes[i % palettes.length]}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[6rem] leading-none tracking-tighter text-foreground/10 transition-transform duration-500 group-hover:scale-110 md:text-[8rem]">
            {product.brand.charAt(0)}
          </span>
        </div>
        {product.tag && (
          <span className="absolute left-3 top-3 bg-primary px-2 py-1 font-mono text-[10px] tracking-widest text-primary-foreground">
            {product.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-border p-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
          <h3 className="mt-1 font-display text-xl leading-tight text-foreground">{product.name}</h3>
        </div>
        <p className="font-mono text-xs text-primary">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
