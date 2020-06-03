/* PATH => /posts/<ID_NUMBER> */

// MODULES
import { useContext } from "react";

// COMPONENTS
import BlogRenderer from "../../components/PostsPage/BlogRenderer";
import GoBackButton from "../../components/Utils/GoBackButton";

// CONTEXT
import { SetActiveTabContext } from "../../context/ActiveTab";

const Post = ({ frontMatter: metadata, content }) => {
  const dispatchActiveTab = useContext(SetActiveTabContext);
  // This thing cause a fuc**** error that i dont know how how to fix :(
  // Even if this is an error it works as of now
  dispatchActiveTab({ type: "blog" });
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
  const matter = require("gray-matter");
  const nodeHtmlToImage = require("node-html-to-image");

  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArray = filesString.split(",");
  console.log(linksArray);

  linksArray.forEach((link) => {
    // Get File and get YAML data from markdown
    const post = fs
      .readFileSync(path.join("content", "posts/", `${link}`))
      .toString();
    const { data } = matter(post);

    // my image
    const image = fs.readFileSync(path.join("public/me.png"));
    const base64Image = new Buffer.from(image).toString("base64");
    const dataURI = "data:image/jpeg;base64," + base64Image;

    // save meta image
    nodeHtmlToImage({
      output: path.join(
        "content",
        "assets",
        link.replace(".mdx", ""),
        "meta.jpg"
      ),
      html: fs.readFileSync(path.join("meta", "metaImage.html"), "utf8"),
      content: {
        title: data.title,
        imageSource: dataURI,
      },
    }).then(() => console.log("The image was created successfully!"));
  });

  const params = linksArray.map((link) => ({
    params: {
      link: link.replace(".mdx", ""),
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
    .readFileSync(path.join("content", "posts/", `${params.link}.mdx`))
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

export default Post;
