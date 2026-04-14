<script lang="ts">
<<<<<<< HEAD
  import { Marked } from "marked";
  import { markedHighlight } from "marked-highlight";
  import hljs from "highlight.js";
  import CopyIcon from "svelte-material-icons/ContentCopy.svelte";
=======
  import CopyIcon from 'svelte-material-icons/ContentCopy.svelte';
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5

  interface Props {
    language?: string;
    code: string;
  }

<<<<<<< HEAD
  const marked = new Marked(
    markedHighlight({
      langPrefix: "highlighted-snippet ",
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
  );

  export let language = "javascript";
  export let code: string;
=======
  let { language = 'javascript', code }: Props = $props();
>>>>>>> d9da57c112d07472d56ed0fb1c8b5cc9894fd1c5

  function copySnippetToClipboard(e: MouseEvent) {
    navigator.clipboard.writeText(code.trim());
  }
</script>

<div class="wrapper">
  {code}
  <div class="tags">
    <span class="language">{language}</span>

    <button class="copy-button" onclick={copySnippetToClipboard}>
      <CopyIcon size="1rem" />
    </button>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    max-width: 85vw;

    & .tags {
      position: absolute;
      inset-block-start: 0.5rem;
      inset-inline-end: 0.5rem;
      font-family: monospace;
      color: var(--lighter-main-color);
      display: flex;
      gap: 0.25rem;

      & :is(.language, .copy-button) {
        padding: 0.25rem;
        border-radius: 0.25rem;
        background-color: var(--main-color);
      }

      & .language {
        user-select: none;
      }

      & .copy-button {
        border: none;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;

        color: inherit;

        &:hover,
        &:focus,
        &:active {
          filter: brightness(115%);
          color: var(--lightest-main-color);
        }

        &:active::after {
          content: "Copied to the clipboard!";
          display: block;
          position: absolute;
          inset-inline-start: calc(-50% - 0.5rem);
          background-color: var(--main-color);
          padding: 0.5rem;
          border: 1px solid var(--lighter-main-color-bg);
          border-radius: 0.25rem;
          box-shadow: 0px 10px 1rem gray;
          animation: hover 1s infinite alternate;
        }
      }
    }
  }
</style>
