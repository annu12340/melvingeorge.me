// MODULES
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown/with-html";
import { NextSeo, BlogJsonLd } from "next-seo";

// COMPONENTS
import BlogNavigation from "./Navigation/BlogNavigation";
import ImageLoaderUtil from "./Utils/ImageLoaderUtil";
const CodeBlockLoaderUtil = dynamic(import("./Utils/CodeBlockLoaderUtil"));

const BlogRenderer = ({ metadeta, content }) => {
  return (
    <>
      <NextSeo
        title={metadeta.title}
        description={metadeta.description}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metadeta.keywords,
          },
          {
            name: "image",
            property: "og:image",
            content: `https://melvingeorge.me${require(`../content/assets/${metadeta.link}/main.jpg?resize&size=1200`)}`,
          },
        ]}
        openGraph={{
          url: `https://melvingeorge.me/posts/${metadeta.link}`,
          title: metadeta.title,
          description: metadeta.description,
          type: "article",
          site_name: "MELVIN GEORGE Blog",
          images: [
            {
              url: `https://melvingeorge.me${require(`../content/assets/${metadeta.link}/main.jpg?resize&size=1200`)}`,
            },
          ],
        }}
        twitter={{
          handle: "@melvin2016_",
          site: "@melvin2016_",
          cardType: "summary_large_image",
        }}
      />
      <BlogJsonLd
        url={`https://melvingeorge.me/posts/${metadeta.link}`}
        title={metadeta.title}
        images={[
          `https://melvingeorge.me${require(`../content/assets/${metadeta.link}/main.jpg?resize&size=1200`)}`,
        ]}
        datePublished={new Date(metadeta.date).toISOString()}
        dateModified={new Date(metadeta.date).toISOString()}
        authorName="MELVIN GEORGE"
        description={metadeta.description}
      />
      <BlogNavigation />
      <div className="relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded">
        <article>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{
              image: (props) => {
                return <ImageLoaderUtil {...props} link={metadeta.link} />;
              },
              code: CodeBlockLoaderUtil,
            }}
            className="blog"
          />
        </article>
      </div>
    </>
  );
};

export default BlogRenderer;
