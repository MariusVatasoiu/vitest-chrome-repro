import { css, html, LitElement } from "lit";

/**
 * A toggle switch component.
 *
 * @fires change - Fires when toggle state changes
 */
export class MyToggle extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toggle-switch {
      position: relative;
      width: 50px;
      height: 24px;
      background-color: #ccc;
      border-radius: 12px;
      cursor: pointer;
      transition: background-color 0.3s;
      border: none;
      outline: none;
    }

    .toggle-switch:focus {
      box-shadow: 0 0 0 3px rgba(0, 124, 186, 0.3);
    }

    .toggle-switch.checked {
      background-color: #007cba;
    }

    .toggle-switch.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .toggle-switch.checked .toggle-thumb {
      transform: translateX(26px);
    }

    .toggle-label {
      font-size: 14px;
      color: #333;
      user-select: none;
    }

    .toggle-label.disabled {
      color: #999;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `;

  static get properties() {
    return {
      checked: { type: Boolean },
      disabled: { type: Boolean },
      label: { type: String },
      size: { type: String },
    };
  }

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.label = "";
    this.size = "medium";
  }

  _onToggle() {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked },
        bubbles: true,
      })
    );
  }

  _onKeyDown(e) {
    if (this.disabled) return;

    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      this._onToggle();
    }
  }

  toggle() {
    this._onToggle();
  }

  render() {
    return html`
      <div class="toggle-container">
        <button
          class="toggle-switch ${this.checked ? "checked" : ""} ${this.disabled
            ? "disabled"
            : ""}"
          ?disabled="${this.disabled}"
          @click="${this._onToggle}"
          @keydown="${this._onKeyDown}"
          role="switch"
          aria-checked="${this.checked}"
          aria-label="${this.label || "Toggle switch"}"
        >
          <div class="toggle-thumb"></div>
        </button>
        ${this.label
          ? html`
              <span class="toggle-label ${this.disabled ? "disabled" : ""}"
                >${this.label}</span
              >
            `
          : ""}
        <span class="sr-only"> ${this.checked ? "On" : "Off"} </span>
      </div>
    `;
  }
}
