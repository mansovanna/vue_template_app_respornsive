/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
        secondary: "#FFC0CB",
        tertiary: "#ADD8E6",
        quaternary: "#FFD700",
        quinary: "#00FFFF",
        senary: "#FF00FF",
        septenary: "#808080",
        octonary: "#000000",
        nonary: "#FFFFFF",
        denary: "#FF69B4",
        undenary: "#FFA07A",
        duodenary: "#FFD700",
        tredecim: "#FFD700",
        quattuordecim: "#FFD700",
        quindecim: "#FFD700",
        sexdecim: "#FFD700",
        septendecim: "#FFD700",
        octodecim: "#FFD700",
        novendecim: "#FFD700",
        vigintim: "#FFD700",
      },
      screens: {
        xs: "385px",
      },
      keyframes: {
        bounceX: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        bounceX1: {
          "0%, 100%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },

      animation: {
        "bounce-x": "bounceX 1s infinite",
        "bounce-x1": "bounceX1 1s infinite",
      },
    },
  },
  plugins: [],
};
