import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { locateClickStore } from "../../../e2e/utils/locateClickStoreFunction";
import { isMobileViewport } from "../../../e2e/utils/isMobileViewport";
import { MenuModalPageObject } from "./MenuModalPageObject";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Navigation menu", () => {
  test.only("Navigation menu conforms to axe AA a11y rules", async ({page, makeAxeBuilder}) => {
   
        const menuButton = page.getByRole('button', { name: 'Navigation Menu' });
        await menuButton.waitFor();
        await menuButton.click();
        await expect(page.locator('#root')).toHaveAttribute('aria-hidden', 'true');
        await page.locator('.menu-modal').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
                                                .include(".menu-modal")
                                                .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Navigation menu logo", async ({ page }) => {
    await locateClickStore(page, "header", "link", "Web for Everyone");
    await expect(page).toHaveTitle(/Web for Everyone/);
    await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
  });

  test("Modal links", async ({ page }) => {

    if(isMobileViewport({page})) {
        await page.getByRole('button', { name: 'Navigation Menu' }).waitFor();
        await locateClickStore(page, "header", "button", "Navigation Menu");
        await expect(page.locator('.ReactModal_Content')).toBeInViewport();
        await expect(page.locator('#root')).not.toBeVisible(); 
    }

    await locateClickStore(page, "header", "link", "Home");
    await expect(page).toHaveTitle(/Web for Everyone/);
    await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();

    await locateClickStore(page, "header", "link", "Blog");
    await expect(page).toHaveTitle(/Blog/);
    await expect(page.getByRole("heading", { name: "Accessibility resources" })).toBeVisible();

    await locateClickStore(page, "header", "link", "About");
    await expect(page).toHaveTitle(/About/);
    await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
  });

  test("header controls should be focusable", async ({ page }) => {
    await checkFocus(page);
  });
});
