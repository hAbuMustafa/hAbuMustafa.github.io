import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(
      `../../../../../lib/blog-articles/${params.slug}${
        params.lang && params.lang !== 'en' ? `.${params.lang}` : ''
      }.svx`
    );
    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (err) {
    throw error(404, `Couldn't find post with the slug "${params.slug}"`);
  }
}
