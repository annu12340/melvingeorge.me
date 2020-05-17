// MODULES
import dynamic from "next/dynamic";
const ReactMarkdown = dynamic(() => import("react-markdown/with-html"));

// COMPONENTS
import ImageLoaderUtil from "../Utils/ImageLoaderUtil";
import BlogSEO from "./BlogSEO";
const CodeBlockLoaderUtil = dynamic(() =>
  import("../Utils/CodeBlockLoaderUtil")
);

const BlogRenderer = ({ metadata, content }) => {
  return (
    <>
      <BlogSEO metadata={metadata} />
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
