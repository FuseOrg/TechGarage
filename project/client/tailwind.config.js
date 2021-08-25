module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#efefef',
        'secondary': '#E5E7E9',
        'primary-light':'#F3F3F3'
       }),  
       textColor: theme => theme('colors'),
       textColor: {
         'primary': '#858B8D',
         'secondary': '#2B2F33',
         'buttonColor':'#5F6FBD'
       },
       
       fontFamily: {
        'sans': ['"Roboto"', '"sans-serif"']
        
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
