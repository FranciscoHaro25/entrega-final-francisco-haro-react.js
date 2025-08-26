import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/page/itemDetailContainer/ItemDetailContainer";

const App = () => {
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
            <Route
              path="/cart"
              element={
                <div className="bg-gray-50 flex items-center justify-center pt-6 pb-20">
                  <div className="text-center">
                    <h2 className="text-2xl text-gray-600 mb-4">
                      Carrito - Próximamente
                    </h2>
                    <p className="text-gray-500">
                      Esta funcionalidad estará disponible pronto
                    </p>
                  </div>
                </div>
              }
            />
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

export default App;
