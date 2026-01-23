import { beforeEach, describe, expect, it } from "vitest";
import { fixture, defineCE } from "@open-wc/testing";
import { page } from "vitest/browser";

import { MyToggle } from "./my-toggle.js";

describe("Toggle Component", async () => {
  const tag = defineCE(MyToggle);
  let componentEl;

  beforeEach(async () => {
    document.body.innerHTML = "";
    componentEl = await fixture(`<${tag} label="Test Toggle"></${tag}>`);
  });

  it("should display the label", async () => {
    await expect.element(page.getByText("Test Toggle")).toBeVisible();
  });

  it("should toggle state when clicked", async () => {
    const toggleSwitch = page.getByRole("switch");

    await expect.element(toggleSwitch).toHaveAttribute("aria-checked", "false");
    await toggleSwitch.click();
    await expect.element(toggleSwitch).toHaveAttribute("aria-checked", "true");
  });

  it("should have proper accessibility attributes", async () => {
    const toggleSwitch = page.getByRole("switch");
    await expect.element(toggleSwitch).toHaveAttribute("role", "switch");
    await expect
      .element(toggleSwitch)
      .toHaveAttribute("aria-label", "Test Toggle");
  });
});
