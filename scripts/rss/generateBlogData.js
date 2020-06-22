const extractBlogInfo = require("../extractBlogInfo");
const generateBlogPaths = require("../generateBlogPaths");

const generateBlogData = () => {
  const allBlogs = generateBlogPaths();

  const allBlogsWithInfo = [];

  for (let blog of allBlogs) {
    const rssInfo = {};
    const { title, description, date } = extractBlogInfo(blog);
    rssInfo.title = title;
    rssInfo.description = description;
    rssInfo.date = date;
    rssInfo.link = `https://melvingeorge.me/blog/${blog}/`;
    allBlogsWithInfo.push(rssInfo);
  }

  // Sort using date added
  allBlogsWithInfo.sort((firstFile, secondFile) => {
    return new Date(secondFile.date) - new Date(firstFile.date);
  });

  return allBlogsWithInfo;
};

module.exports = generateBlogData;
