// MODULES
import dynamic from "next/dynamic";
const Link = dynamic(import("next/link"));

// CSS
import styles from "../../styles/BlogLayout/blogLayout.module.css";

// COMPONENTS
const NavigationItems = dynamic(import("./NavigationItems"));
const MobileNavigation = dynamic(import("./MobileNavigation"));

const BlogNavigation = () => (
  <div className="bg-gray-100">
    <nav className="flex flex-row justify-between container max-w-screen-md mx-auto px-4">
      <Link href="/">
        <div className="flex flex-row justify-center items-center">
          <div className={styles.heroImg} />
          <a className="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer ml-4">
            Melvin George
          </a>
        </div>
      </Link>
      <ul className="text-blue-500 text-lg hidden md:block pt-8">
        <NavigationItems />
      </ul>
    </nav>
    <MobileNavigation />
  </div>
);

export default BlogNavigation;
