/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ship-1": "url('/src/assets/ship1.jpg')",
      },
    },
  },
  plugins: [],
};
