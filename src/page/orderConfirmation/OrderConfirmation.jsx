import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getOrderById } from "../../firebaseConfig";
import { ButtonPrimary } from "../../components/common/buttons";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (orderId) {
          const orderData = await getOrderById(orderId);
          setOrder(orderData);
        }
      } catch (error) {
        console.error("Error al cargar la orden:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando confirmación...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Orden no encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            No pudimos encontrar la información de tu pedido.
          </p>
          <ButtonPrimary onClick={() => navigate("/")} size="lg">
            Volver al inicio
          </ButtonPrimary>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ¡Pedido Confirmado!
        </h1>
        <p className="text-gray-600">Tu orden ha sido procesada exitosamente</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Detalles del Pedido
          </h2>
          <p className="text-gray-600">
            ID de Orden:{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {orderId}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Información del Cliente */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Datos del Cliente
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Nombre:</span>{" "}
                {order.cliente?.nombre} {order.cliente?.apellido}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {order.cliente?.email}
              </p>
              <p>
                <span className="font-medium">Teléfono:</span>{" "}
                {order.cliente?.telefono}
              </p>
              <p>
                <span className="font-medium">Dirección:</span>{" "}
                {order.cliente?.direccion}
              </p>
              <p>
                <span className="font-medium">Ciudad:</span>{" "}
                {order.cliente?.ciudad}, CP: {order.cliente?.codigoPostal}
              </p>
            </div>
          </div>

          {/* Información de Pago */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Método de Pago</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Método:</span>{" "}
                {order.pago?.metodoPago === "tarjeta"
                  ? "💳 Tarjeta"
                  : order.pago?.metodoPago === "transferencia"
                  ? "🏦 Transferencia"
                  : "💵 Efectivo"}
              </p>
              {order.pago?.ultimosCuatro && (
                <p>
                  <span className="font-medium">Tarjeta:</span> **** **** ****{" "}
                  {order.pago.ultimosCuatro}
                </p>
              )}
              <p>
                <span className="font-medium">Total Pagado:</span>{" "}
                <span className="text-green-600 font-bold">
                  $
                  {order.total?.toLocaleString("es-EC", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            Productos Ordenados
          </h3>
          <div className="space-y-3">
            {order.productos?.map((producto, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{producto.nombre}</p>
                  <p className="text-sm text-gray-600">
                    Cantidad: {producto.cantidad} × $
                    {producto.precio?.toLocaleString("es-EC", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <p className="font-semibold text-gray-900">
                  $
                  {producto.subtotal?.toLocaleString("es-EC", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estados y próximos pasos */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-blue-900 mb-3">¿Qué sigue ahora?</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            <span>Procesaremos tu pedido en las próximas 24 horas</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
            <span>Te enviaremos un email de confirmación con el tracking</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
            <span>El envío llegará en 3-5 días hábiles</span>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonPrimary
          onClick={() => navigate("/")}
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Seguir Comprando
        </ButtonPrimary>

        <button
          onClick={() => window.print()}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
        >
          📄 Imprimir Recibo
        </button>
      </div>

      {/* Información de contacto */}
      <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          ¿Tienes alguna pregunta sobre tu pedido?
          <br />
          Contáctanos:{" "}
          <a
            href="mailto:support@fran-store.com"
            className="text-blue-600 hover:underline"
          >
            support@fran-store.com
          </a>{" "}
          | 📞 +593 2 234-5678
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
