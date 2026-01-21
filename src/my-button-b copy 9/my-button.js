import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

/**
 * An example button.
 *
 * @slot - This button has a slot
 */
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  /**
   * The name to say "Hello" to.
   */
  // @property()
  // name = "World";

  // /**
  //  * The number of times the button has been clicked.
  //  */
  // @property({ type: Number })
  // count = 1;

  constructor() {
    super();
    this.name = "World";
    this.count = 1;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent("count", { detail: this.count }));
  }

  foo() {
    return "foo";
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} role="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
}
