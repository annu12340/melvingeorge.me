// MODULES
import ReactMarkdown from "react-markdown/with-html";
import { NextSeo, BlogJsonLd } from "next-seo";
// COMPONENTS
import BlogNavigation from "./Navigation/BlogNavigation";
import ImageLoaderUtil from "./Utils/ImageLoaderUtil";
import CodeBlockUtil from "./Utils/CodeBlockUtil";

const BlogRenderer = ({ metadeta, content }) => {
  let metaImageUrl;
  let metaURl;
  if (process.browser) {
    metaURl = `${window.location.origin}`;
    metaImageUrl = `${
      window.location.origin
    }${require(`../content/assets/${metadeta.link}/main.jpg?resize&size=1200`)}`;
  }

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
            content: metaImageUrl,
          },
        ]}
        openGraph={{
          url: `${metaURl}/posts/${metadeta.link}`,
          title: metadeta.title,
          description: metadeta.description,
          type: "article",
          site_name: "MELVIN GEORGE Blog",
        }}
        twitter={{
          handle: "@melvin2016_",
          site: "@melvin2016_",
          cardType: "summary_large_image",
        }}
      />
      <BlogJsonLd
        url={`${metaURl}/posts/${metadeta.link}`}
        title={metadeta.title}
        images={[metaImageUrl]}
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
              image: ImageLoaderUtil.bind(null, metadeta.link),
              code: CodeBlockUtil,
            }}
            className="blog"
          />
        </article>
      </div>
    </>
  );
};

export default BlogRenderer;
