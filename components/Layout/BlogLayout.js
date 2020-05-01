import { motion, AnimatePresence } from "framer-motion";
import BlogNavigation from "../Navigation/BlogNavigation";
const variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const BlogLayout = ({ children }) => (
  <AnimatePresence>
    <BlogNavigation />
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      className="relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default BlogLayout;
