// COMPONENTS
import { HighlightedMarkdown } from "./HighlightedMarkdown.jsx";
import BlogSEO from "./BlogSEO";
import Sharer from "./Sharer";

const BlogRenderer = ({ metadata, content }) => {
  return (
    <>
      <BlogSEO metadata={metadata} />
      <div
        className="relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded"
      >
        <article>
          <HighlightedMarkdown metadata={metadata}>
            {content}
          </HighlightedMarkdown>
          <Sharer
            link={metadata.link}
            title={metadata.title}
            keywords={metadata.keywords}
          />
        </article>
      </div>
    </>
  );
};

export default BlogRenderer;
