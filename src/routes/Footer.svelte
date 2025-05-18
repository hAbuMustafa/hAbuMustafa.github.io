<script>
  import info from '$lib/info';
</script>

<footer>
  <p>
    Follow me on
    <a
      href="https://twitter.com/intent/user?user_id=96835066"
      target="_blank"
      title="X or Twitter, whatever you like to call it"
    >
      twitter
    </a>,
    <a href="https://bsky.app/profile/{info.url.replace('https://', '')}" target="_blank"
      >blue sky</a
    >, or hit me on
    <a rel="me" href="https://onvo.me/@Hos" target="_blank">onvo</a>.
  </p>
</footer>

<style>
  footer {
    min-height: 8rem;
    color: var(--text-color);
    background: var(--main-color);
    display: grid;
    place-content: center;
    margin-block-start: 1rem;

    line-height: 1.35rem;
    text-align: center;

    padding-inline: 0.5rem;
  }
</style>
