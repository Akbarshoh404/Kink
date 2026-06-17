import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";
import { ChevronLeft, Lock } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Maison Noir" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, getSubtotal, getTotal, promoDiscount, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", country: "", zip: "",
    cardNumber: "", expiry: "", cvv: "", nameOnCard: "",
  });

  const subtotal = getSubtotal();
  const total = getTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "shipping") setStep("payment");
    else if (step === "payment") {
      clearCart();
      setStep("confirmation");
    }
  };

  const Field = ({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) => (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[name as keyof typeof form]}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        required
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
          <Link to="/shop" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8">
            <ChevronLeft size={13} /> Continue Shopping
          </Link>

          {step === "confirmation" ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto text-center py-20"
            >
              <div className="w-16 h-16 border border-border flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h1 className="font-display text-5xl text-foreground">Order Placed.</h1>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Thank you for your order. You'll receive a confirmation email shortly with tracking information.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-block bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
              {/* Form */}
              <div>
                {/* Steps */}
                <div className="flex items-center gap-4 mb-10">
                  {["Shipping", "Payment"].map((s, i) => {
                    const isActive = (s.toLowerCase() === step);
                    const isPast = (step === "payment" && i === 0);
                    return (
                      <div key={s} className="flex items-center gap-3">
                        <div className={`h-6 w-6 flex items-center justify-center border font-mono text-[10px] ${isActive || isPast ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground"}`}>
                          {isPast ? "✓" : i + 1}
                        </div>
                        <span className={`font-mono text-[11px] uppercase tracking-widest ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {s}
                        </span>
                        {i < 1 && <span className="text-muted-foreground mx-2">—</span>}
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {step === "shipping" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                      <h2 className="font-display text-4xl text-foreground">Shipping Address</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2"><Field label="Full Name" name="name" placeholder="Sophia R." /></div>
                        <Field label="Email" name="email" type="email" placeholder="your@email.com" />
                        <Field label="Phone" name="phone" placeholder="+998 90 000 00 00" />
                        <div className="col-span-2"><Field label="Address" name="address" placeholder="12 Rue de la Paix" /></div>
                        <Field label="City" name="city" placeholder="Paris" />
                        <Field label="Country" name="country" placeholder="France" />
                        <Field label="Postal Code" name="zip" placeholder="75001" />
                      </div>
                    </motion.div>
                  )}

                  {step === "payment" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                      <h2 className="font-display text-4xl text-foreground">Payment</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2"><Field label="Name on Card" name="nameOnCard" placeholder="Sophia R." /></div>
                        <div className="col-span-2"><Field label="Card Number" name="cardNumber" placeholder="1234 5678 9012 3456" /></div>
                        <Field label="Expiry" name="expiry" placeholder="MM / YY" />
                        <Field label="CVV" name="cvv" placeholder="•••" />
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                        <Lock size={11} /> All transactions are encrypted and secure.
                      </div>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background hover:opacity-90 transition-opacity mt-4"
                  >
                    {step === "shipping" ? "Continue to Payment →" : "Place Order"}
                  </button>
                </form>
              </div>

              {/* Summary */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h3 className="font-display text-3xl text-foreground mb-6">Order Summary</h3>
                <div className="divide-y divide-border border border-border">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}`} className="flex gap-3 p-4">
                      <div className="h-16 w-12 bg-muted flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] text-foreground leading-tight">{item.name}</p>
                        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{item.size} · {item.color}</p>
                        <p className="font-mono text-[11px] text-foreground mt-1">{formatPrice(item.price)} × {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-[13px]">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-mono">{formatPrice(subtotal)}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-gold">
                      <span>Discount</span>
                      <span className="font-mono">−{formatPrice(subtotal * promoDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="font-mono">Complimentary</span>
                  </div>
                  <div className="flex justify-between font-medium text-foreground border-t border-border pt-2">
                    <span>Total</span>
                    <span className="font-mono">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
