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
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      amber: colors.amber,
    },
    // fontSize: {
    //   xs: ['.57rem', '.85rem'], 
    //   sm: ['.71rem', '1rem'], 
    //   base: ['0.75rem', '1rem'], 
    //   lg: ['0.875rem', '1.25rem'], 
    //   xl: ['1rem', '1.5rem'], 
    //   '2xl': ['1.125rem', '1.75rem'], 
    //   '3xl': ['1.25rem', '1.75rem'], 
    //   '4xl': ['1.5rem', '2rem'], 
    //   '5xl': ['1.875rem', '2.25rem'],
    // },
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
  plugins: [
    require('postcss-nesting'), 
    require('@tailwindcss/forms')
  ],
};
