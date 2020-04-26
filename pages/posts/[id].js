// PATH => /posts/<ID_NUMBER>
import fetch from "node-fetch";

export default ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <article>{post.body}</article>
  </div>
);

export async function getStaticPaths() {
  const params = [];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  posts.map((post) => {
    console.log(post);
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
  const json = await res.json();
  console.log(json);
  return {
    props: {
      post: json,
    },
  };
}
