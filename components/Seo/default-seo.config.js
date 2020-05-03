let metaImageUrl;
let metaURl;
if (process.browser) {
  metaURl = `${window.location.origin}`;
  metaImageUrl = `${window.location.origin}${require(`../../public/me.png`)}`;
}

export default {
  title: "MELVIN GEORGE",
  description:
    "Hi, I'm Melvin George. I help the world by building quality software.",
  openGraph: {
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
