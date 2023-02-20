/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Clash Display", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        title: "100%",
        text: "180%",
      },
      letterSpacing: {
        tighter: "0.9px",
      },
    },
  },
  plugins: [],
};
