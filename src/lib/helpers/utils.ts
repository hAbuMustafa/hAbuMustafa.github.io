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
  criteria: string | string[],
  method: 'every' | 'some' = 'some'
) {
  if (Array.isArray(posts[0][property])) {
    return posts.filter((post) =>
      (criteria as string[])[method]((criteriaArrItem) =>
        (post[property] as string[]).includes(criteriaArrItem)
      )
    );
  } else {
    return posts.filter((post) => post[property] === criteria);
  }
}
