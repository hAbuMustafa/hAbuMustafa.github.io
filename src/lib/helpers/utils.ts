import type { BlogPost } from '$lib/types/blog-posts';

export function formatDate(locale: string, date: string) {
  return new Date(date).toLocaleDateString(locale, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZoneName: 'short',
  });
}

export function filterPosts(
  posts: BlogPost[],
  property: keyof (typeof posts)[0],
  criteria: string,
  method?: 'every' | 'some'
) {
  if (method) {
    return posts.filter((post) => post.tags[method]((tag: string) => tag === criteria));
  } else {
    return posts.filter((post) => post[property] === criteria);
  }
}
