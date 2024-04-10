import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe ('home', () => {
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
       
        const linkedInPromise = page.waitForEvent('popup');
        await page.getByRole('complementary').getByRole('link', { name: 'LinkedIn opens in a new tab ' }).click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');await page.getByLabel('site links').getByRole('link', { name: 'Home' }).click();
    });

    test('home a11y 101', async ({ page }) => {
        await page.getByRole('link', { name: 'What is accessibility?' }).click();
        await expect(page.getByRole('heading', { name: 'What is accessibility?' })).toBeVisible();

        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();

        await page.getByRole('link', { name: 'The most common bugs' }).click();
        await expect(page.getByRole('heading', { name: 'The most common bugs' })).toBeVisible();
    });
});

