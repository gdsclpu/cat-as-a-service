/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E52",
        secondary: "#150578",
        tertiary: "#449DD1",
        white: "#FFFFFF",
        black: "#000000",
        danger: "#A41623",
      },
    },
  },
  plugins: [],
};
