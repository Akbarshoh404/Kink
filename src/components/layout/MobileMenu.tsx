import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, Heart, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/store/uiStore";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "All Products" },
  { to: "/shop?category=Sneakers", label: "Sneakers" },
  { to: "/shop?category=Apparel", label: "Apparel" },
  { to: "/shop?category=Accessories", label: "Accessories" },
  { to: "/shop?tag=NEW", label: "New Arrivals" },
  { to: "/shop?tag=SALE", label: "Sale" },
  { to: "/about", label: "About KINK" },
  { to: "/contact", label: "Contact" },
] as const;

export function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUIStore();
  const openCart = useCartStore((s) => s.openCart);
  const cartCount = useCartStore((s) => s.getItemCount());
  const wishlistCount = useWishlistStore((s) => s.ids.length);

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Blur backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-md"
            onClick={closeMobileMenu}
          />

          {/* Drawer — slides from RIGHT, does NOT push content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-background"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-2xl leading-none tracking-tight text-foreground">KINK</span>
              <button onClick={closeMobileMenu} className="text-muted-foreground transition-colors hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col flex-1 overflow-y-auto px-5 py-6 gap-0.5">
              {nav.map((n, i) => (
                <motion.div
                  key={`${n.to}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    to={n.to as "/"}
                    onClick={closeMobileMenu}
                    className="block py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground border-b border-border/30"
                    activeProps={{ className: "block py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground border-b border-border/30" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Store info */}
            <div className="border-t border-border px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Store</p>
              <p className="text-[12px] text-foreground">Parkent ko'chasi 283</p>
              <p className="text-[12px] text-muted-foreground">Open daily 11:00 – 22:00</p>
              <a href="tel:+998909248761" className="mt-1 block font-mono text-[11px] text-foreground hover:text-muted-foreground">
                +998 90 924 87 61
              </a>
            </div>

            <div className="border-t border-border px-5 py-4 flex gap-2">
              <Link
                to="/dashboard/wishlist"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 border border-border py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted"
              >
                <Heart size={13} />
                {wishlistCount > 0 ? `(${wishlistCount})` : "Saved"}
              </Link>
              <button
                onClick={() => { closeMobileMenu(); openCart(); }}
                className="flex flex-1 items-center justify-center gap-2 bg-foreground py-3 font-mono text-[10px] uppercase tracking-widest text-background"
              >
                <ShoppingBag size={13} />
                {cartCount > 0 ? `Bag (${cartCount})` : "Bag"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
