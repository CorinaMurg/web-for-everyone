import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/');
});

test.describe.only ('footer', () => {

    test('footer logo', async ({ page }) => {
        await page.getByRole('contentinfo').getByRole('link', { name: 'Web for Everyone' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test.skip('footer site links', async ({ page }) => {
        await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Web for Everyone/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        await page.getByRole('contentinfo').getByRole('link', { name: 'Blog' }).click();
        await expect(page).toHaveTitle(/Blog/);
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();


        await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();

        await page.getByRole('contentinfo').getByRole('link', { name: 'Accessibility Statement' }).click();
        await expect(page).toHaveTitle(/Accessibility Statement/);
        await expect(page.getByRole('heading', { name: 'Web for Everyone\'s commitment to accessibility' })).toBeVisible();
    });

    test('footer contact', async ({ page }) => {
        const linkedInPromise = page.waitForEvent('popup');
        await page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn (opens in new tab)' }).click();
        const linkedIn = await linkedInPromise;
        await linkedIn.waitForLoadState();
        await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    });
});