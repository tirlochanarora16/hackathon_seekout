/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanilla: '#FFF9F1',
        aubergine: '#4F0064',
        amber: '#BF2300',
        amethyst: '#781FB3',
        indigo: '#21003B',
        violet: '#9E00F0',
        gray: '#8A8A8A',
        sand: '#F4D2AF',
        biscuit: '#FFE8C7',
        lilac: '#EBDEFF',
        linen: '#FDF1E4',
        tangerine: '#FF7D00',
        flame: '#FF5C00',
        'gray-2': '#F6F6F6',
        'gray-4': '#E3E3E3',
      },
    },
  },
  plugins: [],
}

