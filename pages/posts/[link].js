// PATH => /posts/<ID_NUMBER>
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default ({ data, html }) => (
  <div>
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="author" content={data.author}></meta>
    </Head>
    <Link href="/">
      <a className="inline-block px-1 py-2 bg-blue-300 my-2 mx-1 rounded-sm">
        <FontAwesomeIcon className="fa-1x" icon={faArrowLeft}></FontAwesomeIcon>{" "}
        Go Back
      </a>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </div>
);

export async function getStaticPaths() {
  const filesString = fs.readdirSync(path.join("content")).toString();
  const linksArray = filesString.split(",");
  const params = linksArray.map((link) => ({
    params: {
      link: link.replace(".md", ""),
    },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = fs
    .readFileSync(path.join("content", `${params.link}.md`))
    .toString();
  const { content, data } = matter(post);
  const html = marked(content);

  return {
    props: {
      data,
      html,
    },
  };
}
