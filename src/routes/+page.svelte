<script lang="ts">
  function fillDots(node: HTMLSpanElement) {
    setInterval(() => {
      node.textContent =
        node.textContent!.length === 3 ? "" : node.textContent + ".";
    }, 1000);
  }
</script>

<div class="wrapper">
  <img
    id="hosam-avatar"
    src="/hosam_profile.jpg"
    alt="Hosam Hamdy Vertical Half Profile"
    width="1080px"
    height="1080px"
  />
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

  #hosam-avatar {
    width: 20svb;
    height: 20svb;
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
    outline: 4px dashed teal;
    outline-offset: 4px;
    animation: vanish-outline 2s infinite alternate-reverse;
  }

  @keyframes vanish-outline {
    0% {
      outline: 6px dotted teal;
    }
    50% {
      outline: 4px dashed teal;
    }
    100% {
      outline: 4px solid teal;
    }
  }
</style>
