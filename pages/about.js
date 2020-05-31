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
      <NextSeo title={"Blog"} />

      {/* Main content */}
      <main className="container max-w-screen-md mx-auto px-4 mt-20">
        <h1 className="text-gray-700 text-4xl mb-6">Hi! I'm Melvin 👋</h1>
        <p className="text-lg mb-4  tracking-wide leading-relaxed">
          I’m a software engineer and a blogger ( at least I think I’m ). I was
          born in 1998 and grew up in Muvattupuzha, Kerala. After graduating
          from High School from Fr. Joseph Memorial HSS I went to Jain
          University, Bangalore where I’m currently pursuing my Bachelor’s in
          Computer Applications specializing in Cloud technology and Information
          security.
        </p>
        <p className="text-lg mb-4 tracking-wide leading-relaxed">
          I’ve written code for Mozilla, Qiskit, and an active contributor to
          many frontend open-source projects that are being used by millions of
          people around the world.
        </p>
      </main>
    </>
  );
};

export default About;
