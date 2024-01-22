export interface Term {
  term: string;
  wAR: string;
  wEN: string;
}

export async function load({ fetch }) {
  return {
    pageTitle: "I18n Assistant",
    terms: (await fetch(
      "https://raw.githubusercontent.com/softvenue/i18n/master/i18n.json"
    ).then((response) => response.json())) as Term[],
  };
}
