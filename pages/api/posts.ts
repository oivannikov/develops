import axios from 'axios';

const BASE_URL = 'https://simple-blog-api.crew.red';

export async function getPosts() {
  const response = await axios(`${BASE_URL}/posts`);
  const posts = response.data;

  return posts;
}

export async function getPost(postsId: number) {
  const response = await axios(`${BASE_URL}/posts/${postsId}`);
  const post = response.data;

  return post;
}
