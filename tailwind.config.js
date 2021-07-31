const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
  },
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
      borderRadius: ['hover'],
    }
  },
  plugins: [],
};
