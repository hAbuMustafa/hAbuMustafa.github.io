<script lang="ts">
  import { fly } from 'svelte/transition';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import Moon from 'svelte-material-icons/WeatherNight.svelte';
  import Sun from 'svelte-material-icons/WhiteBalanceSunny.svelte';
  import VisuallyHidden from '$lib/components/VisuallyHidden.svelte';
</script>

{#key $theme}
  <button type="button" on:click={toggleTheme} in:fly={{ y: 10 }}>
    <svelte:component this={$theme === 'dark' ? Moon : Sun} size={'1.5rem'} />
    <VisuallyHidden>
      {$theme}
    </VisuallyHidden>
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
    min-width: 3rem;
    min-height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>
