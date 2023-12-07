import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://web-for-everyone.netlify.app/');

    await page.getByText('WE | Web for Everyone').click();

    await page.getByRole('link', { name: 'Your Users' }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();

    await page.getByRole('link', { name: 'Read more →' }).click();
    await expect(page).toHaveURL('https://web-for-everyone.netlify.app/resources/make-it-accessible');
    await expect(page.getByRole('heading', { name: `Let's Make It Accessible!` })).toBeVisible();
    
    const linkedInPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'LinkedIn' }).click();
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL('https://www.linkedin.com/in/corinamurg/');

    const githubPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'GitHub', exact: true }).click();
    const github = await githubPromise;
    await github.waitForLoadState();
    await expect(github).toHaveURL('https://github.com/CorinaMurg');

    const twitterPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Twitter' }).click();
    const twitter = await twitterPromise;
    await twitter.waitForLoadState();
    await expect(twitter).toHaveURL('https://twitter.com/CorinaMurg');  
});
