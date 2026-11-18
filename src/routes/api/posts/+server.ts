import { posts } from '#lib/blog-articles//index.ts';

async function getPosts() {
  let sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return sortedPosts;
}

export async function GET() {
  const posts = await getPosts();

  return Response.json(posts);
}
