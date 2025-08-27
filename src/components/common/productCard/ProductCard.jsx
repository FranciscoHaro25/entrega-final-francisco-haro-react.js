import { Link } from "react-router";
import { ButtonLink } from "../buttons/index";

export const ProductCard = ({ product }) => {
  const fallbackImage = `https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=${encodeURIComponent(
    product.name.substring(0, 15)
  )}`;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col hover:-translate-y-1">
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

      <div className="p-5 flex-1 flex flex-col justify-between">
        <Link
          to={`/item/${product.id}`}
          className="hover:text-orange-600 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mb-3">
          {product.categories?.[0] && (
            <span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-xs font-medium border border-orange-200">
              {product.categories[0]}
            </span>
          )}
        </div>

        <div className="space-y-3 mt-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <ButtonLink
            to={`/item/${product.id}`}
            variant="primary"
            size="md"
            className="w-full text-center"
          >
            {product.stock === 0 ? "Sin Stock" : "Ver Detalle"}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
