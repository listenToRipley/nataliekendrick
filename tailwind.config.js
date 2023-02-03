const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "/src/Components/**/*.{html,ts,tsx,js}",
    "./src/assets/**/*.{html,css}",
    "./public/index.html"
  ],
  theme: {
    extend: {}
  },
  plugins: []
  // purge: ['./src**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
};