<script lang="ts">
  import { Abbr } from '@vividus/svelte';

  let abbrExample = '<abbr title="World Health Organization">WHO</abbr>';
</script>

<div class="wrapper">
  <h1>vividus</h1>
  <p>
    Vividus is a component library for Svelte <small><em>for now</em></small>. The main
    theme is; components that are vivid, robust, easy to inline and easy to use.
  </p>

  <p>Components have granular reactivity, and most of them have reactivity.</p>

  <h2>Published Componentes</h2>
  <h3 id="Abbr">Abbr</h3>
  It leverages the use of the
  <code>abbr</code> element, making it full of life!
  <p>
    Normally, an abbreviation should have a <code>title</code> attribute to provide a
    tooltip to the user, or, even better, say the whole abbreviated word for the
    screen-reader user. It should normally look like this: <br />
    <code bind:innerText={abbrExample} contenteditable spellcheck="false"></code>
    {@html abbrExample}.
  </p>
  <p></p>
  <p>
    See the underline that informs you that you should hover over the abbreviation to see
    the full word? Also, it is a bit repetitive to type the letter twice; once in the
    title, and the other enclosed inside the tag. This is not optimum for me. In {new Date().getFullYear()}
    this should be more
    <em>vivid</em>. How about, you hover over the abbreviation and the full word
    <em>unravles</em>?
  </p>
  <p>
    The syntax for it is even less repetitive than the <code>abbr</code> element. Unless,
    you want to customize <em>everything</em>! <br />
  </p>
  <p>
    Minimally, you should only need the title attribute, while enclosing the acronym
    letters inside a pair of square parenthesis [I'll tell you why in a second]: <br />
    <code>{'<Abbr title="[W]orld [H]ealth [O]rganization" />'}</code>
    <Abbr title="[W]orld [H]ealth [O]rganization" />.
  </p>
  <p>
    But if you are adventurous, you can customize the transition components, namely; <code
      >--duration</code
    >,
    <code>--delay</code>, and <code>--easing</code> function. Pass them as props, like
    this:
    <br />
    <code>{'<Abbr title="[W]orld [H]ealth [O]rganization" --duration="3s" />'}</code>.
  </p>
  <p>
    Enclosing the acronym letters inside a pair of square parenthesis is a good [and,
    necessary] idea, because, you can't simply assume all acronym letters are in the same
    case. How about, <Abbr title="[m]essenger [R]ibo-[N]eucleic [A]cid" />? or, acronyms
    that do not use the first letter like <Abbr
      title="e[X]tensible [M]arkup [L]anguage"
    />? Or even acronyms that have many consecutive letters from the same word like <Abbr
      styles="white-space: nowrap;"
      title="[Cal]efornia Institute of [Tech]nology"
    />? <br />
    I guess now you know why.
  </p>

  <h2>Planned Componentes</h2>
  <h3>Table</h3>
  A component that helps you create
  <em>reactive</em> <code>table</code> elements.

  <h3>RadialFlickMenu</h3>
  An advanced<code>select</code> element that allows you to navigate through a radial
  (circular) list. It should look pretty much like Counter-Strike's in-game
  <a href="https://imgur.com/y7X9mvR">action menu</a>, where you select the item by moving
  your pointer/cursor away from the center of the tap/click [also, the center of the
  circle].
</div>

<style lang="scss">
  .wrapper {
    h1 {
      text-transform: uppercase;
    }

    h2 {
      /* text-decoration: underline; */
      border-block-end: 2px solid currentColor;
    }

    h3 {
      border-radius: 0.25rem;
      border: 1px solid var(--main-color);
      background-color: #eee;
      width: max-content;
      padding-inline: 0.5rem;
      font-family: monospace;
    }
  }
</style>
