const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextOffline = require("next-offline");

module.exports = withPlugins(
  [
    [
      nextOffline,
      {
        workboxOpts: {
          exclude: [
            "react-loadable-manifest.json",
            "build-manifest.json",
            /\.map$/,
            /\.(?:png|jpg|jpeg|svg|webp)$/,
          ],
          modifyURLPrefix: {
            "static/": "_next/static/",
            "public/": "_next/public/",
          },
          inlineWorkboxRuntime: true,
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
