/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          purple: "#9D50FF",
          pink: "#FF6EC7",
          black: "#0A0A0A",
          gray: {
            50: "#fafafa",
            100: "#f4f4f5",
            800: "#1f1f1f",
            900: "#111111",
          }
        }
      },
    },
  },
  plugins: [],
}