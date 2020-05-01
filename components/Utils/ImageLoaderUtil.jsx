import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageLoaderUtil = ({ alt: alternative, src: source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { src, trace } = require(`../../content/assets/${source}?trace`);

  return (
    <p className="relative">
      <AnimatePresence>
        <motion.img
          className={`w-full top-0 left-0 absolute`}
          src={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          alt={alternative}
          loading="lazy"
          transition={{ ease: "easeIn" }}
          onLoad={() => setImageLoaded(true)}
        />
        <motion.img
          className="w-full"
          src={trace}
          alt={alternative}
          initial={{ opacity: 1 }}
          animate={{ opacity: imageLoaded ? 0 : 1 }}
          loading="lazy"
          transition={{ ease: "easeOut" }}
        />
      </AnimatePresence>
    </p>
  );
};

export default ImageLoaderUtil;
