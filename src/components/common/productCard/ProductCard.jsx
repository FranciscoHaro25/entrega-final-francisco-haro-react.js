import { Link } from "react-router";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);

  const fallbackImage = `https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=${encodeURIComponent(
    product.name.substring(0, 15)
  )}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Animación de feedback
    setIsAdding(true);

    // Simulamos agregar al carrito
    setTimeout(() => {
      // Aquí irá la lógica real del carrito en el futuro
      console.log("Producto agregado:", product);
      setIsAdding(false);

      // Feedback visual temporal
      const event = new CustomEvent("productAdded", {
        detail: { product },
      });
      window.dispatchEvent(event);
    }, 600);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col hover:-translate-y-1">
      {/* Imagen clickeable */}
      <Link
        to={`/item/${product.id}`}
        className="block relative overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          {product.stock} disponibles
        </div>
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </Link>

      <div className="p-5 flex-1 flex flex-col space-y-3">
        {/* Título clickeable */}
        <Link
          to={`/item/${product.id}`}
          className="hover:text-orange-600 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight overflow-hidden line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 flex-1 leading-relaxed overflow-hidden line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.categories?.slice(0, 2).map((category, index) => (
            <span
              key={index}
              className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-xs font-medium border border-orange-200"
            >
              {category}
            </span>
          ))}
          {product.categories?.length > 2 && (
            <span className="text-gray-500 text-xs px-1 py-1">
              +{product.categories.length - 2}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="text-xl font-bold text-orange-600 bg-orange-50 px-3 py-2 rounded-md">
            ${product.price.toFixed(2)}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdding || product.stock === 0}
            className={`
              font-medium py-2.5 px-5 rounded-xl transition-all duration-300 
              transform active:scale-95 shadow-lg hover:shadow-xl
              ${
                isAdding
                  ? "bg-green-500 text-white"
                  : product.stock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-105"
              }
            `}
          >
            {isAdding ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
                Agregando
              </span>
            ) : product.stock === 0 ? (
              "Sin Stock"
            ) : (
              "Agregar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
