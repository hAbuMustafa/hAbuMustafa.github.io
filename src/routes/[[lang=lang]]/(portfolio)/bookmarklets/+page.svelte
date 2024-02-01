<script lang="ts">
  import {page} from "$app/stores"
  import ar from "./ar.svelte"
  import en from "./en.svelte"
</script>

<svelte:component this={$page.params.lang === "ar" ? ar : en}/>