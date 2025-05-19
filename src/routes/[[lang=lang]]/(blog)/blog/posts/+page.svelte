<script lang="ts">
  import { page } from '$app/state';
  import BlogPostExcerpt from '../BlogPostExcerpt.svelte';
  import RSS from 'svelte-material-icons/RssBox.svelte';

  const tags = page.url.searchParams.get('tags');
  const method = page.url.searchParams.get('method');

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<hgroup>
  <h1>
    blog posts

    {#if data.searchParams?.length}
      <small>
        ↳ found for the tags
        {#each data.searchParams as tag (tag)}
          <span class="tag" class:rtl={/[\u0600-\u06FF]/.test(tag)}>{tag}</span>
        {/each}
      </small>
    {/if}
  </h1>
  <!-- using `data-sveltekit-reload` since without it it gives a "Slug 'feed' not found" error -->
  <!-- not using `lang` param in the link since the user migh pick tags from different languages -->
  <a
    class="subscribe"
    href={`${page.url.pathname.replace(/\/posts$/, '/feed')}${tags ? `?tags=${tags}` : ''}${method && tags ? `&method=${method}` : ''}`}
    data-sveltekit-reload
  >
    <span
      >Subscribe to this {#if tags}<em>custom</em>{/if} feed!</span
    >
    <RSS color="orange" size="1.5em" /></a
  >
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
        {/each}){#if page.url.searchParams.get('method') === 'every'}
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

  hgroup {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  hgroup small {
    margin-inline-start: 1rem;
    font-size: 0.75rem;
    font-weight: normal;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

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

  a.subscribe {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.25rem;
    height: max-content;
    text-decoration: none;
  }

  a.subscribe:is(:hover, :focus) {
    background-color: var(--lighter-main-color);
  }
</style>
