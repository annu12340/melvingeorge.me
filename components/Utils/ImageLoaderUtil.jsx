import { useState } from "react";

const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { trace } = require(`../../content/assets/${link}/${source}?trace`);
  const src = require(`../../content/assets/${link}/${source}?webp`);
  return (
    <p className="relative">
      <a className="cursor-pointer" href={src} target="blank">
        <img
          className="w-full top-0 left-0 absolute transition transition-all duration-300 ease-out"
          src={src}
          alt={altText}
          loading="lazy"
          style={{
            opacity: imageLoaded ? "1" : "0",
          }}
          onLoad={() => setImageLoaded(true)}
        />

        <img
          className="w-full"
          style={{
            opacity: imageLoaded ? "0" : "1",
          }}
          src={trace}
          alt={altText}
        />
      </a>
    </p>
  );
};

export default ImageLoaderUtil;
