const ordersData = [
  {
    id: "ord001",
    userId: "u001",
    status: "delivered",
    items: [
      {
        productId: "p001",
        name: "Obsidian Cashmere Coat",
        size: "M",
        color: "Obsidian",
        quantity: 1,
        price: 42e5
      }
    ],
    subtotal: 42e5,
    discount: 0,
    shipping: 0,
    total: 42e5,
    address: {
      name: "Sophia R.",
      line1: "12 Rue de la Paix",
      city: "Paris",
      country: "France",
      zip: "75001"
    },
    createdAt: "2024-11-10T10:00:00Z",
    updatedAt: "2024-11-14T16:30:00Z",
    trackingNumber: "FR123456789"
  },
  {
    id: "ord002",
    userId: "u001",
    status: "processing",
    items: [
      {
        productId: "p002",
        name: "Silk Charmeuse Blouse",
        size: "S",
        color: "Pearl",
        quantity: 1,
        price: 185e4
      },
      {
        productId: "p005",
        name: "Merino Turtleneck Sweater",
        size: "S",
        color: "Ivory",
        quantity: 2,
        price: 98e4
      }
    ],
    subtotal: 381e4,
    discount: 381e3,
    shipping: 0,
    total: 3429e3,
    address: {
      name: "Sophia R.",
      line1: "12 Rue de la Paix",
      city: "Paris",
      country: "France",
      zip: "75001"
    },
    createdAt: "2024-12-01T14:22:00Z",
    updatedAt: "2024-12-01T15:00:00Z",
    trackingNumber: null
  }
];
export {
  ordersData as o
};
