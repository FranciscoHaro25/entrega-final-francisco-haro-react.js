import { Link, NavLink } from "react-router";
import { useState } from "react";
import logo from "../../../assets/image/logo-2.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-lg fixed top-0 left-0 right-0 z-[99999] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="group-hover:scale-110 transition-transform">
              <img src={logo} alt="Fran Store Logo" className="w-20 h-20" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Todos
            </NavLink>

            <NavLink
              to="/category/electronics"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Electrónica
            </NavLink>

            <NavLink
              to="/category/deportes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Deportes
            </NavLink>

            <NavLink
              to="/category/clothing"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Ropa
            </NavLink>

            <NavLink
              to="/category/books"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Libros
            </NavLink>

            <NavLink
              to="/category/toys"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-900 hover:text-primary transition-colors"
              }
            >
              Juguetes
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative group">
              <svg
                className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform group-hover:text-primary"
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
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                3
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none text-gray-900 hover:text-primary"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-1 bg-white">
            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-900 hover:bg-orange-50 hover:text-primary"
                }`
              }
            >
              Todos los Productos
            </NavLink>
            <NavLink
              to="/category/electronics"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-900 hover:bg-orange-50 hover:text-primary"
                }`
              }
            >
              Electrónica
            </NavLink>
            <NavLink
              to="/category/deportes"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-900 hover:bg-orange-50 hover:text-primary"
                }`
              }
            >
              Deportes
            </NavLink>
            <NavLink
              to="/category/clothing"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-900 hover:bg-orange-50 hover:text-primary"
                }`
              }
            >
              Ropa
            </NavLink>
            <NavLink
              to="/category/books"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-900 hover:bg-orange-50 hover:text-primary"
                }`
              }
            >
              Libros
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
