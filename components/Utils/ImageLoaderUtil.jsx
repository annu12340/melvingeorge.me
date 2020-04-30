import { useState } from "react";

const ImageLoaderUtil = ({ alt, src }) => {
  const image = require(`../../content/assets/${src}?trace`);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <p className="relative">
      <img
        className={`w-full ${imageLoaded ? " hidden" : " block"}`}
        src={image.trace}
        alt={alt}
      />

      <img
        className={`w-full transition duration-500 ease-in ${
          imageLoaded ? " block" : " hidden"
        }`}
        src={image.src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </p>
  );
};

export default ImageLoaderUtil;
