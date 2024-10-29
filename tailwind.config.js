/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A2DED",
        secondary: "#6A3DED",
      },
    },
  },
  plugins: [],
};
