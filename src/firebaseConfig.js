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

// Validar configuración básica
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("❌ Error: Variables de entorno de Firebase no configuradas");
  console.error("💡 Crea un archivo .env basado en .env.example");
  throw new Error("Configuración de Firebase incompleta");
}

// Inicializar Firebase
const appBackend = initializeApp(firebaseConfig);

export const db = getFirestore(appBackend);

// Obtener productos de la base de datos
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
    // Agregar fecha del servidor
    const order = {
      ...orderData,
      fechaCreacion: serverTimestamp(),
      estado: "pendiente",
    };

    const docRef = await addDoc(collection(db, "orders"), order);

    // Guardar datos del cliente también
    await saveCustomer(orderData.cliente);

    return docRef.id;
  } catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
  }
};

// Guardar cliente en la base de datos
export const saveCustomer = async (customerData) => {
  try {
    // Verificar si ya existe el cliente
    const q = query(
      collection(db, "clientes"),
      where("email", "==", customerData.email)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Cliente nuevo, crear registro
      const customer = {
        ...customerData,
        fechaRegistro: serverTimestamp(),
        totalCompras: 1,
        ultimaCompra: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "clientes"), customer);
      return docRef.id;
    } else {
      // Cliente ya existe
      // Por simplicidad, no actualizamos aquí, pero podrías implementar updateDoc
      return querySnapshot.docs[0].id;
    }
  } catch (error) {
    console.error("Error al guardar cliente:", error);
    throw error;
  }
};

// Buscar orden por ID
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

// Obtener clientes registrados
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

// Actualizar stock de un producto
export const updateProductStock = async (productId, newStock) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, {
      stock: newStock,
    });
  } catch (error) {
    console.error("Error al actualizar stock:", error);
    throw error;
  }
};

// Reducir stock después de compra
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

// Procesar compra y actualizar inventario
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

    return stockUpdates;
  } catch (error) {
    console.error("Error al procesar stocks:", error);
    throw error;
  }
};
