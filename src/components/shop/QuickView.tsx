import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useUIStore } from "@/store/uiStore";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/products";

export function QuickView() {
  const { quickViewProduct: product, closeQuickView } = useUIStore();
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const { toggle, has } = useWishlistStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!product) return;
    if (!selectedSize) { setError("Please select a size."); return; }
    if (!selectedColor) { setError("Please select a color."); return; }
    setError("");
    addItem({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
    closeQuickView();
    openCart();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md"
            onClick={closeQuickView}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-background shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button onClick={closeQuickView} className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Images */}
              <div className="relative aspect-[3/4] bg-muted">
                <img
                  src={product.images[activeImg]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`h-1 transition-all ${activeImg === i ? "w-6 bg-foreground" : "w-3 bg-foreground/30"}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
                    <h2 className="mt-1 font-display text-3xl text-foreground">{product.name}</h2>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="font-mono text-lg text-foreground">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="font-mono text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-[13px] leading-relaxed text-muted-foreground">{product.description}</p>

                  {/* Color */}
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Color: <span className="text-foreground">{selectedColor ?? "—"}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedColor(c)}
                          className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                            selectedColor === c
                              ? "bg-foreground text-background"
                              : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Size: <span className="text-foreground">{selectedSize ?? "—"}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => {
                        const inStock = (product.stock[s] ?? 0) > 0;
                        return (
                          <button
                            key={s}
                            onClick={() => inStock && setSelectedSize(s)}
                            disabled={!inStock}
                            className={`h-9 min-w-[2.5rem] px-2 font-mono text-[11px] uppercase transition-colors ${
                              !inStock
                                ? "border border-border/30 text-muted-foreground/30 cursor-not-allowed line-through"
                                : selectedSize === s
                                ? "bg-foreground text-background"
                                : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {error && <p className="font-mono text-[10px] text-destructive">{error}</p>}
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    onClick={handleAdd}
                    className="flex w-full items-center justify-center gap-2 bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity"
                  >
                    <ShoppingBag size={14} /> Add to Bag
                  </button>
                  <button
                    onClick={() => toggle(product.id)}
                    className="flex w-full items-center justify-center gap-2 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
                  >
                    <Heart size={12} className={has(product.id) ? "fill-foreground" : ""} />
                    {has(product.id) ? "Saved" : "Save to Wishlist"}
                  </button>
                  <Link
                    to="/shop/$productId"
                    params={{ productId: product.id }}
                    onClick={closeQuickView}
                    className="block w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                  >
                    View Full Details →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
