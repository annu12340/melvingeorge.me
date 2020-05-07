// MODULES
import dynamic from "next/dynamic";
import Link from "next/link";

// COMPONENTS
const NavigationItems = dynamic(import("./NavigationItems"));

const Navigation = () => (
  <nav className="pt-8">
    <div className="flex justify-between">
      <Link href="/">
        <a className="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer">
          Melvin George
        </a>
      </Link>
      <ul className="text-blue-500 text-lg hidden md:block">
        <NavigationItems />
      </ul>
    </div>
  </nav>
);

export default Navigation;
