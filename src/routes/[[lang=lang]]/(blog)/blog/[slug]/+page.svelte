<script lang="ts">
  import { page } from '$app/stores';
  import { formatDate } from '$lib/helpers/utils';

  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1>
      {data.meta.title}
    </h1>
    <p>
      Published at {formatDate($page.params.lang, data.meta.date)}
    </p>
  </hgroup>
</article>
