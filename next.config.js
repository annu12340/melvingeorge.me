const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const nextPwa = require("next-pwa");

module.exports = withPlugins(
  [
    [
      nextPwa,
      {
        pwa: {
          disable: process.env.NODE_ENV !== "production",
          dest: "public",
          buildExcludes: [/images\/.*$/],
          publicExcludes: [
            "!blog-details.json",
            "!robots.txt",
            "!sitemap_main.xml",
            "!metame.png",
          ],
        },
      },
    ],
    [
      optimizedImages,
      {
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
