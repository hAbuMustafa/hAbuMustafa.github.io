import { error } from '@sveltejs/kit';

// bug: lang filtering is causing posts fetch to fail if not on the corresponding language route
export async function load({ params }) {
  try {
    const post = await import(
      `../../../../../lib/blog-articles/${params.slug}${
        params.lang ? `.${params.lang}` : ''
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
