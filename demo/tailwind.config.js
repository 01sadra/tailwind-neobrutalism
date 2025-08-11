/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('../index.js')({
      // Custom configuration for demo
      colors: {
        brutal: {
          primary: '255 235 59', // Yellow
          secondary: '76 175 80', // Green
          accent: '233 30 99', // Pink
        }
      }
    })
  ],
}