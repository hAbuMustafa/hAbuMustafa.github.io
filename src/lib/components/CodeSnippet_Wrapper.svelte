<script lang="ts">
    export let open=false;
</script>

<details {open}>
  <summary>
    <slot name="title">View Code</slot>
  </summary>
  <slot />
</details>

<style lang="scss">
  details {
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
  }
</style>
