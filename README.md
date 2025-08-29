# Fran Store - Tienda ## 🚀 Instalación y Uso

```bash
# 1. Clonar repositorio
git clone [repo-url]
cd miWeb

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales reales de Firebase

# 4. Ejecutar en desarrollo
npm run dev

# 5. Build para producción
npm run build
```

## ⚙️ Configuración de Variables de Entorno

### Paso 1: Crear archivo .env

```bash
cp .env.example .env
```

### Paso 2: Obtener credenciales de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto o crea uno nuevo
3. Ve a Configuración > Configuración del proyecto
4. En "Tus apps" > "Configuración del SDK"
5. Copia las credenciales

### Paso 3: Completar .env

```bash
VITE_FIREBASE_API_KEY=tu_api_key_real
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

### ⚠️ Importante

- **NUNCA** subas el archivo `.env` al repositorio
- Las variables deben empezar con `VITE_` para ser accesibles
- Reinicia el servidor después de cambiar variables de entornoínea moderna construida con React, integrada con Firebase para una experiencia de compra completa.

## ✨ Funcionalidades

- **Catálogo interactivo** con productos organizados por categorías
- **Sistema de carrito** con gestión de stock en tiempo real
- **Checkout completo** con formularios de pago
- **Base de datos Firebase** para productos, órdenes y clientes
- **Diseño adaptativo** optimizado para móvil y desktop
- **Localización Ecuador** con precios en formato es-EC

## � Stack Tecnológico

- **Frontend:** React 19 + Vite 7
- **Routing:** React Router 7
- **Estilos:** Tailwind CSS 4
- **Backend:** Firebase Firestore
- **Estado:** Context API
- **Build:** Vite con optimizaciones

## � Instalación y Uso

```bash
# Clonar repositorio
git clone [repo-url]
cd miWeb

# Instalar dependencias
npm install

# Configurar Firebase
# Crear archivo .env con las credenciales

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📱 Características del Proyecto

### Gestión de Productos

- Carga desde Firebase Firestore
- Filtrado por categorías dinámico
- Stock actualizado en tiempo real
- Imágenes optimizadas con Cloudinary

### Sistema de Compras

- Carrito persistente
- Checkout con validación de formularios
- Procesamiento de órdenes
- Confirmación de pedido detallada

### Experiencia de Usuario

- Navegación intuitiva
- Estados de carga
- Manejo de errores
- Responsive design

## 📂 Arquitectura

```
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   │   ├── buttons/     # Sistema de botones
│   │   ├── productCard/ # Tarjeta de producto
│   │   └── cartWidget/  # Widget del carrito
│   ├── layout/          # Header, Footer, Navbar
│   └── mocks/           # Datos de prueba
├── context/             # Proveedores de estado
├── hooks/              # Custom hooks
├── page/               # Componentes de página
│   ├── cart/           # Página del carrito
│   ├── checkout/       # Proceso de compra
│   ├── itemDetail/     # Detalle de producto
│   └── itemList/       # Lista de productos
└── firebaseConfig.js   # Configuración de Firebase
```

## 🌟 Desarrollado por

**Francisco Haro** - ReactJS CoderHouse

Este proyecto forma parte del curso de ReactJS, implementando las mejores prácticas de desarrollo y arquitectura moderna.
