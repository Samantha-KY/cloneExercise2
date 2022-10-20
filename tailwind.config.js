/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "primary",
        secondary: "secondary",
      },
      colors: {
        "graySemi": "#0a2540",
        "blue": "#635bff",
        "blue-sky": "#00d4ff",
        "blue-bright": "#02bcf5",
        "violet": "#7a73ff",
      },
      screens: {
        sm: { max: '800px' },
        md: { min: '1024px' }
      }
    },
  },
  plugins: [],
};
