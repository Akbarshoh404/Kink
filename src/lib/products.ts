export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: "Sneakers" | "Apparel" | "Accessories";
  tag?: "NEW" | "HOT" | "LOW STOCK";
  sizes?: string[];
  releaseOrder: number; // higher = newer
};

export const products: Product[] = [
  { id: "1", name: "Air Force 1 '07", brand: "Nike", price: 1450000, category: "Sneakers", tag: "HOT", sizes: ["40","41","42","43","44"], releaseOrder: 8 },
  { id: "2", name: "Dunk Low Panda", brand: "Nike", price: 1650000, category: "Sneakers", tag: "NEW", sizes: ["41","42","43"], releaseOrder: 12 },
  { id: "3", name: "Samba OG", brand: "Adidas", price: 1390000, category: "Sneakers", sizes: ["40","41","42","43","44","45"], releaseOrder: 9 },
  { id: "4", name: "Jordan 1 Mid", brand: "Jordan", price: 1890000, category: "Sneakers", tag: "LOW STOCK", sizes: ["42","43"], releaseOrder: 7 },
  { id: "5", name: "550 'White Green'", brand: "New Balance", price: 1750000, category: "Sneakers", sizes: ["40","41","42","43","44"], releaseOrder: 10 },
  { id: "6", name: "Gel-Kayano 14", brand: "Asics", price: 1690000, category: "Sneakers", tag: "NEW", sizes: ["41","42","43","44"], releaseOrder: 11 },
  { id: "7", name: "Old Skool", brand: "Vans", price: 890000, category: "Sneakers", sizes: ["39","40","41","42","43","44"], releaseOrder: 4 },
  { id: "8", name: "Chuck 70", brand: "Converse", price: 790000, category: "Sneakers", sizes: ["40","41","42","43"], releaseOrder: 3 },
  { id: "9", name: "Tech Fleece Hoodie", brand: "Nike", price: 1290000, category: "Apparel", sizes: ["S","M","L","XL"], releaseOrder: 6 },
  { id: "10", name: "Trefoil Tee", brand: "Adidas", price: 390000, category: "Apparel", sizes: ["S","M","L","XL"], releaseOrder: 2 },
  { id: "11", name: "Heritage Cap", brand: "New Era", price: 290000, category: "Accessories", releaseOrder: 1 },
  { id: "12", name: "Crew Socks 3-Pack", brand: "Nike", price: 190000, category: "Accessories", releaseOrder: 5 },
];

export const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n) + " UZS";
