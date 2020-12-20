import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

import PostList from './post-list/post-list';

import { getPosts } from './api/posts';
import { IPost } from './interfaces';

interface PostListProps {
  posts: IPost[],
}

const Home: NextPage<PostListProps> = ({ posts }) => {
  return (
    <div className="posts">
      <Head>
        <title>Posts page</title>
      </Head>

      <PostList posts={posts} />

      <Link href={'/posts/new'}>
        <button className="create__post" type="button">Create post</button>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {posts}
  }
}

export default Home;
