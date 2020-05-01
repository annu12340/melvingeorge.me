const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const imageTracer = require("image-trace-loader");
module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
    },
  ],
  {
    devIndicators: {
      autoPrerender: false,
    },
  },
]);
