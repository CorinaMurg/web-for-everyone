
import { test, expect } from '../../../e2e/fixtures/axeBuilderFixture';
import { checkLabelInName } from '../../../e2e/utils/checkLabelInName';
import { storeForFocusTest } from '../../../e2e/utils/storeForFocusTestFunction';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';


test.beforeEach( async ({page}) => {
    await page.goto('/accessibility-statement');
});

test.describe('a11y statement', () => {
    test('a11y statement should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Accessibility Statement/);
    });

    test('a11y statement should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Web for Everyone\'s commitment to accessibility' })).toBeVisible();
    });
});

test.describe ('a11y-statement main is accessible', () => {
    test('a11y statement conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test.skip ("a11y-statement main controls should be focusable", async ({ page }) => {
        const linkWCAG = page.getByRole('link', { name: 'Web Content Accessibility Guidelines WCAG AA' })
        storeForFocusTest(linkWCAG);

        await checkFocus(page);
    });
    
   
});

test.describe("a11y-statement controls conform to 2.5.3 Label in Name", () => {
    test("WCAG LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkWCAG = page.getByRole('link', { name: 'Web Content Accessibility' })
        const labelCheck = await checkLabelInName(linkWCAG, 'Web Content Accessibility');
        expect(labelCheck).toBeTruthy();
    });
});


test.describe('a11y statement controls are clickable', () => {
    test('wcag link is clickable', async ({ page }) => {
        const linkWCAG = page.getByRole('link', { name: 'Web Content Accessibility' });
        await linkWCAG.click();

        const wcagPopup = await page.waitForEvent("popup");
        await wcagPopup.waitForLoadState();
        await expect(wcagPopup).toHaveURL('https://www.w3.org/WAI/standards-guidelines/wcag/');
    })
});

