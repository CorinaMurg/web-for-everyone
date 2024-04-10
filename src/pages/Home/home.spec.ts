import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe.only ('home', () => {
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
        await page.getByRole('link', { name: 'Your portfolio site' }).click();
       
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'LinkedIn opens in a new tab' }).click();
        const page1 = await page1Promise;
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

