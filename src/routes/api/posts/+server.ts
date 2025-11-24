import { posts } from '$lib/blog-articles/';
import { json } from '@sveltejs/kit';

async function getPosts() {
  let sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return sortedPosts;
}

export async function GET() {
  const posts = await getPosts();

  return json(posts);
}
