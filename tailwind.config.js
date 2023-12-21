/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        rubik : "'Rubik', sans-serif"
      },
      backgroundImage : {
        background :  "url('https://i.ibb.co/ZXTBWjJ/SL-113022-54210-35.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}