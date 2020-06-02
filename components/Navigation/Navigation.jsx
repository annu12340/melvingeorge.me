// MODULES
import dynamic from "next/dynamic";
import Link from "next/link";

// COMPONENTS
const NavigationItems = dynamic(() => import("./NavigationItems"));
const MobileNavigation = dynamic(() => import("./MobileNavigation"));

const Navigation = ({ isIndex }) => {
  return (
    <>
      <div className={`${isIndex ? "bgHero" : ""}`}>
        <nav className="flex flex-row justify-between container max-w-screen-md mx-auto px-4">
          <Link href="/">
            <div className="flex flex-row justify-center items-center">
              {!isIndex ? <div className="heroImg" /> : null}
              <a
                className={`transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer ${
                  isIndex ? "pt-8" : "ml-4"
                }`}
              >
                Melvin George
              </a>
            </div>
          </Link>
          <ul className="text-blue-700 text-lg hidden md:block pt-8">
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
};

export default Navigation;
