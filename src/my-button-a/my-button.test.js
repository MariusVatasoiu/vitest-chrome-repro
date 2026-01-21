import { beforeEach, describe, expect, it, vi } from "vitest";
import { fixture, defineCE } from "@open-wc/testing";
import { page } from "vitest/browser";

import { MyButton } from "./my-button.js";

describe("Button with increment", async () => {
  const tag = defineCE(MyButton);
  let componentEl;

  beforeEach(async () => {
    componentEl = await fixture(`<${tag} name="World"></${tag}>`);
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment by step size", async () => {
    componentEl.step = 2;
    await componentEl.updateComplete;

    const button = page.getByRole("button");
    await button.click();

    await expect.element(button).toHaveTextContent("3");
  });

  it("should stop at max and disable the button", async () => {
    componentEl.max = 2;
    await componentEl.updateComplete;

    const button = page.getByRole("button");
    await button.click();

    const buttonEl = componentEl.shadowRoot.querySelector("button");
    expect(buttonEl.disabled).toBe(true);
    expect(componentEl.status).toContain("Limit reached");
  });

  it("should emit count event with the latest value", async () => {
    const handler = vi.fn();
    componentEl.addEventListener("count", handler);

    await page.getByRole("button").click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(2);
  });

  it("should reset count and status", async () => {
    componentEl.count = 5;
    componentEl.disabled = true;
    componentEl.status = "Limit reached";
    await componentEl.updateComplete;

    componentEl.reset();
    await componentEl.updateComplete;

    await expect.element(page.getByRole("button")).toHaveTextContent("1");
    expect(componentEl.disabled).toBe(false);
    expect(componentEl.status).toBe("");
  });
});
