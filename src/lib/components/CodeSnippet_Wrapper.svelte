<script lang="ts">
  export let open = false;
</script>

<details {open}>
  <summary>
    <slot name="title">View Code</slot>
  </summary>
  <slot />
</details>

<style lang="scss">
  details {
    summary {
      margin-block-start: -0.5rem;
      line-height: 2rem;
    }

    &[open] > summary::marker {
      content: "📖 ";
    }

    &:not([open]) > summary::marker {
      content: "📘 ";
    }

    summary::before {
      content: "{ ";
    }

    summary::after {
      content: " }";
    }

    summary:hover {
      backdrop-filter: brightness(90%);
    }
  }
</style>
