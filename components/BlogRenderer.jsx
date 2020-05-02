// MODULES
import ReactMarkdown from "react-markdown/with-html";
import { NextSeo, BlogJsonLd } from "next-seo";
// COMPONENTS
import BlogNavigation from "./Navigation/BlogNavigation";
import ImageLoaderUtil from "./Utils/ImageLoaderUtil";
import CodeBlockUtil from "./Utils/CodeBlockUtil";

const BlogRenderer = ({ metadeta, content }) => (
  <>
    <NextSeo
      title={metadeta.title}
      description={metadeta.description}
      canonical={`https://melvingeorge.now.sh/posts/${metadeta.link}`}
      openGraph={{
        url: `https://melvingeorge.now.sh/posts/${metadeta.link}`,
        title: metadeta.title,
        description: metadeta.description,
        type: "article",
        images: [
          {
            url: "https://via.placeholder.com/69",
            alt: "Image of Blog Post By MELVIN GEORGE",
          },
        ],
        site_name: "MELVIN GEORGE Blog",
      }}
      additionalMetaTags={[
        {
          name: "image",
          content: "https://via.placeholder.com/69",
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
      images={["https://via.placeholder.com/69"]}
      datePublished={new Date(metadeta.date)}
      dateModified={new Date(metadeta.date)}
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
            image: ImageLoaderUtil,
            code: CodeBlockUtil,
          }}
          className="blog"
        />
      </article>
    </div>
  </>
);

export default BlogRenderer;
