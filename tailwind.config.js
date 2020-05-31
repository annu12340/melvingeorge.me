module.exports = {
  purge: ["./components/**/*.{js,jsx,tsx}", "./pages/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    margin: ["responsive", "first", "last", "hover", "focus"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
