<script lang="ts">
  import { formatDate, rtlLanguages } from '$lib/helpers/utils';
  import type { BlogPost } from '$lib/types/blog-posts';

  interface Props {
    post: BlogPost;
  }

  let { post }: Props = $props();

  const formattedBlogPostDate = formatDate(post.lang ?? 'en', post.date);
</script>

<section class:rtl={rtlLanguages.includes(post.lang ?? 'en')}>
  <h2>
    <a href="{post.lang ? `/${post.lang}` : ''}/blog/{post.slug}">{post.title}</a><small
      ><i>{formattedBlogPostDate}</i></small
    >
  </h2>
  <p>{post.description}</p>
  <footer>
    {#each post.tags as tag}
      <a href="{post.lang ? `/${post.lang}` : ''}/blog/posts?tags={tag}">
        &num;{tag}
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
      box-shadow: 0 0 4rem var(--darker-main-color);
      z-index: 1;
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
