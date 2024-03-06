import type { Frontmatter, BlogPost } from '$lib/types/blog-posts';
import { listFiles, getFile } from '@mongez/fs';
import matter from 'gray-matter';

const articlesFolder = './src/lib/blog-articles';

export function getBlogPostList() {
  const fileNames = listFiles(articlesFolder);

  const blogPosts: BlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = getFile(`${articlesFolder}/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.svx', ''),
      ...(frontmatter as Frontmatter),
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export function loadBlogPost(slug: string) {
  let rawContent;
  try {
    rawContent = getFile(`${articlesFolder}/${slug}.svx`);
  } catch (err) {
    return undefined;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}
