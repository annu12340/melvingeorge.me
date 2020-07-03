import { useContext } from "react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("../components/BlogPage/Card"));
import { SetActiveTabContext } from "../context/ActiveTab";
import { NextSeo } from "next-seo";

const Blog = ({ linksData }) => {
  // Set active tab to blog page
  const dispatchActiveTab = useContext(SetActiveTabContext);
  dispatchActiveTab({ type: "blog" });
  return (
    <>
      {/* SEO */}
      <NextSeo title={"Blog"} canonical="https://melvingeorge.me/blog" />

      {/* Main content */}
      <main
        className="mt-16 mx-auto flex flex-wrap justify-center max-w-6xl"
      >
        {linksData.length > 0
          ? (
            linksData.map((linkData) => (
              <Card key={linkData.href} {...linkData} />
            ))
          )
          : (
            <p>It's empty here</p>
          )}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArray = filesString.split(",");

  const linksData = linksArray.map((link) => {
    const post = fs
      .readFileSync(path.join("content", "posts/", link))
      .toString();
    const { data } = matter(post);

    const title = data.title;
    const href = link.replace(".mdx", "");
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

export default Blog;
