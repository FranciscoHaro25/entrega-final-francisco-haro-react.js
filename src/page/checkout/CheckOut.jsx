import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";
import { CheckoutForm } from "../../components/common/checkoutForm/CheckoutForm";
import { ButtonLink } from "../../components/common/buttons";
import { createOrder } from "../../firebaseConfig";

const CheckOut = () => {
  const { cartItems, getTotalPrice, completeOrderWithStock } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFormSubmit = async ({ customerData, paymentData }) => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    setIsProcessing(true);

    try {
      // Crear orden con productos del carrito
      const orderData = {
        productos: cartItems.map((item) => ({
          id: item.id,
          nombre: item.name,
          precio: item.price,
          cantidad: item.quantity,
          subtotal: item.price * item.quantity,
        })),
        total: getTotalPrice(),
        cliente: customerData,
        metodoPago: customerData.metodoPago,
        ...(customerData.metodoPago === "tarjeta" && {
          datosPago: paymentData,
        }),
      };

      // Crear orden en Firestore
      const orderId = await createOrder(orderData);

      // Actualizar stocks y limpiar carrito
      const success = await completeOrderWithStock();

      if (success) {
        navigate(`/order-confirmation/${orderId}`);
      } else {
        alert("Error al actualizar el stock. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
      alert("Hubo un error al procesar tu pedido. Intenta de nuevo.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              Agrega productos antes de proceder al checkout
            </p>
            <ButtonLink to="/" variant="primary" size="lg">
              Ir a la tienda
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Finalizar Compra
          </h1>
          <p className="text-gray-600">
            Completa los datos para confirmar tu pedido
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm
              onSubmit={handleFormSubmit}
              isProcessing={isProcessing}
            />
          </div>

          {/* Resumen de compra */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {item.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      $
                      {(item.price * item.quantity).toLocaleString("es-EC", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600">Subtotal:</p>
                  <p className="font-semibold">
                    $
                    {getTotalPrice().toLocaleString("es-EC", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600">Envío:</p>
                  <p className="font-semibold">Gratis</p>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">Total:</p>
                    <p className="text-lg font-bold text-blue-600">
                      $
                      {getTotalPrice().toLocaleString("es-EC", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
