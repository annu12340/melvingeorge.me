// MODULES
import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// COMPONENTS
import Header from "../components/IndexPage/Header";
import Main from "../components/IndexPage/Main";

export default function Home({ linksData }) {
  return (
    <>
      {/* SEO */}
      <NextSeo title={"HOME"} />

      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Main linksData={linksData} />
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
