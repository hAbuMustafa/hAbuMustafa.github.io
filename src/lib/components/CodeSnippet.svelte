<script lang="ts">
  import CopyIcon from 'svelte-material-icons/ContentCopy.svelte';

  interface Props {
    language?: string;
    code: string;
  }

  let { language = 'javascript', code }: Props = $props();

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
          content: 'Copied to the clipboard!';
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
