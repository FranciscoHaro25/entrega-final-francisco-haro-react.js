import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Navbar } from "../layout/navbar/Navbar";
import { Footer } from "../layout/footer/Footer";
import ItemListContainer from "../../page/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../../page/itemDetailContainer/ItemDetailContainer";
import { Cart } from "../../page/cart/Cart";
import { CheckOut } from "../../page/checkout/CheckOut";
import OrderConfirmation from "../../page/orderConfirmation/OrderConfirmation";
import { NotFound } from "../../page/notFound/NotFound";
import { CartProvider } from "../../context/CartProvider";

const AppRouter = () => {
  return (
    <CartProvider>
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
              <Route path="/checkout" element={<CheckOut />} />
              <Route
                path="/order-confirmation/:orderId"
                element={<OrderConfirmation />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default AppRouter;
