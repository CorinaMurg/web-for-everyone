// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/');

    await expect(page).toHaveTitle(/My site/);
});


test('has heading', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/')

    await expect(page.getByRole('heading', { name: 'HELLO, I’m CORINA!' })).toBeVisible();
});

test('My Projects link', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/')

    await page.getByRole('link', { name: 'My Projects' }).click();
});
