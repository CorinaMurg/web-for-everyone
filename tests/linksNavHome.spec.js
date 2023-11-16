import { test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/');
    await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
    const page1 = await page1Promise;
});

