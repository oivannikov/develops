import { useRouter } from 'next/router';

import { getPost } from '../api/posts';

export default function Post({ post }) {

  return (
    <h1>Title: {post.title}</h1>
  );
}

Post.getInitialProps = async (ctx) => {
  const postId = +ctx.query.postId;
  const post = await getPost(postId);

  return {
    post,
  };
}
