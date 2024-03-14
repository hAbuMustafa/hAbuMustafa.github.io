import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkTableOfContents from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
      layout: {
        _: './src/mdsvex_blog_layout.svelte',
        project: './src/mdsvex_project_layout.svelte',
      },
      remarkPlugins: [
        remarkUnwrapImages,
        [
          remarkTableOfContents,
          {
            tight: true,
          },
        ],
      ],
      rehypePlugins: [rehypeSlug],
    }),
  ],
  vitePlugin: {
    inspector: true,
  },
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
