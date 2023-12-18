/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius : {
      'md' : '5px',
      'full' : '9999px',
    },
    colors: {
      'green' : '#54BAB9',
      'cream' : '#E9DAC1',
      'whitecream' : '#F7ECDE',
      'white' : '#FBF8F1',
      'grey' : 'rgba(0, 0, 0, 0.7)'


    },
    dropshadow: {
      'md' : '0px 4px 4px rgba(0, 0, 0, 0.25)'
      
    },

    boxshadow: {
      'md' : 'box-shadow: 2px 6px 6px 0px rgba(0,0,0,0.24)'
    },

    fontFamily: {
      'inter' : ['inter', 'sans-serif'] 
    },
    fontSize: {
      '2xl': '1.5rem',
      '4xl': '2.5rem',
    },
    extend: {
      flex: {
        '2': '2 2 0%',
      }
    },
  },
  plugins: [],
}