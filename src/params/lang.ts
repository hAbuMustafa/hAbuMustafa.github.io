import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
  const supportedLanguages = ['en', 'ar'];
  return supportedLanguages.includes(param);
};
