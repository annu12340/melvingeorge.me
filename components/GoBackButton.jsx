// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// MODULES
import Link from "next/link";

const GoBackButton = () => (
  <Link href="/">
    <a className="fixed inline-block px-3 py-2 shadow-md bg-gray-700 rounded-full text-gray-100 mr-5 mb-5 bottom-0 right-0 opacity-75 duration-200 hover:opacity-100">
      <FontAwesomeIcon icon={faArrowLeft} size="1x"></FontAwesomeIcon>
      <span className="hidden md:inline"> Go Back</span>
    </a>
  </Link>
);

export default GoBackButton;
