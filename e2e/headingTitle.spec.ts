// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://web-for-everyone.netlify.app/');

    await expect(page).toHaveTitle(/Web for Everyone/);
});


test('has heading', async ({ page }) => {
    await page.goto('https://web-for-everyone.netlify.app/')

    await expect(page.getByRole('heading', { name: 'Let\'s Make It Accessible!' })).toBeVisible();
});

test('let\'s make it accessible link', async ({ page }) => {
    await page.goto('https://web-for-everyone.netlify.app/')

    await page.getByRole('link', { name: 'Read more' }).click();
});
