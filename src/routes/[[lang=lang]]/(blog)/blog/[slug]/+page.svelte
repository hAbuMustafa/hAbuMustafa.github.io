<script lang="ts">
<<<<<<< HEAD
  import { page } from "$app/state";
  import { formatDate } from "$lib/helpers/utils";
=======
  import { page } from '$app/state';
  import { formatDate } from '$lib/helpers/utils';
  import type { BlogPost } from '$lib/types/blog-posts';
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5

  interface Props {
    data: { content: any; meta: BlogPost };
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:locale" content={page.params.lang} />
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
<<<<<<< HEAD
      {formatDate(page.params.lang || "en", data.meta.date)}
=======
      {formatDate(page.params.lang ?? 'en', data.meta.date)}
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5
    </p>
  </hgroup>

  <div class="blog-post-content">
    <data.content />
  </div>
</article>

<style>
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
