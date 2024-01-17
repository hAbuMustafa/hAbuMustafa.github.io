<script lang="ts">
  function fillDots(node: HTMLSpanElement) {
    setInterval(() => {
      node.textContent =
        node.textContent!.length === 3 ? "" : node.textContent + ".";
    }, 1000);
  }
</script>

<div class="wrapper">

  <h1>Work in progress<span use:fillDots>...</span></h1>
  <p>
    This website is currently a work on progress. You can suddenly find changes
    popping everywhere.
  </p>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;

    & p {
      text-align: center;
    }
  }


</style>
