import React, { useRef, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import ImageLoaderUtil from "../Utils/ImageLoaderUtil";

export function HighlightedMarkdown({ children, metadata }) {
  const rootRef = useRef();

  useEffect(() => {
    rootRef.current.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [children]);

  return (
    <div ref={rootRef} className="blog">
      <Markdown
        options={{
          overrides: {
            img: {
              component: (props) => {
                return <ImageLoaderUtil {...props} link={metadata.link} />;
              },
            },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
