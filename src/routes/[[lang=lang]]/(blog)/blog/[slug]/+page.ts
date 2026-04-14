import { posts } from '$lib/blog-articles/';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(
      `../../../../../lib/blog-articles/${params.slug}${
        params.lang && params.lang !== 'en' ? `.${params.lang}` : ''
      }.svelte`
    );

    const meta = posts.find(
      (p) => p.lang === (params.lang || 'en') && p.slug === params.slug
    );

    return {
      content: post.default,
      meta,
    };
  } catch (err) {
    throw error(404, `Couldn't find post with the slug "${params.slug}"`);
  }
}
