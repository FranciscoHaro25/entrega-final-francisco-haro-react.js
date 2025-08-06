const productsMock = [
  // ELECTRÓNICA
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description:
      "El smartphone más avanzado de Apple con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR.",
    price: 1199.0,
    stock: 15,
    image: "https://picsum.photos/400/300?random=1",
    categories: ["electronics"],
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    description:
      "Laptop profesional con chip M3, 16GB RAM y pantalla Liquid Retina de 14 pulgadas.",
    price: 1999.0,
    stock: 8,
    image: "https://picsum.photos/400/300?random=2",
    categories: ["electronics"],
  },
  {
    id: 3,
    name: "AirPods Pro (2da Gen)",
    description:
      "Auriculares inalámbricos con cancelación activa de ruido y audio espacial personalizado.",
    price: 249.0,
    stock: 25,
    image: "https://picsum.photos/400/300?random=3",
    categories: ["electronics"],
  },
  {
    id: 4,
    name: 'Samsung 4K Smart TV 55"',
    description:
      "Smart TV QLED de 55 pulgadas con resolución 4K, HDR10+ y sistema operativo Tizen.",
    price: 899.0,
    stock: 12,
    image: "https://picsum.photos/400/300?random=4",
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
    image: "https://picsum.photos/400/300?random=5",
    categories: ["deportes"],
  },
  {
    id: 6,
    name: "Pelota de Fútbol Adidas",
    description:
      "Balón oficial de fútbol FIFA approved con diseño clásico y materiales de alta calidad.",
    price: 35.0,
    stock: 45,
    image: "https://picsum.photos/400/300?random=6",
    categories: ["deportes"],
  },
  {
    id: 7,
    name: "Bicicleta Mountain Bike",
    description:
      "Bicicleta todo terreno con 21 velocidades, frenos de disco y suspensión delantera.",
    price: 599.0,
    stock: 6,
    image: "https://picsum.photos/400/300?random=7",
    categories: ["deportes"],
  },
  {
    id: 8,
    name: "Set de Pesas Ajustables",
    description:
      "Juego de mancuernas ajustables de 5kg a 25kg cada una, perfectas para ejercicios en casa.",
    price: 129.0,
    stock: 20,
    image: "https://picsum.photos/400/300?random=8",
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
    image: "https://picsum.photos/400/300?random=9",
    categories: ["clothing"],
  },
  {
    id: 10,
    name: "Jeans Levi's 501",
    description:
      "Jeans clásicos de corte recto, 100% algodón denim con el ajuste original icónico.",
    price: 119.0,
    stock: 40,
    image: "https://picsum.photos/400/300?random=10",
    categories: ["clothing"],
  },
  {
    id: 11,
    name: "Campera Nike Sportswear",
    description:
      "Campera deportiva con capucha, material transpirable y logo bordado Nike.",
    price: 79.0,
    stock: 18,
    image: "https://picsum.photos/400/300?random=11",
    categories: ["clothing"],
  },
  {
    id: 12,
    name: "Vestido Casual Floral",
    description:
      "Vestido de manga corta con estampado floral, perfecto para ocasiones casuales.",
    price: 59.0,
    stock: 25,
    image: "https://picsum.photos/400/300?random=12",
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
    image: "https://picsum.photos/400/300?random=13",
    categories: ["books"],
  },
  {
    id: 14,
    name: "Clean Code - Robert Martin",
    description:
      "Manual de artesanía del software ágil. Aprende a escribir código limpio y mantenible.",
    price: 39.0,
    stock: 30,
    image: "https://picsum.photos/400/300?random=14",
    categories: ["books"],
  },
  {
    id: 15,
    name: "El Quijote de la Mancha",
    description:
      "Obra maestra de Miguel de Cervantes, edición especial con ilustraciones y análisis.",
    price: 24.0,
    stock: 40,
    image: "https://picsum.photos/400/300?random=15",
    categories: ["books"],
  },
  {
    id: 16,
    name: "Cien Años de Soledad",
    description:
      "Novela emblemática de Gabriel García Márquez, Premio Nobel de Literatura.",
    price: 19.0,
    stock: 35,
    image: "https://picsum.photos/400/300?random=16",
    categories: ["books"],
  },
];

export default productsMock;
