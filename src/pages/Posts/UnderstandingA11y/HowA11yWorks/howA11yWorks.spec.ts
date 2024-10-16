
import { test, expect } from '../../../../../e2e/fixtures/axeBuilderFixture';
// import { checkFocus } from '../../../../e2e/utils/focusedFunction';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/blog/how-accessibility-works/');
});

test.describe('how-a11y-works', () => {
    test('how-a11y-works should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/How accessibility works/);
    });

    test('how-a11y-works should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
    });
});

test.describe ('how-a11y-works main', () => {
    test('how-a11y-works-main conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .exclude('iframe')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
    
    // test('how-a11y-works-main controls should be focusable', async ({ page }) => {
    //     await checkFocus(page, 'main');
    // });
});

