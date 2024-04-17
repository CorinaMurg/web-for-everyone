
import { test, expect } from '../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../e2e/utils/focusedfunction';


test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe.skip('header', () => {
    test('header conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('header').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('header')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('header logo', async ({ page }) => {
        // await interactAndStore(page, 'link', 'Web for Everyone');
        await page.getByRole('link', { name: 'Web for Everyone' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('header controls should be focusable', async ({ page }) => {
        await checkFocus(page, 'header');
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
        await page.getByLabel('site links').getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        await page.getByLabel('site links').getByRole('link', { name: 'Blog' }).click();
        await expect(page).toHaveTitle(/Blog/);
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();

        await page.getByLabel('site links').getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });
});
