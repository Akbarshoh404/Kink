export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: "Sneakers" | "Apparel" | "Accessories";
  tag?: "NEW" | "HOT" | "LOW STOCK";
};

export const products: Product[] = [
  { id: "1", name: "Air Force 1 '07", brand: "Nike", price: 1450000, category: "Sneakers", tag: "HOT" },
  { id: "2", name: "Dunk Low Panda", brand: "Nike", price: 1650000, category: "Sneakers", tag: "NEW" },
  { id: "3", name: "Samba OG", brand: "Adidas", price: 1390000, category: "Sneakers" },
  { id: "4", name: "Jordan 1 Mid", brand: "Jordan", price: 1890000, category: "Sneakers", tag: "LOW STOCK" },
  { id: "5", name: "550 'White Green'", brand: "New Balance", price: 1750000, category: "Sneakers" },
  { id: "6", name: "Gel-Kayano 14", brand: "Asics", price: 1690000, category: "Sneakers", tag: "NEW" },
  { id: "7", name: "Old Skool", brand: "Vans", price: 890000, category: "Sneakers" },
  { id: "8", name: "Chuck 70", brand: "Converse", price: 790000, category: "Sneakers" },
  { id: "9", name: "Tech Fleece Hoodie", brand: "Nike", price: 1290000, category: "Apparel" },
  { id: "10", name: "Trefoil Tee", brand: "Adidas", price: 390000, category: "Apparel" },
  { id: "11", name: "Heritage Cap", brand: "New Era", price: 290000, category: "Accessories" },
  { id: "12", name: "Crew Socks 3-Pack", brand: "Nike", price: 190000, category: "Accessories" },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n) + " UZS";
