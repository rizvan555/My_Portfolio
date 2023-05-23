/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "4",
        16: "4rem",
      },
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
          xxl: "1170px",
        },
      },
    },
  },
  plugins: [],
};
