import type { BlogPost } from '$lib/types/blog-posts';

export const prerender = false;

export async function load({ fetch }) {
  const response = await fetch('/api/posts');
  const postsJSON: BlogPost[] = await response.json();
  const arTags = new Set();
  const enTags = new Set();

  postsJSON.forEach((post) => {
    if (post.lang === 'ar') {
      post.tags.forEach((tag) => {
        arTags.add(tag);
      });
    } else {
      post.tags.forEach((tag) => {
        enTags.add(tag);
      });
    }
  });

  return {
    arTags: Array.from(arTags),
    enTags: Array.from(enTags),
  };
}
