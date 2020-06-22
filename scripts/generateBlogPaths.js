const fs = require("fs");
const path = require("path");

const generateBlogPaths = () => {
  // Get all blogs from /content/posts directory
  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArrayWithExtension = filesString.split(",");

  // remove extension
  const linksArray = linksArrayWithExtension.map((link) =>
    link.replace(".mdx", "")
  );

  return linksArray;
};

module.exports = generateBlogPaths;
