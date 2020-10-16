const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const src = require(`../assets/${link}/${source}`);
  const jpeg = require(`../assets/${link}/${source}`);
  return (
    <picture style={{ height: "200px" }}>
      <source srcSet={src.replace(/\.[^/.]+$/, ".webp")} type="image/webp" />
      <source srcSet={jpeg} type="image/jpeg" />
      <img alt={altText} src={src} />
    </picture>
  );
};

export default ImageLoaderUtil;
