// MODULES
import { useState } from "react";
import dynamic from "next/dynamic";
const Link = dynamic(import("next/link"));
const FontAwesomeIcon = dynamic(
  async () => (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
);
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
  // Navigation button state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="absolute top-0 right-0 z-50 py-8 px-4 md:hidden cursor-pointer text-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <a className="text-gray-200 transition transition-all duration-300 tracking-wider">
            CLOSE
            <FontAwesomeIcon className="ml-2" icon={faTimes} />
          </a>
        ) : (
          <a className="text-blue-400 transition transition-all duration-300 text-blue-500 tracking-wider">
            MENU
            <FontAwesomeIcon className="ml-2" icon={faBars} />
          </a>
        )}
      </div>

      {menuOpen ? (
        <nav className="absolute flex flex-col items-center justify-center top-0 z-40 left-0 bg-blue-600 w-screen h-screen md:hidden transition transition-colors duration-700 ease-in">
          <ul className="text-4xl text-center text-gray-200 flex flex-col">
            <Link href="/">
              <a
                className="cursor-pointer block mb-12 transition transition-colors duration-300 hover:text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <li>Blog</li>
              </a>
            </Link>

            <Link href="/projects">
              <a
                className="cursor-pointer inline-block mb-12 transition transition-colors duration-300 hover:text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <li>Projects</li>
              </a>
            </Link>
            <Link href="/about">
              <a
                className="cursor-pointer inline-block mb-12 transition transition-colors duration-300 hover:text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <li>About</li>
              </a>
            </Link>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default MobileNavigation;
