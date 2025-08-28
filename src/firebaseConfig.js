// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7NJAIhzmAYcq0iog8tNmnh0fgbAQSEYI",
  authDomain: "fran-store.firebaseapp.com",
  projectId: "fran-store",
  storageBucket: "fran-store.firebasestorage.app",
  messagingSenderId: "75072040941",
  appId: "1:75072040941:web:7b7e9540ea948769aac1e4",
};

// Initialize Firebase
const appBackend = initializeApp(firebaseConfig);

export const db = getFirestore(appBackend);

// Función para obtener todos los productos desde Firestore
export const getProductsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.error("Error al obtener productos de Firestore:", error);
    throw error;
  }
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (categoryName) => {
  try {
    const q = query(
      collection(db, "products"),
      where("categories", "array-contains", categoryName)
    );

    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    throw error;
  }
};

// Función para obtener un producto por ID
export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    throw error;
  }
};

// Función para crear una orden de compra
export const createOrder = async (orderData) => {
  try {
    // Agregar timestamp del servidor
    const order = {
      ...orderData,
      fechaCreacion: serverTimestamp(),
      estado: "pendiente",
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("✅ Orden creada con ID:", docRef.id);

    // También guardar/actualizar datos del cliente
    await saveCustomer(orderData.cliente);

    return docRef.id;
  } catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
  }
};

// Función para guardar datos del cliente
export const saveCustomer = async (customerData) => {
  try {
    // Buscar si el cliente ya existe por email
    const q = query(
      collection(db, "clientes"),
      where("email", "==", customerData.email)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Cliente nuevo - crear registro
      const customer = {
        ...customerData,
        fechaRegistro: serverTimestamp(),
        totalCompras: 1,
        ultimaCompra: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "clientes"), customer);
      console.log("✅ Cliente creado con ID:", docRef.id);
      return docRef.id;
    } else {
      // Cliente existente - actualizar última compra
      // Por simplicidad, no actualizamos aquí, pero podrías implementar updateDoc
      console.log("✅ Cliente existente encontrado");
      return querySnapshot.docs[0].id;
    }
  } catch (error) {
    console.error("Error al guardar cliente:", error);
    throw error;
  }
};

// Función para obtener una orden por ID
export const getOrderById = async (orderId) => {
  try {
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener orden por ID:", error);
    throw error;
  }
};

// Función para obtener todos los clientes
export const getCustomers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "clientes"));
    const customers = [];

    querySnapshot.forEach((doc) => {
      customers.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return customers;
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    throw error;
  }
};

// Función para actualizar el stock de un producto
export const updateProductStock = async (productId, newStock) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, {
      stock: newStock,
    });
    console.log(`✅ Stock actualizado para producto ${productId}: ${newStock}`);
  } catch (error) {
    console.error("Error al actualizar stock:", error);
    throw error;
  }
};

// Función para reducir stock después de una compra
export const reduceProductStock = async (productId, quantityPurchased) => {
  try {
    // Obtener el producto actual
    const product = await getProductById(productId);
    if (!product) {
      throw new Error("Producto no encontrado");
    }

    // Calcular nuevo stock
    const newStock = Math.max(0, product.stock - quantityPurchased);

    // Actualizar en Firebase
    await updateProductStock(productId, newStock);

    return newStock;
  } catch (error) {
    console.error("Error al reducir stock:", error);
    throw error;
  }
};

// Función para procesar la compra y actualizar stocks
export const processOrderAndUpdateStock = async (cartItems) => {
  try {
    const stockUpdates = [];

    for (const item of cartItems) {
      const newStock = await reduceProductStock(item.id, item.quantity);
      stockUpdates.push({
        productId: item.id,
        oldStock: item.stock,
        newStock: newStock,
        quantityPurchased: item.quantity,
      });
    }

    console.log("✅ Stocks actualizados:", stockUpdates);
    return stockUpdates;
  } catch (error) {
    console.error("Error al procesar stocks:", error);
    throw error;
  }
};
