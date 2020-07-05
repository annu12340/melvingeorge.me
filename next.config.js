const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextOffline = require("next-offline");

module.exports = withPlugins(
  [
    [
      nextOffline,
      {
        workboxOpts: {
          swDest: "service-worker.js",
          exclude: [
            "react-loadable-manifest.json",
            "build-manifest.json",
            /\.map$/,
            /\.(?:png|jpg|jpeg|svg|webp)$/,
          ],
          inlineWorkboxRuntime: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|webp)/,
              handler: "CacheFirst",
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
      },
    ],
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        imageTrace: {
          color: "#4299e1",
          alphaMax: 2,
          threshold: 34,
          turnPolicy: "TURNPOLICY_WHITE",
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
