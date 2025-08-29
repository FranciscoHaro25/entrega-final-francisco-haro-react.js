import { Link, NavLink } from "react-router";
import { useState } from "react";
import logo from "../../../assets/image/logo-2.svg";
import { CartWidget } from "../../common/cartWidget/CartWidget";

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
              Electrónic
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
            <CartWidget />

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <NavLink
                to="/"
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Todos
              </NavLink>

              <NavLink
                to="/category/electronics"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Electrónicos
              </NavLink>

              <NavLink
                to="/category/deportes"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Deportes
              </NavLink>

              <NavLink
                to="/category/clothing"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Ropa
              </NavLink>

              <NavLink
                to="/category/books"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Libros
              </NavLink>

              <NavLink
                to="/category/toys"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-900 hover:bg-gray-100 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Juguetes
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
