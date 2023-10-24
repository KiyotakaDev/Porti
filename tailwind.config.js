/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blacky: {
          50: "#e3b5b5",
          100: "#dcacba",
          200: "#d28eae",
          300: "#c261a1",
          400: "#9d3f8d",
          500: "#6f2f6f",
          600: "#4b1e52",
          700: "#2d1537",
          800: "#1a0f24",
          900: "#110b18",
          950: "#040308",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xlg: "1400px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
