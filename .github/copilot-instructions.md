# Copilot Instructions para miWeb

## Arquitectura del Proyecto

Este es un proyecto React + Vite con Tailwind CSS y React Router para una tienda online. La arquitectura sigue las mejores prácticas de CoderHouse:

### Estructura de Componentes

- **Componentes principales** en `src/components/` organizados por función:
  - `common/` - Componentes reutilizables como `ProductCard`
  - `page/` - Componentes contenedores (ItemListContainer, ItemDetailContainer)
  - `layout/` - Navbar y layout components
- **Datos mock** en `src/components/mocks/` para desarrollo y testing

### Patrones de Código Específicos

#### Navegación y Routing

- Usar `react-router` para navegación entre vistas
- Rutas dinámicas: `/category/:categoryId` y `/item/:id`
- `useParams()` para acceder a parámetros de URL
- NavLink para navegación activa con estados visuales

#### Componentes React

- **Named exports** para componentes comunes: `export const ProductCard = ({ product }) => {}`
- **Default exports** para páginas y contenedores
- Componentes contenedores manejan estado y efectos
- Componentes de presentación solo manejan UI

#### Gestión de Estado

- `useState` para estado local de componentes
- `useEffect` con dependencias de parámetros URL: `useEffect(() => {...}, [categoryId])`
- Promises con setTimeout para simular llamadas async:

```jsx
const getProducts = new Promise((resolve) => {
  setTimeout(() => resolve(data), 600);
});
```

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
  categories: string[] // ["electronics", "deportes", etc.]
}
```

#### Filtrado por Categorías

```jsx
// Filtrar productos por categoría
const filteredProducts = productsMock.filter((product) =>
  product.categories?.some(
    (cat) => cat.toLowerCase() === categoryId.toLowerCase()
  )
);
```

### Styling con Tailwind

- **Cards**: `bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`
- **Gradientes en navbar/botones**: `bg-gradient-to-r from-blue-500 to-purple-600`
- **Grid responsivo**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Loading states**: Spinner con `animate-spin rounded-full border-b-4`
- **Estados hover**: `hover:scale-105` para efectos suaves

### Navegación y UX

- **Breadcrumbs** en detalle de producto
- **Loading states** con spinners durante async operations
- **Estados vacíos** cuando no hay productos en categoría
- **Links activos** con NavLink y clases condicionales
- **Formato de precios**: `toLocaleString('es-ES')` para formato argentino
- **Footer integrado** con estructura de layout flexbox## Comandos de Desarrollo

- `npm run dev` - Servidor de desarrollo con HMR
- `npm run build` - Build de producción
- `npm run lint` - Linting con ESLint
- `npm run preview` - Preview del build

## Convenciones del Proyecto

1. **Imports con react-router**: `import { Link, NavLink, useParams } from "react-router"`
2. **Dependencias en useEffect**: Incluir parámetros URL como `[categoryId]`
3. **Categorías en lowercase**: URLs como `/category/electronics`
4. **Comentarios en español** para documentación
5. **Array.map() con key prop** obligatorio para listas

## Notas para AI Agents

- Proyecto de práctica para CoderHouse, mantener código educativo
- Priorizar legibilidad y patrones estándar de React
- Usar datos mock con Promises para simular APIs reales
- Todos los componentes deben ser responsive con Tailwind
- Incluir estados de loading y error en componentes async
