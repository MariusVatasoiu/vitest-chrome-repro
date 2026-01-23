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

    .toggle-switch.small {
      width: 36px;
      height: 18px;
    }

    .toggle-switch.large {
      width: 64px;
      height: 32px;
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

    .toggle-switch.small .toggle-thumb {
      width: 14px;
      height: 14px;
    }

    .toggle-switch.small.checked .toggle-thumb {
      transform: translateX(18px);
    }

    .toggle-switch.large .toggle-thumb {
      width: 28px;
      height: 28px;
    }

    .toggle-switch.large.checked .toggle-thumb {
      transform: translateX(32px);
    }

    .toggle-label {
      font-size: 14px;
      color: #333;
      user-select: none;
    }

    .toggle-label.disabled {
      color: #999;
    }

    .toggle-description {
      font-size: 12px;
      color: #666;
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
      description: { type: String },
    };
  }

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.label = "";
    this.size = "medium";
    this.description = "";
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
    const descriptionId = this.description ? "toggle-description" : "";

    return html`
      <div class="toggle-container">
        <button
          class="toggle-switch ${this.checked ? "checked" : ""} ${this.disabled
            ? "disabled"
            : ""} ${this.size}"
          ?disabled="${this.disabled}"
          @click="${this._onToggle}"
          @keydown="${this._onKeyDown}"
          role="switch"
          aria-checked="${this.checked}"
          aria-label="${this.label || "Toggle switch"}"
          aria-describedby="${descriptionId}"
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
        ${this.description
          ? html`
              <span id="toggle-description" class="toggle-description"
                >${this.description}</span
              >
            `
          : ""}
        <span class="sr-only"> ${this.checked ? "On" : "Off"} </span>
      </div>
    `;
  }
}
