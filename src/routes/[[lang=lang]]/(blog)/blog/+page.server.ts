import { getBlogPostList } from '$lib/helpers/blog-posts-helpers';
import type { BlogPost } from '$lib/types/blog-posts.js';

const translations = {
  title: {
    en: 'Blog Posts',
    ar: 'المقالات',
  },
  no_results_found: {
    en: 'No results found',
    ar: 'لم يتم العثور على نتائج',
  },
  try: {
    en: 'Try',
    ar: 'حاول أن تقوم بـ',
  },
  clearing: {
    en: 'clearing',
    ar: 'مسح',
  },
  search_params: {
    en: 'search params',
    ar: 'كلمات البحث',
  },
  currently: {
    en: 'currently',
    ar: 'حاليا',
  },
  q: {
    en: '?',
    ar: '؟',
  },
};

export async function load({ params, url, fetch }) {
  const response = await fetch('api/posts');
  const postsJSON: BlogPost[] = await response.json();
  const postsForLang = postsJSON.filter((post) =>
    // if the user navigated to a specified language url, only show posts in that language. Otherwise, default to english posts.
    !params.lang
      ? !post.slug.includes('.')
      : params.lang === 'en'
      ? !post.slug.match(/\.[a-z]{2}$/)
      : post.slug.endsWith(`.${params.lang}`)
  );

  const queryTags = url.searchParams.get('tags');
  const queryTagsArray = queryTags?.split(',') || [];

  const posts = queryTags
    ? postsForLang.filter((post) =>
        post.tags.some((postTag) => queryTagsArray.includes(postTag))
      )
    : postsForLang;

  return {
    posts: posts?.map((post) => ({
      ...post,
      slug: post.slug.replace(/\.[a-z]{2}$/, ''),
    })),
    // title: translations.title[(params.lang as keyof typeof translations.title) || 'en'],
    translations: Object.fromEntries(
      Object.entries(translations).map(([key, obj]) => [
        key,
        obj[(params.lang as keyof typeof translations.title) || 'en'],
      ])
    ),
    searchParams: queryTagsArray,
  };
}
