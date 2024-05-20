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

test.describe("home-main controls are clickable", () => {
    test("Learn accessibility BUTTON", async ({ page }) => {
        const buttonLearnA11y = page.getByRole('link', { name: 'Learn accessibility' })
        await buttonLearnA11y.click();
        await expect(
            page.getByRole("heading", { name: "Accessibility 101" })
        ).toBeVisible();
    });
    
    test("Check for bugs BUTTON", async ({ page }) => {
        const buttonCheckForBugs = page.getByRole('link', { name: 'Check for bugs' })
        await buttonCheckForBugs.click();
        await expect(
            page.getByRole("heading", { name: "Fixing the six most common bugs" })
        ).toBeVisible();
    });

    test("Your portfolio site LINK", async ({ page }) => {
        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        await linkYourPortfolioSite.click();
        await expect(
            page.getByRole("heading", { name: "Your portfolio site" })
        ).toBeVisible();
    });

    test("LinkedIn LINK", async ({ page }) => {
        const linkLinkedIn = page.getByRole('link', { name: 'LinkedIn opens in a new tab' });
        await linkLinkedIn.click();

        const linkedInPopup = await page.waitForEvent("popup");
        await linkedInPopup.waitForLoadState();
        await expect(linkedInPopup).toHaveURL('https://www.linkedin.com/company/webforeveryone');
    });

    
    test("What is accessibility LINK", async ({ page }) => {
        const linkWhatIsA11y = page.getByRole('link', { name: 'What is accessibility?' })
        await linkWhatIsA11y.click();
        await expect(
            page.getByRole("heading", { name: "What is accessibility?" })
        ).toBeVisible();    
    });

    test("How accessibility works LINK", async ({ page }) => {
        const linkHowA11yWorks = page.getByRole('link', { name: 'How accessibility works' })
        await linkHowA11yWorks.click();
        await expect(
            page.getByRole("heading", { name: "How accessibility works" })
        ).toBeVisible();
    });

    test("The most common bugs LINK", async ({ page }) => {
        const linkCommonBugs = page.getByRole('link', { name: 'The most common bugs' });
        await linkCommonBugs.click();
        await expect(
            page.getByRole("heading", { name: "The most common bugs" })
        ).toBeVisible();
    });

    // DOES NOT TEST FROM HEADER TO MAIN TO FOOTER
    test("home-main controls should be focusable", async ({ page }) => {
        const buttonLearnA11y = page.getByRole('link', { name: 'Learn accessibility' })
        storeForFocusTest(buttonLearnA11y);

        const buttonCheckForBugs = page.getByRole('link', { name: 'Check for bugs' })
        storeForFocusTest(buttonCheckForBugs);

        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        storeForFocusTest(linkYourPortfolioSite);

        const linkLinkedIn = page.getByRole('link', { name: 'LinkedIn opens in a new tab' });
        storeForFocusTest(linkLinkedIn);

        const linkWhatIsA11y = page.getByRole('link', { name: 'What is accessibility?' })
        storeForFocusTest(linkWhatIsA11y);

        const linkHowA11yWorks = page.getByRole('link', { name: 'How accessibility works' })
        storeForFocusTest(linkHowA11yWorks);

        const linkCommonBugs = page.getByRole('link', { name: 'The most common bugs' });
        storeForFocusTest(linkCommonBugs);

        await checkFocus(page);
    });
});

test.describe("home-main controls conform to 2.5.3 Label in Name", () => {
    test("Learn accessibility BUTTON conforms to 2.5.3 Label in Name", async ({ page }) => {
        const buttonLearnA11y = page.getByRole('link', { name: 'Learn accessibility' })
        // await page.getByRole('Learn accessibility').click();
        const labelCheck = await checkLabelInName(buttonLearnA11y, 'Learn accessibility');
        // if (typeof labelCheck === 'string') {
        //     expect(labelCheck).toBe("2.5.3 Label in Name does not apply.");
        // } else {
        //     expect(labelCheck ).toBeTruthy();  
        // }
        expect(labelCheck).toBeTruthy();
    });
    
    test("Check for bugs BUTTON", async ({ page }) => {
        const buttonCheckForBugs = page.getByRole('link', { name: 'Check for bugs' })
        const labelCheck = await checkLabelInName(buttonCheckForBugs, 'Check for bugs');
        expect(labelCheck).toBeTruthy();
        
    });

    test("Your portfolio site LINK", async ({ page }) => {
        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        const labelCheck = await checkLabelInName(linkYourPortfolioSite, 'Your portfolio site');
        expect(labelCheck).toBeTruthy();
    });

    test("LinkedIn LINK", async ({ page }) => {
        const linkLinkedIn = page.getByRole('link', { name: 'LinkedIn opens in a new tab' });
        const labelCheck = await checkLabelInName(linkLinkedIn, 'LinkedIn opens in a new tab');
        expect(labelCheck).toBeTruthy();
    });

    
    test("What is accessibility LINK", async ({ page }) => {
        const linkWhatIsA11y = page.getByRole('link', { name: 'What is accessibility?' })
        const labelCheck = await checkLabelInName(linkWhatIsA11y, 'What is accessibility?');
        expect(labelCheck).toBeTruthy();    
    });

    test("How accessibility works LINK", async ({ page }) => {
        const linkHowA11yWorks = page.getByRole('link', { name: 'How accessibility works' })
        const labelCheck = await checkLabelInName(linkHowA11yWorks, 'How accessibility works');
        expect(labelCheck).toBeTruthy();
    });

    test("The most common bugs LINK", async ({ page }) => {
        const linkCommonBugs = page.getByRole('link', { name: 'The most common bugs' });
        const labelCheck = await checkLabelInName(linkCommonBugs, 'The most common bugs');
        expect(labelCheck).toBeTruthy();
    });
});
