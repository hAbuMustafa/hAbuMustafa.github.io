import { usedLanguages } from '$lib/helpers/utils';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
  const supportedLanguages = usedLanguages;
  return supportedLanguages.includes(param);
};
