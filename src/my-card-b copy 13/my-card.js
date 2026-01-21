import { css, html, LitElement } from "lit";

/**
 * A card component with title and description.
 *
 * @slot - This card has a slot for content
 */
export class MyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px #ddd;
      border-radius: 8px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background: white;
    }

    .card-header {
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }

    .card-title {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    .card-subtitle {
      margin: 4px 0 0 0;
      font-size: 0.9rem;
      color: #666;
    }

    .card-content {
      color: #444;
      line-height: 1.5;
    }

    .card-actions {
      margin-top: 16px;
      padding-top: 8px;
      border-top: 1px solid #eee;
    }

    button {
      background: #007cba;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 8px;
    }

    button:hover {
      background: #005a8b;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `;

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      expanded: { type: Boolean },
      actionText: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Card Title";
    this.subtitle = "";
    this.expanded = false;
    this.actionText = "Action";
  }

  _onToggleExpand() {
    this.expanded = !this.expanded;
    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: { expanded: this.expanded },
      })
    );
  }

  _onAction() {
    this.dispatchEvent(
      new CustomEvent("action", {
        detail: { title: this.title },
      })
    );
  }

  render() {
    return html`
      <div class="card-header">
        <h2 class="card-title">${this.title}</h2>
        ${this.subtitle
          ? html`<p class="card-subtitle">${this.subtitle}</p>`
          : ""}
      </div>

      <div class="card-content">
        <slot></slot>
        ${this.expanded
          ? html`
              <p>This is additional content that appears when expanded.</p>
            `
          : ""}
      </div>

      <div class="card-actions">
        <button @click=${this._onAction} role="button">
          ${this.actionText}
        </button>
        <button @click=${this._onToggleExpand} role="button">
          ${this.expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    `;
  }
}
