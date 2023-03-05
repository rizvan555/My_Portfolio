/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '4',
        16: '4rem',
      },
    },
  },
  plugins: [],
};
