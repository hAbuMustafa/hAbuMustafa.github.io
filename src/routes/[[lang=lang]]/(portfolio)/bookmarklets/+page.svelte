<script lang="ts">
  import {page} from "$app/state"
  import ar from "./ar.svelte"
  import en from "./en.svelte"

  const SvelteComponent = $derived(page.params.lang === "ar" ? ar : en);
</script>

<SvelteComponent/>