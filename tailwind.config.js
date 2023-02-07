module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./src/Components/**/*.{html,ts,tsx,js}",
    "./src/assets/**/*.{html,css}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  // purge: ['./src**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
};