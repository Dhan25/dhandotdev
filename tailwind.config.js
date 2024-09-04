/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#24262f',
        secondary: '#6e06f2',
        tertiary: '#4E525A',
        background_color: '#FCFCFD',
      },
      screens: {
        '2xl': '1281px',
      },
    },
  },
  plugins: [],
}

