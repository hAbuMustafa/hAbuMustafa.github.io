import type { BlogPost } from '$lib/types/blog-posts';

export async function load({ fetch }) {
  const response = await fetch('/api/posts');
  const postsJSON: BlogPost[] = await response.json();

  let tagsByLang = {} as Record<string, Set<string> | string[]>;

  postsJSON.forEach((post: BlogPost) => {
    if (tagsByLang[post.lang ?? 'en']) {
      post.tags.forEach((tag) => {
        (tagsByLang[post.lang ?? 'en'] as Set<string>).add(tag);
      });
    } else {
      tagsByLang[post.lang ?? 'en'] = new Set([...post.tags]);
    }
  });

  tagsByLang = Object.fromEntries(
    Object.entries(tagsByLang).map(
      ([lang, tags]) => [lang, Array.from(tags)] as [string, string[]]
    )
  );

  return tagsByLang as Record<string, string[]>;
}
