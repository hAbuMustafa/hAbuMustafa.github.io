<script lang="ts">
  interface Props {
    href: string;
  }

  let { href }: Props = $props();
</script>

<sup title="What is this?">
  <a {href}>
    <small>?</small>
  </a>
</sup>

<style>
  a {
    text-decoration: none;
    padding-inline: 0.125rem;
  }
</style>
