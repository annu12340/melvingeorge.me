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
            "blog-details.json",
            "build-manifest.json",
            /\.map$/,
            /\.(?:png|jpg|jpeg|svg|webp)$/,
          ],
          // Ignore all URL parameters.
          ignoreURLParametersMatching: [/.*/],
          dontCacheBustURLsMatching: /.*/,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|webp)/,
              handler: "CacheFirst",
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                networkTimeoutSeconds: 4,
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
          color: "#E2E8F0",
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
