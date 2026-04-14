<script>
  import info from '$lib/info';
</script>

<h2>Hey, There!</h2>
<p>
  My name is <strong>Hosam</strong>, and I'm a <strong>Frontend Developer</strong>,
  <strong>Voice-Over Artist</strong>, and a hobbyist <strong>Tennis player</strong>.
</p>
<p>
  I've made a lot of fullstack projects to solve most of my pet-peeves about work
  environments and as a way to solve day-to-day work challenges, once and for all.
</p>
<p>
  You can checkout my <a href="/blog/posts">blog</a>, or have a quick look on some of the
  simple published projects on my <a href="/portfolio">portfolio</a>.
</p>

<footer>
  <p>
    Follow me on
    <a href="https://bsky.app/profile/{info.url.replace('https://', '')}" target="_blank"
      >blue sky</a
    >, or hit me on
    <a rel="me" href="https://onvo.me/@Hos" target="_blank">onvo</a>.
  </p>
  <p>Or, subscribe to the <a href="/blog/feed">RSS feed</a> of my blog.</p>
</footer>

<style>
  footer {
    position: fixed;
    min-width: 100vw;
    inset-inline-start: 0;
    inset-block-end: 0;
    min-height: 8rem;
    color: var(--text-color);
    background: var(--main-color);
    place-content: center;
    margin-block-start: 1rem;

    line-height: 1.35rem;
    text-align: center;

    padding-inline: 0.5rem;
  }
</style>
