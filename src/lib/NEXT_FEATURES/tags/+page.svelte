<script lang="ts">
  import { goto } from '$app/navigation';
  import { languages, rtlLanguages } from '$lib/helpers/utils.js';
  import { slide } from 'svelte/transition';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
  let searchTags: string[] = $state([]);
  let matchMethod = $state('some');
</script>

<h1>blog post categories by language</h1>

{#if searchTags.length}
  <form
    onsubmit={(e) => {
      e.preventDefault();
      goto(`/blog/posts?tags=${searchTags.join(',')}&method=${matchMethod}`);
    }}
    class="search-tags"
    transition:slide
  >
    <fieldset class="tags-wrapper">
      <legend>selected search tags</legend>
      {#each searchTags as tag}
        <button
          type="button"
          class="tag"
          class:rtl={/[\u0600-\u06FF]/.test(tag)}
          onclick={() => {
            if (searchTags.includes(tag))
              searchTags = searchTags.filter((t) => t !== tag);
          }}
        >
          {tag}
        </button>
      {/each}
    </fieldset>
    <fieldset>
      <input type="hidden" name="tags" value={searchTags.join(',')} />
      <label>
        Get all posts that contain
        <select name="method" id="method" bind:value={matchMethod}>
          <option value="some">any</option>
          <option value="every">all</option>
        </select>
        of the selected tags.
      </label>
    </fieldset>
    <button type="submit">Find related posts!</button>
  </form>
  <hr />
{/if}

{#each Object.keys(data).filter((key) => /^[a-z]{2}$/.test(key)) as langTag}
  <section>
    <h2>tags in {languages[langTag].name} <small>{data[langTag].length}</small></h2>
    <div class="tags-wrapper" class:rtl={rtlLanguages.includes(langTag)}>
      {#each data[langTag] as tag}
        <button
          class="tag"
          onclick={() => {
            if (!searchTags.includes(tag)) searchTags = [...searchTags, tag];
          }}
          disabled={searchTags.includes(tag)}>{tag}</button
        >
      {/each}
    </div>
  </section>
{/each}

<style>
  .tags-wrapper {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-block: 1rem;
  }

  h2 {
    border-block-end: 2px solid var(--darker-main-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 small {
    font-size: 1rem;
    line-height: 1.25;
    padding-inline: 0.375rem;

    background-color: var(--darker-main-color);
    color: var(--lighter-main-color);

    border-radius: 50%;
  }

  .tags-wrapper button {
    border: none;
    color: unset;
    font-weight: 700;
  }

  .search-tags {
    background-color: var(--lighter-main-color-bg);
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin-block-end: 1rem;
  }

  section {
    background-color: var(--lighter-main-color-bg);
    padding: 0.5rem;
    border-radius: 4px;
  }

  section:not(:first-of-type) {
    margin-block-start: 1rem;
  }

  fieldset {
    text-align: center;
  }

  fieldset .tag:hover {
    background-color: lightcoral;
    color: white;
    font-weight: normal;
  }

  fieldset .tag:hover::after {
    content: '❌';
    font-size: 0.65rem;
  }

  h2 {
    margin-block: 0.5rem;
  }

  legend {
    text-transform: capitalize;
  }

  section .tag {
    padding: 4px 8px;
    border: 1px solid var(--lighter-main-color-bg);
  }

  section .tag:not(:disabled):is(:hover, :focus) {
    background-color: var(--lighter-main-color-bg);
    border: 1px solid var(--main-color);
  }

  section .tag:disabled {
    filter: opacity(0.5);
  }

  button[type='submit'] {
    border: none;
    border-radius: 4px;
    padding-block: 0.25rem;
    background-color: var(--darker-main-color);
    color: var(--lighter-main-color-bg);
  }

  button[type='submit']:is(:hover, :focus) {
    background-color: var(--main-color);
    color: white;
  }
</style>
