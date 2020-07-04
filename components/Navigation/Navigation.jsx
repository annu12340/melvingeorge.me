// MODULES
import dynamic from "next/dynamic";
import Link from "next/link";

// COMPONENTS
const NavigationItems = dynamic(() => import("./NavigationItems"));
const MobileNavigation = dynamic(() => import("./MobileNavigation"));

const Navigation = ({ isIndex = false }) => {
  return (
    <>
      <div className={`${isIndex ? "bgHero" : ""}`}>
        <nav
          className="flex flex-row justify-between container max-w-screen-md mx-auto px-4 h-24"
        >
          <Link href="/">
            <div className="flex flex-row  items-center">
              {!isIndex ? <div className="heroImg" /> : null}
              <a
                className={` transition-colors duration-300 text-black text-lg tracking-wider cursor-pointer ${
                  isIndex ? "text-white font-medium" : "ml-4"
                }`}
              >
                Melvin George
              </a>
            </div>
          </Link>
          <ul
            className={`${
              isIndex ? "text-white font-medium" : "text-black"
            } text-lg md:block my-auto hidden`}
          >
            <NavigationItems />
          </ul>
          <MobileNavigation isIndex={isIndex} />
        </nav>
      </div>
      <style jsx>
        {`
        .heroImg {
          width: 60px;
          height: 60px;
          margin: 15px auto;
          border-radius: 50%;
          background: url(${require("../../public/me.png?webp")}) -10px / cover
            no-repeat rgb(241, 241, 241);
          background-repeat: no-repeat;
        }
      `}
      </style>
    </>
  );
};

export default Navigation;
