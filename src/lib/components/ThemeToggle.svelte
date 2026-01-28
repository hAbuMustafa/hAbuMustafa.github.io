<script lang="ts">
  import { fly } from 'svelte/transition';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { Moon } from '@lucide/svelte';
  import { Sun } from '@lucide/svelte';
  import VisuallyHidden from '$lib/components/VisuallyHidden.svelte';

  const SvelteComponent = $derived($theme === 'dark' ? Moon : Sun);
</script>

{#key $theme}
  <button type="button" onclick={toggleTheme} in:fly={{ y: 10 }}>
    <SvelteComponent size={'1.5rem'} />
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
