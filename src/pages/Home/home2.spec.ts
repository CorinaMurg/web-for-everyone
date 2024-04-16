
import { test, expect } from '../../../e2e/fixtures/axeAll';
import { checkFocus } from '../../../e2e/utils/focused';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe.skip('home', () => {
    test('home should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Web for Everyone/);
    });
});

test.describe.skip ('home main', () => {
    test('home main conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
    
    test('home main controls should be focusable', async ({ page }) => {
        await checkFocus(page, 'main');
    });
    
    test('home main should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('home main ctas should work', async ({ page }) => {
        await page.getByRole('link', { name: 'Accessibility 101' }).click();
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();

        await page.getByRole('link', { name: 'Check for bugs' }).click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
    });


    test('home we-can-help links should work', async ({ page }) => {
        await page.getByRole('link', { name: 'Your portfolio site' }).click();
        await expect(page.getByRole('heading', { name: 'Your portfolio site' })).toBeVisible();
        await page.goBack();
       
        const linkedInPromise = page.waitForEvent('popup');
        await page.getByRole('link').getByText('LinkedIn').click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        // await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    });

    test('home a11y-101 links should work', async ({ page }) => {
        await page.getByRole('link', { name: 'The most common bugs' }).click();
        await expect(page.getByRole('heading', { name: 'The most common bugs' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'What is accessibility?' }).click();
        await expect(page.getByRole('heading', { name: 'What is accessibility?' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
    });
});

