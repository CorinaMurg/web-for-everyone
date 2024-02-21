import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');

    await page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' }).click();

    // NAVIGATION
    await page.getByRole('banner').getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('banner').getByRole('link', { name: 'About' }).click();

    // MAIN
    await page.getByRole('link', { name: 'Bug Squashing' }).click();
    await expect(page).toHaveURL('https://webforeveryone.us/resources/make-it-accessible-part1');
    await expect(page.getByRole('heading', { name:`Your Portfolio Site: Let's Make It Accessible!`})).toBeVisible();
    
    // ASIDE

    // MINI-ARTICLES

    // FOOTER
    const linkedInPromise = page.waitForEvent('popup');
    await page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' }).click();
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
 
});

