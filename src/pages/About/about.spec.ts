
import { test, expect } from '../../../e2e/fixtures/axeBuilderFixture';
import { checkLabelInName } from '../../../e2e/utils/checkLabelInName';
import { storeForFocusTest } from '../../../e2e/utils/storeForFocusTestFunction';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';


test.beforeEach( async ({page}) => {
    await page.goto('/about');
});

test.describe('about', () => {
    test('about should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/About/);
    });

    test('about should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });
});

test.describe ('about main is accessible', () => {
    test('about conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("about-main controls should be focusable", async ({ page }) => {
        const linkLinkedIn = page.getByRole('link', { name: 'Connect on LinkedIn opens in' });
        storeForFocusTest(linkLinkedIn);

        await checkFocus(page);
    });
});

test.describe("about controls conform to 2.5.3 Label in Name", () => {
    test("About LinkedIn LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkLinkedIn = page.getByRole('link', { name: 'Connect on LinkedIn opens in' })
        const labelCheck = await checkLabelInName(linkLinkedIn, 'Connect on LinkedIn opens in');
        expect(labelCheck).toBeTruthy();
    });
});


test.describe('about controls are clickable', () => {
    test('LinkedIn LINK is clickable', async ({ page }) => {
        const linkedInPromise = page.waitForEvent("popup");
        const linkLinkedIn = page.getByRole('link', { name: 'Connect on LinkedIn opens in' })
        await linkLinkedIn.click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone');
    })
});


