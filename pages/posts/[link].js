/* PATH => /posts/<ID_NUMBER> */

// MODULES
import { useContext } from "react";

// COMPONENTS
import BlogRenderer from "../../components/PostsPage/BlogRenderer";
import GoBackButton from "../../components/Utils/GoBackButton";

// CONTEXT
import { setActiveTabContext } from "../../context/NavigationContext";

export default ({ frontMatter: metadata, content }) => {
  const setActiveTab = useContext(setActiveTabContext);
  setActiveTab("blog");
  return (
    <>
      <BlogRenderer metadata={metadata} content={content} />
      <GoBackButton />
    </>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");
  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArray = filesString.split(",");
  const params = linksArray.map((link) => ({
    params: {
      link: link.replace(".md", ""),
    },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  // Get File and get YAML data from markdown
  const post = fs
    .readFileSync(path.join("content", "posts/", `${params.link}.md`))
    .toString();
  const { data, content } = matter(post);

  // Serialize date
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", dateOptions);

  // Make metadata
  const frontMatter = {
    ...data,
    date: formattedDate,
    link: params.link,
  };

  return {
    props: {
      content: `# ${data.title}
      \n<p className="date">${formattedDate}<p>
      \n${content}`,
      frontMatter,
    },
  };
}
