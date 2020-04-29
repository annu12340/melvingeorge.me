import Link from "next/link";

// COMPONENTS
import NavigationItems from "./NavigationItems";

export const Navigation = () => (
  <nav className="pt-8">
    <div className="flex justify-between">
      <Link href="/">
        <a className="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer">
          Melvin George
        </a>
      </Link>
      <ul className="text-blue-500 text-lg hidden lg:block">
        <NavigationItems />
      </ul>
    </div>
  </nav>
);
