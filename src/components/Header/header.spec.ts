
import { test, expect } from '../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';
import { locateAndStore } from '../../../e2e/utils/locateAndStoreFunction';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe('header', () => {
    test('header conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('header').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('header')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('header logo', async ({ page }) => {
        await locateAndStore(page, 'header', 'link', 'Web for Everyone');
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    // test('skip link focus', async ({ page }) => {
    //     await page.keyboard.press('Tab');
    //     await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
    // });

    test('skip link is working', async ({ page }) => {
        await page.keyboard.press('Tab');
        const skipLink = page.getByRole('link', { name: 'Skip to content' });
        await expect(skipLink).toBeFocused();
        await skipLink.press('Enter');
        await page.keyboard.press('Tab');
        await expect(page.getByRole('link', { name: 'Accessibility 101', exact: true })).toBeFocused();
    });


    test('header site links', async ({ page }) => {
        await locateAndStore(page, 'header', 'link', 'Home');
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        await locateAndStore(page, 'header', 'link', 'Blog');
        await expect(page).toHaveTitle(/Blog/);
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();

        await locateAndStore(page, 'header', 'link', 'About');
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('header controls should be focusable', async ({ page }) => {
        await checkFocus(page);
    });
});
