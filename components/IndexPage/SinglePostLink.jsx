import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"));
const FontAwesomeIcon = dynamic(
  async () => (await import("@fortawesome/react-fontawesome")).FontAwesomeIcon
);
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Tag from "../Tag/Tag";
const SinglePostLink = ({
  title,
  href,
  description,
  tagName,
  shouldPrefetch,
}) => (
  <div className="mb-16">
    <Link
      href="/blog/[link]"
      as={`/blog/${href}`}
      passHref
      prefetch={shouldPrefetch}
    >
      <a className="text-2xl font-medium cursor-pointer duration-300 transition-colors  hover:bg-gray-200 hover:text-blue-600">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </a>
    </Link>
    <p className="italic mt-1 text-xl font-normal">{description}</p>

    <div className="flex flex-row justify-between items-center mt-3">
      <a href="" className="inline-block cursor-pointer text-blue-500 mt-1">
        <Link
          href="/blog/[link]"
          as={`/blog/${href}`}
          passHref
          prefetch={shouldPrefetch}
        >
          <a className="font-light text-xl">
            Read{" "}
            <FontAwesomeIcon icon={faArrowRight} width="0"></FontAwesomeIcon>
          </a>
        </Link>
      </a>
      <Tag name={tagName} />
    </div>
  </div>
);

export default SinglePostLink;
