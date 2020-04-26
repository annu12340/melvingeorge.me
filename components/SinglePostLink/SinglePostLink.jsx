import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const SinglePostLink = ({ title, body, id }) => (
  <div className="mb-10">
    <Link href={`/posts/${id}`}>
      <a className="text-xl font-medium cursor-pointer duration-300 transition transition-colors hover:text-blue-500">
        {title}
      </a>
    </Link>
    <p className="italic mt-1">{body}</p>
    <a href="" className="inline-block cursor-pointer text-blue-500 mt-1">
      <Link href={`/posts/${id}`}>
        <a>
          Read <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </a>
      </Link>
    </a>
  </div>
);
