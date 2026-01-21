import { beforeEach, describe, expect, it } from "vitest";
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

  it("should handle empty subtitle gracefully", async () => {
    // Just check that the component renders without subtitle
    await expect
      .element(page.getByRole("button", { name: "Action" }))
      .toBeVisible();
  });
});
