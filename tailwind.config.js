/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hub-logo': '#ff9000',
        'footer-color': '#292929',
        'header-bg' : '#0e0e0e'
      }
    },
  },
  plugins: [],
}

