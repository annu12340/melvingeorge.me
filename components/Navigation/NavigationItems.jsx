// MODULES
import dynamic from "next/dynamic";
const Link = dynamic(import("next/link"));

const NavigationItems = () => (
  <>
    <li className="inline-block tracking-wider ml-6 first:ml-0">
      <Link href="/">
        <a
          className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
          href=""
        >
          Blog
        </a>
      </Link>
    </li>
    <li className="inline-block tracking-wider ml-6 first:ml-0">
      <Link href="/projects">
        <a
          className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
          href=""
        >
          Projects
        </a>
      </Link>
    </li>
    <li className="inline-block tracking-wider ml-6 first:ml-0">
      <Link href="/about">
        <a
          className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
          href=""
        >
          About
        </a>
      </Link>
    </li>
  </>
);
export default NavigationItems;
