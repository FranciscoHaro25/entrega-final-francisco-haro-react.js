import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../components/common/buttons";
import { createOrder } from "../../firebaseConfig";

export const CheckOut = () => {
  const { cartItems, getTotalPrice, completeOrderWithStock } = useCart();
  const navigate = useNavigate();

  // Estados del formulario
  const [customerData, setCustomerData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "tarjeta",
  });

  const [paymentData, setPaymentData] = useState({
    numeroTarjeta: "",
    nombreTarjeta: "",
    fechaVencimiento: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  // Validaciones
  const validateForm = () => {
    const newErrors = {};

    // Validaciones de datos del cliente
    if (!customerData.nombre.trim())
      newErrors.nombre = "El nombre es obligatorio";
    if (!customerData.apellido.trim())
      newErrors.apellido = "El apellido es obligatorio";
    if (!customerData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(customerData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!customerData.telefono.trim())
      newErrors.telefono = "El teléfono es obligatorio";
    if (!customerData.direccion.trim())
      newErrors.direccion = "La dirección es obligatoria";
    if (!customerData.ciudad.trim())
      newErrors.ciudad = "La ciudad es obligatoria";
    if (!customerData.codigoPostal.trim())
      newErrors.codigoPostal = "El código postal es obligatorio";

    // Validaciones de pago (solo si es tarjeta)
    if (customerData.metodoPago === "tarjeta") {
      if (!paymentData.numeroTarjeta.trim()) {
        newErrors.numeroTarjeta = "El número de tarjeta es obligatorio";
      } else if (paymentData.numeroTarjeta.replace(/\s/g, "").length !== 16) {
        newErrors.numeroTarjeta = "El número de tarjeta debe tener 16 dígitos";
      }
      if (!paymentData.nombreTarjeta.trim())
        newErrors.nombreTarjeta = "El nombre en la tarjeta es obligatorio";
      if (!paymentData.fechaVencimiento.trim())
        newErrors.fechaVencimiento = "La fecha de vencimiento es obligatoria";
      if (!paymentData.cvv.trim()) {
        newErrors.cvv = "El CVV es obligatorio";
      } else if (paymentData.cvv.length !== 3) {
        newErrors.cvv = "El CVV debe tener 3 dígitos";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;

    if (section === "customer") {
      setCustomerData((prev) => ({ ...prev, [name]: value }));
    } else if (section === "payment") {
      let formattedValue = value;

      // Formatear número de tarjeta
      if (name === "numeroTarjeta") {
        formattedValue = value
          .replace(/\D/g, "")
          .replace(/(\d{4})(?=\d)/g, "$1 ")
          .trim();
      }
      // Solo números para CVV
      else if (name === "cvv") {
        formattedValue = value.replace(/\D/g, "").slice(0, 3);
      }
      // Formatear fecha MM/YY
      else if (name === "fechaVencimiento") {
        formattedValue = value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{1,2})/, "$1/$2")
          .slice(0, 5);
      }

      setPaymentData((prev) => ({ ...prev, [name]: formattedValue }));
    }

    // Limpiar error del campo
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Procesar la orden
      const orderData = {
        cliente: customerData,
        productos: cartItems.map((item) => ({
          id: item.id,
          nombre: item.name,
          precio: item.price,
          cantidad: item.quantity,
          subtotal: item.price * item.quantity,
        })),
        pago: {
          metodoPago: customerData.metodoPago,
          ...(customerData.metodoPago === "tarjeta"
            ? {
                ultimosCuatro: paymentData.numeroTarjeta.slice(-4),
                nombreTarjeta: paymentData.nombreTarjeta,
              }
            : {}),
        },
        total: getTotalPrice(),
        fecha: new Date(),
        estado: "pendiente",
      };

      const orderId = await createOrder(orderData);

      // Actualizar stock y limpiar carrito
      await completeOrderWithStock();

      // Ir a página de confirmación con el ID de la orden
      navigate(`/order-confirmation/${orderId}`);
    } catch {
      alert(
        "Hubo un error al procesar tu orden. Por favor, intenta nuevamente."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-600 mb-6">
            Agrega productos antes de proceder al checkout
          </p>
          <ButtonPrimary onClick={() => navigate("/")} size="lg">
            Ir a comprar
          </ButtonPrimary>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Finalizar Compra
        </h1>
        <p className="text-gray-600">
          Completa tus datos para procesar el pedido
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Columna izquierda - Datos del cliente y pago */}
        <div className="lg:col-span-2 space-y-8">
          {/* Datos del Cliente */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Datos del Cliente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={customerData.nombre}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.nombre ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingresa tu nombre"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={customerData.apellido}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.apellido ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingresa tu apellido"
                />
                {errors.apellido && (
                  <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerData.email}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={customerData.telefono}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.telefono ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+593 9 8765-4321"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección *
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={customerData.direccion}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.direccion ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Av. Amazonas 1234, La Carolina, Quito"
                />
                {errors.direccion && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.direccion}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={customerData.ciudad}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.ciudad ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Quito"
                />
                {errors.ciudad && (
                  <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código Postal *
                </label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={customerData.codigoPostal}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.codigoPostal ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="170515"
                />
                {errors.codigoPostal && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.codigoPostal}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Método de Pago */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Método de Pago
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="tarjeta"
                  name="metodoPago"
                  value="tarjeta"
                  checked={customerData.metodoPago === "tarjeta"}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className="text-blue-600"
                />
                <label htmlFor="tarjeta" className="text-gray-700 font-medium">
                  💳 Tarjeta de Crédito/Débito
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="transferencia"
                  name="metodoPago"
                  value="transferencia"
                  checked={customerData.metodoPago === "transferencia"}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className="text-blue-600"
                />
                <label
                  htmlFor="transferencia"
                  className="text-gray-700 font-medium"
                >
                  🏦 Transferencia Bancaria
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="efectivo"
                  name="metodoPago"
                  value="efectivo"
                  checked={customerData.metodoPago === "efectivo"}
                  onChange={(e) => handleInputChange(e, "customer")}
                  className="text-blue-600"
                />
                <label htmlFor="efectivo" className="text-gray-700 font-medium">
                  💵 Efectivo (Pago contra entrega)
                </label>
              </div>
            </div>

            {/* Datos de la tarjeta - Solo si seleccionó tarjeta */}
            {customerData.metodoPago === "tarjeta" && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Tarjeta *
                    </label>
                    <input
                      type="text"
                      name="numeroTarjeta"
                      value={paymentData.numeroTarjeta}
                      onChange={(e) => handleInputChange(e, "payment")}
                      maxLength="19"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.numeroTarjeta
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.numeroTarjeta && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.numeroTarjeta}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre en la Tarjeta *
                    </label>
                    <input
                      type="text"
                      name="nombreTarjeta"
                      value={paymentData.nombreTarjeta}
                      onChange={(e) => handleInputChange(e, "payment")}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.nombreTarjeta
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="MARIA LOPEZ"
                      style={{ textTransform: "uppercase" }}
                    />
                    {errors.nombreTarjeta && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nombreTarjeta}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Vencimiento *
                    </label>
                    <input
                      type="text"
                      name="fechaVencimiento"
                      value={paymentData.fechaVencimiento}
                      onChange={(e) => handleInputChange(e, "payment")}
                      maxLength="5"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.fechaVencimiento
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="MM/YY"
                    />
                    {errors.fechaVencimiento && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fechaVencimiento}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={(e) => handleInputChange(e, "payment")}
                      maxLength="3"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.cvv ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Columna derecha - Resumen del pedido */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Resumen del Pedido
            </h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex-1">
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

            <div className="mt-6 space-y-3">
              <ButtonPrimary
                type="submit"
                size="lg"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Procesando...
                  </>
                ) : (
                  "Confirmar Pedido"
                )}
              </ButtonPrimary>

              <ButtonSecondary
                type="button"
                size="lg"
                className="w-full"
                onClick={() => navigate("/cart")}
                disabled={isProcessing}
              >
                Volver al Carrito
              </ButtonSecondary>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                🔒 Tus datos están seguros y protegidos
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
