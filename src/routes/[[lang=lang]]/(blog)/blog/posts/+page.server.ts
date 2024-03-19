import { filterPosts } from '$lib/helpers/utils';
import type { BlogPost } from '$lib/types/blog-posts.js';

export async function load({ url, params, fetch }) {
  const lang = params.lang;
  const tags = url.searchParams.get('tags');
  const method = (url.searchParams.get('method') as 'some' | 'every') ?? 'some';

  const response = await fetch(`/api/posts`);
  let posts = await response.json();

  if (lang) {
    posts = filterPosts(posts, 'lang', lang);
  } else if (!lang && !tags?.length) {
    posts = filterPosts(posts, 'lang', 'en');
  }

  if (tags) {
    posts = filterPosts(posts, 'tags', tags.split(','), method);
  }

  return { posts, searchParams: tags?.split(',') };
}
