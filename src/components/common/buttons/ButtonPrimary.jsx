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
    bg-orange-500 hover:bg-orange-600 
    text-white font-semibold rounded-xl
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
