// MODULES
import { NextSeo, BlogJsonLd } from "next-seo";

const BlogSEO = ({ metadata }) => (
  <>
    <NextSeo
      title={metadata.title}
      description={metadata.description}
      canonical={`https://melvingeorge.me/blog/${metadata.link}`}
      additionalMetaTags={[
        {
          name: "keywords",
          content: metadata.keywords,
        },
        {
          name: "image",
          property: "og:image",
          content: `https://melvingeorge.me${require(`../../content/assets/${metadata.link}/meta.jpg?resize&size=1200`)}`,
        },
      ]}
      openGraph={{
        url: `https://melvingeorge.me/blog/${metadata.link}`,
        title: metadata.title,
        description: metadata.description,
        type: "article",
        site_name: "MELVIN GEORGE Blog",
        images: [
          {
            url: `https://melvingeorge.me${require(`../../content/assets/${metadata.link}/meta.jpg?resize&size=1200`)}`,
          },
        ],
      }}
      twitter={{
        handle: "@developer_369",
        site: "@developer_369",
        cardType: "summary_large_image",
      }}
    />
    <BlogJsonLd
      url={`https://melvingeorge.me/blog/${metadata.link}`}
      title={metadata.title}
      images={[
        `https://melvingeorge.me${require(`../../content/assets/${metadata.link}/meta.jpg?resize&size=1200`)}`,
      ]}
      datePublished={new Date(metadata.date).toISOString()}
      dateModified={new Date(metadata.date).toISOString()}
      authorName="MELVIN GEORGE"
      description={metadata.description}
    />
  </>
);

export default BlogSEO;
