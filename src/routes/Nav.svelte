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
    background-color: white;
    position: sticky;
    top: 0;
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
    margin-top: 0;
    border-bottom: 1px double teal;
    box-shadow: 0px -0.5rem 20px teal;

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

      & a {
        text-decoration: none;
      }
    }
  }

  li > ul {
    padding: 0.5rem;

    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid gray;
    border-radius: 0.25rem;

    background-color: beige;
  }

  li:not(:hover) > ul {
    display: none;
  }

  a:not(:has(#hosam-avatar)):hover {
    background-color: teal;
    color: beige;
  }

  @keyframes vanish-outline {
    0% {
      outline: 2px dotted teal;
    }
    50% {
      outline: 2px dashed teal;
    }
    100% {
      outline: 2px solid teal;
    }
  }
</style>
