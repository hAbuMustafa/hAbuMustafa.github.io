<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { languages, usedLanguages } from '$lib/helpers/utils';

  let lang = $state(page.params.lang ?? 'en');

  function handleLanguageChange() {
    const nextPath = page.params.lang
      ? page.url.pathname.replace(`/${page.params.lang}`, `/${lang}`)
      : `/${lang}${page.url.pathname}`;

    // todo: trigger page reload
    goto(nextPath);
  }
</script>

<select
  name="lang"
  aria-label="language select"
  bind:value={lang}
  onchange={handleLanguageChange}
>
  {#each usedLanguages as lang (lang)}
    <option value={lang}>{languages[lang].native}</option>
  {/each}
</select>

<style>
  select {
    background-color: transparent;
    border: none;
    color: inherit;
  }

  select option {
    background-color: teal;
    font-weight: bold;
  }
</style>
