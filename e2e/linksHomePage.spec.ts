import { test, expect } from '@playwright/test';

test('test links for home page', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');

    await page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' }).click();

    // NAVIGATION
    await page.getByRole('banner').getByRole('link', { name: 'Resources' }).click();

    //ABOUT
    await page.getByRole('banner').getByRole('link', { name: 'About' }).click();
    await page.waitForURL('https://webforeveryone.us/about');
    await expect(page).toHaveTitle(/About/);
    
    // ASIDE

    // MINI-ARTICLES

    // FOOTER
    const linkedInPromise = page.waitForEvent('popup');
    await page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' }).click();
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
 
});

test('test links for most common bugs page', async ({ page }) => {
    await page.goto('https://webforeveryone.us/resources/most-common-bugs');

    // ARTICLE
    const webAIMPromise = page.waitForEvent('popup');
    await page.getByRole('main').getByRole('link', { name: 'WebAIM opens in a new tab' }).click();
    const webAIM = await webAIMPromise;
    await webAIM.waitForLoadState();
    await expect(webAIM).toHaveURL('https://webaim.org/');

    // CONCLUSION
    
    await page.getByRole('main').getByRole('link', { name: 'Let\s Make It Accessible! Part One: Fixing the 6 Most Common Bugs' }).click();
    await page.waitForURL('https://webforeveryone.us/about');
    await expect(page).toHaveTitle(/Let\s Make It Accessible! Part One/);
});


