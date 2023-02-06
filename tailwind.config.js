module.exports = {
  mode: 'jit',
  darkMode: false,
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./src/Components/**/*.{html,ts,tsx,js}",
    "./src/assets/**/*.{html,css}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {}
  },
  plugins: []
  // purge: ['./src**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
};