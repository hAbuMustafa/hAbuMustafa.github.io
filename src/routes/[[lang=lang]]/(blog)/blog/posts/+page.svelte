<script lang="ts">
  import { page } from '$app/stores';
  import BlogPostExcerpt from '../BlogPostExcerpt.svelte';

  export let data;
</script>

<hgroup>
  <h1>blog posts</h1>
  {#if data.searchParams?.length}
    <small>
      ↳ found for the tags
      {#each data.searchParams as tag (tag)}
        <span class="tag" class:rtl={/[\u0600-\u06FF]/.test(tag)}>{tag}</span>
      {/each}
    </small>
  {/if}
</hgroup>

<main>
  {#if data.posts.length}
    {#each data.posts as post (`${post.slug}.${post.lang ?? 'en'}`)}
      <BlogPostExcerpt {post} />
    {/each}
  {:else}
    <div class="no-results">
      <p class="message">No results found for the specified filters.</p>
      <p class="suggestions">
        Try
        <a href="/blog/posts"> clearing search paramters </a>
        (currently: {#each data.searchParams ?? [] as tag (tag)}
          <span class="tag" class:rtl={/[\u0600-\u06FF]/.test(tag)}>{tag}</span>
        {/each}){#if $page.url.searchParams.get('method') === 'every'}
          , or <a href="/blog/posts?tags={data.searchParams?.join(',')}&method=some"
            >changing the search method to <b>any</b></a
          > to include posts that contain at least one of the specified tags.
        {/if}.
      </p>
    </div>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-block-start: 1rem;
  }

  h1 {
    margin-block-end: 0;
  }

  hgroup small {
    margin-inline-start: 1rem;
    display: flex;
    gap: 0.25rem;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .no-results .message {
    font-size: 3rem;
  }

  .no-results .suggestions {
    font-size: 1.5rem;
  }
</style>
