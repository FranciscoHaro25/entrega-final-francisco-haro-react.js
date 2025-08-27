import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Si el producto ya existe, actualizar cantidad
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es nuevo, agregarlo al carrito
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Si la cantidad es 0 o menor, eliminar el producto
      removeItem(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Eliminar producto del carrito
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calcular precio total
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calcular cantidad total de productos
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Vaciar carrito completo
  const clearCart = () => {
    setCartItems([]);
  };

  // Verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
