# KINK — Sneakers & Streetwear, Tashkent

A full-featured ecommerce storefront for **KINK**, a real sneaker and streetwear store located at Parkent ko'chasi 283, Tashkent. Stocks Nike, Adidas, Puma, Asics, Vans, New Balance, Converse, Jordan, and the in-house KINK label.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR, file-based routing) |
| Router | [TanStack Router](https://tanstack.com/router) with Zod `validateSearch` |
| Styling | Tailwind CSS v4 — `@theme inline`, `oklch()` color space |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| State | [Zustand](https://zustand.docs.pmnd.rs/) with `persist` middleware |
| i18n | [i18next](https://www.i18next.com/) + react-i18next |
| Icons | [Lucide React](https://lucide.dev/) |
| Charts | [Recharts](https://recharts.org/) (admin analytics) |
| Data | JSON flat-file (`src/data/`) |
| Build | Vite 7 + Nitro |
| Language | TypeScript 5 |

---

## Features

### Storefront
- **Homepage** — Full-viewport hero with split layout: animated display type on the left, 6-image mosaic grid (Nike/Adidas/Puma official CDN images) on the right. Scrolling brand marquee strip. Featured products, brand story, limited-drop countdown banner, customer reviews.
- **Shop catalog** — 16 products across Sneakers, Apparel, Accessories. Filter drawer (category + brand + tag), search input, sort (newest / price / rating). Animated grid with stagger entry.
- **Product detail pages** — Each product at `/shop/:id`. Image gallery with thumbnail switcher. Color and size selectors with stock indicators. Add to Bag → cart drawer auto-opens. Save to Wishlist. Related products.
- **Quick View modal** — Hover any card and click Quick View for an overlay with size/color select and add-to-bag without leaving the page.

### Cart & Checkout
- **Cart drawer** — Slides from the right. Item list with quantity controls, promo code field (`KINK10` / `KINK15` / `VIP20`), subtotal, discount, shipping, total. Persisted to `localStorage`.
- **Checkout flow** — 2-step: Shipping address → Payment details → Order confirmation.

### User Dashboard (`/dashboard`)
- Overview with order count, wishlist count, loyalty points.
- Order history, wishlist, recently viewed.

### Admin Panel (`/admin`)
- Analytics dashboard with Recharts (revenue, orders, top products).
- Product inventory management.

### i18n — 3 Languages
Switcher in the header (EN / RU / UZ). All UI strings are translated: navigation, hero, shop, cart, checkout, product detail, about, contact, footer.

| Key | Language |
|---|---|
| `en` | English |
| `ru` | Russian (Русский) |
| `uz` | Uzbek (O'zbek) |

### Theme
Dual dark/light theme. Default is dark. Toggle in the header. Applied via `.dark` / `.light` class on `<html>`. Colors use `oklch()` throughout. Theme preference persisted to `localStorage`.

---

## Project Structure

```
src/
├── components/
│   ├── cart/
│   │   └── CartDrawer.tsx        # Right-side cart drawer
│   ├── home/
│   │   ├── HeroSection.tsx       # Viewport-fitted hero with mosaic
│   │   ├── FeaturedProducts.tsx
│   │   ├── MarqueeStrip.tsx
│   │   ├── BrandStory.tsx
│   │   ├── LimitedBanner.tsx     # Countdown timer
│   │   └── ReviewsSection.tsx
│   ├── layout/
│   │   ├── Header.tsx            # Sticky glass header, lang switcher, cart
│   │   ├── Footer.tsx            # Store info with Lucide icons
│   │   └── MobileMenu.tsx        # Right-slide mobile drawer
│   └── shop/
│       ├── ProductCard.tsx       # Hover image swap, wishlist, quick view
│       └── QuickView.tsx         # Modal overlay
│
├── data/
│   ├── products.json             # 16 products (source of truth)
│   ├── reviews.json
│   └── banners.json
│
├── i18n/
│   ├── index.ts                  # i18next config
│   └── translations.ts           # EN / RU / UZ strings
│
├── lib/
│   └── products.ts               # Typed product helpers (getProductById, getRelated, formatPrice)
│
├── routes/
│   ├── __root.tsx                # Root layout, ThemeInit, LangInit
│   ├── index.tsx                 # Homepage
│   ├── shop.tsx                  # Layout (Outlet only)
│   ├── shop.index.tsx            # /shop catalog page
│   ├── shop.$productId.tsx       # /shop/:id product detail
│   ├── about.tsx
│   ├── contact.tsx
│   ├── checkout.tsx
│   ├── dashboard.tsx             # Layout with sidebar
│   ├── dashboard.index.tsx
│   ├── dashboard.orders.tsx
│   ├── dashboard.wishlist.tsx
│   ├── admin.tsx                 # Layout with sidebar
│   ├── admin.index.tsx           # Analytics
│   └── admin.products.tsx
│
├── store/
│   ├── cartStore.ts              # Cart items, promo codes, open/close
│   ├── wishlistStore.ts          # Wishlist IDs
│   ├── themeStore.ts             # dark / light
│   ├── langStore.ts              # en / ru / uz
│   └── uiStore.ts                # Mobile menu, quick view, recently viewed
│
└── styles.css                    # Tailwind v4 theme, glass utility, marquee, skeleton
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

App runs at `http://localhost:8081`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## State Management

All stores use Zustand with `persist` middleware writing to `localStorage`.

| Store | Key | Contents |
|---|---|---|
| `cartStore` | `kink-cart` | Items, promo code, open/close state |
| `wishlistStore` | `kink-wishlist` | Array of product IDs |
| `themeStore` | `kink-theme` | `"dark"` or `"light"` |
| `langStore` | `kink-lang` | `"en"`, `"ru"`, or `"uz"` |
| `uiStore` | *(session only)* | Mobile menu open, quick-view product, recently viewed |

---

## Data

Products are defined in `src/data/products.json`. Each product has:

```ts
type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;           // in UZS
  originalPrice: number | null;
  category: string;        // "Sneakers" | "Apparel" | "Accessories"
  subcategory: string;
  tags: string[];          // "NEW" | "HOT" | "BESTSELLER" | "SALE"
  images: string[];        // primary + secondary (official brand CDN)
  colors: string[];
  sizes: string[];
  stock: Record<string, number>;
  description: string;
  fabric: string;
  care: string;
  origin: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  releaseOrder: number;
  delivery: string;
  modelHeight: string | null;
  modelWears: string | null;
};
```

To add a product, append an entry to `src/data/products.json`. No backend needed.

---

## Promo Codes

| Code | Discount |
|---|---|
| `KINK10` | 10% |
| `KINK15` | 15% |
| `VIP20` | 20% |

Codes are validated in `src/store/cartStore.ts`.

---

## Routing

TanStack Router file-based routing. Route params are typed.

| URL | File | Description |
|---|---|---|
| `/` | `index.tsx` | Homepage |
| `/shop` | `shop.index.tsx` | Catalog with filters |
| `/shop/:productId` | `shop.$productId.tsx` | Product detail |
| `/about` | `about.tsx` | Store story + policies |
| `/contact` | `contact.tsx` | Contact form + store info |
| `/checkout` | `checkout.tsx` | 2-step checkout |
| `/dashboard` | `dashboard.index.tsx` | Account overview |
| `/dashboard/orders` | `dashboard.orders.tsx` | Order history |
| `/dashboard/wishlist` | `dashboard.wishlist.tsx` | Saved items |
| `/admin` | `admin.index.tsx` | Analytics dashboard |
| `/admin/products` | `admin.products.tsx` | Inventory |

---

## Theming

Colors use `oklch()` and are declared as CSS custom properties in `src/styles.css`. Tailwind v4 maps them via `@theme inline`.

```css
/* Dark (default) */
:root, .dark {
  --background: oklch(0.14 0.004 260);
  --foreground: oklch(0.96 0.003 80);
  --gold: oklch(0.80 0.13 85);
  ...
}

/* Light */
.light {
  --background: oklch(0.97 0 0);
  --foreground: oklch(0.10 0 0);
  ...
}
```

Custom utilities: `glass` (backdrop blur header), `skeleton` (shimmer loading), `marquee` (scrolling brand strip).

---

## Store Info

**KINK**
Parkent ko'chasi 283, Tashkent
Open every day 11:00 – 22:00
+998 90 924 87 61
Telegram: [t.me/+Sge_eceqOK5xsZtn](https://t.me/+Sge_eceqOK5xsZtn)
