/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "540px",
      md: "960px",
      lg: "1024px",
    },
    extend: {
      colors: {
        offWhite: "#F8F4F1",
      },
    },
  },
  plugins: [],
};
