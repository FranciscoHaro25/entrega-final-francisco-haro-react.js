// Botón Outline - Para acciones secundarias con borde
export const ButtonOutline = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
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
      bg-white text-orange-500 border-2 border-orange-500
      hover:bg-orange-500 hover:text-white
    `,
    secondary: `
      bg-white text-blue-600 border-2 border-blue-600
      hover:bg-blue-600 hover:text-white
    `,
    danger: `
      bg-white text-red-600 border-2 border-red-600
      hover:bg-red-600 hover:text-white
    `,
  };

  const baseClasses = `
    font-semibold rounded-lg
    transition-all transform hover:scale-105
    shadow-sm hover:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${variantClasses[variant]}
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
