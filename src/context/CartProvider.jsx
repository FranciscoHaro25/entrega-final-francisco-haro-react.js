import { useState } from "react";
import { CartContext } from "./CartContext";
import {
  getProductsFromFirestore,
  getProductById as getFirestoreProductById,
  getProductsByCategory as getFirestoreProductsByCategory,
  processOrderAndUpdateStock,
} from "../firebaseConfig";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [stockRefresh, setStockRefresh] = useState(0); // Para forzar re-fetch de productos

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Función para completar compra y actualizar stocks
  const completeOrderWithStock = async () => {
    try {
      // Procesar actualización de stock
      await processOrderAndUpdateStock(cartItems);

      // Forzar refresh de productos
      setStockRefresh((prev) => prev + 1);

      // Limpiar carrito
      clearCart();

      return true;
    } catch (error) {
      console.error("Error al completar orden:", error);
      return false;
    }
  };

  // Funciones para productos usando Firebase
  const getAllProducts = async () => {
    try {
      return await getProductsFromFirestore();
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return [];
    }
  };

  const getProductById = async (id) => {
    try {
      const product = await getFirestoreProductById(id);
      if (product) {
        return product;
      } else {
        throw new Error("Producto no encontrado");
      }
    } catch (error) {
      console.error("Error al obtener producto:", error);
      throw error;
    }
  };

  const getProductsByCategory = async (categoryId) => {
    try {
      if (!categoryId) {
        return await getProductsFromFirestore();
      } else {
        return await getFirestoreProductsByCategory(categoryId);
      }
    } catch (error) {
      console.error("Error al obtener productos por categoría:", error);
      return [];
    }
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
    getAllProducts,
    getProductById,
    getProductsByCategory,
    completeOrderWithStock,
    stockRefresh, // Para que los componentes puedan detectar cambios
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
