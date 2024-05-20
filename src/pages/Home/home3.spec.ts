import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { storeForFocusTest } from "../../../e2e/utils/storeForFocusTestFunction";
import { checkLabelInName } from "../../../e2e/utils/checkLabelInName";

test.beforeEach(async ({ page }) => {
    await page.goto("https://webforeveryone.us/");
});

test.describe("home", () => {
    test("home should have title", async ({ page }) => {
        await expect(page).toHaveTitle(/Web for Everyone/);
    });

    test("home should have heading", async ({ page }) => {
        await expect(
        page.getByRole("heading", { name: "Let's make it accessible." })
        ).toBeVisible();
    });
});

test.describe("home-main accessibility", () => {
    test("home-main should conform to axe rules", async ({
        page,
        makeAxeBuilder,
    }) => {
        await page.locator("main").waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
        .include("main")
        .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

test.describe("home-main controls", () => {
    test("Accessibility 101 BUTTON", async ({ page }) => {
        const buttonA11y101 = page.getByRole('link', { name: 'Accessibility 101' })
        await buttonA11y101.click();
        await expect(
            page.getByRole("heading", { name: "Accessibility 101" })
        ).toBeVisible();

        expect(checkLabelInName(buttonA11y101, 'Accessibility 101')).toBeTruthy();
        storeForFocusTest(buttonA11y101);
    });
    
    test("Check for bugs BUTTON", async ({ page }) => {
        const buttonChecksForBugs = page.getByRole('link', { name: 'Check for bugs' })
        await buttonChecksForBugs.click();
        await expect(
            page.getByRole("heading", { name: "Fixing the six most common bugs" })
        ).toBeVisible();

        expect(checkLabelInName(buttonChecksForBugs, 'Check for bugs')).toBeTruthy();
        storeForFocusTest(buttonChecksForBugs);
    });

    test("Your portfolio site LINK", async ({ page }) => {
        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        await linkYourPortfolioSite.click();
        await expect(
            page.getByRole("heading", { name: "Your portfolio site" })
        ).toBeVisible();
        await page.goBack();
        expect(checkLabelInName(linkYourPortfolioSite, 'Your portfolio site')).toBeTruthy();
        storeForFocusTest(linkYourPortfolioSite);
    });


    test("LinkedIn LINK", async ({ page }) => {
        const linkedInPromise = page.waitForEvent("popup");
        await page.getByRole('link', { name: 'LinkedIn opens in a new tab' }).click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        // await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
        expect(checkLabelInName(linkedIn, 'LinkedIn opens in a new tab')).toBeTruthy();
        storeForFocusTest(linkedIn);
    });

    test("What is accessibility LINK", async ({ page }) => {
        const linkWhatIsA11y = page.getByRole('link', { name: 'What is accessibility?' })
        await linkWhatIsA11y.click();
        await expect(
            page.getByRole("heading", { name: "What is accessibility?" })
        ).toBeVisible();
        await page.goBack();
        expect(checkLabelInName(linkWhatIsA11y, 'What is accessibility?')).toBeTruthy();
        storeForFocusTest(linkWhatIsA11y);
    });

    test("How accessibility works LINK", async ({ page }) => {
        const linkHowA11yWorks = page.getByRole('link', { name: 'How accessibility works' })
        await linkHowA11yWorks.click();
        await expect(
            page.getByRole("heading", { name: "How accessibility works" })
        ).toBeVisible();
        await page.goBack();
        expect(checkLabelInName(linkHowA11yWorks, 'How accessibility works')).toBeTruthy();
        storeForFocusTest(linkHowA11yWorks);
    });

    test("The most common bugs LINK", async ({ page }) => {
        const linkCommonBugs = page.getByRole('link', { name: 'The most common bugs' })
        await linkCommonBugs.click();
        await expect(
            page.getByRole("heading", { name: "The most common bugs" })
        ).toBeVisible();
        await page.goBack();
        expect(checkLabelInName(linkCommonBugs, 'The most common bugs')).toBeTruthy();
        storeForFocusTest(linkCommonBugs);
    });

    // DOES NOT TEST FROM HEADER TO MAIN TO FOOTER
    test.skip("home-main controls should be focusable", async ({ page }) => {
        await checkFocus(page);
    });
});
