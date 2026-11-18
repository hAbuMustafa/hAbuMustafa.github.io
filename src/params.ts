import { defineParams } from '@sveltejs/kit/params';
import { usedLanguages } from '#lib/helpers/utils.ts';

const matchLang = (param: string) => {
  return usedLanguages.includes(param);
};

const matchPostSlug = (param: string) => {
  return param !== 'feed';
};

export const params = defineParams({
  lang: (param) => (matchLang(param) ? param : undefined),
  postSlug: (param) => (matchPostSlug(param) ? param : undefined),
});
