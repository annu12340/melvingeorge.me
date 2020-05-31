const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextOffline = require("next-offline");
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        imageTrace: {
          color: "#4299e1",
          alphaMax: 2,
        },
      },
    ],
    [nextOffline],
  ],
  {
    devIndicators: {
      autoPrerender: false,
    },
  }
);
