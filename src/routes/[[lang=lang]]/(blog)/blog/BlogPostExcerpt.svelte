<script lang="ts">
  import { page } from '$app/stores';
  import type { BlogPost } from '$lib/types/blog-posts';

  export let post: BlogPost;

  const formattedBlogPostDate = new Date(post.date).toLocaleDateString(
    $page.params.lang,
    {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      timeZoneName: 'short',
    }
  );
</script>

<section>
  <h2>
    <a href="/blog/{post.slug}">{post.title}</a><small
      ><i>{formattedBlogPostDate}</i></small
    >
  </h2>
  <p>{post.description}</p>
  <footer>
    {#each post.tags as tag}
      <a href="/blog?tags={tag}">
        {tag}
      </a>
    {/each}
  </footer>
</section>

<style>
  section {
    background-color: var(--lightest-main-color-bg);
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 2rem var(--darker-main-color);
    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 1.02;
    }
  }

  h2 {
    margin-block: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-block-end: 1px solid var(--darker-main-color);

    & > a {
      text-decoration: none;

      &:hover {
        background-color: var(--lighter-main-color-bg);
      }
    }

    & > small {
      font-size: 0.75rem;
      font-weight: normal;
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-end;

    margin-block-start: 1rem;
    padding-block-start: 1rem;
  }
</style>
