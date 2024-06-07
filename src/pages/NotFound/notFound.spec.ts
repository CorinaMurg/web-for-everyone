import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkLabelInName } from "../../../e2e/utils/checkLabelInName";
import { storeForFocusTest } from "../../../e2e/utils/storeForFocusTestFunction";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";


test.beforeEach(async ({ page }) => {
    await page.goto("/*");
});

test.describe("not found", () => {
    test("not-found should have title", async ({ page }) => {
        await expect(page).toHaveTitle(/Not Found/);
    });

    test("not-found should have heading", async ({ page }) => {
        await expect(page.getByRole("heading", { name: "Oops! The page you were looking for is playing hard to get." })).toBeVisible();
    });

});

test.describe("not-found accessibility", () => {
    test("not-found should conform to axe rules", async ({
        page,
        makeAxeBuilder,
    }) => {
        await page.locator("main").waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include("main")
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("not-found controls should conform to 2.5.3", async ({ page }) => {
        const linkReturnToHome = page.getByRole('link', { name: 'Return to Home' })
        const labelCheck = await checkLabelInName(linkReturnToHome, 'Return to Home');
        expect(labelCheck).toBeTruthy();
    });

        
    test("not-found controls should be focusable", async ({ page }) => {
        const linkReturnToHome = page.getByRole('link', { name: 'Return to Home' });
        storeForFocusTest(linkReturnToHome);
        await checkFocus(page);
    });

});

test.describe("Return-to-Home link", () => {
    test("Return-to-Home LINK should be clickable", async ({ page }) => {
        const linkReturnToHome = page.getByRole('link', { name: 'Return to Home' })
        await linkReturnToHome.click();
        await expect(
            page.getByRole("heading", { name: "Let's make it accessible." })
        ).toBeVisible();
        await expect(page).toHaveURL('/');
    });
});