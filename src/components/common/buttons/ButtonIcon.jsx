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
      bg-orange-500 hover:bg-orange-600 
      text-white
    `,
    secondary: `
      bg-blue-600 hover:bg-blue-700 
      text-white
    `,
    outline: `
      bg-white text-orange-500 border border-orange-500
      hover:bg-orange-500 hover:text-white
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
