<script lang="ts">
  import { page } from '$app/stores';

  export let data;
</script>

<pre>
  {JSON.stringify(data.meta, null, 2)}
</pre>

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
      Published at {new Date(data.meta.date).toLocaleDateString($page.params.lang, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        timeZoneName: 'short',
      })}
    </p>
  </hgroup>
</article>
