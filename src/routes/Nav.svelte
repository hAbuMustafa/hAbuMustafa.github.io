<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  interface SitemapT {
    text: string;
    href: string;
    separate?: true;
  }

  interface SitemapSublistT {
    label: string;
    list: SitemapT[];
  }

  const sitemap: (SitemapT | SitemapSublistT)[] = [
    {
      label: 'Blog',
      list: [
        { text: 'Posts', href: '/blog/posts', separate: true },
        { text: 'Tags', href: '/blog/tags' },
      ],
    },
    {
      label: 'Portfolio',
      list: [
        { text: 'Voice-Over', href: '/voice-over', separate: true },
        { text: 'I18n Assistant', href: '/i18n-finder' },
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
      {#if item.separate}<hr />{/if}
    {:else}
      <li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="">{item.label}</a>
        <ul>
          {#each item.list as subItem}
            <li><a href={subItem.href}>{subItem.text}</a></li>
            {#if subItem.separate}<hr />{/if}
          {/each}
        </ul>
      </li>
    {/if}
  {/each}
  <li class="theme-toggle">
    <ThemeToggle />
  </li>
</nav>

<style lang="scss">
  nav {
    background-color: var(--main-color);
    position: sticky;
    inset-block-start: 0;
    z-index: 1;

    padding-inline: 5vw;

    @media (max-width: 450px) {
      padding-inline: 10vw 0;
    }

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
        padding: 0.8rem;
        list-style: none;
        width: max-content;

        position: absolute;
        inset-block-start: 40%;
        inset-inline-start: -50%;
        border: 1px solid var(--lighter-main-color);
        border-radius: 0.25rem;

        background-color: var(--darker-main-color);

        li {
          padding-inline-end: 0.75rem;
          padding-inline-start: 0;
          border-inline-start: none;
          transition:
            border-inline-start 0s ease-out,
            padding-inline-end 0.5s ease-out,
            padding-inline-start 0.5s ease-out;

          &:not(:first-of-type) {
            margin-block-start: 0.5rem;
          }

          &:hover {
            border-inline-start: 0.25rem solid currentColor;
            padding-inline-start: 0.5rem;
            padding-inline-end: 0;
          }
        }
      }
    }

    li:not(:is(:hover, :focus, :active, :focus-within)) > ul {
      display: none;
    }

    & > li:has(#hosam-avatar) {
      position: absolute;
      inset-inline-start: 1rem;
      background-color: var(--main-color);
      padding: 1rem;
      border-radius: 50%;

      width: 2rem;
      height: 2rem;

      #hosam-avatar {
        object-fit: cover;
        object-position: 100% 0;
        border-radius: 50%;
        outline-width: 2px;
        outline-offset: 4px;
      }
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

    .theme-toggle {
      position: absolute;
      inset-inline-end: 1rem;
    }
  }
</style>
