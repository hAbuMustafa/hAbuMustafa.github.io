import { getBlogPostList } from '$lib/helpers/blog-posts-helpers';

export function load({ params }) {
  const blogPostList = getBlogPostList().filter((post) =>
    // if the user navigated to a specified language url, only show posts in that language. Otherwise, default to english posts.
    !params.lang ? !post.slug.includes('.') : post.slug.endsWith(`.${params.lang}`)
  );

  return { blogPostList };
}
