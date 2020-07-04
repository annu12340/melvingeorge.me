// MODULES
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Link = dynamic(() => import("next/link"));
const FontAwesomeIcon = dynamic(
  async () => (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon,
);

// CONTEXT
import { ActiveTabContext, SetActiveTabContext } from "../../context/ActiveTab";

const MobileNavigation = ({ isIndex = false }) => {
  // All tabs
  const tabs = ["Blog", "About"];

  // Navigation button state
  const [menuOpen, setMenuOpen] = useState(false);

  // Active tab
  const activeTab = useContext(ActiveTabContext);
  const dispatchActiveTab = useContext(SetActiveTabContext);

  // Tab click handler
  const tabHandler = (tabName) => {
    setMenuOpen(!menuOpen);
    dispatchActiveTab({ type: tabName });
  };

  // Active tab style
  const activeTabStyle = "bg-gray-900 opacity-75 rounded shadow-lg px-2";

  return (
    <>
      <div
        className={`${
          isIndex ? "text-white" : "text-black"
        }  my-auto cursor-pointer text-lg md:hidden`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen
          ? (
            <a
              className="relative z-50 text-white transition-all duration-300 tracking-wider"
            >
              CLOSE
              <FontAwesomeIcon className="ml-2" icon={faTimes} width="0" />
            </a>
          )
          : (
            <a
              className="transition-all duration-300 tracking-wider"
            >
              MENU
              <FontAwesomeIcon className="ml-2" icon={faBars} width="0" />
            </a>
          )}
      </div>

      {menuOpen
        ? (
          <nav
            className="absolute flex flex-col items-center justify-center top-0 z-30 left-0 bg-blue-600 h-screen w-screen md:hidden  transition-colors duration-700 ease-in"
          >
            <ul
              className="text-4xl text-center text-gray-100 flex flex-col uppercase mt-10"
            >
              {tabs.length > 0
                ? tabs.map((tab) => (
                  <Link href={`/${tab.toLowerCase()}`} key={tab}>
                    <a
                      className={`cursor-pointer block mb-12 transition-colors duration-300 hover:text-gray-900 tracking-normal ${
                        tab.toLowerCase() === activeTab.tab
                          ? activeTabStyle
                          : ""
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
        )
        : null}
    </>
  );
};

export default MobileNavigation;
