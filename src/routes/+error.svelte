<script lang="ts">
  import { page } from '$app/stores';
</script>

<hgroup class="error">
  <h1>
    <span>{$page.status}:</span>
    {$page.error?.message}
  </h1>
</hgroup>

<style>
  .error {
    display: grid;
    place-content: center;
    min-height: max-content;
    height: 90vh;
    text-align: center;
  }

  h1 > span {
    display: block;
  }
</style>
