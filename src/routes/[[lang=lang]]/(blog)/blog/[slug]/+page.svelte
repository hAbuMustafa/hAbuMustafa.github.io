<script lang="ts">
  import { page } from '$app/stores';
  import { formatDate } from '$lib/helpers/utils';

  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:locale" content={$page.params.lang} />
  <!-- <meta property="og:image" content="https://"> -->
  <!-- <meta property="og:type" content="article"> -->
  <!-- <meta name="twitter:card" content="summary_large_image"> -->
  <!-- <meta property="og:url" content="https://"> -->
  <!-- todo: implement other og meta tags -->
</svelte:head>

<article>
  <hgroup>
    <h1 id={data.meta.slug}>
      {data.meta.title}
    </h1>
    <p>
      {formatDate($page.params.lang, data.meta.date)}
    </p>
  </hgroup>

  <div class="blog-post-content">
    <svelte:component this={data.content} />
  </div>
</article>

<style lang="scss">
  hgroup {
    margin-block-start: 3rem;

    & > h1 {
      font-size: 2.5rem;
      margin-block-end: 0;
    }

    & > p {
      margin-block-start: 0;
      color: var(--main-color);
      font-size: 0.75rem;
    }
  }
</style>
