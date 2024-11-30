const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
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
        inter: ['Biryani', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}