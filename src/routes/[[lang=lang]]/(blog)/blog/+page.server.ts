import { getBlogPostList } from '$lib/helpers/blog-posts-helpers';

export function load({ params }) {
  const blogPostList = getBlogPostList().filter((post) =>
    params.lang === 'ar' ? post.slug.endsWith(`.ar`) : !post.slug.includes('.')
  );

  return { blogPostList };
}
