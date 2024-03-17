<script lang="ts">
  import { goto } from '$app/navigation';
  import { slide } from 'svelte/transition';

  export let data;
  let searchTags: string[] = [];
  let matchMethod = 'some';
</script>

<h1>blog post categories by language</h1>

{#if searchTags.length}
  <form
    on:submit|preventDefault={() => {
      goto(`/blog/posts?tags=${searchTags.join(',')}&method=${matchMethod}`);
    }}
    class="search-tags"
    transition:slide
  >
    <fieldset class="wrapper">
      <legend>selected search tags</legend>
      {#each searchTags as tag}
        <button
          type="button"
          class="tag"
          class:rtl={/[\u0600-\u06FF]/.test(tag)}
          on:click={() => {
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

{#each Object.keys(data).filter((key) => /Tags$/.test(key)) as langTag}
  <section>
    <h2>tags under "{langTag.replace(/Tags$/, '')}" language</h2>
    <div class="tags-wrapper" class:rtl={langTag.substring(0, 2) === 'ar'}>
      {#each data[langTag] as tag}
        <button
          class="tag"
          on:click={() => {
            if (!searchTags.includes(tag)) searchTags = [...searchTags, tag];
          }}>{tag}</button
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
    text-decoration: underline;
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
</style>
