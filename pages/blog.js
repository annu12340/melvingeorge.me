import { useContext, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Card from "../components/BlogPage/Card";
import { SetActiveTabContext } from "../context/ActiveTab";
import Navigation from "../components/Navigation/Navigation";

const Blog = ({ linksData }) => {
  // all blog details data
  const [allBlogs, setAllBlogs] = useState([]);
  // Set active tab to blog page
  const dispatchActiveTab = useContext(SetActiveTabContext);
  dispatchActiveTab({ type: "blog" });

  // loading more content using intersection observer
  // after page end is reached
  useEffect(() => {
    const moreContent = document.querySelectorAll(".moreContent");
    const paginationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting != false) {
            const res = await fetch("/blog-details.json");
            const json = await res.json();
            const requiredBlogs = [];
            for (let i = 15; i < json.length; i++) {
              requiredBlogs.push(json[i]);
            }
            setAllBlogs(requiredBlogs);
            paginationObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "30px" }
    );

    // start observing the moreContent div tag
    moreContent.forEach((content) => {
      paginationObserver.observe(content);
    });
  }, []);

  return (
    <>
      {/* SEO */}
      <NextSeo title="Blog" canonical="https://melvingeorge.me/blog" />
      <Navigation />
      {/* Main content */}
      <main className="mt-16 mx-auto flex flex-wrap justify-center max-w-6xl">
        {linksData.length > 0 ? (
          linksData.map((linkData, index) => (
            <Card
              key={linkData.href}
              {...linkData}
              shouldPrefetch={index < 4 ? true : false}
            />
          ))
        ) : (
          <p>It's empty here 👽</p>
        )}
        <div className="moreContent"></div>
        {allBlogs.length >= 0
          ? allBlogs.map((linkData) => {
              return <Card key={linkData.href} {...linkData} />;
            })
          : "Loading more blog...🚀"}
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

    const { title } = data;
    const href = link.replace(".mdx", "");
    const { description } = data;
    const { date } = data;

    return {
      title,
      href,
      description,
      date,
    };
  });

  // Sort using date added
  linksData.sort(
    (firstFile, secondFile) =>
      new Date(secondFile.date) - new Date(firstFile.date)
  );

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

export default Blog;
