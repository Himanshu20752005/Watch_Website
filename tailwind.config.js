/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '150': '445px', 
        '100': '350px',
        '200' : '600px'
      },
       
      margin:{
        '100':'510px',
      },
      width:{
         '100': '300px',
         '150' : '500px',
         '200' : '1000px',
      },
      colors: {
        'custom': '#F1DDC9',
      },
      fontFamily: {
        font2: ['Nunito', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
