<script lang="ts">
  export let open = false;
  export let styles = '';
</script>

<details {open} style={styles}>
  <summary>
    <slot name="title">View Code</slot>
  </summary>
  <slot />
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
