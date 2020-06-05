const fs = require("fs");
const generateBlogPaths = require("./generateBlogPaths");

const pathsObj = generateBlogPaths();

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
    (path) => `<url>
    <loc>https://melvingeorge.me${path}</loc>
    <lastmod>${pathsObj[path].lastModified}</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("out/sitemap_blogs.xml", sitemapXml);
