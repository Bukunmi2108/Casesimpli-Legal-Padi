/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#007BFF',
          text: '#333333',
          shade: '#f2f2f2',
          white: '#ffffff',
          orange: '#FF640E',
          orange: '#FF640E',
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

