/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Important!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")]
};
