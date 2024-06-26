/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1A1A1A',
        'gray-800': '#2D2D2D',
        'gray-700': '#3E3E3E',
        'gray-600': '#4F4F4F',
      }
    },
  },
  plugins: [],
}
