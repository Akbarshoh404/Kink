import { create } from "zustand";
import type { Product } from "@/lib/products";

type UIStore = {
  mobileMenuOpen: boolean;
  quickViewProduct: Product | null;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;
};

export const useUIStore = create<UIStore>((set, get) => ({
  mobileMenuOpen: false,
  quickViewProduct: null,
  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  openQuickView: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),
  recentlyViewed: [],
  addRecentlyViewed: (id) => {
    const existing = get().recentlyViewed.filter((x) => x !== id);
    set({ recentlyViewed: [id, ...existing].slice(0, 8) });
  },
}));
