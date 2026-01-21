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
      step: { type: Number },
      max: { type: Number },
      disabled: { type: Boolean, reflect: true },
      status: { type: String },
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
    this.step = 1;
    this.max = null;
    this.disabled = false;
    this.status = "";
  }

  _onClick() {
    if (this.disabled) return;

    const nextCount = this.count + this.step;
    if (this.max !== null && nextCount >= this.max) {
      this.count = this.max;
      this.disabled = true;
      this.status = "Limit reached";
      this.dispatchEvent(new CustomEvent("count", { detail: this.count }));
      this.dispatchEvent(new CustomEvent("limit", { detail: this.count }));
      return;
    }

    this.count = nextCount;
    this.dispatchEvent(new CustomEvent("count", { detail: this.count }));
  }

  foo() {
    return "foo";
  }

  reset() {
    this.count = 1;
    this.disabled = false;
    this.status = "";
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} role="button" ?disabled=${this.disabled}>
        Click Count: ${this.count}
      </button>
      ${this.status ? html`<p class="status">${this.status}</p>` : ""}
      <slot></slot>
    `;
  }
}
