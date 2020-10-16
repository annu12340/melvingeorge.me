const withPlugins = require("next-compose-plugins");
const nextPwa = require("next-pwa");
const webpLoader = require("./webp-loader-nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer({})],

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
    // [nextImages],
    [webpLoader],
  ],
  nextConfig
);
