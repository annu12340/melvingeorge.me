import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const SinglePostLink = ({ title, href, description }) => (
  <div className="mb-10">
    <Link href="/posts/[link]" as={`/posts/${href}`}>
      <span className="text-2xl font-medium cursor-pointer duration-300 transition transition-colors  hover:bg-gray-200 hover:text-blue-600">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </Link>
    <p className="italic mt-1 text-xl font-normal">{description}</p>
    <a href="" className="inline-block cursor-pointer text-blue-500 mt-1">
      <Link href="/posts/[link]" as={`/posts/${href}`}>
        <span className="font-light text-xl">
          Read <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>
      </Link>
    </a>
  </div>
);

export default SinglePostLink;
