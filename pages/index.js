// MODULES
import { useContext } from "react";

// COMPONENTS
import Header from "../components/IndexPage/Header";
import Main from "../components/IndexPage/Main";
import Footer from "../components/Footer/Footer";
import { NextSeo } from "next-seo";
// CONTEXT
import { SetActiveTabContext } from "../context/ActiveTab";

const Home = ({ linksData }) => {
  const dispatchActiveTab = useContext(SetActiveTabContext);
  // This thing cause a fuc**** error that i dont know how how to fix :(
  // Even if this is an error it works as of now
  dispatchActiveTab({ type: "" });
  return (
    <>
      {/* SEO */}
      <NextSeo title={"HOME"} />

      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Main linksData={linksData} />

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
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
    const tagName = data.category;

    return {
      title,
      href,
      description,
      date,
      tagName,
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

  const filteredLinksData = linksData.filter((_, index) => {
    return index <= 15;
  });

  return {
    props: {
      linksData: filteredLinksData,
    },
  };
}

export default Home;
