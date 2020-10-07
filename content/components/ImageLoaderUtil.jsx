import "lazysizes";
const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const { trace } = require(`../assets/${link}/${source}?trace`);
  const src = require(`../assets/${link}/${source}?webp`);
  return (
    <img
      alt={altText}
      src={trace}
      data-srcset={src}
      className="lazyload blur-up shadow"
      data-sizes="auto"
    />
  );
};

export default ImageLoaderUtil;
