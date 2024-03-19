// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');

    await expect(page).toHaveTitle(/Web for Everyone/);
});


test('has heading', async ({ page }) => {
    await page.goto('https://webforeveryone.us/')

    await expect(page.getByRole('heading', { name: 'Let\'s Make It Accessible.' })).toBeVisible();
});


