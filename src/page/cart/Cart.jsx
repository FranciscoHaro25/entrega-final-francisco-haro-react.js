import { useCart } from "../../hooks/useCart";
import { CartItem } from "../../components/common/cartItem/CartItem";
import {
  ButtonLink,
  ButtonPrimary,
  ButtonDanger,
} from "../../components/common/buttons/index";

export const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  const handleClearCart = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
      clearCart();
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              ¡Agrega algunos productos increíbles!
            </p>
            <ButtonLink to="/" variant="primary" size="lg" className="block">
              Seguir comprando
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tu Carrito</h1>
          <p className="text-gray-600">
            {getTotalItems()} productos en tu carrito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={removeItem}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Resumen de compra
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Productos ({getTotalItems()})</span>
                  <span>
                    $
                    {getTotalPrice().toLocaleString("es-EC", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span className="text-green-600 font-semibold">Gratis</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-primary">
                      $
                      {getTotalPrice().toLocaleString("es-EC", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <ButtonLink
                to="/checkout"
                variant="primary"
                size="lg"
                className="w-full mb-4"
              >
                Proceder al pago
              </ButtonLink>

              <ButtonLink
                to="/"
                variant="secondary"
                size="md"
                className="block w-full text-center mb-3"
              >
                Seguir comprando
              </ButtonLink>

              <ButtonDanger
                onClick={handleClearCart}
                size="sm"
                className="w-full"
              >
                Vaciar carrito
              </ButtonDanger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
