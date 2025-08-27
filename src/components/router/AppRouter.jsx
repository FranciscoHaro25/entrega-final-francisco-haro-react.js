import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Navbar } from "../layout/navbar/Navbar";
import { Footer } from "../layout/footer/Footer";
import ItemListContainer from "../../page/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../../page/itemDetailContainer/ItemDetailContainer";
import { Cart } from "../../page/cart/Cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <div className="bg-gray-50 flex flex-col items-center justify-center pt-6 pb-20">
                  <h1 className="text-9xl font-bold text-gray-300">404</h1>
                  <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
                    Página no encontrada
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Lo sentimos, la página que buscas no existe
                  </p>
                  <Link
                    to="/"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Volver al inicio
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
