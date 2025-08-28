import { createContext, useState } from "react";
import productsMock from "../components/mocks/productsMock";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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

  // Funciones para productos
  const getAllProducts = () => {
    return productsMock;
  };

  const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundProduct = productsMock.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          resolve(foundProduct);
        } else {
          reject("Producto no encontrado");
        }
      }, 800);
    });
  };

  const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!categoryId) {
          resolve(productsMock);
        } else {
          const filteredProducts = productsMock.filter((product) =>
            product.categories?.some(
              (cat) => cat.toLowerCase() === categoryId.toLowerCase()
            )
          );
          resolve(filteredProducts);
        }
      }, 600);
    });
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
