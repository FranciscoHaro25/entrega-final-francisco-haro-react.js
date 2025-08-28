# Fran Store - Tienda Online

Tienda en línea moderna construida con React, integrada con Firebase para una experiencia de compra completa.

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
