const fs = require("fs");
const generateBlogData = require("./generateBlogData");
const allBlogs = generateBlogData();

const rss = `<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<title>melvingeorge.me</title>
<link>https://melvingeorge.me/</link>
<description>Coding tutorials from melvingeorge.me</description>
<language>en</language>
<copyright>© 2020 MELVIN GEORGE</copyright>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<image>
<url>https://melvingeorge.me/metame.png</url>
<title>melvingeorge.me</title>
<link>https://melvingeorge.me/</link>
</image>
<atom:link href="https://melvingeorge.me/feed.xml" rel="self" type="application/rss+xml"/>
${
  allBlogs.map((blog) =>
    `<item>
    <title>${blog.title}</title>
    <link>${blog.link}</link>
    <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
    <guid>${blog.link}</guid>
    <description>${blog.description}</description>
</item>`
  )
}
</channel>
</rss>
`;

fs.writeFileSync("out/feed.xml", rss);
