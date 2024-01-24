<script lang="ts">
  import CodeSnippet from "$lib/components/CodeSnippet.svelte";
  import CodeWrapper from "$lib/components/CodeSnippet_Wrapper.svelte";
  import { Abbr } from "@vividus/svelte";

  let censorStyles =
    "display: inline-block; background-color: currentColor; transform: skewX(-6deg);";
</script>

<div class="wrapper">
  <main>
    <h1>Bookmarklets</h1>

    <p>
      All code snippets listed below, are bookmarklets, i.e. you can copy-paste
      them to the "address" (or "URL") of your bookmark, and give it a name so
      it serves as button in your bookmarks bar, and ready to execute.
    </p>

    <h2 id="censor-selection">Censor Selection</h2>
    <p>
      This bookmarklet censors the selected text so you can take screenshots of
      open pages easily without the hussle of editing the captured image.
    </p>
    <p>
      It is an <code
        ><Abbr
          styles="--duration:1.5s; font-family: monospace;"
          title="[I]mmediately [I]nvoked [F]uncion [E]xpression"
        /></code
      >, which means, you can customize the "censoring style" by changing the
      value of the
      <code>styles</code> parameter upon function invocation. The styles by
      default, are;
      <code contenteditable spellcheck="false" bind:innerText={censorStyles} />,
      and it looks like
      <span style={censorStyles}> this</span>.
    </p>
    <CodeWrapper open>
      <CodeSnippet
        code={`javascript: (function(styles) {
        const censoredWrapper = document.createElement('span');
        censoredWrapper.style = styles;
        
        const selection = document.getSelection();
        if (selection.rangeCount === 0 || selection.isCollapsed) {
          alert('Please, select some text first.');
          return;
        }
        
        const range = selection.getRangeAt(0);
        
        try {
          range.cloneRange().surroundContents(censoredWrapper);
        } catch (err) {
          alert(
            'Error Occured. Perhaps you are trying to censor a node that is not a text node, or maybe its spanning a few consecutive nodes. Only text nodes or parts of text nodes are supported.'
          );
        }
        document.getSelection().empty();
        })(
        '${censorStyles}'
        );`}
      />
    </CodeWrapper>
  </main>

  <div id="index">
    <h4>Index:</h4>
    <ol>
      <li>
        <a href="#censor-selection">Censor Selection</a>
      </li>
    </ol>
    <a href="#top">↑ Top</a>
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    position: relative;
    max-width: 99%;

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }

  main {
    margin-inline: 1rem;
  }

  #index {
    position: sticky;
    inset-block-start: 4rem;
    margin-block-start: 0.5rem;
    inset-inline-end: 0.5rem;

    padding-inline: 1rem 2rem;
    border: 2px solid var(--darker-main-color);
    border-radius: 0.25rem;
    background-color: var(--lightest-main-color);
    box-shadow: 0.25rem 0.5rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
    max-height: 40vh;
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;

    & > h4 {
      margin-block-start: 0.75rem;
      margin-block-end: 0;
      text-decoration: underline;
    }

    & > ol {
      margin-block-start: 0.25rem;
      width: 100%;

      & > li {
        margin-inline-start: -0.5rem;
      }
    }

    @media (max-width: 550px) {
      display: none;
    }

    & > a[href="#top"] {
      text-decoration: none;
      text-align: end;
      margin-inline-end: -1rem;
      margin-block-end: 1rem;
      padding-block-start: 0.25rem;
      align-self: end;
      border-block-start: 1px solid currentColor;
    }
  }

  [contenteditable] {
    border-style: dashed;
    border-color: currentColor;
  }
</style>
