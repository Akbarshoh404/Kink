import productsData from "@/data/products.json";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number | null;
  category: string;
  subcategory: string;
  tags: string[];
  images: string[];
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

export const products: Product[] = productsData as unknown as Product[];

export const allCategories = Array.from(new Set(products.map((p) => p.category))).sort();
export const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n) + " UZS";

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const getFeatured = () => products.filter((p) => p.featured);

export const getRelated = (product: Product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit);
