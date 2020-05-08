// MODULES
import dynamic from "next/dynamic";
const ReactMarkdown = dynamic(() => import("react-markdown/with-html"));

// COMPONENTS
const ImageLoaderUtil = dynamic(() => import("../Utils/ImageLoaderUtil"));
import BlogNavigation from "../Navigation/BlogNavigation";
import BlogSEO from "./BlogSEO";
const CodeBlockLoaderUtil = dynamic(() =>
  import("../Utils/CodeBlockLoaderUtil")
);

const BlogRenderer = ({ metadata, content }) => {
  return (
    <>
      <BlogSEO metadata={metadata} />
      <BlogNavigation />
      <div className="relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded">
        <article>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{
              image: (props) => {
                return <ImageLoaderUtil {...props} link={metadata.link} />;
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
