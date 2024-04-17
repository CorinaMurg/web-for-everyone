import { test, expect } from '../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';
import { locateAndStore } from '../../../e2e/utils/locateAndStoreFunction';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe ('footer', () => {
    test('footer conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('footer').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('footer')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('footer logo', async ({ page }) => {
        await locateAndStore(page, 'footer', 'link', 'Web for Everyone');
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('footer site links', async ({ page }) => {
        await locateAndStore(page, 'footer', 'link', 'Home');
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        // await locateAndStore(page, 'footer', 'link', 'Blog');
        // await expect(page).toHaveTitle(/Blog/);
        // await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();


        await locateAndStore(page, 'footer', 'link', 'About');
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        await locateAndStore(page, 'footer', 'link', 'Accessibility Statement');
        await expect(page).toHaveTitle(/Accessibility Statement/);
        await expect(page.getByRole('heading', { name: 'Web for Everyone\'s commitment to accessibility' })).toBeVisible();
    });

    test('footer contact', async ({ page }) => {
        const linkedInPromise = page.waitForEvent('popup');
        await locateAndStore(page, 'footer', 'link', 'LinkedIn (opens in new tab)');
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    });
    
    test.skip('footer controls should be focusable', async ({ page }) => {
        await checkFocus(page);
    });

});