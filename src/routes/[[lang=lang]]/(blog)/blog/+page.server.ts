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

export async function load({ params, fetch }) {
  const response = await fetch(`/api/posts?lang=${params.lang ?? 'en'}`);
  const postsJSON: BlogPost[] = await response.json();

  return {
    posts: postsJSON,
    // title: translations.title[(params.lang as keyof typeof translations.title) || 'en'],
    translations: Object.fromEntries(
      Object.entries(translations).map(([key, obj]) => [
        key,
        obj[(params.lang as keyof typeof translations.title) || 'en'],
      ])
    ),
  };
}
