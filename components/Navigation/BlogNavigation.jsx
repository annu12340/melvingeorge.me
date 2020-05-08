// MODULES
import Link from "next/link";

// COMPONENTS
import NavigationItems from "./NavigationItems";
import MobileNavigation from "./MobileNavigation";

const BlogNavigation = () => (
  <>
    <div className="bg-gray-100">
      <nav className="flex flex-row justify-between container max-w-screen-md mx-auto px-4">
        <Link href="/">
          <div className="flex flex-row justify-center items-center">
            <div className="heroImg" />
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
    <style jsx>{`
      .heroImg {
        width: 60px;
        height: 60px;
        margin: 15px auto;
        border-radius: 50%;
        background: url(${require("../../public/me.png?webp")}) 1px / cover
          no-repeat #bee3f8;
        background-repeat: no-repeat;
      }
    `}</style>
  </>
);

export default BlogNavigation;
