const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
const linksArray = filesString.split(",");

const linksData = linksArray.map((link) => {
  const post = fs.readFileSync(path.join("content", "posts/", link)).toString();
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

// write to public directory as json file
const allBlogsData = JSON.stringify(linksData);
fs.writeFileSync(path.join("public", "blog-details.json"), allBlogsData);
