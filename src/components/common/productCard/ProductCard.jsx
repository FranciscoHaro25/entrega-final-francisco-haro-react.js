export const ProductCard = ({ product }) => {
  // URL alternativa más confiable
  const fallbackImage = `https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=${encodeURIComponent(
    product.name.substring(0, 15)
  )}`;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col hover:-translate-y-1">
      {/* Imagen del producto - ARREGLADO: sin bg-gray-100 problemático */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          style={{
            // Asegurar display correcto
            display: "block",
            backgroundColor: "transparent",
          }}
          onError={(e) => {
            // Fallback a una imagen placeholder más confiable
            e.target.src = fallbackImage;
          }}
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          {product.stock} disponibles
        </div>
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-5 flex-1 flex flex-col space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight overflow-hidden line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 flex-1 leading-relaxed overflow-hidden line-clamp-3">
          {product.description}
        </p>

        {/* Categorías */}
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

        {/* Precio y botón */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="text-xl font-bold text-orange-600">
            ${product.price.toFixed(2)}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
