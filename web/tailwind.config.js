module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background: {
          dark: '#20385D', 
          light: '#291F3D'
        }, 
        darkPurple: '#1F2340', 
        purpleStroke: '#0F1223',
        grayText: '818181'
      },
      textColor: {
        link: {
          active: '##ED6559'
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
