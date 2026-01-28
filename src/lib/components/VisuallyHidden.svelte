<script lang="ts">
  // inspired from Josh W. Comeau "https://www.joshwcomeau.com/snippets/react-components/visually-hidden/"

  import { onMount } from 'svelte';
  interface Props {
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let { ...props }: Props = $props();

  let forceShow = $state(false);

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
  {@render props.children?.()}
{:else}
  <span {...props}>
    {@render props.children?.()}
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
