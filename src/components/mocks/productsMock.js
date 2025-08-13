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
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1614632537190-23e4b76f6e90?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
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
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop&crop=center",
    categories: ["books"],
  },

  // JUGUETES
  {
    id: 17,
    name: "LEGO Creator 3 en 1",
    description:
      "Set de construcción LEGO con 3 modelos diferentes en 1. Incluye 500 piezas para construir un dinosaurio, avión o barco.",
    price: 45.0,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 18,
    name: "Muñeca Barbie Fashionista",
    description:
      "Muñeca Barbie con ropa intercambiable y accesorios de moda. Incluye 3 atuendos diferentes y zapatos.",
    price: 32.0,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1609311375732-e0536070ccc5?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 19,
    name: "Hot Wheels Pack 10 Autos",
    description:
      "Colección de 10 autos Hot Wheels con diseños exclusivos y ruedas que giran. Escala 1:64.",
    price: 25.0,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 20,
    name: "Puzzle 1000 Piezas - Paisajes",
    description:
      "Rompecabezas de 1000 piezas con hermosos paisajes naturales. Medidas finales 70x50cm.",
    price: 18.0,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1606041974734-0341c2d2d988?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 21,
    name: "Nerf Elite 2.0 Commander",
    description:
      "Lanzador Nerf con capacidad para 6 dardos. Incluye 12 dardos de espuma oficiales Nerf Elite.",
    price: 38.0,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 22,
    name: "Peluche Pokémon Pikachu 30cm",
    description:
      "Peluche oficial de Pikachu de alta calidad, 30cm de altura. Material suave y detalles bordados.",
    price: 28.0,
    stock: 33,
    image:
      "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 23,
    name: "Playmobil Ciudad - Estación de Bomberos",
    description:
      "Set Playmobil con estación de bomberos, camión, 4 figuras y accesorios. Luces y sonidos incluidos.",
    price: 65.0,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
  {
    id: 24,
    name: "Juego de Mesa Monopoly Clásico",
    description:
      "El clásico juego de bienes raíces Monopoly. Para 2-8 jugadores, incluye tablero, fichas y billetes.",
    price: 42.0,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop&crop=center",
    categories: ["toys"],
  },
];

export default productsMock;
