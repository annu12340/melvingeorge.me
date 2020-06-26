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
    [
      nextOffline,
      {
        workboxOpts: {
          // Do not precache images
          exclude: [/\.(?:png|jpg|jpeg|svg|webp)$/],
          // Ignore all URL parameters.
          ignoreURLParametersMatching: [/.*/],
          dontCacheBustURLsMatching: /.*/,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg)/,
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
  ],
  {
    devIndicators: {
      autoPrerender: false,
    },
  }
);
