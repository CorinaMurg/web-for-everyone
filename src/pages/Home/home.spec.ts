import { test, expect } from '@playwright/test';

test.describe.only ('home', () => {
    test('home should have title', async ({ page }) => {
        await page.goto('https://webforeveryone.us/');
        await expect(page).toHaveTitle(/Web for Everyone/);
    });
    
    test('home should have heading', async ({ page }) => {
        await page.goto('https://webforeveryone.us/');
        await expect(page.getByRole('heading', { name: 'Let\'s make it accessible.' })).toBeVisible();
    });

    test('home ctas', async ({ page }) => {
        await page.goto('https://webforeveryone.us/');
        
        await page.getByRole('link', { name: 'Accessibility 101' }).click();
        await page.getByRole('link', { name: 'Check for bugs' }).click();
        
    });

    test('home we can help', async ({ page }) => {
        await page.goto('https://webforeveryone.us/');
        
        await page.getByRole('link', { name: 'Your portfolio site' }).click();
       
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'LinkedIn opens in a new tab' }).click();
        const page1 = await page1Promise;
        
        await page.getByRole('link', { name: 'What is accessibility?' }).click();
        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await page.getByRole('link', { name: 'The most common bugs' }).click();
    });

    test('home a11y 101', async ({ page }) => {
        await page.goto('https://webforeveryone.us/');
        
        await page.getByRole('link', { name: 'What is accessibility?' }).click();
        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await page.getByRole('link', { name: 'The most common bugs' }).click();
    });
});

