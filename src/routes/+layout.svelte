<script lang="ts">
  import { page } from "$app/stores";
  import "./style.css";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
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

<Footer />

<style>
  main {
    min-height: 75dvh;
    position: relative;
  }
</style>
