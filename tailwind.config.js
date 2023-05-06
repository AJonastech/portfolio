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
      fontFamily: {
        Poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

