// Configuración de Firebase
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
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase
const appBackend = initializeApp(firebaseConfig);

export const db = getFirestore(appBackend);

// Obtener productos de la base de datos
export const getProductsFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (categoryName) => {
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
};

// Función para obtener un producto por ID
export const getProductById = async (productId) => {
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
};

// Función para crear una orden de compra
export const createOrder = async (orderData) => {
  const order = {
    ...orderData,
    fechaCreacion: serverTimestamp(),
    estado: "pendiente",
  };

  const docRef = await addDoc(collection(db, "orders"), order);
  await saveCustomer(orderData.cliente);
  return docRef.id;
};

// Guardar cliente en la base de datos
export const saveCustomer = async (customerData) => {
  const q = query(
    collection(db, "clientes"),
    where("email", "==", customerData.email)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    const customer = {
      ...customerData,
      fechaRegistro: serverTimestamp(),
      totalCompras: 1,
      ultimaCompra: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "clientes"), customer);
    return docRef.id;
  } else {
    return querySnapshot.docs[0].id;
  }
};

// Buscar orden por ID
export const getOrderById = async (orderId) => {
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
};

// Obtener clientes registrados
export const getCustomers = async () => {
  const querySnapshot = await getDocs(collection(db, "clientes"));
  const customers = [];

  querySnapshot.forEach((doc) => {
    customers.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return customers;
};

// Actualizar stock de un producto
export const updateProductStock = async (productId, newStock) => {
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, { stock: newStock });
};

// Reducir stock después de compra
export const reduceProductStock = async (productId, quantityPurchased) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new Error("Producto no encontrado");
  }

  const newStock = Math.max(0, product.stock - quantityPurchased);
  await updateProductStock(productId, newStock);
  return newStock;
};

// Procesar compra y actualizar inventario
export const processOrderAndUpdateStock = async (cartItems) => {
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

  return stockUpdates;
};
