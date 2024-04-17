
import { test, expect } from '../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';
import { locateAndStore } from '../../../e2e/utils/locateAndStoreFunction';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe('home', () => {
    test('home should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Web for Everyone/);
    });

    test('home should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });
});

test.describe ('home-main accessibility', () => {
    test('home-main should conform to axe rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

test.describe ('home-main controls', () => {
    test('home-main ctas should be clickable', async ({ page }) => {
        await locateAndStore(page, 'main', 'link', 'Accessibility 101');
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();

        await locateAndStore(page, 'main', 'link', 'Check for bugs');
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
    });


    test('home-we-can-help links should be clickable', async ({ page }) => {
        await locateAndStore(page, 'main', 'link', 'Your portfolio site');
        await expect(page.getByRole('heading', { name: 'Your portfolio site' })).toBeVisible();
        await page.goBack();
       
        const linkedInPromise = page.waitForEvent('popup');
        await locateAndStore(page, 'main', 'link', 'LinkedIn opens in a new tab');
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        // await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    });

    test('home-a11y-101 links should be clickable', async ({ page }) => {
        await locateAndStore(page, 'main', 'link', 'The most common bugs');
        await expect(page.getByRole('heading', { name: 'The most common bugs' })).toBeVisible();
        await page.goBack();

        await locateAndStore(page, 'main', 'link', 'What is accessibility?');
        await expect(page.getByRole('heading', { name: 'What is accessibility?' })).toBeVisible();
        await page.goBack();

        await locateAndStore(page, 'main', 'link', 'How accessibility works');
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
    });
    
    // DOES NOT TEST FROM HEADER TO MAIN TO FOOTER
    test.skip('home-main controls should be focusable', async ({ page }) => {
        await checkFocus(page);
    });
});

