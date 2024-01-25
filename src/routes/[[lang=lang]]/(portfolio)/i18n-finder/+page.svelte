<script lang="ts">
  export let data;

  let text = '';

  $: filteredResults = data.terms.filter((item) =>
    item.term.toLowerCase().includes(text.toLowerCase())
  );

  let termInput: HTMLInputElement;

  function lockFocus() {
    termInput.focus();
    termInput.select();
  }
</script>

<svelte:document
  on:visibilitychange={() => {
    if (document.visibilityState === 'visible') lockFocus();
  }}
  on:click={lockFocus}
/>

<div class="wrapper">
  <h1><abbr title="Internationalization">I18n</abbr> Assistant</h1>

  <input
    id="term"
    type="text"
    pattern="[A-Za-z\d\w ]*"
    title="أحرف إنجليزية وأرقام ورموز فقط"
    placeholder="اكتب المصطلح الإنجليزي..."
    aria-label="المصطلح"
    spellcheck="false"
    autocomplete="off"
    bind:this={termInput}
    bind:value={text}
  />

  <div id="results">
    {#if text.length >= 3 && filteredResults.length}
      {#each filteredResults as item}
        <div class="result">
          <h4 dir="ltr">
            🔤 {@html item.term.replace(
              new RegExp(text, 'gi'),
              `<mark>${text.toUpperCase()}</mark>`
            )}
          </h4>
          <ul>
            {#if Array.isArray(item.wAR)}
              {#each item.wAR as meaning}
                <li>{meaning}</li>
              {/each}
            {:else}
              <li>{item.wAR}</li>
            {/if}
          </ul>
        </div>
      {/each}
    {:else if !filteredResults.length}
      <div class="no-results">
        لا توجد نتيجة للبحث المطلوب: {text}
      </div>
    {/if}
  </div>
  <footer>
    This project is open source on
    <a href="https://github.com/hAbuMustafa/i18n-finder">Github</a>.<br />
    This project leverages the use of the i18n dictionary by
    <a href="https://github.com/softvenue/i18n" target="_blank" rel="noopener noreferrer"
      >softvenue</a
    >.
    <hr />
  </footer>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 98vw;
    grid-template-rows: 4rem 4rem 1fr 3rem;
    justify-items: center;
    align-items: center;

    min-height: 75lvh;
  }

  #term {
    font-size: 1.5rem;
    border-radius: 3px;
    justify-self: stretch;
    margin-inline: 20%;
    text-align: center;
  }

  #term:placeholder-shown {
    direction: rtl;
  }

  #term:not(:placeholder-shown) {
    direction: ltr;
  }

  #term:invalid {
    color: red;
    text-decoration: line-through underline;
    outline: red dashed 1px;
    outline-offset: 0.25rem;
    animation: vanish-outline 2s infinite;
    background-color: salmon;
  }

  #results {
    direction: ltr;
    margin-block-end: 2rem;

    display: grid;
    grid-template-columns: 1fr;
    align-self: flex-start;
    justify-self: stretch;
    margin-inline: auto;
  }

  #results ul {
    direction: rtl;
  }

  .result h4 {
    width: 100%;
    -webkit-margin-before: 1px;
    margin-block-start: 1px;
    -webkit-border-after: solid 1px black;
    border-block-end: solid 1px black;
  }

  .result:nth-of-type(even) {
    background-color: rgba(188, 252, 230, 0.3);
  }

  .result:nth-of-type(odd) {
    background-color: rgba(188, 252, 230, 0.8);
  }

  .no-results {
    direction: rtl;
    text-align: center;
    background-color: white;
  }

  footer {
    position: absolute;
    inset-inline: 0;
    inset-block-end: 0;

    text-align: center;
    padding-block-start: 0.5rem;
    background-color: var(--main-color);
    color: var(--text-color);

    & > hr {
      margin-block-start: 0.5rem;
      margin-block-end: 0;
    }
  }
</style>
