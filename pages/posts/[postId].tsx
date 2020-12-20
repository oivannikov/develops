import { getPost } from '../../api/posts';

import { Post } from '../../components/Post/Post';

import { NextPage } from 'next';

import IPost from '../../interfaces/interfaces';

interface PostProps {
  post: IPost
}

 const CurrentPost: NextPage<PostProps> = ({ post }) => {
  return <Post post={post} />
}

export async function getServerSideProps({ query }) {
  const postId = +query.postId;
  const post = await getPost(postId);

  return {
    props: {post}
  };
}

export default CurrentPost;