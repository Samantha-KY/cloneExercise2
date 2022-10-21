/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "primary",
        secondary: "secondary",
      },
      clipPath: {
        mypolygon: "polygon(0 0, 0 35%, 86% 0)",
        footerpolygon: "polygon(0 15%, 100% 0%, 100% 99%, 0% 100%)",
    },
      colors: {
        "semi-gray": "#0a2540",
        "stripe-blue": "#635bff",
        "stripe-sky-blue": "#00d4ff",
        "stripe-deco-blue": "#02bcf5",
        "stripe-semi-violet": "#7a73ff",
      },
      screens: {
        sm: { max: "700px" },
        md: { max: "1366px"}
      },
      padding: {
        mobile: "2rem",
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
