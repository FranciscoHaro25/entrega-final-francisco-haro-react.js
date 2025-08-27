const productsMock = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description:
      "El smartphone más avanzado de Apple con chip A17 Pro y cámara de 48MP.",
    price: 1299000,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    description:
      "Laptop profesional con chip M3, 16GB RAM y pantalla Liquid Retina.",
    price: 2499000,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 3,
    name: "AirPods Pro",
    description: "Auriculares inalámbricos con cancelación activa de ruido.",
    price: 299000,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 4,
    name: 'Smart TV Samsung 55"',
    description: "Smart TV QLED de 55 pulgadas con resolución 4K y HDR10+.",
    price: 899000,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    categories: ["electronics"],
  },
  {
    id: 5,
    name: "Nike Air Jordan",
    description:
      "Zapatillas deportivas de básquet con tecnología Air cushioning.",
    price: 189000,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 6,
    name: "Bicicleta Mountain Bike",
    description: "Bicicleta de montaña con marco de aluminio y 21 velocidades.",
    price: 450000,
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1544191696-15693072e0e5?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 7,
    name: "Pelota de Fútbol Adidas",
    description: "Pelota oficial de fútbol con tecnología FIFA Quality Pro.",
    price: 35000,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 8,
    name: "Raqueta de Tenis Wilson",
    description: "Raqueta profesional de tenis con marco de grafito.",
    price: 125000,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop",
    categories: ["deportes"],
  },
  {
    id: 9,
    name: "Camisa Polo Ralph Lauren",
    description: "Camisa polo clásica de algodón 100% en varios colores.",
    price: 89000,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 10,
    name: "Jeans Levi's 501",
    description: "Jeans clásicos de corte recto en denim de alta calidad.",
    price: 129000,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 11,
    name: "Zapatillas Adidas Stan Smith",
    description:
      "Zapatillas urbanas clásicas en cuero blanco con detalles verdes.",
    price: 95000,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 12,
    name: "Vestido Casual",
    description: "Vestido de algodón casual para uso diario en varios diseños.",
    price: 75000,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=300&fit=crop",
    categories: ["clothing"],
  },
  {
    id: 13,
    name: "El Principito",
    description:
      "Clásico de la literatura mundial por Antoine de Saint-Exupéry.",
    price: 18000,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 14,
    name: "Cien Años de Soledad",
    description: "Obra maestra del realismo mágico por Gabriel García Márquez.",
    price: 25000,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 15,
    name: "Programación en JavaScript",
    description: "Manual completo para aprender JavaScript desde cero.",
    price: 45000,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 16,
    name: "Cocina Italiana",
    description: "Libro de recetas tradicionales de la cocina italiana.",
    price: 32000,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    categories: ["books"],
  },
  {
    id: 17,
    name: "LEGO Architecture Set",
    description:
      "Set de construcción LEGO de monumentos arquitectónicos famosos.",
    price: 85000,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    categories: ["toys"],
  },
  {
    id: 18,
    name: "Muñeca Barbie",
    description: "Muñeca Barbie con accesorios y outfits intercambiables.",
    price: 28000,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&h=300&fit=crop",
    categories: ["toys"],
  },
  {
    id: 19,
    name: "Auto de Control Remoto",
    description:
      "Auto a control remoto con batería recargable y alta velocidad.",
    price: 65000,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    categories: ["toys"],
  },
  {
    id: 20,
    name: "Puzzle 1000 Piezas",
    description: "Puzzle de 1000 piezas con imagen de paisaje natural.",
    price: 22000,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=400&h=300&fit=crop",
    categories: ["toys"],
  },
];

export default productsMock;
