import { Link } from "react-router";

// Botón Primario - Para acciones principales (comprar, agregar, confirmar)
export const ButtonPrimary = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    bg-gradient-to-r from-blue-500 to-purple-600 
    text-white font-semibold rounded-xl
    hover:from-blue-600 hover:to-purple-700 
    transition-all transform hover:scale-105
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

// Botón Secundario - Para acciones secundarias (cancelar, volver, etc.)
export const ButtonSecondary = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    bg-white text-gray-700 border border-gray-200
    font-semibold rounded-lg
    hover:border-primary hover:text-primary hover:shadow-md
    transition-all transform hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

// Botón de Peligro - Para acciones destructivas (eliminar, cancelar pedido)
export const ButtonDanger = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    bg-gradient-to-r from-red-500 to-red-600 
    text-white font-semibold rounded-lg
    hover:from-red-600 hover:to-red-700 
    transition-all transform hover:scale-105
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

// Botón Link - Para navegación que parece botón
export const ButtonLink = ({
  children,
  to,
  className = "",
  size = "md",
  variant = "primary",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-600 
      text-white hover:from-blue-600 hover:to-purple-700
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-white text-gray-700 border border-gray-200
      hover:border-primary hover:text-primary hover:shadow-md
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600 
      text-white hover:from-red-600 hover:to-red-700
      shadow-lg hover:shadow-xl
    `,
  };

  const baseClasses = `
    inline-block font-semibold rounded-lg text-center
    transition-all transform hover:scale-105
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  return (
    <Link to={to} className={baseClasses}>
      {children}
    </Link>
  );
};

// Botón Icon - Para botones pequeños con íconos
export const ButtonIcon = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-600 
      text-white hover:from-blue-600 hover:to-purple-700
    `,
    secondary: `
      bg-white text-gray-700 border border-gray-200
      hover:border-primary hover:text-primary
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600 
      text-white hover:from-red-600 hover:to-red-700
    `,
  };

  const baseClasses = `
    flex items-center justify-center rounded-full
    transition-all transform hover:scale-110
    shadow-md hover:shadow-lg
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};
