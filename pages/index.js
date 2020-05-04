// CSS
import styles from "../styles/index/Index.module.css";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

// MODULES
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// COMPONENTS
const Navigation = dynamic(async () => {
  const module = await import("../components/Navigation/Navigation");
  return module.Navigation;
});
const SinglePostLink = dynamic(async () => {
  const module = await import("../components/SinglePostLink");
  return module.SinglePostLink;
});

export default function Home({ linksData }) {
  return (
    <>
      <NextSeo title={"HOME"} />
      <header className={`${styles.bgHero} z-0 pb-12`}>
        {/* <!-- Header Container --> */}
        <div className="container max-w-screen-md mx-auto px-4">
          {/* <!-- Navigation Section --> */}
          <Navigation />
          {/* <!-- Hero section --> */}
          <section className="flex flex-col items-center justify-center lg:flex-row pt-6">
            {/* <!-- Hero Section: About Text --> */}
            <div className="flex flex-col order-last lg:order-first">
              <p className="pb-2 text-blue-600 font-normal text-2xl lg:text-3xl leading-normal">
                Hi, I'm Melvin George. I help the world by building quality
                software.
              </p>
              <p className="pt-2 text-left text-blue-300">
                <a href="https://www.github.com/melvin2016" target="blank">
                  <FontAwesomeIcon
                    className="transition transition-colors duration-300 hover:text-gray-900"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://mozillians.org/en-US/u/melvin2016/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="transition transition-colors duration-300 hover:text-orange-500"
                    icon={faFirefoxBrowser}
                    size="2x"
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/alkitj10" target="blank">
                  <FontAwesomeIcon
                    className="transition transition-colors duration-300 hover:text-blue-700"
                    icon={faFacebook}
                    size="2x"
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.twitter.com/melvin2016_" target="blank">
                  <FontAwesomeIcon
                    className="transition transition-colors duration-300 hover:text-blue-400"
                    icon={faTwitter}
                    size="2x"
                  />
                </a>
              </p>
            </div>
            {/* Hero Section: Image */}
            <div className="order-first lg:order-last">
              <div className={`${styles.heroImg} block lg:hidden`} />
              <img
                className="hidden lg:block order-first md:order-last w-full z-0"
                src={require("../public/me.png?webp")}
                alt="Picture of Melvin george"
              />
            </div>
          </section>
        </div>
      </header>
      {/* Main Section */}
      <main className="relative container max-w-screen-md mx-auto px-4 md:px-20 md:-mt-8 lg:-mt-12 py-10 mb-12 md:shadow-lg md:rounded-lg bg-white">
        <h1 className="text-2xl mb-10 font-semibold text-gray-800">Blog</h1>
        {linksData && linksData.length <= 0
          ? null
          : linksData.map((linkData) => (
              <SinglePostLink
                title={linkData.title}
                key={linkData.href}
                href={linkData.href}
                description={linkData.description}
              />
            ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArray = filesString.split(",");

  const linksData = linksArray.map((link) => {
    const post = fs
      .readFileSync(path.join("content", "posts/", link))
      .toString();
    const { data } = matter(post);

    const title = data.title;
    const href = link.replace(".md", "");
    const description = data.description;
    const date = data.date;

    return {
      title,
      href,
      description,
      date,
    };
  });

  // Sort using date added
  linksData.sort((firstFile, secondFile) => {
    return new Date(secondFile.date) - new Date(firstFile.date);
  });

  // Delete unnecessary date property
  linksData.map((link) => {
    delete link.date;
    return link;
  });

  return {
    props: {
      linksData,
    },
  };
}
