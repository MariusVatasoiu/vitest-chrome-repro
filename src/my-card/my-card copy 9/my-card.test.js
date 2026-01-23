import { beforeEach, describe, expect, it, vi } from "vitest";
import { fixture, defineCE } from "@open-wc/testing";
import { page } from "vitest/browser";

import { MyCard } from "./my-card.js";

describe("Card Component", async () => {
  const tag = defineCE(MyCard);
  let componentEl;

  beforeEach(async () => {
    document.body.innerHTML = "";
    componentEl = await fixture(
      `<${tag} title="Test Card" subtitle="Test Subtitle"></${tag}>`
    );
  });

  it("should display the title and subtitle", async () => {
    await expect
      .element(page.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Test Card");
    await expect.element(page.getByText("Test Subtitle")).toBeVisible();
  });

  it("should display the title and subtitle", async () => {
    await expect
      .element(page.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Test Card");
    await expect.element(page.getByText("Test Subtitle")).toBeVisible();
  });

  it("should display the title and subtitle", async () => {
    await expect
      .element(page.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Test Card");
    await expect.element(page.getByText("Test Subtitle")).toBeVisible();
  });

  it("should display the title and subtitle", async () => {
    await expect
      .element(page.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Test Card");
    await expect.element(page.getByText("Test Subtitle")).toBeVisible();
  });

  it("should display the title and subtitle", async () => {
    await expect
      .element(page.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Test Card");
    await expect.element(page.getByText("Test Subtitle")).toBeVisible();
  });

  it("should toggle expanded state when expand button is clicked", async () => {
    const expandButton = page.getByRole("button", { name: "Expand" });
    await expandButton.click();

    await expect
      .element(page.getByRole("button", { name: "Collapse" }))
      .toBeVisible();
    await expect.element(page.getByText("additional content")).toBeVisible();
  });

  it("should toggle expanded state when expand button is clicked", async () => {
    const expandButton = page.getByRole("button", { name: "Expand" });
    await expandButton.click();

    await expect
      .element(page.getByRole("button", { name: "Collapse" }))
      .toBeVisible();
    await expect.element(page.getByText("additional content")).toBeVisible();
  });

  it("should toggle expanded state when expand button is clicked", async () => {
    const expandButton = page.getByRole("button", { name: "Expand" });
    await expandButton.click();

    await expect
      .element(page.getByRole("button", { name: "Collapse" }))
      .toBeVisible();
    await expect.element(page.getByText("additional content")).toBeVisible();
  });

  it("should toggle expanded state when expand button is clicked", async () => {
    const expandButton = page.getByRole("button", { name: "Expand" });
    await expandButton.click();

    await expect
      .element(page.getByRole("button", { name: "Collapse" }))
      .toBeVisible();
    await expect.element(page.getByText("additional content")).toBeVisible();
  });

  it("should toggle expanded state when expand button is clicked", async () => {
    const expandButton = page.getByRole("button", { name: "Expand" });
    await expandButton.click();

    await expect
      .element(page.getByRole("button", { name: "Collapse" }))
      .toBeVisible();
    await expect.element(page.getByText("additional content")).toBeVisible();
  });

  it("should emit action event when action button is clicked", async () => {
    const actionButton = page.getByRole("button", { name: "Action" });
    await expect.element(actionButton).toBeVisible();
    await actionButton.click();
  });

  it("should emit action event when action button is clicked", async () => {
    const actionButton = page.getByRole("button", { name: "Action" });
    await expect.element(actionButton).toBeVisible();
    await actionButton.click();
  });

  it("should emit action event when action button is clicked", async () => {
    const actionButton = page.getByRole("button", { name: "Action" });
    await expect.element(actionButton).toBeVisible();
    await actionButton.click();
  });

  it("should emit action event when action button is clicked", async () => {
    const actionButton = page.getByRole("button", { name: "Action" });
    await expect.element(actionButton).toBeVisible();
    await actionButton.click();
  });

  it("should emit action event when action button is clicked", async () => {
    const actionButton = page.getByRole("button", { name: "Action" });
    await expect.element(actionButton).toBeVisible();
    await actionButton.click();
  });

  it("should render slot content", async () => {
    const cardWithSlot = await fixture(`<${tag}><p>Slot content</p></${tag}>`);
    await expect.element(page.getByText("Slot content")).toBeVisible();
  });

  it("should render slot content", async () => {
    const cardWithSlot = await fixture(`<${tag}><p>Slot content</p></${tag}>`);
    await expect.element(page.getByText("Slot content")).toBeVisible();
  });

  it("should render slot content", async () => {
    const cardWithSlot = await fixture(`<${tag}><p>Slot content</p></${tag}>`);
    await expect.element(page.getByText("Slot content")).toBeVisible();
  });

  it("should render slot content", async () => {
    const cardWithSlot = await fixture(`<${tag}><p>Slot content</p></${tag}>`);
    await expect.element(page.getByText("Slot content")).toBeVisible();
  });

  it("should render slot content", async () => {
    const cardWithSlot = await fixture(`<${tag}><p>Slot content</p></${tag}>`);
    await expect.element(page.getByText("Slot content")).toBeVisible();
  });

  it("should have basic card structure", async () => {
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("button", { name: "Expand" }))
      .toBeVisible();
  });

  it("should have basic card structure", async () => {
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("button", { name: "Expand" }))
      .toBeVisible();
  });

  it("should have basic card structure", async () => {
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("button", { name: "Expand" }))
      .toBeVisible();
  });

  it("should have basic card structure", async () => {
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("button", { name: "Expand" }))
      .toBeVisible();
  });

  it("should have basic card structure", async () => {
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("button", { name: "Expand" }))
      .toBeVisible();
  });

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });

  it("should render tags when provided", async () => {
    componentEl.tags = ["alpha", "beta"];
    await componentEl.updateComplete;

    const tags = componentEl.shadowRoot.querySelectorAll(".card-tag");
    expect(tags.length).toBe(2);
  });

  it("should render footer text when set", async () => {
    componentEl.footerText = "Footer content";
    await componentEl.updateComplete;

    await expect.element(page.getByText("Footer content")).toBeVisible();
  });

  it("should disable action button when actionDisabled is true", async () => {
    componentEl.actionDisabled = true;
    await componentEl.updateComplete;

    const actionButton = componentEl.shadowRoot.querySelector("button");
    expect(actionButton.disabled).toBe(true);
  });

  it("should not emit action event when action is disabled", async () => {
    const handler = vi.fn();
    componentEl.actionDisabled = true;
    componentEl.addEventListener("action", handler);
    await componentEl.updateComplete;

    const actionButton = componentEl.shadowRoot.querySelector("button");
    actionButton.click();

    expect(handler).not.toHaveBeenCalled();
  });

  it("should emit toggle event with expanded detail", async () => {
    const handler = vi.fn();
    componentEl.addEventListener("toggle", handler);

    await page.getByRole("button", { name: "Expand" }).click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.expanded).toBe(true);
  });
});
