// MODULES
import dynamic from "next/dynamic";
import { useContext } from "react";
const Link = dynamic(() => import("next/link"));

// CONTEXT
import { ActiveTabContext, SetActiveTabContext } from "../../context/ActiveTab";

const NavigationItems = () => {
  // All tabs
  const tabs = ["Blog", "About"];

  // Active tab
  const activeTab = useContext(ActiveTabContext);
  const dispatchActiveTab = useContext(SetActiveTabContext);

  // Active tab style
  const activeTabStyle = "bg-blue-200 text-black-900";
  return (
    <>
      {tabs.length > 0
        ? tabs.map((tab) => (
          <li
            className="tracking-wider ml-6 first:ml-0 inline-block"
            key={tab}
          >
            <Link href={`/${tab.toLowerCase()}`}>
              <a
                className={`cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:bg-blue-200 p-2 rounded-sm ${
                  tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""
                }`}
                href=""
                onClick={() => dispatchActiveTab({ type: tab.toLowerCase() })}
              >
                {tab}
              </a>
            </Link>
          </li>
        ))
        : null}
    </>
  );
};
export default NavigationItems;
