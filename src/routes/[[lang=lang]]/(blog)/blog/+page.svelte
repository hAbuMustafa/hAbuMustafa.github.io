<script lang="ts">
  import BlogPostExcerpt from './BlogPostExcerpt.svelte';

  export let data;
</script>

<h1>Blog Posts</h1>
{#each data.blogPostList as post}
  <BlogPostExcerpt {post} />
{/each}
