import type { BlogPost } from '$lib/types/blog-posts.js';

export async function load({ url, params, fetch }) {
  const tags = url.searchParams.get('tags');
  const method = url.searchParams.get('method') || 'some';

  const response = await fetch(
    `/api/posts?lang=${params.lang ?? 'en'}${tags ? `&tags=${tags}` : ''}${
      method ? `&method=${method}` : ''
    }`
  );
  const postsJSON = await response.json();

  if (!tags) return { posts: postsJSON };

  const tagsArray = tags.split(',');
  const posts = postsJSON.filter((post: BlogPost) => {
    if (method === 'some' || method === 'every')
      return tagsArray[method]((tag) => post.tags.includes(tag));
  });

  return { posts, searchParams: tagsArray };
}
