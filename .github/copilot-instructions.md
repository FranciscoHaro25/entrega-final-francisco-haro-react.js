# Copilot Instructions para miWeb

## Arquitectura del Proyecto

Este es un proyecto React + Vite con Tailwind CSS configurado para el desarrollo de una aplicación web de e-commerce en práctica. La arquitectura sigue patrones específicos:

### Estructura de Componentes

- **Componentes principales** en `src/components/` organizados por tipo:
  - `common/` - Componentes reutilizables como `ProductCard`
  - `page/` - Componentes de páginas específicas organizados por funcionalidad
  - `layouts/` - Componentes de layout (preparado para futuro uso)
- **Datos mock** en `src/components/mocks/` para desarrollo y testing

### Patrones de Código Específicos

#### Componentes React

- Usar **named exports** para componentes comunes: `export const ProductCard = ({ product }) => {}`
- Usar **default exports** para páginas y componentes principales
- Importar mocks como default: `import productsMock from "../../mocks/productsMock"`

#### Gestión de Estado

- Usar `useState` y `useEffect` para manejo de datos asincrónicos
- Simular llamadas API con Promises para datos mock:

```jsx
const getProducts = new Promise((resolve) => {
  resolve(productsMock);
});
```

#### Styling con Tailwind

- **Clases específicas del proyecto**:
  - Cards: `bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`
  - Gradientes en botones: `bg-gradient-to-r from-blue-500 to-purple-600`
  - Grid responsivo: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Usar `line-clamp-X` para truncar texto (configurado en Tailwind)

#### Estructura de Datos

Los productos siguen este schema:

```javascript
{
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number,
  image: string, // URLs de Cloudinary
  categories: string[]
}
```

## Comandos de Desarrollo

- `npm run dev` - Servidor de desarrollo con HMR
- `npm run build` - Build de producción
- `npm run lint` - Linting con ESLint
- `npm run preview` - Preview del build

## Configuración Específica

- **Vite** configurado con plugin de React y Tailwind CSS v4
- **Tailwind** con configuración mínima para archivos JSX/TSX
- **ESLint** con reglas para React hooks y refresh
- Imágenes servidas desde Cloudinary en producción

## Convenciones del Proyecto

1. **Imports relativos** para componentes internos usando rutas relativas (`../../`)
2. **Comentarios en español** para documentación
3. **Nombres de archivos** en PascalCase para componentes, camelCase para utilities
4. **Estructura de carpetas** por feature dentro de `page/` (cart, checkout, itemListContainer)

## Notas para AI Agents

- Este es un proyecto de práctica/aprendizaje, mantener código simple y educativo
- Priorizar legibilidad sobre optimización avanzada
- Usar patrones React estándar sin librerías de estado complejas
- Las imágenes están externalizadas en Cloudinary para evitar problemas de bundling
