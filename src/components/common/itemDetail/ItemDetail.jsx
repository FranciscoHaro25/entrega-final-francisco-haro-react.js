import { Link } from "react-router";
import { ItemCount } from "../itemCount/ItemCount";
import { ButtonLink } from "../buttons";

export const ItemDetail = ({ product, onAdd, isAdding }) => {
  return (
    <div className="bg-gray-50 pt-6 pb-8 min-h-[calc(100vh-200px)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-600">
            Inicio
          </Link>
          <span>/</span>
          {product.categories?.map((cat, idx) => (
            <span key={idx}>
              <Link
                to={`/category/${cat}`}
                className="hover:text-orange-600 capitalize"
              >
                {cat}
              </Link>
              {idx < product.categories.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          ))}
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Imagen del producto */}
            <div className="p-8">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x600/f97316/ffffff?text=🛒";
                  }}
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="p-8 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.categories?.map((category, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200 capitalize"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="text-4xl font-bold text-primary mb-4">
                  $
                  {product.price.toLocaleString("es-EC", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>

                <p className="text-sm text-gray-600">
                  Stock disponible:{" "}
                  <span className="font-semibold">
                    {product.stock} unidades
                  </span>
                </p>
              </div>

              {/* Contador - Solo mostrar si no se ha agregado al carrito */}
              {!isAdding && (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
              )}

              {/* Mensaje de producto agregado */}
              {isAdding && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    ¡Producto agregado! Redirigiendo al carrito...
                  </div>
                  <ButtonLink
                    to="/cart"
                    variant="primary"
                    size="lg"
                    className="w-full text-center"
                  >
                    Ir al carrito
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
