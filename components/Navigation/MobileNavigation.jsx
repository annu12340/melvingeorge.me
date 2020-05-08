// MODULES
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const FontAwesomeIcon = dynamic(
  async () => (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
);

// CONTEXT
import {
  activeTabContext,
  setActiveTabContext,
} from "../../context/NavigationContext";

const MobileNavigation = () => {
  // All tabs
  const tabs = ["Blog", "Projects", "About"];

  // Navigation button state
  const [menuOpen, setMenuOpen] = useState(false);

  // Active tab
  const activeTab = useContext(activeTabContext);
  const setActiveTab = useContext(setActiveTabContext);

  // Tab click handler
  const tabHandler = (tabName) => {
    setMenuOpen(!menuOpen);
    setActiveTab(tabName);
  };

  // Active tab style
  const activeTabStyle = "bg-gray-900 opacity-75 rounded shadow-lg";

  return (
    <>
      <div
        className="absolute top-0 right-0 z-50 py-8 px-4 cursor-pointer text-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <a className="text-gray-200 transition transition-all duration-300 tracking-wider">
            CLOSE
            <FontAwesomeIcon className="ml-2" icon={faTimes} width="16" />
          </a>
        ) : (
          <a className="text-blue-400 transition transition-all duration-300 text-blue-500 tracking-wider">
            MENU
            <FontAwesomeIcon className="ml-2" icon={faBars} width="16" />
          </a>
        )}
      </div>

      {menuOpen ? (
        <nav className="absolute flex flex-col items-center justify-center top-0 z-40 left-0 bg-blue-600 w-screen h-screen md:hidden transition transition-colors duration-700 ease-in">
          <ul className="text-4xl text-center text-gray-100 flex flex-col uppercase mt-10">
            {tabs.length > 0
              ? tabs.map((tab) => (
                  <Link href={`/${tab.toLowerCase()}`} key={tab}>
                    <a
                      className={`cursor-pointer block mb-12 transition transition-colors duration-300 hover:text-gray-900 tracking-normal ${
                        tab.toLowerCase() === activeTab ? activeTabStyle : ""
                      }`}
                      onClick={() => tabHandler(tab.toLowerCase())}
                    >
                      <li>{tab}</li>
                    </a>
                  </Link>
                ))
              : null}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default MobileNavigation;
