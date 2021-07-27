const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        primary: {
          DEFAULT: '#ED64A6',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FDEDF5',
          '300': '#F8BFDA',
          '400': '#F292C0',
          '500': '#ED64A6',
          '600': '#E8368C',
          '700': '#D31872',
          '800': '#A51359',
          '900': '#770E41'
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
