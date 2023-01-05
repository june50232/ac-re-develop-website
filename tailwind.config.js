const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      red: 'red',
      default: '#034AF9',
      primary: {
        lighter: '#DCEFFC',
        light: '#A0DDFE',
        DEFAULT: '#0065ac',
        darkGray: '#6166E2',
        dark: '#1b222f',
        darker: 'rgb(42,60,107)',
      },
      secondary: {
        lightest: '#C4C4C4',
        lighter: '#8A979F',
        light: '#768592',
        DEFAULT: '#596A78',
        dark: '#374B5C',
        darker: '#000000',
        darkest: '#3F4079',
      },
      neutral: colors.amber,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
    },
    fontSize: {
      '7xl': ['.5rem', '.8rem'],
      xs: ['.57rem', '.85rem'], // 4, 6
      sm: ['.71rem', '1rem'], // 5, 7
      base: ['1rem', '1.3rem'], // 7, 9
      lg: ['1.3rem', '1.5rem'], // 8, 9
      xl: ['1.55rem', '1.8rem'], // 12, 14,52
      '2xl': ['1.85rem', '2.24rem'], // 13, 15.73
      '3xl': ['2.28rem', '2.77rem'], // 16, 19.36
      '5xl': ['2.57rem', '3.11rem'], // 18, 21.78
      '6xl': ['5rem', '5rem'],
      '8xl': ['6rem', '6rem'], // 18, 21.78
    },
    extend: {
      screens: {
        '2xl': '1470px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  extends: {
    fontFamily: {
      sans: [
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Verdana',
        'Roboto', // time new roman
        ...defaultTheme.fontFamily.sans,
      ],
      serif: ['AdobeGaramondBold', ...defaultTheme.fontFamily.serif],
    },
    zIndex: {
      1: '1',
      2: '2',
    },
    spacing: {
      '10%': '10%',
      '42%': '42%',
    },
    left: {
      '10%': '10%',
    },
  },
  plugins: [require('postcss-nesting'), require('@tailwindcss/forms')],
};
