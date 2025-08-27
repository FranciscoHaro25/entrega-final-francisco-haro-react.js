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
