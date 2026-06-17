import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, Truck, RotateCcw, Shield, Ruler } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { getProductById, getRelated, formatPrice } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { useTranslation } from "react-i18next";
import reviewsData from "@/data/reviews.json";

export const Route = createFileRoute("/shop/$productId")({
  head: ({ params }) => {
    const p = getProductById(params.productId);
    return { meta: [{ title: p ? `${p.name} — KINK` : "Product — KINK" }] };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const { t } = useTranslation();

  // All hooks must be at the top — before any conditional returns
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const { toggle, has } = useWishlistStore();
  const { addRecentlyViewed } = useUIStore();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  const product = getProductById(productId);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product.id);
      setSelectedColor(product.colors[0] ?? null);
      setSelectedSize(null);
      setActiveImage(0);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-6xl text-muted-foreground">404</p>
          <p className="mt-2 text-muted-foreground">Product not found.</p>
          <Link to="/shop" className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest underline text-foreground">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelated(product);
  const productReviews = reviewsData.filter((r) => r.productId === product.id);

  const handleAdd = () => {
    if (!selectedSize) { setError(t("pd_select_size")); return; }
    setError("");
    addItem({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor ?? product.colors[0],
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-border px-4 py-4 md:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-foreground">KINK</Link>
            <span>·</span>
            <Link to="/shop" className="hover:text-foreground">{t("nav_shop")}</Link>
            <span>·</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Images */}
            <div className="space-y-3">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="aspect-square overflow-hidden bg-muted"
              >
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="h-full w-full object-contain p-4"
                />
              </motion.div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square overflow-hidden bg-muted border-2 transition-colors ${activeImage === i ? "border-foreground" : "border-transparent"}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Tags */}
              <div className="flex gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Name & price */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{product.brand}</p>
                <h1 className="mt-1 font-display text-5xl leading-tight text-foreground md:text-6xl">{product.name}</h1>
                <div className="mt-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-muted"} />
                  ))}
                  <span className="ml-1 font-mono text-[11px] text-muted-foreground">({product.reviewCount})</span>
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-mono text-2xl text-foreground">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="font-mono text-base text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
              </div>

              {/* Color selector */}
              <div>
                <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("pd_color")}: <span className="text-foreground">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
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

              {/* Size selector */}
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t("pd_size")}: <span className="text-foreground">{selectedSize ?? "—"}</span>
                  </p>
                  <button className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
                    <Ruler size={11} /> {t("pd_size_guide")}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => {
                    const inStock = (product.stock[s] ?? 0) > 0;
                    const lowStock = (product.stock[s] ?? 0) <= 3 && inStock;
                    return (
                      <button
                        key={s}
                        onClick={() => inStock && setSelectedSize(s)}
                        disabled={!inStock}
                        className={`relative h-11 min-w-[2.75rem] px-3 font-mono text-[12px] uppercase transition-colors ${
                          !inStock
                            ? "cursor-not-allowed border border-border/30 text-muted-foreground/30"
                            : selectedSize === s
                            ? "bg-foreground text-background"
                            : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {s}
                        {!inStock && <span className="absolute inset-0 flex items-center justify-center"><span className="absolute h-px w-full rotate-45 bg-border/30" /></span>}
                        {lowStock && <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" />}
                      </button>
                    );
                  })}
                </div>
                {error && <p className="mt-2 font-mono text-[10px] text-destructive">{error}</p>}
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleAdd}
                  className="flex w-full items-center justify-center gap-2 bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                >
                  <ShoppingBag size={15} />
                  {added ? t("pd_added") : t("pd_add")}
                </button>
                <button
                  onClick={() => toggle(product.id)}
                  className="flex w-full items-center justify-center gap-2 border border-border py-3.5 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
                >
                  <Heart size={13} className={has(product.id) ? "fill-foreground" : ""} />
                  {has(product.id) ? t("pd_saved") : t("pd_save")}
                </button>
              </div>

              {/* Product details */}
              <div className="space-y-4 border-t border-border pt-6">
                <p className="text-[14px] leading-relaxed text-muted-foreground">{product.description}</p>

                <div className="grid grid-cols-2 gap-4 border-b border-t border-border py-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{t("pd_fabric")}</p>
                    <p className="mt-1 text-[13px] text-foreground">{product.fabric}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{t("pd_origin")}</p>
                    <p className="mt-1 text-[13px] text-foreground">{product.origin}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{t("pd_care")}</p>
                    <p className="mt-1 text-[13px] text-foreground">{product.care}</p>
                  </div>
                  {product.modelHeight && (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{t("pd_model")}</p>
                      <p className="mt-1 text-[13px] text-foreground">{product.modelHeight} · {product.modelWears}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {[
                    { icon: <Truck size={14} />, label: t("pd_delivery"), value: product.delivery },
                    { icon: <RotateCcw size={14} />, label: t("pd_returns"), value: t("pd_returns_val") },
                    { icon: <Shield size={14} />, label: t("pd_authentic"), value: t("pd_authentic_val") },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center gap-3">
                      <span className="text-muted-foreground">{d.icon}</span>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{d.label}: </span>
                        <span className="text-[13px] text-foreground">{d.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          {productReviews.length > 0 && (
            <div className="mt-24 border-t border-border pt-16">
              <h2 className="font-display text-4xl text-foreground md:text-5xl">{t("pd_reviews")}</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {productReviews.map((review) => (
                  <div key={review.id} className="border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <img src={review.avatar} alt={review.author} className="h-10 w-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-[13px] font-medium text-foreground">{review.author}</p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: review.rating }).map((_, j) => (
                              <Star key={j} size={11} className="fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-[13px] font-medium text-foreground">{review.title}</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{review.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-24 border-t border-border pt-16">
              <h2 className="mb-10 font-display text-4xl text-foreground md:text-5xl">{t("pd_complete")}</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
