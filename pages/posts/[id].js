// PATH => /posts/<ID_NUMBER>
import fetch from "node-fetch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default ({ post }) => (
  <div>
    <Link href="/">
      <a className="inline-block px-1 py-2 bg-blue-300 my-2 mx-1 rounded-sm">
        <FontAwesomeIcon className="fa-1x" icon={faArrowLeft}></FontAwesomeIcon>{" "}
        Go Back
      </a>
    </Link>
    <h1>{post.title}</h1>
    <article>{post.body}</article>
  </div>
);

export async function getStaticPaths() {
  const params = [];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  posts.map((post) => {
    params.push({
      params: {
        id: post.id.toString(),
      },
    });
  });

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
