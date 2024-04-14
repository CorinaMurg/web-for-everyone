// import { test, expect } from '@playwright/test';
import { test, expect } from '../../../e2e/fixtures/axeAA';


test.beforeEach( async ({page}) => {
    await page.goto('http://webforeveryone.us/');
});

test.describe ('home', () => {
    test('home conforms to axe AA a11y rules', async ({ makeAxeBuilder }) => {
        const accessibilityScanResults = await makeAxeBuilder()
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('home should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Web for Everyone/);
    });
    
    test('home should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('home ctas', async ({ page }) => {
        await page.getByRole('link', { name: 'Accessibility 101' }).click();
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();

        await page.getByRole('link', { name: 'Check for bugs' }).click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
    });


    test('home we can help', async ({ page }) => {
        await page.getByRole('link', { name: 'Your portfolio site' }).click();
        await expect(page.getByRole('heading', { name: 'Your portfolio site' })).toBeVisible();
        await page.goBack();
       
        const linkedInPromise = page.waitForEvent('popup');
        await page.getByRole('main').getByRole('link').getByText('LinkedIn').click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        // await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    });

    test('home a11y 101', async ({ page }) => {
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

