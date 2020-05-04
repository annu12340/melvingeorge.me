import Link from "next/link";

// CSS
import styles from "../../styles/BlogLayout/blogLayout.module.css";

// COMPONENTS
import NavigationItems from "./NavigationItems";

const BlogNavigation = () => (
  <div className="bg-gray-100">
    <nav className="flex flex-row justify-between container max-w-screen-md mx-auto px-4">
      <Link href="/">
        <div className="flex flex-row justify-center items-center">
          <div className={styles.heroImg} />
          <a
            className="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer ml-4"
            alt="Home Page Link"
          >
            Melvin George
          </a>
        </div>
      </Link>
      <ul className="text-blue-500 text-lg hidden md:block my-8 flex-row justify-center items-center align-middle ">
        <NavigationItems />
      </ul>
    </nav>
  </div>
);

export default BlogNavigation;
