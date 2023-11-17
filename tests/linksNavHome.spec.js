import { test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/');
    await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
});

