const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

generateBlogPaths = () => {
  const fileObj = {};

  // Get all blogs from /content/posts directory
  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArrayWithExtension = filesString.split(",");

  // remove extension
  const linksArray = linksArrayWithExtension.map((link) =>
    link.replace(".mdx", "")
  );

  linksArray.forEach((link) => {
    // get date for each link
    const post = fs
      .readFileSync(path.join("content", "posts/", `${link}.mdx`))
      .toString();
    const {
      data: { date },
    } = matter(post);

    fileObj[`/blog/${link}`] = {
      page: `/blog/${link}`,
      lastModified: new Date(date).toISOString(),
    };
  });

  return fileObj;
};

module.exports = generateBlogPaths;
