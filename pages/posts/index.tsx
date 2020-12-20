import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { NextPage } from 'next';

import PostList from '../post-list/post-list';

import { getPosts } from '../api/posts';

import { IPost } from '../interfaces';

interface PostListProps {
  posts: IPost[],
}

const Posts: NextPage<PostListProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts page</title>
      </Head>

      <PostList posts={posts} />

      <Link href={'/posts/new'}>
        <button type="button">Create post</button>
      </Link>
    </div>
  );
}

Posts.getInitialProps = async (): Promise<PostListProps> => {
  const posts = await getPosts();

  return { posts };
}

export default Posts;
