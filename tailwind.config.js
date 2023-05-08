/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple : "#543cd9",
        darkBlue : "#0a0430",
        gray : "#7f7f7f",
      },
      boxShadow:{
        navCustom : "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgb(84, 60, 217,0.7)",
       },
      fontFamily: {
        Poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

