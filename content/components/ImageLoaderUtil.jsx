import "lazysizes";
const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const { trace } = require(`../assets/${link}/${source}?trace`);
  const src = require(`../assets/${link}/${source}?webp`);
  const jpeg = require(`../assets/${link}/${source}`);
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <source srcSet={jpeg} type="image/jpeg" />
      <img
        alt={altText}
        src={trace}
        data-srcset={src}
        className="lazyload blur-up shadow"
        data-sizes="auto"
      />
    </picture>
  );
};

export default ImageLoaderUtil;
