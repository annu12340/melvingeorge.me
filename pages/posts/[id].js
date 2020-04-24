// PATH => /posts/<ID_NUMBER>
import fetch from "node-fetch";

export default ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <article>{post.body}</article>
  </div>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const json = await res.json();
  console.log(json);
  return {
    props: {
      post: json,
    },
  };
}
