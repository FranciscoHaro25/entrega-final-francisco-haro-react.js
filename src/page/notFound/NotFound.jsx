import { ButtonLink } from "../../components/common/buttons/index";

export const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center pt-6 pb-20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Oops! Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida. Te
          invitamos a explorar nuestros increíbles productos.
        </p>

        <div className="space-y-4">
          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            className="block w-full"
          >
            🏠 Volver al inicio
          </ButtonLink>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <ButtonLink
              to="/category/electronics"
              variant="secondary"
              size="md"
              className="flex-1"
            >
              📱 Electrónicos
            </ButtonLink>
            <ButtonLink
              to="/category/clothing"
              variant="secondary"
              size="md"
              className="flex-1"
            >
              👕 Ropa
            </ButtonLink>
          </div>
        </div>

        {/* Decoración adicional */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">¿Necesitas ayuda? Contáctanos</p>
          <div className="flex justify-center space-x-4 mt-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
