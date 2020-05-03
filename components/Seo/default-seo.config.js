export default {
  title: "Blog Of MELVIN GEORGE",
  description:
    "Hi, I'm Melvin George. I help the world by building quality software. Come check out my blog to see more of software development posts",
  additionalMetaTags: [
    {
      name: "keywords",
      content: "blog,melvin george,article,developer,javascript,reactjs",
    },
    {
      name: "image",
      property: "og:image",
      content: `https://melvingeorge.me${require("../../public/metame.png?resize&size=600")}`,
    },
    {
      name: "author",
      content: "MELVIN GEORGE",
    },
  ],
  openGraph: {
    title: "MELVIN GEORGE",
    description:
      "Hi, I'm Melvin George. Come check out my blog to see more of my software developments",
    images: [
      {
        url: `https://melvingeorge.me${require("../../public/metame.png?resize&size=600")}`,
      },
    ],
    type: "website",
    locale: "en_IE",
    url: "https://melvingeorge.me/",
    site_name: "MELVIN GEORGE Blog",
  },
  twitter: {
    handle: "@melvin2016_",
    site: "@melvin2016_",
    cardType: "summary_large_image",
  },
  facebook={
    appId: 184687632619980,
  }
};
