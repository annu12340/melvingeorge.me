import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageLoaderUtil = ({ alt: altText, src: source, link }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { trace } = require(`../../content/assets/${link}/${source}?trace`);
  const src = require(`../../content/assets/${link}/${source}?webp`);
  return (
    <p className="relative">
      <a className="cursor-pointer" href={src} target="blank">
        <AnimatePresence>
          <motion.img
            className="w-full top-0 left-0 absolute"
            src={src}
            key={src}
            alt={altText}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ ease: "easeIn" }}
            onLoad={() => setImageLoaded(true)}
          />

          <motion.img
            className="w-full"
            src={trace}
            key={trace}
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
