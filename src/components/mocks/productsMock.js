const productsMock = [
  // ELECTRÓNICA
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description:
      "El smartphone más avanzado de Apple con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR.",
    price: 1199.0,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    description:
      "Laptop profesional con chip M3, 16GB RAM y pantalla Liquid Retina de 14 pulgadas.",
    price: 1999.0,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 3,
    name: "AirPods Pro (2da Gen)",
    description:
      "Auriculares inalámbricos con cancelación activa de ruido y audio espacial personalizado.",
    price: 249.0,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 4,
    name: 'Samsung 4K Smart TV 55"',
    description:
      "Smart TV QLED de 55 pulgadas con resolución 4K, HDR10+ y sistema operativo Tizen.",
    price: 899.0,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },

  // DEPORTES
  {
    id: 5,
    name: "Zapatillas Nike Air Max 270",
    description:
      "Zapatillas deportivas con tecnología Air Max para máximo confort y amortiguación.",
    price: 149.0,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 6,
    name: "Pelota de Fútbol Adidas",
    description:
      "Balón oficial de fútbol FIFA approved con diseño clásico y materiales de alta calidad.",
    price: 35.0,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 7,
    name: "Bicicleta Mountain Bike",
    description:
      "Bicicleta todo terreno con 21 velocidades, frenos de disco y suspensión delantera.",
    price: 599.0,
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 8,
    name: "Set de Pesas Ajustables",
    description:
      "Juego de mancuernas ajustables de 5kg a 25kg cada una, perfectas para ejercicios en casa.",
    price: 129.0,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },

  // ROPA
  {
    id: 9,
    name: "Remera Polo Ralph Lauren",
    description:
      "Polo clásico de algodón 100% con bordado del logo icónico, disponible en varios colores.",
    price: 89.0,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 10,
    name: "Jeans Levi's 501",
    description:
      "Jeans clásicos de corte recto, 100% algodón denim con el ajuste original icónico.",
    price: 119.0,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 11,
    name: "Campera Nike Sportswear",
    description:
      "Campera deportiva con capucha, material transpirable y logo bordado Nike.",
    price: 79.0,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 12,
    name: "Vestido Casual Floral",
    description:
      "Vestido de manga corta con estampado floral, perfecto para ocasiones casuales.",
    price: 59.0,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },

  // LIBROS
  {
    id: 13,
    name: "JavaScript: The Good Parts",
    description:
      "Guía esencial para dominar JavaScript escrita por Douglas Crockford, ideal para programadores.",
    price: 29.0,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 14,
    name: "Clean Code - Robert Martin",
    description:
      "Manual de artesanía del software ágil. Aprende a escribir código limpio y mantenible.",
    price: 39.0,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 15,
    name: "El Quijote de la Mancha",
    description:
      "Obra maestra de Miguel de Cervantes, edición especial con ilustraciones y análisis.",
    price: 24.0,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 16,
    name: "Cien Años de Soledad",
    description:
      "Novela emblemática de Gabriel García Márquez, Premio Nobel de Literatura.",
    price: 19.0,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop",
    categories: ["books"],
  },
];

export default productsMock;
