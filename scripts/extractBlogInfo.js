const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const extractBlogInfo = (fileName) => {
  // get metadata of post
  const post = fs
    .readFileSync(path.join("content", "posts/", `${fileName}.mdx`))
    .toString();
  return matter(post).data;
};

module.exports = extractBlogInfo;
