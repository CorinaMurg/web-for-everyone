import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/');
    await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click(); 
    await expect(page).toHaveURL('https://corinamurg.netlify.app/');
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('https://corinamurg.netlify.app/');
    await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL('https://corinamurg.netlify.app/projects');
    await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
    await expect(page).toHaveURL('https://corinamurg.netlify.app/accessibility');
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('https://corinamurg.netlify.app/about');
    await expect(page.getByText('My Career in a Nutshell')).toBeVisible();

    const blogPromise = page.waitForEvent('popup');
    await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
    const blog = await blogPromise;
    await blog.waitForLoadState();
    await expect(blog).toHaveURL('https://dev.to/corinamurg');
    await expect(blog).toHaveTitle('Corina: Web is for Everyone - DEV Community');
    
});

