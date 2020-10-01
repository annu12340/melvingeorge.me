// MODULES
import { useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ActiveTabContext } from "../../context/ActiveTab";

// COMPONENTS
const NavigationItems = dynamic(() => import("./NavigationItems"));
const MobileNavigation = dynamic(() => import("./MobileNavigation"));

const Navigation = () => {
  // isIndex state
  const [isIndex, setIsIndex] = useState("false");
  const activeTab = useContext(ActiveTabContext);
  useEffect(() => {
    setIsIndex(activeTab.tab === "" ? true : false);
  });

  return (
    <>
      <nav className="flex flex-row justify-between container max-w-screen-md mx-auto px-4 h-24">
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
