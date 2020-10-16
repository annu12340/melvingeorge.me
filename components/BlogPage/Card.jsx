import React from "react";
import Link from "next/link";
import ImageLoader from "../../content/components/ImageLoaderUtil";

const Card = ({ title, description, href, shouldPrefetch }) => {
  return (
    <Link href="/blog/[link]" as={`/blog/${href}`} prefetch={shouldPrefetch}>
      <div className="bg-white shadow-sm rounded cursor-pointer group max-w-xs p-6 flex flex-col  m-6 box-border">
        <h1 className="text-2xl my-4 tracking-wide font-medium">{title}</h1>
        <ImageLoader
          link={href}
          alt={`Banner picture of ${title} blog`}
          src="main.jpg"
        />
        <p className="tracking-wide my-4 leading-relaxed text-lg transition-colors duration-300 group-hover:text-blue-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
