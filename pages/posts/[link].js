// PATH => /posts/<ID_NUMBER>
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BlogLayout from "../../components/Layout/BlogLayout";

export default ({ frontMatter, content }) => (
  <>
    <Head>
      <title>{frontMatter.title}</title>
      <meta name="description" content={frontMatter.description} />
      <meta name="author" content={frontMatter.author}></meta>
    </Head>

    <BlogLayout>
      <article>
        <ReactMarkdown escapeHtml={false} source={content} className="blog" />
      </article>
      <Link href="/">
        <a className="fixed inline-block px-3 py-2 shadow-md bg-gray-700 rounded-full text-gray-100 mr-5 mb-5 bottom-0 right-0">
          <FontAwesomeIcon
            className="fa-1x"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
        </a>
      </Link>
    </BlogLayout>
  </>
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
  // Get File and get YAML data from markdown
  const post = fs
    .readFileSync(path.join("content", `${params.link}.md`))
    .toString();
  const { data, content } = matter(post);

  // Serialize date
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", dateOptions);

  // Make metadata
  const frontMatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `# ${data.title}
      \n<p className="date">By ${frontMatter.author} - ${formattedDate}<p>
      \n${content}`,
      frontMatter,
    },
  };
}
