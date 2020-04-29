import BlogNavigation from "../Navigation/BlogNavigation";
const BlogLayout = ({ children }) => (
  <>
    <BlogNavigation />
    <div className="relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded">
      {children}
    </div>
  </>
);

export default BlogLayout;
