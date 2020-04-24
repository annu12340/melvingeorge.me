module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: [
              "./components/**/*.{js,jsx,tsx}",
              "./pages/**/*.{js,jsx,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
