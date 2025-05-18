<script lang="ts">
  interface Props {
    open?: boolean;
    styles?: string;
    title?: import('svelte').Snippet;
    children?: import('svelte').Snippet;
  }

  let {
    open = false,
    styles = '',
    title,
    children
  }: Props = $props();
</script>

<details {open} style={styles}>
  <summary>
    {#if title}{@render title()}{:else}View Code{/if}
  </summary>
  {@render children?.()}
</details>

<style>
  details {
    padding: 1rem;
    border-radius: 0.25rem;
    text-align: start;

    summary {
      line-height: 2rem;
      border-radius: 0.25rem;
    }

    &[open] > summary::marker {
      content: '📖 ';
    }

    &:not([open]) > summary::marker {
      content: '📘 ';
    }

    summary::before {
      content: '{ ';
    }

    summary::after {
      content: ' }';
    }

    &:has(summary:hover) {
      backdrop-filter: brightness(90%);

      summary {
        background-color: var(--lighter-main-color);
      }
    }
  }
</style>
