/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,tsx, js}",
    "./Components/**/*.{html,tsx, js}"
  ],
  theme: {
    extend: {}
  },
  // purge: ['./src**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
};