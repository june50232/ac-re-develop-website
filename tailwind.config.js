const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      // adding xs to the rest
      underLaptop: {'max': '900px'},
      // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brand_blue: '#2056AE'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
