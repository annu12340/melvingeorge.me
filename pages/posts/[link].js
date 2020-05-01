/* PATH => /posts/<ID_NUMBER> */

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// MODULES
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

// COMPONENTS
import BlogLayout from "../../components/Layout/BlogLayout";
import ImageLoaderUtil from "../../components/Utils/ImageLoaderUtil";
import CodeBlockUtil from "../../components/Utils/CodeBlockUtil";

export default ({ frontMatter, content }) => (
  <>
    <Head>
      <title>{frontMatter.title}</title>
      <meta name="description" content={frontMatter.description} />
      <meta name="author" content={frontMatter.author}></meta>
    </Head>

    <BlogLayout>
      <article>
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{
            image: ImageLoaderUtil,
            code: CodeBlockUtil,
          }}
          className="blog"
        />
      </article>
      <Link href="/">
        <a className="fixed inline-block px-3 py-2 shadow-md bg-gray-700 rounded-full text-gray-100 mr-5 mb-5 bottom-0 right-0 opacity-75 duration-200 hover:opacity-100">
          <FontAwesomeIcon icon={faArrowLeft} size="1x"></FontAwesomeIcon>
          <span className="hidden md:inline"> Go Back</span>
        </a>
      </Link>
    </BlogLayout>
  </>
);

export async function getStaticPaths() {
  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
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
    .readFileSync(path.join("content", "posts/", `${params.link}.md`))
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
      \n<p className="date">${formattedDate}<p>
      \n${content}`,
      frontMatter,
    },
  };
}
