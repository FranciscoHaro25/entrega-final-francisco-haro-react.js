import { Link } from "react-router";
import { useCart } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="relative group">
      <svg
        className="w-6 h-6 text-brand-text-main group-hover:scale-110 transition-transform group-hover:text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {/* Mostrar contador solo si hay items */}
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse shadow-lg border-2 border-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
};
