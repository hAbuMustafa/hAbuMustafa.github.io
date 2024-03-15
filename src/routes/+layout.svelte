<script lang="ts">
  import { page } from '$app/stores';
  import './style.css';
  import Nav from './Nav.svelte';
  import PageTranstition from './PageTranstition.svelte';

  function direction(node: HTMLBodyElement) {
    node.dir = $page.params.lang === 'ar' ? 'rtl' : 'ltr';
  }

  export let data;
</script>

<svelte:head>
  <title>
    {$page.data.pageTitle
      ? `${$page.data.pageTitle} - Hosam Hamdy`
      : "Hosam Hamdy's hideout"}
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
  <PageTranstition url={data.url}>
    <slot />
  </PageTranstition>
</main>

<style lang="scss">
  main {
    position: relative;
    min-height: 85lvh;
    padding-inline: 1rem;

    @media (min-width: 768px) {
      padding-inline: 15vw;
    }
  }
</style>
