/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: '#0B131E',
        customCharcolBlack: '#202B3B',
        customGray: '#A1A7B3',
        customBlue: '#3196FF',
        customBlueHover: '#50B9FE'
      }
    },
  },
  plugins: [],
};
