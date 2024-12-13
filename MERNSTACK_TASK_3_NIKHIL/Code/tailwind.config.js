/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
      },
    },
  },
  plugins: [],
};
