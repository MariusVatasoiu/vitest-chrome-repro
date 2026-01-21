import { beforeEach, describe, expect, it } from "vitest";
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

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });

  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
  it("should increment the count on each click", async () => {
    await page.getByRole("button").click();

    await expect.element(page.getByRole("button")).toHaveTextContent("2");
  });

  it("should show name props", async () => {
    await expect.element(page.getByRole("heading")).toHaveTextContent("World");
  });
});
