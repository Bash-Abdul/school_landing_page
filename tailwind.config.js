/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'figmaGreen':'#2F8246',
        'figmaBlue': '#2F5582',
        'figmaGrey': '#E3E3E3',
        'figmaBlack': '#2E2E2E',
        'figmaGrey2': '#616161',
        'colorBg':'#D9D9D9'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

