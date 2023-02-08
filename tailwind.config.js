/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: { min: "550px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      colors: {
        offWhite: "#F8F4F1",
      },
    },
  },
  plugins: [],
};
