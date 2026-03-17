/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070c"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

