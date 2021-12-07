const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      brand: {
        richBlack: "#141E26",
        gunmetal: "#233240",
        charcoal: "#364959",
        quickSilver: "#A6A6A6",
        cultured: "#F2F2F2",
        culturedDark: "#E0E0E0",
        purple: "#5524BF",
        lavenderFloral: "#B091F2",
        blue: "#2405F2",
        jonquil: "#F2CB05",
        fireOpal: "#F26052",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
      aspectRatio: ["responsive", "hover"],
    },
  },
  plugins: [],
};
