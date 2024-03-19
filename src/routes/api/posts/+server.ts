import { filterPosts } from '$lib/helpers/utils.js';
import type { BlogPost, Frontmatter } from '$lib/types/blog-posts';
import { json } from '@sveltejs/kit';

async function getPosts(
  lang: string | null,
  tags?: string[],
  method: 'some' | 'every' = 'some'
) {
  let posts: BlogPost[] = [];

  const paths = import.meta.glob('/src/lib/blog-articles/*.svx', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path
      .split('/')
      .at(-1)
      ?.replace('.svx', '')
      .replace(/\.[a-z]{2}$/, '');

    if (file && slug && typeof file === 'object' && 'metadata' in file) {
      const metadata = file.metadata as Frontmatter;
      const post = { ...metadata, slug, lang: metadata.lang ?? 'en' } satisfies BlogPost;
      post.published && posts.push(post);
    }
  }

  if (lang) {
    posts = filterPosts(posts, 'lang', lang);
  } else if (!lang && !tags?.length) {
    posts = filterPosts(posts, 'lang', 'en');
  }

  if (tags) {
    posts = filterPosts(posts, 'tags', tags, method);
  }

  posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function GET({ url }) {
  const posts = await getPosts(
    url.searchParams.get('lang'),
    url.searchParams.get('tags')?.split(','),
    (url.searchParams.get('method') as 'some' | 'every') ?? 'some'
  );

  console.log(url.searchParams.get('lang'));
  return json(posts);
}
