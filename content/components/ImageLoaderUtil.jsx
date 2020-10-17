import { Picture } from "next-img";
const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const raw = require(`../assets/${link}/${source}?sizes=375,800`);
  return <Picture alt={altText} src={raw} loading="lazy" />;
};

export default ImageLoaderUtil;
