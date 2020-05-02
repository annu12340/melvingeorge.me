// MODULES
import ReactMarkdown from "react-markdown/with-html";
import { NextSeo } from "next-seo";
// COMPONENTS
import BlogNavigation from "./Navigation/BlogNavigation";
import ImageLoaderUtil from "./Utils/ImageLoaderUtil";
import CodeBlockUtil from "./Utils/CodeBlockUtil";

const BlogRenderer = ({ metadeta, content }) => (
  <>
    <NextSeo
      title={metadeta.title}
      description={metadeta.description}
      canonical={`https://melvingeorge.now.sh/post/${metadeta.link}`}
      openGraph={{
        url: `https://melvingeorge.now.sh/posts/${metadeta.link}`,
        title: metadeta.title,
        description: metadeta.description,
        images: [
          {
            url: "https://via.placeholder.com/800x600",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url: "https://via.placeholder.com/900x800",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
          { url: "https://via.placeholder.com/69" },
        ],
        site_name: "MELVIN GEORGE Blog",
      }}
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
