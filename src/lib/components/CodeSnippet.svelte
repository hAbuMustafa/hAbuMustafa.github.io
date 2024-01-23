<script lang="ts">
  import { Marked } from "marked";
  import { markedHighlight } from "marked-highlight";
  import hljs from "highlight.js";
  import CopyIcon from "svelte-material-icons/ContentCopy.svelte";

  const marked = new Marked(
    markedHighlight({
      langPrefix: "",
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  export let language = "javascript";
  export let code: string;

  function copySnippetToClipboard(e: MouseEvent) {
    navigator.clipboard.writeText(code.trim());
  }
</script>

<div class="wrapper">
  {@html marked.parse(`
\`\`\`${language}
${code}\n
\`\`\`
`)}
  <div class="tags">
    <span class="language">{language}</span>

    <button class="copy-button" on:click={copySnippetToClipboard}>
      <CopyIcon size="1rem" />
    </button>
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    max-width: 95vw;

    &:hover {
      & :global(code.javascript) {
        border: 1px solid var(--main-color);
      }
    }

    & :global(code.javascript) {
      display: block;
      position: relative;
      background-color: var(--lighter-main-color-bg);
      color: var(--darkest-main-color);
      border: 1px solid transparent;
      border-radius: 0.5rem;
      padding: 1rem;
      max-width: 100%;
      text-wrap: wrap;
      line-height: initial;

      & :global(.hljs-attr) {
        color: purple;
      }

      & :global(.hljs-keyword) {
        color: darksalmon;
        filter: brightness(70%);
      }

      & :global(.hljs-params) {
        color: darkgoldenrod;
      }

      & :global(.hljs-variable.language_) {
        color: hsl(225, 73%, 50%);
      }

      & :global(.hljs-title.function_) {
        color: purple;
      }

      & :global(.hljs-string) {
        color: green;
      }

      & :global(.hljs-property) {
        color: var(--main-color);
      }

      & :global(.hljs-number) {
        color: hsl(225, 73%, 50%);
      }
    }

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
