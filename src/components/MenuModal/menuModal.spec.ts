import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { locateClickStore } from "../../../e2e/utils/locateClickStoreFunction";
import { isMobileViewport } from "../../../e2e/utils/isMobileViewport";
import { MenuModalPageObject } from "./MenuModalPageObject";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// FOCUS TEST IS SKIPPED
test.describe("Modal menu", () => {
  test ("Modal menu conforms to axe AA a11y rules", async ({page, makeAxeBuilder}) => {
    if(isMobileViewport({page})) {
        const menu = new MenuModalPageObject(page);
        await menu.goToMenuButton();
        const accessibilityScanResults = await makeAxeBuilder()
                                                .include(".menu-modal")
                                                .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    }
  });

  test("modal menu controls", async ({ page }) => {

    if(isMobileViewport({page})) {
        const menu = new MenuModalPageObject(page);
        await menu.goToMenuButton();

        await page.getByRole('button', { name: 'Close Menu' }).click();
        await expect(page.locator('.menu-modal')).not.toBeVisible();
        await menu.goToMenuButton();

        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
        await menu.goToMenuButton();

        await page.getByRole('link', { name: 'Blog' }).click();
        await expect(page).toHaveTitle(/Blog/);
        await expect(page.getByRole("heading", { name: "Accessibility resources" })).toBeVisible();
        await menu.goToMenuButton();

        await page.getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole("heading", { name: "Let's make it accessible." })).toBeVisible();
        await menu.goToMenuButton();
        
        await page.getByRole('link', { name: 'Accessibility Statement' }).click();
        await expect(page).toHaveTitle(/Accessibility Statement/);
        await expect(page.getByRole("heading", { name: "Web for Everyone's commitment to accessibility" })).toBeVisible();
    }

  });

  test.skip("modal menu controls should be focusable", async ({ page }) => {
    await checkFocus(page);
  });

  
});
