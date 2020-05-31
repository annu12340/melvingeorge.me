import React from "react";
import Link from "next/link";
import ImageLoader from "../Utils/ImageLoaderUtil";

const Card = ({ title, description, href }) => {
  return (
    <Link href={`/blog/${href}`}>
      <div className="p-6 bg-white shadow-sm rounded cursor-pointer group">
        <h1 className="text-2xl my-4 tracking-wide text-center font-medium">
          {title}
        </h1>
        <ImageLoader
          link={href}
          alt={`Banner picture of ${title} blog`}
          src="main.jpg"
        />
        <p className="tracking-wide my-4 leading-relaxed text-lg italic transition transition-colors duration-300 group-hover:text-blue-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
