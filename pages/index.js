import Head from "next/head";
import fetch from "node-fetch";
import styles from "../styles/index/Index.module.css";

// COMPONENTS
import { Navigation } from "../components/Navigation/Navigation";
import { SinglePostLink } from "../components/SinglePostLink/SinglePostLink";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header className={`${styles.bgHero} z-0 pb-12`}>
        {/* <!-- Header Container --> */}
        <div className="container mx-auto md:w-7/12 px-4 lg:px-10">
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
                    className="fa-2x transition transition-colors duration-300 hover:text-gray-900"
                    icon={faGithub}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://mozillians.org/en-US/u/melvin2016/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="fa-2x transition transition-colors duration-300 hover:text-orange-500"
                    icon={faFirefoxBrowser}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/alkitj10" target="blank">
                  <FontAwesomeIcon
                    className="fa-2x transition transition-colors duration-300 hover:text-blue-700"
                    icon={faFacebook}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.twitter.com/melvin2016_" target="blank">
                  <FontAwesomeIcon
                    className="fa-2x transition transition-colors duration-300 hover:text-blue-400"
                    icon={faTwitter}
                  />
                </a>
              </p>
            </div>
            {/* <!-- Hero Section: Image --> */}
            <div className="order-first lg:order-last">
              <div className={`${styles.heroImg} block lg:hidden`} />
              <img
                className="hidden lg:block order-first md:order-last w-full z-0"
                src="/me.png"
                alt="Picture of Melvin george"
              />
            </div>
          </section>
        </div>
      </header>
      {/* Main Section */}
      <main className="relative container mx-auto md:px-20 md:w-7/12 md:-mt-8 lg:-mt-12 py-10 mb-12 px-4 md:shadow-lg md:rounded-lg bg-white">
        <h1 className="text-3xl mb-6 font-medium">Blog</h1>
        {posts && posts.length <= 0
          ? null
          : posts.map((post) => (
              <SinglePostLink
                title={post.title}
                body={`${post.body.substring(0, 100)}...`}
                id={post.id}
                key={post.id}
              />
            ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
