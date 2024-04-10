import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe('header', () => {
    test('header logo', async ({ page }) => {
        await page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
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
