import React from 'react';

import Link from 'next/link';

import IPost from '../../interfaces/interfaces';

interface PostListProps {
  posts: IPost[],
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="list">
    {
      (posts || []).map((post: IPost) => (
        <li className="list__item" key={post.id}>
          <p className="list__title">{post.title}</p>

          <Link href={`/posts/postId`} as={`/posts/${post.id}`}>
            <span className="list__more">Read more</span>
          </Link>
        </li>
      ))
    }
    </ul>
  );
}

export default PostList;
