/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      height: {
        half: "50vh",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
