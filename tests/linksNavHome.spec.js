import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
    const page1 = await page1Promise;

    

    // Check if the URL has changed to the About page's URL
    await expect(page).toHaveURL('https://corinamurg.netlify.app/about');

    // Check for specific content that should appear on the About page
    await expect(page.getByText('My Career in a Nutshell')).toBeVisible();


    
});

