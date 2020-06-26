import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Markdown from "markdown-to-jsx";
const hljs = require("highlight.js/lib/core");
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage(
  "html",
  require("highlight.js/lib/languages/vbscript-html")
);
const ImageLoaderUtil = dynamic(() => import("../Utils/ImageLoaderUtil"));
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
