import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Sun, Moon, Search, Menu } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useThemeStore } from "@/store/themeStore";
import { useUIStore } from "@/store/uiStore";
import { useLangStore } from "@/store/langStore";
import { useTranslation } from "react-i18next";
import type { Locale } from "@/i18n/translations";

const LOCALES: Locale[] = ["en", "ru", "uz"];

export function Header() {
  const cartCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.ids.length);
  const { theme, toggle: toggleTheme } = useThemeStore();
  const openMobileMenu = useUIStore((s) => s.openMobileMenu);
  const { locale, set: setLocale } = useLangStore();
  const { t } = useTranslation();

  const nav = [
    { to: "/shop", label: t("nav_shop") },
    { to: "/about", label: t("nav_about") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-3xl leading-none tracking-tight text-foreground">KINK</span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Tashkent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-mono text-[11px] uppercase tracking-[0.18em] text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right side — luxury action bar */}
        <div className="flex items-center gap-0">
          {/* Language pills — desktop only */}
          <div className="mr-3 hidden items-center gap-px rounded-sm border border-border/60 bg-muted/40 p-0.5 md:flex">
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`h-6 rounded-[2px] px-2 font-mono text-[9px] uppercase tracking-wider transition-all duration-200 ${
                  locale === l
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Divider */}
          <span className="mr-3 hidden h-4 w-px bg-border md:block" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Divider */}
          <span className="mx-1 hidden h-4 w-px bg-border md:block" />

          {/* Search */}
          <Link
            to="/shop"
            className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Search"
          >
            <Search size={14} />
          </Link>

          {/* Wishlist */}
          <Link
            to="/dashboard/wishlist"
            className="relative flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Wishlist"
          >
            <Heart size={14} />
            <AnimatePresence>
              {wishlistCount > 0 && (
                <motion.span
                  key={wishlistCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center bg-foreground font-mono text-[8px] text-background"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Cart — primary action, gets a slight emphasis */}
          <button
            onClick={openCart}
            className="relative ml-1 flex h-9 items-center gap-2 border border-border/60 bg-muted/30 px-3 text-muted-foreground transition-all hover:border-foreground/40 hover:bg-muted/60 hover:text-foreground"
            aria-label="Cart"
          >
            <ShoppingBag size={13} />
            <AnimatePresence mode="wait">
              {cartCount > 0 ? (
                <motion.span
                  key={cartCount}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[10px] text-foreground"
                >
                  {cartCount}
                </motion.span>
              ) : (
                <motion.span
                  key="bag"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hidden font-mono text-[9px] uppercase tracking-widest md:inline"
                >
                  Bag
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile menu */}
          <button
            onClick={openMobileMenu}
            className="ml-2 flex h-9 w-9 items-center justify-center text-muted-foreground md:hidden"
            aria-label="Menu"
          >
            <Menu size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}
