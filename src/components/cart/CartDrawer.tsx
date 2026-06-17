import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, Tag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";
import { useTranslation } from "react-i18next";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getSubtotal, getTotal, promoCode, promoDiscount, applyPromo, removePromo } = useCartStore();
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState(false);
  const { t } = useTranslation();

  const handlePromo = () => {
    const ok = applyPromo(promoInput);
    if (!ok) setPromoError(true);
    else { setPromoError(false); setPromoInput(""); }
  };

  const subtotal = getSubtotal();
  const total = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={closeCart}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <span className="font-display text-2xl tracking-widest text-foreground">{t("cart_title")}</span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">({items.length})</span>
              </div>
              <button onClick={closeCart} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
                  <p className="font-display text-3xl text-muted-foreground">{t("cart_empty")}</p>
                  <p className="text-sm text-muted-foreground">{t("cart_empty_sub")}</p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="mt-2 border border-border px-8 py-3 font-mono text-[11px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    {t("cart_shop_now")}
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4 px-6 py-5">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-muted">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{item.brand}</p>
                          <p className="mt-0.5 text-sm font-medium text-foreground leading-tight">{item.name}</p>
                          <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                            {item.size} · {item.color}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 border border-border">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-mono text-xs w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="font-mono text-xs text-foreground">{formatPrice(item.price * item.quantity)}</p>
                            <button
                              onClick={() => removeItem(item.productId, item.size, item.color)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-6 space-y-4">
                {/* Promo */}
                {promoCode ? (
                  <div className="flex items-center justify-between bg-muted px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Tag size={12} className="text-gold" />
                      <span className="font-mono text-[11px] text-foreground">{promoCode}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">−{promoDiscount * 100}%</span>
                    </div>
                    <button onClick={removePromo} className="text-muted-foreground hover:text-foreground">
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      value={promoInput}
                      onChange={(e) => { setPromoInput(e.target.value); setPromoError(false); }}
                      onKeyDown={(e) => e.key === "Enter" && handlePromo()}
                      placeholder={t("cart_promo")}
                      className={`flex-1 border ${promoError ? "border-destructive" : "border-border"} bg-transparent px-3 py-2 font-mono text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground`}
                    />
                    <button
                      onClick={handlePromo}
                      className="border border-border px-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      {t("cart_apply")}
                    </button>
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-2 text-[12px]">
                  <div className="flex justify-between text-muted-foreground">
                    <span>{t("cart_subtotal")}</span>
                    <span className="font-mono">{formatPrice(subtotal)}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-gold">
                      <span>{t("cart_discount")} ({promoDiscount * 100}%)</span>
                      <span className="font-mono">−{formatPrice(subtotal * promoDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>{t("cart_shipping")}</span>
                    <span className="font-mono">{t("cart_shipping_val")}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2 text-foreground">
                    <span className="font-medium">{t("cart_total")}</span>
                    <span className="font-mono font-medium">{formatPrice(total)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-foreground py-4 text-center font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity"
                >
                  {t("cart_checkout")}
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  {t("cart_continue")}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
