import { Link } from "react-router";

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
      bg-orange-500 hover:bg-orange-600 
      text-white
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-blue-600 hover:bg-blue-700 
      text-white
      shadow-lg hover:shadow-xl
    `,
    outline: `
      bg-white text-orange-500 border border-orange-500
      hover:bg-orange-500 hover:text-white hover:shadow-md
    `,
    orange: `
      bg-orange-100 text-orange-800 
      hover:bg-orange-200 border border-orange-200
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
