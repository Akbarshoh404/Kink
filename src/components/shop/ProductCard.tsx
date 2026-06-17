import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Eye } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { useTranslation } from "react-i18next";

const TAG_COLORS: Record<string, string> = {
  NEW: "bg-foreground text-background",
  BESTSELLER: "bg-gold/20 text-gold border border-gold/30",
  SALE: "bg-destructive/10 text-destructive border border-destructive/20",
  LIMITED: "bg-foreground/10 text-foreground border border-border",
};

type Props = {
  product: Product;
  index?: number;
  showQuickView?: boolean;
};

export function ProductCard({ product, index = 0, showQuickView = true }: Props) {
  const [hovered, setHovered] = useState(false);
  const { toggle, has } = useWishlistStore();
  const openQuickView = useUIStore((s) => s.openQuickView);
  const isWishlisted = has(product.id);
  const hasSecondImage = product.images.length > 1;
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to="/shop/$productId" params={{ productId: product.id }} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Primary image */}
          <motion.img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            animate={{ opacity: hovered && hasSecondImage ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Secondary image */}
          {hasSecondImage && (
            <motion.img
              src={product.images[1]}
              alt={product.name}
              loading="lazy"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Tags */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${TAG_COLORS[tag] ?? "bg-card text-foreground"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover actions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-3 left-3 right-3 flex gap-2"
          >
            {showQuickView && (
              <button
                onClick={(e) => { e.preventDefault(); openQuickView(product); }}
                className="flex flex-1 items-center justify-center gap-1.5 bg-background/90 backdrop-blur-sm py-2.5 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Eye size={11} /> {t("quick_view")}
              </button>
            )}
          </motion.div>
        </div>
      </Link>

      {/* Wishlist */}
      <button
        onClick={() => toggle(product.id)}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Add to wishlist"
      >
        <Heart
          size={14}
          className={isWishlisted ? "fill-foreground text-foreground" : ""}
        />
      </button>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
        <Link to="/shop/$productId" params={{ productId: product.id }}>
          <p className="text-[14px] text-foreground leading-snug hover:text-muted-foreground transition-colors">
            {product.name}
          </p>
        </Link>
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-[13px] text-foreground">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="font-mono text-[11px] text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
