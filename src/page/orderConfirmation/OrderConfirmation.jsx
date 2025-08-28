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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6 shadow-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-white"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Cargando tu confirmación...
            </h2>
            <p className="text-gray-600">
              Estamos preparando los detalles de tu pedido
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Orden no encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              No pudimos encontrar la información de tu pedido. Verifica el ID
              de la orden o contacta con soporte.
            </p>
            <ButtonPrimary
              onClick={() => navigate("/")}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              🏠 Volver al inicio
            </ButtonPrimary>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Tu orden ha sido procesada exitosamente y pronto la recibirás
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 mb-8 backdrop-blur-sm">
          <div className="border-b border-orange-100 pb-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg mr-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Detalles del Pedido
            </h2>
            <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <p className="text-gray-700 flex items-center">
                <span className="font-medium">ID de Orden:</span>
                <span className="ml-2 font-mono bg-white px-3 py-1.5 rounded-lg border border-orange-200 text-orange-800 font-semibold tracking-wider">
                  {orderId}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Información del Cliente */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full mr-2 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    />
                  </svg>
                </div>
                Datos del Cliente
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center p-2 bg-white rounded-lg border border-orange-100">
                  <span className="font-semibold text-gray-700 w-20">
                    Nombre:
                  </span>
                  <span className="text-gray-800 ml-2">
                    {order.cliente?.nombre} {order.cliente?.apellido}
                  </span>
                </div>
                <div className="flex items-center p-2 bg-white rounded-lg border border-orange-100">
                  <span className="font-semibold text-gray-700 w-20">
                    Email:
                  </span>
                  <span className="text-gray-800 ml-2">
                    {order.cliente?.email}
                  </span>
                </div>
                <div className="flex items-center p-2 bg-white rounded-lg border border-orange-100">
                  <span className="font-semibold text-gray-700 w-20">
                    Teléfono:
                  </span>
                  <span className="text-gray-800 ml-2">
                    {order.cliente?.telefono}
                  </span>
                </div>
                <div className="flex items-start p-2 bg-white rounded-lg border border-orange-100">
                  <span className="font-semibold text-gray-700 w-20">
                    Dirección:
                  </span>
                  <div className="text-gray-800 ml-2">
                    <div>{order.cliente?.direccion}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {order.cliente?.ciudad}, CP: {order.cliente?.codigoPostal}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de Pago */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    />
                  </svg>
                </div>
                Información de Pago
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center p-2 bg-white rounded-lg border border-green-100">
                  <span className="font-semibold text-gray-700 w-20">
                    Método:
                  </span>
                  <span className="text-gray-800 ml-2">
                    {order.pago?.metodoPago === "tarjeta"
                      ? "💳 Tarjeta de Crédito"
                      : order.pago?.metodoPago === "transferencia"
                      ? "🏦 Transferencia Bancaria"
                      : "💵 Pago en Efectivo"}
                  </span>
                </div>
                {order.pago?.ultimosCuatro && (
                  <div className="flex items-center p-2 bg-white rounded-lg border border-green-100">
                    <span className="font-semibold text-gray-700 w-20">
                      Tarjeta:
                    </span>
                    <span className="text-gray-800 ml-2 font-mono">
                      **** **** **** {order.pago.ultimosCuatro}
                    </span>
                  </div>
                )}
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Pagado:</span>
                    <span className="text-xl font-bold">
                      $
                      {order.total?.toLocaleString("es-EC", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 14a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
              Productos Ordenados ({order.productos?.length || 0} artículos)
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
              {order.productos?.map((producto, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">
                      {producto.nombre}
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-medium mr-2">
                        Qty: {producto.cantidad}
                      </span>
                      <span>×</span>
                      <span className="ml-1 font-medium">
                        $
                        {producto.precio?.toLocaleString("es-EC", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-lg">
                      $
                      {producto.subtotal?.toLocaleString("es-EC", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estados y próximos pasos */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-orange-900 mb-4 text-lg flex items-center">
            <div className="w-6 h-6 bg-orange-500 rounded-full mr-2 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                />
              </svg>
            </div>
            ¿Qué sigue ahora?
          </h3>
          <div className="space-y-3">
            <div className="flex items-center bg-white p-3 rounded-lg border border-orange-200">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-4"></div>
              <span className="text-orange-900 font-medium">
                Procesaremos tu pedido en las próximas 24 horas
              </span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg border border-orange-200">
              <div className="w-3 h-3 bg-orange-300 rounded-full mr-4"></div>
              <span className="text-orange-800">
                Te enviaremos un email de confirmación con el número de
                seguimiento
              </span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg border border-orange-200">
              <div className="w-3 h-3 bg-orange-300 rounded-full mr-4"></div>
              <span className="text-orange-800">
                El envío llegará a tu domicilio en 3-5 días hábiles
              </span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <ButtonPrimary
            onClick={() => navigate("/")}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-3"
          >
            🛍️ Seguir Comprando
          </ButtonPrimary>

          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-white border-2 border-orange-300 text-orange-700 rounded-xl font-semibold hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📄 Descargar Recibo
          </button>
        </div>

        {/* Información de contacto */}
        <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl border border-orange-100 shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">
              ¿Tienes alguna pregunta sobre tu pedido?
            </span>
            <br />
            <span className="text-gray-600">
              Nuestro equipo de soporte está aquí para ayudarte
            </span>
            <br />
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@fran-store.com"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold hover:underline transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@fran-store.com
              </a>
              <span className="text-gray-400">|</span>
              <span className="inline-flex items-center text-gray-700">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +593 2 234-5678
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
