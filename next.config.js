const withPlugins = require("next-compose-plugins");
const nextImg = require("next-img/plugin");
const nextPwa = require("next-pwa");

module.exports = withPlugins(
  [
    [
      nextPwa,
      {
        pwa: {
          disable: process.env.NODE_ENV !== "production",
          dest: "public",
          buildExcludes: [
            /images\/.*$/,
            "react-loadable-manifest.json",
            "build-manifest.json",
            /\.map$/,
            /\.(?:png|jpg|jpeg|svg|webp)$/,
          ],
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
      nextImg,
      {
        jpeg: {
          quality: 100,
          webp: {
            quality: 50,
            reductionEffort: 6,
            alphaQuality: 10,
          },
        },

        png: {
          quality: 100,
          webp: {
            quality: 50,
            alphaQuality: 10,
            reductionEffort: 6,
            lossless: false,
          },
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
