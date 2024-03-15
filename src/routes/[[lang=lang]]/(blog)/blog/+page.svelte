<script lang="ts">
  import { page } from '$app/stores';
  import BlogPostExcerpt from './BlogPostExcerpt.svelte';

  export let data;
</script>

<h1>{data.translations.title}</h1>
<main>
  {#if data.posts.length === 0}
    <p>
      {data.translations.no_results_found}.
      <!-- {#if data.searchParams.length > 0}
        {data.translations.try}
        <a href="{$page.params.lang ? `/${$page.params.lang}` : ''}/blog"
          >{data.translations.clearing}</a
        >
        {data.translations.search_params}{data.translations.q} ({data.translations
          .currently}: {data.searchParams.join(', ')})
      {/if} -->
    </p>
  {:else}
    {#each data.posts as post}
      <BlogPostExcerpt {post} />
    {/each}
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
</style>
