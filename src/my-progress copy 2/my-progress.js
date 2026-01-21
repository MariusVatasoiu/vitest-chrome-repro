import { css, html, LitElement } from "lit";

/**
 * A progress bar component.
 *
 * @fires progress-complete - Fires when progress reaches 100%
 */
export class MyProgress extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .progress-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #333;
    }

    .progress-bar {
      width: 100%;
      height: 20px;
      background-color: #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    .progress-bar.small {
      height: 8px;
      border-radius: 4px;
    }

    .progress-bar.large {
      height: 32px;
      border-radius: 16px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #007cba, #4fa8d8);
      border-radius: inherit;
      transition: width 0.3s ease;
      position: relative;
      min-width: 0;
    }

    .progress-fill.error {
      background: linear-gradient(90deg, #d32f2f, #f44336);
    }

    .progress-fill.success {
      background: linear-gradient(90deg, #2e7d32, #4caf50);
    }

    .progress-fill.warning {
      background: linear-gradient(90deg, #ed6c02, #ff9800);
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      font-weight: bold;
      color: white;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .progress-bar.small .progress-text {
      display: none;
    }

    .progress-status {
      font-size: 12px;
      color: #666;
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    .progress-fill.animated {
      animation: pulse 1.5s ease-in-out infinite;
    }
  `;

  static get properties() {
    return {
      value: { type: Number },
      max: { type: Number },
      label: { type: String },
      size: { type: String },
      variant: { type: String },
      showPercentage: { type: Boolean },
      animated: { type: Boolean },
      status: { type: String },
    };
  }

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.label = "";
    this.size = "medium";
    this.variant = "default";
    this.showPercentage = true;
    this.animated = false;
    this.status = "";
  }

  get percentage() {
    return Math.min(Math.max((this.value / this.max) * 100, 0), 100);
  }

  get isComplete() {
    return this.percentage >= 100;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("value") && this.isComplete) {
      this.dispatchEvent(
        new CustomEvent("progress-complete", {
          detail: { value: this.value, max: this.max },
        })
      );
    }
  }

  setProgress(value) {
    this.value = Math.min(Math.max(value, 0), this.max);
  }

  increment(amount = 1) {
    this.setProgress(this.value + amount);
  }

  reset() {
    this.value = 0;
  }

  render() {
    const progressClass = `progress-bar ${this.size}`;
    const fillClass = `progress-fill ${this.variant} ${
      this.animated ? "animated" : ""
    }`;

    return html`
      <div class="progress-container">
        ${this.label || this.status
          ? html`
              <div class="progress-header">
                ${this.label ? html`<span>${this.label}</span>` : ""}
                ${this.showPercentage
                  ? html` <span>${Math.round(this.percentage)}%</span> `
                  : ""}
              </div>
            `
          : ""}

        <div
          class="${progressClass}"
          role="progressbar"
          aria-valuenow="${this.value}"
          aria-valuemin="0"
          aria-valuemax="${this.max}"
          aria-label="${this.label || "Progress"}"
        >
          <div class="${fillClass}" style="width: ${this.percentage}%">
            ${this.size !== "small"
              ? html`
                  <span class="progress-text"
                    >${Math.round(this.percentage)}%</span
                  >
                `
              : ""}
          </div>
        </div>

        ${this.status
          ? html` <div class="progress-status">${this.status}</div> `
          : ""}
      </div>
    `;
  }
}
