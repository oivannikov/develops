import Head from 'next/head';
import Link from 'next/link';

import {useState, useEffect } from 'react';

import { getPosts } from '../api/posts';

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts page</title>
      </Head>

      <ul>
      {
        posts.map(post => (
          <li key={post.id}>{post.title}
            <Link href={`/post/[postId]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

Posts.getInitialProps = async () => {
  const posts = await getPosts();

  return {
    posts,
  }
}
