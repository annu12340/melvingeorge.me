module.exports = {
  purge: ["./components/**/*.jsx", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    margin: ["responsive", "first", "last", "hover", "focus"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
