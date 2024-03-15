<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Moon, Sun } from 'lucide-svelte';
  import { theme, toggleTheme } from '$lib/stores/theme';
</script>

{#key $theme}
  <button on:click={toggleTheme} in:fly={{ y: 10 }}>
    <svelte:component this={$theme === 'dark' ? Sun : Moon} />
    <span style:text-transform="capitalize">{$theme}</span>
  </button>
{/key}

<style>
  button {
    padding: 0;
    font-weight: inherit;
    color: inherit;
    background: none;
    border: none;
    box-shadow: none;
    overflow: hidden;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
