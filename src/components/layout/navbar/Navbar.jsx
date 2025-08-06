import { Link, NavLink } from "react-router";
import { useState } from "react";
import logo from "../../../assets/image/logo-2.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary text-black shadow-lg fixed top-0 left-0 right-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Link al home */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="group-hover:scale-110 transition-transform">
              <img src={logo} alt="Fran Store Logo" className="w-10 h-10" />
            </div>
            {/* <span className="text-2xl font-bold text-white">Fran Store</span> */}
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-1"
                  : "text-white hover:text-orange-300 transition-colors"
              }
            >
              Todos
            </NavLink>

            <NavLink
              to="/category/electronics"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-1"
                  : "text-white hover:text-orange-300 transition-colors"
              }
            >
              Electrónica
            </NavLink>

            <NavLink
              to="/category/deportes"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-1"
                  : "text-white hover:text-orange-300 transition-colors"
              }
            >
              Deportes
            </NavLink>

            <NavLink
              to="/category/clothing"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-1"
                  : "text-white hover:text-orange-300 transition-colors"
              }
            >
              Ropa
            </NavLink>

            <NavLink
              to="/category/books"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-1"
                  : "text-white hover:text-orange-300 transition-colors"
              }
            >
              Libros
            </NavLink>
          </div>

          {/* CartWidget y Menu Mobile */}
          <div className="flex items-center space-x-4">
            {/* Carrito */}
            <Link to="/cart" className="relative group">
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
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
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                3
              </span>
            </Link>

            {/* Boton Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
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

        {/* Menu Mobile Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-300 space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-white hover:bg-blue-800"
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
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-white hover:bg-blue-800"
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
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-white hover:bg-blue-800"
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
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-white hover:bg-blue-800"
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
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-white hover:bg-blue-800"
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
