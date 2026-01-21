import { css, html, LitElement } from "lit";

/**
 * A custom input component with validation.
 *
 * @fires input - Fires when input value changes
 * @fires blur - Fires when input loses focus
 */
export class MyInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
    }

    .input-container {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
      margin-bottom: 4px;
      color: #333;
    }

    input {
      padding: 8px 12px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      transition: border-color 0.2s;
    }

    input:focus {
      outline: none;
      border-color: #007cba;
    }

    input:invalid {
      border-color: #d32f2f;
    }

    .error-message {
      color: #d32f2f;
      font-size: 14px;
      margin-top: 4px;
      display: none;
    }

    :host([invalid]) .error-message {
      display: block;
    }

    :host([disabled]) input {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }

    .char-counter {
      font-size: 12px;
      color: #666;
      text-align: right;
      margin-top: 2px;
    }
  `;

  static get properties() {
    return {
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      type: { type: String },
      required: { type: Boolean },
      disabled: { type: Boolean },
      maxLength: { type: Number },
      pattern: { type: String },
      errorMessage: { type: String },
      invalid: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.label = "";
    this.placeholder = "";
    this.value = "";
    this.type = "text";
    this.required = false;
    this.disabled = false;
    this.maxLength = null;
    this.pattern = "";
    this.errorMessage = "Invalid input";
    this.invalid = false;
  }

  _onInput(e) {
    this.value = e.target.value;
    this._validate();
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value, valid: !this.invalid },
      })
    );
  }

  _onBlur(e) {
    this._validate();
    this.dispatchEvent(
      new CustomEvent("blur", {
        detail: { value: this.value, valid: !this.invalid },
      })
    );
  }

  _validate() {
    const input = this.shadowRoot.querySelector("input");
    this.invalid = !input.checkValidity();

    if (this.required && !this.value.trim()) {
      this.invalid = true;
      this.errorMessage = "This field is required";
    } else if (this.pattern && !new RegExp(this.pattern).test(this.value)) {
      this.invalid = true;
      this.errorMessage = "Please match the requested format";
    } else if (!this.invalid) {
      this.errorMessage = "";
    }
  }

  focus() {
    const input = this.shadowRoot.querySelector("input");
    input?.focus();
  }

  checkValidity() {
    this._validate();
    return !this.invalid;
  }

  render() {
    return html`
      <div class="input-container">
        ${this.label ? html`<label for="input">${this.label}</label>` : ""}
        <input
          id="input"
          .type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          maxlength="${this.maxLength || ""}"
          pattern="${this.pattern}"
          @input="${this._onInput}"
          @blur="${this._onBlur}"
        />
        ${this.maxLength
          ? html`
              <div class="char-counter">
                ${this.value.length}/${this.maxLength}
              </div>
            `
          : ""}
        <div class="error-message">${this.errorMessage}</div>
      </div>
    `;
  }
}
