import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { locateClickStore } from "../../../e2e/utils/locateClickStoreFunction";
import { isMobileViewport } from "../../../e2e/utils/isMobileViewport";
import { skip } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("header", () => {
  test("header conforms to axe AA a11y rules", async ({ page, makeAxeBuilder }) => {
    await page.locator("header").waitFor();
    const accessibilityScanResults = await makeAxeBuilder()
      .include("header")
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("skip link is working", async ({ page }) => {
    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await expect(skipLink).toBeHidden();
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await skipLink.press("Enter");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Learn accessibility", exact: true })).toBeFocused();
    await page.goBack();
  });

  test("skip link can be ignored", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Tab");
    const logo = page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' });
    await expect(logo).toBeFocused();
    await expect(skipLink).not.toBeInViewport();
  });

  test("header logo", async ({ page }) => {
    await locateClickStore(page, "header", "link", "Web for Everyone");
    await expect(page).toHaveTitle(/Web for Everyone/);
    await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
  });

  test("header site links", async ({ page }) => {

    if(!isMobileViewport({page})) {
        await locateClickStore(page, "header", "link", "Home");
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();

        await locateClickStore(page, "header", "link", "Blog");
        await expect(page).toHaveTitle(/Blog/);
        await expect(page.getByRole("heading", { name: "Accessibility resources" })).toBeVisible();

        await locateClickStore(page, "header", "link", "About");
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
    }
  });

  test("header controls should be focusable", async ({ page }) => {
    await checkFocus(page);
  });
});
