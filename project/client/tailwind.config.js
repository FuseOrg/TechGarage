module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#5F6FBD',
        'secondary':'#2B2F33',
        'secondary-light': '#858B8D',
        'third-color':'#F3F1F5',
        'bg-1':'#fbf9fb',

        
       
      
       
       }),  
       textColor: theme => theme('colors'),
       textColor: {
        'primary':'#8d6efa',
        'secondary': '#2B2F33',
        'secondary-light': '#858B8D',
        'third-color':'#F3F1F5',
         
       },
       
       fontFamily: {
        'sans': ['"Inter"', '"sans-serif"']
        
       },
       
       boxShadow : {
        'one': '0 1rem 1.5rem rgba(0,0,0,0.05)'
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
