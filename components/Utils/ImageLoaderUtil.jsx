import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageLoaderUtil = (link, { alt: altText, src: source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    src,
    trace,
  } = require(`../../content/assets/${link}/${source}?trace`);

  return (
    <p className="relative">
      <a className="cursor-pointer" href={src} target="blank">
        <AnimatePresence>
          <motion.picture
            key={src}
            className="w-full top-0 left-0 absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ ease: "easeIn" }}
            onLoad={() => setImageLoaded(true)}
          >
            <source
              srcSet={require(`../../content/assets/${link}/${source}?webp`)}
              type="image/webp"
            />
            <source srcSet={src} type="image/jpeg" />
            <img src={src} alt={altText} />
          </motion.picture>

          <motion.img
            key={trace}
            className="w-full"
            src={trace}
            alt={altText}
            initial={{ opacity: 1 }}
            animate={{ opacity: imageLoaded ? 0 : 1 }}
            transition={{ ease: "easeIn" }}
          />
        </AnimatePresence>
      </a>
    </p>
  );
};

export default ImageLoaderUtil;
