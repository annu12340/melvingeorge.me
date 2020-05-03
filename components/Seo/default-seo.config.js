let metaImageUrl;
let metaURl;
if (process.browser) {
  metaURl = `${window.location.origin}`;
  metaImageUrl = `${
    window.location.origin
  }${require(`../../public/me.png?resize&size=630`)}`;
}

export default {
  title: "MELVIN GEORGE",
  description:
    "Hi, I'm Melvin George. I help the world by building quality software. Come check out my blog to see more of software development posts",
  openGraph: {
    title: "MELVIN GEORGE",
    description:
      "Hi, I'm Melvin George. I help the world by building quality software. Come check out my blog to see more of software development posts",
    images: [
      {
        url: metaImageUrl,
        alt: "Picture of MELVIN GEORGE",
      },
    ],
    type: "website",
    locale: "en_IE",
    url: metaURl,
    site_name: "MELVIN GEORGE Blog",
  },
  twitter: {
    handle: "@melvin2016_",
    site: "@melvin2016_",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "image",
      content: metaImageUrl,
    },
    {
      name: "keywords",
      content: "blog,melvin george,article,developer,javascript,reactjs",
    },
  ],
};
