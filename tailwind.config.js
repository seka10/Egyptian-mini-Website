/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      BrandDark: "#0b0b0d",
      BrandBlue: "#125795",
    },
    fontfamily:{
      merriweather:["Merriweather","serif"],
      montserrat:["Montserrat","sans-serif"],
    },
    container:{
      center:true,
      padding:{
        default:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'6rem',
      },
    },
    },
  },
  plugins: [],
}

