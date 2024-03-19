<script lang="ts">
  // inspired from Josh W. Comeau "https://www.joshwcomeau.com/snippets/react-components/visually-hidden/"

  import { onMount } from 'svelte';

  let forceShow = false;

  onMount(() => {
    if (process.env.NODE_ENV !== 'production') {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Alt') {
          forceShow = true;
        }
      }
      function handleKeyUp(e: KeyboardEvent) {
        if (e.key === 'Alt') {
          forceShow = false;
        }
      }

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  });
</script>

{#if forceShow}
  <slot />
{:else}
  <span {...$$props}>
    <slot />
  </span>
{/if}

<style>
  span {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1;
    width: 1;
    margin: -1;
    padding: 0;
    border: 0;
  }
</style>
