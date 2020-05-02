// MODULES
import ReactMarkdown from "react-markdown/with-html";
import { NextSeo, BlogJsonLd } from "next-seo";
// COMPONENTS
import BlogNavigation from "./Navigation/BlogNavigation";
import ImageLoaderUtil from "./Utils/ImageLoaderUtil";
import CodeBlockUtil from "./Utils/CodeBlockUtil";

const BlogRenderer = ({ metadeta, content }) => {
  let metaImageUrl;
  if (process.browser) {
    metaImageUrl = `${
      window.location.origin
    }${require(`../content/assets/${metadeta.link}/main.jpg`)}`;
  }

  return (
    <>
      <NextSeo
        title={metadeta.title}
        description={metadeta.description}
        openGraph={{
          url: `https://melvingeorge.now.sh/posts/${metadeta.link}`,
          title: metadeta.title,
          description: metadeta.description,
          type: "article",
          images: [
            {
              url: metaImageUrl,
              alt: "Image of BlogPost By MELVIN GEORGE",
            },
          ],
          site_name: "MELVIN GEORGE Blog",
        }}
        twitter={{
          handle: "@melvin2016_",
          site: "@melvin2016_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "image",
            content: metaImageUrl,
          },
          {
            name: "keywords",
            content: metadeta.keywords,
          },
        ]}
      />
      <BlogJsonLd
        url={`https://melvingeorge.now.sh/posts/${metadeta.link}`}
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
