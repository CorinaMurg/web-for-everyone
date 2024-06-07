
import { test, expect } from "../../../../e2e/fixtures/axeBuilderFixture";
import { checkLabelInName } from "../../../../e2e/utils/checkLabelInName";
import { storeForFocusTest } from "../../../../e2e/utils/storeForFocusTestFunction";
import { checkFocus } from "../../../../e2e/utils/focusedFromClicksFunction";


test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/blog/similar-but-different");
});

test.describe("Similar but different", () => {
    test("Similar-but-different should have title", async ({ page }) => {
        await expect(page).toHaveTitle(/Similar but Different/);
    });

    test("Similar-but-different should have heading", async ({ page }) => {
        await expect(page.getByRole("heading", { name: "Similar but different: HTML and ARIA terms" })).toBeVisible();
    });

});

test.describe("Similar-but-different accessibility", () => {
    test("Similar-but-different should conform to axe rules", async ({
        page,
        makeAxeBuilder,
    }) => {
        await page.locator("main").waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include("main")
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("Similar-but-different TOC controls should conform to 2.5.3", async ({ page }) => {
        const tocAriaLabelAriaLabelledby = page.getByRole('link', { name: 'aria-label vs. aria-labelledby' })
        const labelCheck = await checkLabelInName(tocAriaLabelAriaLabelledby, 'aria-label vs. aria-labelledby');
        expect(labelCheck).toBeTruthy();

        const tocTitleHeading = page.getByRole('link', { name: 'title vs. heading' })
        const labelCheck2 = await checkLabelInName(tocTitleHeading, 'title vs. heading');
        expect(labelCheck2).toBeTruthy();

        const tocFocusFocusVisible = page.getByRole('link', { name: 'focus vs. focus-visible' })
        const labelCheck3 = await checkLabelInName(tocFocusFocusVisible, 'focus vs. focus-visible');
        expect(labelCheck3).toBeTruthy();
    });

        
    test("Similar-but-different TOC controls should be focusable", async ({ page }) => {
        const linkReturnToHome = page.getByRole('link', { name: 'aria-label vs. aria-labelledby' })
        storeForFocusTest(linkReturnToHome);
        await checkFocus(page);

        const linkTitleHeading = page.getByRole('link', { name: 'title vs. heading' })
        storeForFocusTest(linkTitleHeading);
        await checkFocus(page);

        const linkFocusFocusVisible = page.getByRole('link', { name: 'focus vs. focus-visible' })
        storeForFocusTest(linkFocusFocusVisible);
        await checkFocus(page);
    });

});

test.describe("Similar-but-different controls should be clickable", () => {
    test.skip("Similar-but-different TOC controls should be clickable", async ({ page }) => {
        
        await page.getByRole('link', { name: 'aria-label vs. aria-labelledby' }).click();
        await expect(page.getByLabel('aria-label versus aria-labelledby')).toBeVisible({ timeout: 20000});

        
        await page.getByRole('link', { name: 'title vs. heading' }).click();
        await expect(page.getByRole('heading', { name: 'title versus heading' })).toBeVisible();

        await page.getByRole('link', { name: 'ocus vs. focus-visible' }).click();
        await expect(page.getByRole('heading', { name: 'focus versus focus-visible' })).toBeVisible();
    });
});