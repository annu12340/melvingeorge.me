import { useContext } from "react";
import { SetActiveTabContext } from "../context/ActiveTab";
import { NextSeo } from "next-seo";

const About = () => {
  // Set active tab to about page
  const dispatchActiveTab = useContext(SetActiveTabContext);
  dispatchActiveTab({ type: "about" });

  return (
    <>
      {/* SEO */}
      <NextSeo title={"Blog"} canonical="https://melvingeorge.me/about" />

      {/* Main content */}
      <main className="container max-w-screen-md mx-auto px-4 mt-20 about">
        <h1 className="text-gray-700 text-4xl mb-6">Hi! I'm Melvin 👋</h1>
        <p className="text-lg mb-4  tracking-wide leading-relaxed">
          I’m a software engineer and a blogger ( at least I think I’m ). I was
          born in 1998 and grew up in Muvattupuzha, Kerala. After graduating
          High School from Fr. Joseph Memorial HSS I went to{" "}
          <a href="https://www.jainuniversity.ac.in/" target="blank">
            Jain University, Bangalore
          </a>{" "}
          where I’m currently pursuing my Bachelor’s in Computer Applications
          specializing in Cloud technology and Information security.
        </p>
        <p className="text-lg mb-4 tracking-wide leading-relaxed">
          I’ve written code for{" "}
          <a href="https://www.mozilla.org/en-US/" target="blank">
            Mozilla,
          </a>{" "}
          <a href="https://qiskit.org/" target="blank">
            Qiskit,
          </a>{" "}
          and an active contributor to many{" "}
          <a href="https://github.com/melvin2016" target="blank">
            frontend open-source projects
          </a>{" "}
          that are being used by millions of people around the world.
        </p>
      </main>
    </>
  );
};

export default About;
