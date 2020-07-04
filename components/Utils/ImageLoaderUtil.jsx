import "lazysizes";
const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const { trace } = require(`../../content/assets/${link}/${source}?trace`);
  const src = require(`../../content/assets/${link}/${source}?webp`);
  return (
    <img
      alt={altText}
      src={trace}
      data-srcset={src}
      className="lazyload"
      data-sizes="auto"
    />
  );
};

export default ImageLoaderUtil;
