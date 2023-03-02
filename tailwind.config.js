/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3.5',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
