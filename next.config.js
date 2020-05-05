const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        imageTrace: {
          color: "#CBD5E0",
        },
      },
    ],
  ],
  {
    devIndicators: {
      autoPrerender: false,
    },
  }
);
