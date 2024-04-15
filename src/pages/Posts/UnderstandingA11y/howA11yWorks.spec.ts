
import { test, expect } from '../../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../../e2e/fixtures/focused';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/blog/how-accessibility-works/');
});

test.describe('how-a11y-works', () => {
    test('how-a11y-works should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/How accessibility works/);
    });
});

test.describe ('how-a11y-works main', () => {
    test.beforeEach( async ({page}) => {
        page.locator('role=main')
    });

    test('how-a11y-works main conforms to axe AA a11y rules', async ({ makeAxeBuilder }) => {
        const accessibilityScanResults = await makeAxeBuilder()
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
    
    test('how-a11y-works main controls should be focusable', async ({ page }) => {
        await checkFocus(page);
    });
    
    test('how-a11y-works main should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
    });

    
});

