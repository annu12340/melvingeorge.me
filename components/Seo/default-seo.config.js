let metaImageUrl;
let metaURl;
if (process.browser) {
  metaURl = `${window.location.origin}`;
  metaImageUrl = `${
    window.location.origin
  }${require(`../../public/me.png?resize&size=1200`)}`;
}

export default {
  title: "MELVIN GEORGE",
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
      content: "https://melvingeorge.me/me.png",
    },
  ],
  openGraph: {
    title: "MELVIN GEORGE",
    description:
      "Hi, I'm Melvin George. I help the world by building quality software. Come check out my blog to see more of software development posts",
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
};
