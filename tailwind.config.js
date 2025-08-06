/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f7931e", // Naranja vibrante
          secondary: "#1f3a93", // Azul profundo
          "text-main": "#2e2e2e", // Negro carbón
          "text-soft": "#828282", // Gris medio
        },
        // Aliases para facilitar el uso
        primary: "#f7931e",
        secondary: "#1f3a93",
      },
    },
  },
  plugins: [],
};
