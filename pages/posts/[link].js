/* PATH => /posts/<ID_NUMBER> */

// MODULES
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// COMPONENTS
import BlogRenderer from "../../components/PostsPage/BlogRenderer";
const GoBackButton = dynamic(import("../../components/Utils/GoBackButton"));

export default ({ frontMatter: metadata, content }) => (
  <>
    <BlogRenderer metadata={metadata} content={content} />
    <GoBackButton />
  </>
);

export async function getStaticPaths() {
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
