import React from 'react';

import Link from 'next/link';

import { IPost } from '../interfaces';

interface PostListProps {
  posts: IPost[],
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul>
    {
      posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`/post/[postId]`} as={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))
    }
    </ul>
  );
}

export default PostList;