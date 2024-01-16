<nav>
  <ul>
    <li><a href="/">Home</a></li>
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
  }

  ul {
    list-style: none;
  }

  nav > ul {
    padding: 0.5rem;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px double teal;
    box-shadow: 0px -0.5rem 20px teal;

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

  :is(li, a):hover {
    background-color: teal;
    color: beige;
  }
</style>
