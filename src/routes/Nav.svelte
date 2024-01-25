<script lang="ts">
  interface SitemapT {
    text: string;
    href: string;
  }

  interface SitemapSublistT {
    label: string;
    list: SitemapT[];
  }

  const sitemap: (SitemapT | SitemapSublistT)[] = [
    { text: 'Blog', href: '/blog' },
    {
      label: 'Projects',
      list: [
        { text: 'Voice-Over', href: '/voice-over' },
        { text: 'Internationalization Map', href: '/i18n-finder' },
        { text: 'Bookmarklets', href: '/bookmarklets' },
        { text: 'Vividus', href: '/vividus' },
        { text: 'Extend Arabic Query', href: '/extend-arabic-query' },
      ],
    },
  ];

  function isSitemapItem(item: SitemapT | SitemapSublistT): item is SitemapT {
    return item.hasOwnProperty('href');
  }
</script>

<nav>
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
  {#each sitemap as item}
    {#if isSitemapItem(item)}
      <li><a href={item.href}>{item.text}</a></li>
    {:else}
      <li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="">{item.label}</a>
        <ul>
          {#each item.list as subItem}
            <li><a href={subItem.href}>{subItem.text}</a></li>
          {/each}
        </ul>
      </li>
    {/if}
  {/each}
</nav>

<style lang="scss">
  nav {
    background-color: var(--main-color);
    position: sticky;
    inset-block-start: 0;
    z-index: 1;

    padding-inline: 2rem;
    box-shadow: 0px -0.5rem 4rem var(--main-color);

    display: flex;
    justify-content: space-around;

    & > li {
      display: inline;
      position: relative;
      font-weight: bold;
      font-size: 1.5rem;
      color: var(--text-color);
      padding-block: 0.5rem;

      a {
        text-decoration: none;
        color: var(--text-color);

        &:not(:has(#hosam-avatar)):hover {
          background-color: var(--accent-color);
          color: var(--text-color);
        }
      }

      ul {
        padding: 0.5rem;
        list-style: none;

        position: absolute;
        inset-block-start: 40%;
        inset-inline-start: -80%;
        border: 1px solid var(--lighter-main-color);
        border-radius: 0.25rem;

        background-color: var(--darker-main-color);

        li {
          padding-inline-start: 0.5rem;
          border-inline-start: 3px solid currentColor;

          &:not(:first-of-type) {
            margin-block-start: 0.5rem;
          }
        }
      }
    }

    li:not(:is(:hover, :focus, :active, :focus-within)) > ul {
      display: none;
    }

    & > li:has(#hosam-avatar) {
      position: absolute;
      inset-block-start: -20%;
      background-color: var(--main-color);
      padding: 1rem;
      border-radius: 50%;

      width: 2rem;
      height: 2rem;
    }

    #hosam-avatar {
      object-fit: cover;
      object-position: 100% 0;
      border-radius: 50%;
      outline-width: 2px;
      outline-offset: 4px;
    }

    @media (prefers-reduced-motion: no-preference) {
      #hosam-avatar {
        animation: vanish-outline 1s infinite alternate-reverse;
      }
    }

    @media (prefers-reduced-motion) {
      #hosam-avatar {
        outline: 2px solid var(--text-color);
      }
    }
  }
</style>
