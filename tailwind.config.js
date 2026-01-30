/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "480px",
          sm: "540px",
          md: "720px",
          lg: "800px",
          xl: "900px",
          "2xl": "1000px",
        },
      },
    },
  },
  plugins: [],
};
