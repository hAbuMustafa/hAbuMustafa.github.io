<script lang="ts">
  import { Abbr } from "@vividus/svelte";
  import { extendQuery } from "extend-arabic-query";
  import CodeSnippet from "$lib/components/CodeSnippet.svelte";
  import Wrapper from "$lib/components/CodeSnippet_Wrapper.svelte";

  let testText = "عبد الجيد أحمد حماده ابو ذكري";
  let againstText = "عبدالجيد احمد حمادة أبوذكرى";
  let allowedPattern = "^[ء-ي ]+$";

  function separateWithHyphens(letters: string) {
    return letters.split("").join(" - ");
  }
</script>

<h1><code>extend-arabic-query</code></h1>
<small>Check the package on <a href="npm.im/extend-arabic-query">npm</a>.</small
>
<p>
  This npm package provides a function to convert any text written in Arabic
  letters to a <dfn id="dfn-regex"
    ><Abbr title="[Reg]ular [Ex]pression" styles="white-space: nowrap;" /></dfn
  >
  string that can be used as <code>test</code> or <code>match</code> method paramter
  against any other string to compare for equality.
</p>
<p>
  Normally, comparing words that contain letters that can have multiple forms
  like the letter "أ" can give false results. For example, comparing the two
  forms of writing the name "Ahmad" ("أحمد" and "احمد") against each other,
  should be <code>true</code>, but it doesn't, even if you tried the strict or
  abstract equality signs [
  <code>"أحمد" == "احمد"</code>
  ], since the two forms of the letter "<small class="pal"> alef</small>" (with
  and without "<small class="pal"> hamzah</small>") are different characters
  since they have different unicode codes (namely,
  <code class="unicode">{"أ".charCodeAt(0).toString(16)}</code>
  for "أ", and <code class="unicode">{"ا".charCodeAt(0).toString(16)}</code> for
  "ا").
</p>
<p>
  Also, all the other forms of the letter <small class="pal">alef</small> should
  map to any of the other forms, since they usually get mistakenly swapped for eachother.
  Say the same for many other letters.
</p>
<p>
  The current version of the package maps the following letters to their
  corresponding forms or alternatives:
</p>

<div class="center">
  <table>
    <colgroup>
      <col class="letter-group" />
      <col class="group-name" />
      <col class="substitution" />
    </colgroup>

    <thead>
      <tr>
        <th>Letter Group</th>
        <th>Group Name</th>
        <th>Substitution</th>
      </tr>
    </thead>

    <tbody>
      <tr id="haa">
        <td>{separateWithHyphens("ةه")}</td>
        <td><small class="pal">haa</small> group</td>
        <td>same<a href="#footnote-note" id="footnote-mark">*</a></td>
      </tr>
      <tr id="alef">
        <td>{separateWithHyphens("اأإآء")}</td>
        <td><small class="pal">alef</small> group</td>
        <td
          >same, plus, all other forms of <small class="pal">hamza</small>
          ({separateWithHyphens("ئؤ")})</td
        >
      </tr>
      <tr id="hamza-on-yaa">
        <td>ئ</td>
        <td><small class="pal">hamza on yaa</small> group</td>
        <td
          >same as for <small class="pal">alef</small>, plus all other form of
          <small class="pal">yaa</small>
          ({separateWithHyphens("يى")})</td
        >
      </tr>
      <tr id="hamza-on-waw">
        <td>ؤ</td>
        <td><small class="pal">hamza on waw</small> group</td>
        <td
          >same as for <small class="pal">alef</small>, plus all other form of
          <small class="pal">yaa</small>
          ({separateWithHyphens("يى")})</td
        >
      </tr>
      <tr id="waw">
        <td>و</td>
        <td><small class="pal">waw</small> group</td>
        <td> {separateWithHyphens("وؤ")}</td>
      </tr>
      <tr id="yaa">
        <td>{separateWithHyphens("يى")}</td>
        <td><small class="pal">yaa</small> group</td>
        <td>same, plus "ئ"</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="10" id="footnote-note">
          <a href="#footnote-mark">*</a> "same" means a
          <a href="#dfn-regex">RegEx</a>
          list of all the characters, i.e. if any of either "ه" or "ة" was found
          in the string, it will be replaced with
          <code>[ةه]</code> in the <a href="#dfn-regex">RegEx</a> string.
        </td>
      </tr>
    </tfoot>
  </table>
</div>
<p>
  The library also takes account for possible mis-spellings due to local
  pronounciation. Currently, the following groups are considered:
</p>

<div class="center">
  <table>
    <colgroup>
      <col class="letter-group" />
      <col class="group-name" />
      <col class="substitution" />
    </colgroup>

    <thead>
      <tr>
        <th>Letter Group</th>
        <th>Group Name</th>
        <th>Substitution</th>
      </tr>
    </thead>

    <tbody>
      <tr id="zai">
        <td>{separateWithHyphens("زذ")}</td>
        <td><small class="pal">zai</small> group</td>
        <td>same, since many Arabic dialects use both interchangeably</td>
      </tr>
      <tr id="seen">
        <td>{separateWithHyphens("ثس")}</td>
        <td><small class="pal">seen</small> group</td>
        <td>same, since many Arabic dialects use both interchangeably</td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  Also, since many would write the words "أبو" and "عبد" with a trailing space
  or without it. It's been taken into consideration as well!
</p>
<p>
  Also, not to forget irregularly spelled names, like "داوود" and "يحيى" as some
  may write them with different amount of vowels. This, too, has been taken into
  consideration!
</p>

<h2>Try IT!</h2>
<p>
  Write whatever you want in this input, and it will immediately show you the
  RegEx string output beneath it.
</p>

<div class="center" style:gap="0.5rem" style:text-align="center">
  <code
    >new RegExp(extendQuery("<span
      dir="rtl"
      contenteditable
      id="text"
      bind:innerText={testText}
    />"), "g").test("<span
      dir="rtl"
      id="against-text"
      contenteditable
      bind:innerText={againstText}
    />")
  </code>

  <span>
    This expression evaluates to
    <span style="text-decoration: underline; text-transform: uppercase;"
      >{new RegExp(extendQuery(testText), "g").test(againstText)}</span
    ></span
  >

  <details>
    <summary>The Underlying RegEx String: </summary>
    <p dir="rtl">
      {#if testText && RegExp(allowedPattern, "g").test(testText)}
        {extendQuery(testText)}
      {/if}
    </p>
  </details>
</div>

<Wrapper>
  <svelte:fragment slot="title">Clearer Syntax</svelte:fragment>
  <CodeSnippet
    code={`const text = "${testText}";
const text_to_compare = "${againstText}";

const regex = new RegExp(extendQuery(text), 'g');

const result = regex.test(text_to_compare)
    `}
  />
</Wrapper>

<p>
  Now you should be able to use this function in any check including any Arabic
  strings. You can even use it inside the <code>pattern</code> attribute for
  <code>input</code>s to generate highly specific, and smart patterns.
</p>
<p>The sky is the limit!</p>

<style lang="scss">
  .pal {
    /* short for: Pronounced Arabic Letter*/
    text-transform: uppercase;
  }

  .unicode::before {
    content: "U+0";
  }

  .center {
    display: grid;
    place-content: center;
  }

  table {
    border-collapse: collapse;
    max-width: 60vw;

    .letter-group {
      width: 4rem;
    }

    th,
    td {
      border: 1px solid var(--main-color);
      padding: 0.5rem;
      text-align: center;
    }

    tfoot td {
      border: none;
    }

    a[href*="footnote"],
    a[href*="dfn"] {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  span[contenteditable] {
    // undo default settings
    margin-inline-end: 0;
    border-radius: 0.25rem;

    &::after {
      content: "";
    }

    &:hover {
      &::after {
        direction: ltr;
        content: "Edit this ↓";
        inset-inline-start: -50%;
        inset-block-start: -200%;
        border: 2px dashed currentColor;
        padding-inline: 0.5rem;
      }
    }
  }
</style>
