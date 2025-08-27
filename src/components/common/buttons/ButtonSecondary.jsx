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
    hover:border-orange-500 hover:text-orange-600 hover:shadow-md
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
