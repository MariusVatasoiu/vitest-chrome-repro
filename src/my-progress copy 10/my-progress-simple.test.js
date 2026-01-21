import { beforeEach, describe, expect, it } from "vitest";
import { fixture, defineCE } from "@open-wc/testing";
import { page } from "vitest/browser";

import { MyProgress } from "./my-progress.js";

describe("Progress Component", async () => {
  const tag = defineCE(MyProgress);
  let componentEl;

  beforeEach(async () => {
    document.body.innerHTML = "";
    componentEl = await fixture(
      `<${tag} label="Test Progress" value="50"></${tag}>`
    );
  });

  it("should display the label and percentage", async () => {
    await expect.element(page.getByText("Test Progress")).toBeVisible();
    await expect.element(page.getByText("50%").first()).toBeVisible();
  });

  it("should have correct progress bar attributes", async () => {
    const progressBar = page.getByRole("progressbar");
    await expect.element(progressBar).toHaveAttribute("aria-valuenow", "50");
    await expect
      .element(progressBar)
      .toHaveAttribute("aria-label", "Test Progress");
  });

  it("should work with different values", async () => {
    const progress25 = await fixture(`<${tag} value="25"></${tag}>`);
    await expect.element(page.getByText("25%")).toBeVisible();
  });
});
