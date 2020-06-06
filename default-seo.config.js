export default {
  titleTemplate: "%s | MELVIN GEORGE",
  description:
    "Hi, I'm Melvin George, A web developer, and blogger. I’ve written code for Mozilla, Qiskit, and an active contributor to many frontend open-source projects that are being used by millions of people around the world. I love Javascript, React.js, and many new exciting technologies that help society to find a solution to an existing problem. Come check out my blog to see more of software development posts on these technologies.",
  canonical: "https://melvingeorge.me",
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "blog,melvin george,article,developer,javascript,reactjs,melvingeorge.me,developer_369,mozillian,qiskitter,melvin_2016,javascript developer, reactjs developer, nextjs developer, software engineer, blogger",
    },
    {
      name: "image",
      property: "og:image",
      content: `https://melvingeorge.me${require("./public/metame.png?resize&size=600")}`,
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
        url: `https://melvingeorge.me${require("./public/metame.png?resize&size=600")}`,
      },
    ],
    type: "website",
    locale: "en_IE",
    url: "https://melvingeorge.me/",
    site_name: "MELVIN GEORGE Blog",
  },
  twitter: {
    handle: "@developer_369",
    site: "@developer_369",
    cardType: "summary_large_image",
  },
  facebook: {
    appId: 184687632619980,
  },
};
