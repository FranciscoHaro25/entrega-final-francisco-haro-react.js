export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Imagen del producto */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          Stock: {product.stock}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.categories?.map((category, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Precio y botón */}
        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-green-600">
            ${product.price}
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
