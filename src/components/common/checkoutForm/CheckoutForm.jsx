import { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../buttons";

export const CheckoutForm = ({ onSubmit, isProcessing }) => {
  const [customerData, setCustomerData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "efectivo",
  });

  const [paymentData, setPaymentData] = useState({
    numeroTarjeta: "",
    nombreTarjeta: "",
    fechaVencimiento: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

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
          .replace(/(\d{2})(\d)/, "$1/$2")
          .slice(0, 5);
      }

      setPaymentData((prev) => ({ ...prev, [name]: formattedValue }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ customerData, paymentData });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Datos del Cliente */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Información Personal
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
              placeholder="Tu nombre"
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
              placeholder="Tu apellido"
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
              placeholder="+593 99 999 9999"
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
              placeholder="Calle Principal 123"
            />
            {errors.direccion && (
              <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>
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
              placeholder="170101"
            />
            {errors.codigoPostal && (
              <p className="text-red-500 text-sm mt-1">{errors.codigoPostal}</p>
            )}
          </div>
        </div>
      </div>

      {/* Método de Pago */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Método de Pago
        </h2>

        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="metodoPago"
                value="tarjeta"
                checked={customerData.metodoPago === "tarjeta"}
                onChange={(e) => handleInputChange(e, "customer")}
                className="mr-3"
              />
              <div>
                <span className="font-medium">Tarjeta</span>
                <p className="text-sm text-gray-500">Crédito o Débito</p>
              </div>
            </label>

            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="metodoPago"
                value="efectivo"
                checked={customerData.metodoPago === "efectivo"}
                onChange={(e) => handleInputChange(e, "customer")}
                className="mr-3"
              />
              <div>
                <span className="font-medium">Efectivo</span>
                <p className="text-sm text-gray-500">Pago contra entrega</p>
              </div>
            </label>

            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="metodoPago"
                value="transferencia"
                checked={customerData.metodoPago === "transferencia"}
                onChange={(e) => handleInputChange(e, "customer")}
                className="mr-3"
              />
              <div>
                <span className="font-medium">Transferencia</span>
                <p className="text-sm text-gray-500">Bancaria</p>
              </div>
            </label>
          </div>
        </div>

        {customerData.metodoPago === "tarjeta" && (
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
                  errors.numeroTarjeta ? "border-red-500" : "border-gray-300"
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
                  errors.nombreTarjeta ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="FRANCISCO HARO"
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
                  errors.fechaVencimiento ? "border-red-500" : "border-gray-300"
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
        )}

        {customerData.metodoPago === "efectivo" && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">
              💵 Pago en Efectivo
            </h3>
            <div className="text-green-700 text-sm space-y-1">
              <p>✅ Paga al recibir tu pedido</p>
              <p>✅ Sin costos adicionales</p>
              <p>✅ Cambio disponible</p>
              <div className="mt-3 p-3 bg-green-100 rounded">
                <p className="font-medium">💡 Importante:</p>
                <p className="text-xs">
                  Ten listo el monto exacto o comunícanos si necesitas cambio al
                  momento de la entrega.
                </p>
              </div>
            </div>
          </div>
        )}

        {customerData.metodoPago === "transferencia" && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              🏦 Datos para Transferencia
            </h3>
            <div className="text-blue-700 text-sm space-y-1">
              <p>
                <strong>Banco:</strong> Banco Pichincha
              </p>
              <p>
                <strong>Cuenta:</strong> 1234567890
              </p>
              <p>
                <strong>Beneficiario:</strong> Fran Store S.A.
              </p>
              <p>
                <strong>RUC:</strong> 1791234567001
              </p>
              <div className="mt-3 p-3 bg-blue-100 rounded">
                <p className="font-medium">💡 Importante:</p>
                <p className="text-xs">
                  Envía el comprobante de transferencia a: pagos@franstore.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonPrimary
          type="submit"
          size="lg"
          className="flex-1"
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
          className="flex-1"
          disabled={isProcessing}
          onClick={() => window.history.back()}
        >
          Volver al carrito
        </ButtonSecondary>
      </div>
    </form>
  );
};
