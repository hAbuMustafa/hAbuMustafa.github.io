import type { BlogPost } from '$lib/types/blog-posts';

export function formatDate(locale: string, date: string) {
  return new Date(date).toLocaleDateString(locale, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZoneName: 'short',
  });
}

export function filterPosts(
  posts: BlogPost[],
  property: keyof (typeof posts)[0],
  criteria: string | string[],
  method: 'every' | 'some' = 'some'
) {
  if (Array.isArray(posts[0][property])) {
    return posts.filter((post) =>
      (criteria as string[])[method]((criteriaArrItem) =>
        (post[property] as string[]).includes(criteriaArrItem)
      )
    );
  } else {
    return posts.filter((post) => post[property] === criteria);
  }
}

export const languages: Record<
  string,
  {
    native: string;
    name: string;
    native_pronunciation: string;
  }
> = {
  af: {
    native: 'Afrikaans',
    name: 'Afrikaans',
    native_pronunciation: 'af-ri-kahns',
  },
  ar: {
    native: 'العربية',
    name: 'Arabic',
    native_pronunciation: 'al-ʿarabiyyah',
  },
  az: {
    native: 'azərbaycan dili',
    name: 'Azerbaijani',
    native_pronunciation: 'azərbaycan dili',
  },
  be: {
    native: 'беларуская мова',
    name: 'Belarusian',
    native_pronunciation: 'byelaruskaya mova',
  },
  bg: {
    native: 'български език',
    name: 'Bulgarian',
    native_pronunciation: 'bǎlgarski ezik',
  },
  bn: {
    native: 'বাংলা',
    name: 'Bengali',
    native_pronunciation: 'bangla',
  },
  bs: {
    native: 'bosanski jezik',
    name: 'Bosnian',
    native_pronunciation: 'bosanski jezik',
  },
  ca: {
    native: 'català',
    name: 'Catalan',
    native_pronunciation: 'kətəˈlan',
  },
  cs: {
    native: 'čeština',
    name: 'Czech',
    native_pronunciation: 'chesh-tee-nah',
  },
  cy: {
    native: 'Cymraeg',
    name: 'Welsh',
    native_pronunciation: 'kum-ryeg',
  },
  da: {
    native: 'dansk',
    name: 'Danish',
    native_pronunciation: 'dan-sk',
  },
  de: {
    native: 'Deutsch',
    name: 'German',
    native_pronunciation: 'doich',
  },
  el: {
    native: 'ελληνικά',
    name: 'Greek',
    native_pronunciation: 'eliniˈká',
  },
  en: {
    native: 'English',
    name: 'English',
    native_pronunciation: 'ing-glish',
  },
  es: {
    native: 'español',
    name: 'Spanish',
    native_pronunciation: 'es-pah-nyol',
  },
  et: {
    native: 'eesti',
    name: 'Estonian',
    native_pronunciation: 'eesti',
  },
  fa: {
    native: 'فارسی',
    name: 'Persian',
    native_pronunciation: 'fārsi',
  },
  fi: {
    native: 'suomi',
    name: 'Finnish',
    native_pronunciation: 'suo-mi',
  },
  fr: {
    native: 'français',
    name: 'French',
    native_pronunciation: 'frahn-sey',
  },
  ga: {
    native: 'Gaeilge',
    name: 'Irish',
    native_pronunciation: 'gwayl-geh',
  },
  he: {
    native: 'עברית',
    name: 'Hebrew',
    native_pronunciation: 'ivˈrit',
  },
  hi: {
    native: 'हिन्दी',
    name: 'Hindi',
    native_pronunciation: 'hin-dee',
  },
  hr: {
    native: 'hrvatski',
    name: 'Croatian',
    native_pronunciation: 'kro-at-skee',
  },
  hu: {
    native: 'magyar',
    name: 'Hungarian',
    native_pronunciation: 'mah-dyar',
  },
  id: {
    native: 'Bahasa Indonesia',
    name: 'Indonesian',
    native_pronunciation: 'bah-ha-sah in-doe-nay-shah',
  },
  it: {
    native: 'italiano',
    name: 'Italian',
    native_pronunciation: 'ee-tal-yah-no',
  },
  ja: {
    native: '日本語',
    name: 'Japanese',
    native_pronunciation: 'nihongo',
  },
  kn: {
    native: 'ಕನ್ನಡ',
    name: 'Kannada',
    native_pronunciation: 'kan-nah-dah',
  },
  ko: {
    native: '한국어',
    name: 'Korean',
    native_pronunciation: 'han-guk-eo',
  },
  lt: {
    native: 'lietuvių kalba',
    name: 'Lithuanian',
    native_pronunciation: 'lye-tu-vee-oo kal-ba',
  },
  lv: {
    native: 'latviešu valoda',
    name: 'Latvian',
    native_pronunciation: 'lat-vee-shoo va-lo-da',
  },
  mk: {
    native: 'македонски јазик',
    name: 'Macedonian',
    native_pronunciation: 'makedonski jazik',
  },
  ml: {
    native: 'മലയാളം',
    name: 'Malayalam',
    native_pronunciation: 'malayāḷam',
  },
  mr: {
    native: 'मराठी',
    name: 'Marathi',
    native_pronunciation: 'marāṭhī',
  },
  ms: {
    native: 'bahasa Melayu',
    name: 'Malay',
    native_pronunciation: 'bah-ha-sah meh-lah-yoo',
  },
  mt: {
    native: 'Malti',
    name: 'Maltese',
    native_pronunciation: 'mal-tee',
  },
  nl: {
    native: 'Nederlands',
    name: 'Dutch',
    native_pronunciation: 'nay-der-landz',
  },
  no: {
    native: 'norsk',
    name: 'Norwegian',
    native_pronunciation: 'nawrsk',
  },
  pl: {
    native: 'polski',
    name: 'Polish',
    native_pronunciation: 'pole-skee',
  },
  pt: {
    native: 'português',
    name: 'Portuguese',
    native_pronunciation: 'por-too-gaysh',
  },
  ro: {
    native: 'română',
    name: 'Romanian',
    native_pronunciation: 'ro-mah-nah',
  },
  ru: {
    native: 'русский',
    name: 'Russian',
    native_pronunciation: 'roos-key',
  },
  sk: {
    native: 'slovenčina',
    name: 'Slovak',
    native_pronunciation: 'slo-ven-chee-nah',
  },
  sl: {
    native: 'slovenščina',
    name: 'Slovenian',
    native_pronunciation: 'slo-ven-shchi-nah',
  },
  sr: {
    native: 'српски језик',
    name: 'Serbian',
    native_pronunciation: 'serp-ski yeh-zik',
  },
  sv: {
    native: 'svenska',
    name: 'Swedish',
    native_pronunciation: 'svens-kah',
  },
  ta: {
    native: 'தமிழ்',
    name: 'Tamil',
    native_pronunciation: 'tamiḻ',
  },
  te: {
    native: 'తెలుగు',
    name: 'Telugu',
    native_pronunciation: 'telugu',
  },
  th: {
    native: 'ไทย',
    name: 'Thai',
    native_pronunciation: 'thai',
  },
  tr: {
    native: 'Türkçe',
    name: 'Turkish',
    native_pronunciation: 'turk-cheh',
  },
  uk: {
    native: 'українська',
    name: 'Ukrainian',
    native_pronunciation: 'oo-kray-yins’-kah',
  },
  ur: {
    native: 'اردو',
    name: 'Urdu',
    native_pronunciation: 'ur-doo',
  },
  vi: {
    native: 'Tiếng Việt',
    name: 'Vietnamese',
    native_pronunciation: 'tyeng vyet',
  },
  zh: {
    native: '中文',
    name: 'Chinese',
    native_pronunciation: 'zhong-wen',
  },
};
