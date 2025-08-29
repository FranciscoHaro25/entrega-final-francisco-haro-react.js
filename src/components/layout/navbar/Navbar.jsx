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
              Electrónicassss
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
          </div>
        </div>
      </div>
    </nav>
  );
};
