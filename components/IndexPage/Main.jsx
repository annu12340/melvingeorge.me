// COMPONENTS
import SinglePostLink from "./SinglePostLink";

const Main = ({ linksData }) => (
  <main className="z-0 relative container max-w-screen-md mx-auto px-4 md:px-20 md:-mt-8 lg:-mt-12 py-10 mb-12 md:shadow-lg md:rounded-lg bg-white">
    <h1 className="text-2xl mb-10 font-semibold text-gray-800">Blog</h1>
    {linksData && linksData.length <= 0
      ? null
      : linksData.map((linkData) => (
          <SinglePostLink
            title={linkData.title}
            key={linkData.href}
            href={linkData.href}
            description={linkData.description}
          />
        ))}
  </main>
);

export default Main;
