const usersData = [
  {
    id: "u001",
    email: "sophia@example.com",
    name: "Sophia R.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=90",
    role: "customer",
    loyaltyPoints: 840,
    wishlist: [
      "p004",
      "p006",
      "p008"
    ],
    savedAddresses: [
      {
        id: "a001",
        name: "Sophia R.",
        line1: "12 Rue de la Paix",
        city: "Paris",
        country: "France",
        zip: "75001",
        "default": true
      }
    ],
    createdAt: "2024-08-01T00:00:00Z"
  },
  {
    id: "u002",
    email: "admin@maisonnoir.com",
    name: "Admin",
    avatar: null,
    role: "admin",
    loyaltyPoints: 0,
    wishlist: [],
    savedAddresses: [],
    createdAt: "2024-01-01T00:00:00Z"
  }
];
export {
  usersData as u
};
