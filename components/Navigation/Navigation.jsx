export const Navigation = () => (
  <nav class="pt-8">
    <div class="flex justify-between">
      <a
        href="/"
        class="transition transition-colors duration-300 hover:text-blue-800 text-blue-500 text-lg tracking-wider cursor-pointer"
      >
        Melvin George
      </a>
      <ul class="text-blue-500 text-lg hidden md:block">
        <li class="inline-block tracking-wider ml-6 first:ml-0">
          <a
            class="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            Blog
          </a>
        </li>
        <li class="inline-block tracking-wider ml-6 first:ml-0">
          <a
            class="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            Projects
          </a>
        </li>
        <li class="inline-block tracking-wider ml-6 first:ml-0">
          <a
            class="cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm"
            href=""
          >
            About
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
