export const Navigation = () => (
  <nav className="pt-8">
    <div className="flex justify-between">
      <a
        href="/"
        className="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer"
      >
        Melvin George
      </a>
      <ul className="text-blue-500 text-lg hidden md:block">
        <li className="inline-block tracking-wider ml-6 first:ml-0">
          <a
            className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            Blog
          </a>
        </li>
        <li className="inline-block tracking-wider ml-6 first:ml-0">
          <a
            className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            Projects
          </a>
        </li>
        <li className="inline-block tracking-wider ml-6 first:ml-0">
          <a
            className="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            About
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
