const Sharer = ({ link, title, keywords }) => (
  <div className="flex flex-row mt-10 font-bold justify-center items-center">
    Share on:{" "}
    <a
      className="bg-blue-400 px-2 py-1 inline-block m-1 rounded"
      target="blank"
      href={`https://www.facebook.com/sharer/sharer.php?u=https://melvingeorge.me/blog/${link}`}
    >
      Facebook
    </a>{" "}
    <a
      className="bg-blue-400 px-2 py-1 inline-block m-1 rounded"
      target="blank"
      href={`http://twitter.com/share?text=Check out this blog on ${title}&url=https://melvingeorge.me/blog/${link}&hashtags=${keywords}
`}
    >
      Twitter
    </a>
  </div>
);

export default Sharer;
