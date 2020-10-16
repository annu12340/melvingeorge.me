import React, { useRef } from "react";
import ImageLoaderUtil from "../../content/components/ImageLoaderUtil";

import hydrate from "next-mdx-remote/hydrate";
import customComponents from "../../content/components/index";

export function HighlightedMarkdown({ children, metadata: { link } }) {
  const rootRef = useRef();

  const content = hydrate(children, {
    components: {
      ...customComponents,
      img: (attrs) => <ImageLoaderUtil link={link} {...attrs} />,
    },
  });

  return (
    <div ref={rootRef} className="blog">
      {content}
    </div>
  );
}
