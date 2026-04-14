<script lang="ts">
<<<<<<< HEAD
  import { page } from "$app/stores";
  import "./style.css";
  import Nav from "./Nav.svelte";
  import PageTranstition from "./PageTranstition.svelte";
  import info from "$lib/info";
  import { rtlLanguages } from "$lib/helpers/utils";

  function direction(node: HTMLBodyElement) {
    node.dir = rtlLanguages.includes($page.params.lang) ? "rtl" : "ltr";
=======
  import { page } from '$app/state';
  import './style.css';
  import Nav from '$lib/components/Nav.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import info from '$lib/info';
  import { rtlLanguages } from '$lib/helpers/utils';

  function direction(node: HTMLBodyElement) {
    node.dir =
      page.params.lang && rtlLanguages.includes(page.params.lang) ? 'rtl' : 'ltr';
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5
  }

  interface Props {
    data: any;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
</script>

<svelte:head>
  <title>
<<<<<<< HEAD
    {$page.data.pageTitle
      ? `${$page.data.pageTitle} - ${info.author}`
      : info.title}
=======
    {page.data.pageTitle ? `${page.data.pageTitle} - ${info.author}` : info.title}
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5
  </title>
  {#if process.env.NODE_ENV === "development"}
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
