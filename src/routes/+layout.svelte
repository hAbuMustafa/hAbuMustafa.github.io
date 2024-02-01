<script lang="ts">
  import { page } from '$app/stores';
  import './style.css';
  import Nav from './Nav.svelte';
</script>

<svelte:head>
  <title>
    {$page.data.pageTitle
      ? `${$page.data.pageTitle} - Hosam Hamdy`
      : "Hosam Hamdy's hideout"}
  </title>
</svelte:head>

<Nav />

<main>
  <slot />
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
