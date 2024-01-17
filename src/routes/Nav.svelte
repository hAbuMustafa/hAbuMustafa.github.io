<nav>
  <ul>
    <li>
      <a href="/">
        <img
          id="hosam-avatar"
          src="/hosam_profile.jpg"
          alt="Hosam Hamdy Vertical Half Profile"
          title="Home"
          width="32"
          height="32"
        />
      </a>
    </li>
    <li><a href="/blog">Blog</a></li>
    <li>
      Projects <ul>
        <li><a href="/i18n-finder">Internationalization Map</a></li>
        <li>
          <a href="/bookmarklets">Bookmarklets</a>
        </li>
      </ul>
    </li>
    <li><a href="/voice-over">Voice Over</a></li>
  </ul>
</nav>

<style>
  nav {
    background-color: var(--main-color);
    position: sticky;
    inset-block-start: 0;
    padding: 0;
  }

  #hosam-avatar {
    object-fit: cover;
    object-position: 100% 0;
    border-radius: 50%;
    outline-offset: 4px;
    animation: vanish-outline 1s infinite alternate-reverse;
  }

  ul {
    list-style: none;
  }

  nav > ul {
    padding: 0.5rem;
    margin-block-start: 0;
    border-block-end: 1px double var(--main-color);
    box-shadow: 0px -0.5rem 4rem var(--main-color);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;

    & > li:has(> a > img) {
      justify-self: start;
    }

    & > li {
      display: inline;
      position: relative;
      font-weight: bold;
      color: var(--text-color);

      & a {
        text-decoration: none;
        color: var(--text-color);
      }
    }
  }

  li > ul {
    padding: 0.5rem;

    position: absolute;
    inset-block-start: 100%;
    inset-inline-start: 0;
    border: 1px solid var(--lighter-main-color);
    border-radius: 0.25rem;

    background-color: var(--darker-main-color);
  }

  li:not(:hover) > ul {
    display: none;
  }

  a:not(:has(#hosam-avatar)):hover {
    background-color: var(--accent-color);
    color: var(--text-color);
  }

  @keyframes vanish-outline {
    0% {
      outline: 2px dotted var(--text-color);
    }
    50% {
      outline: 2px dashed var(--text-color);
    }
    100% {
      outline: 2px solid var(--text-color);
    }
  }
</style>
