<script lang="ts">
  import { page } from '$app/state';
  import './style.css';
  import Nav from '$lib/components/Nav.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import info from '$lib/info';
  import { rtlLanguages } from '$lib/helpers/utils';

  function direction(node: HTMLBodyElement) {
    node.dir = rtlLanguages.includes(page.params.lang) ? 'rtl' : 'ltr';
  }

  interface Props {
    data: any;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
</script>

<svelte:head>
  <title>
    {page.data.pageTitle ? `${page.data.pageTitle} - ${info.author}` : info.title}
  </title>
  {#if process.env.NODE_ENV === 'development'}
    <link rel="icon" href="/favicon_dev.png" />
  {:else}
    <link rel="icon" href="/favicon.png" />
  {/if}
</svelte:head>

<svelte:body use:direction />

<Nav />

<main>
  <PageTransition url={data.url}>
    {@render children?.()}
  </PageTransition>
</main>

<style>
  main {
    position: relative;
    min-height: 85lvh;
    padding-inline: 1rem;

    @media (min-width: 768px) {
      padding-inline: 15vw;
    }
  }
</style>
