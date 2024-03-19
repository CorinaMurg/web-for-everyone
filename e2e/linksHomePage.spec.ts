import { test, expect } from '@playwright/test';

test.skip('test links for home page', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');

    // NAVIGATION
    await page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' }).click();
    await page.getByLabel('site links').getByRole('link', { name: 'Home' }).click();
    await page.getByLabel('site links').getByRole('link', { name: 'Resources' }).click();
    await page.getByLabel('site links').getByRole('link', { name: 'About' }).click();
    await page.waitForURL('https://webforeveryone.us/about');
    await expect(page).toHaveTitle(/About/);
    
    // ASIDE
    // await page.getByRole('link', { name: 'Your Digital Presence' }).click();
    // const page2Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'LinkedIn opens in a new tab' }).click();
    // const page2 = await page2Promise;

    //MAIN
    await page.getByRole('link', { name: 'Accessibility 101' }).click();
    await page.getByRole('link', { name: 'Bug check' }).click();

    // MINI-ARTICLES
    await page.getByRole('link', { name: 'What is accessibility?' }).click();
    await page.getByRole('link', { name: 'How accessibility works' }).click();
    await page.getByRole('link', { name: 'The most common bugs' }).click();

    // FOOTER
    const linkedInPromise = page.waitForEvent('popup');
    await page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' }).click();
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
    // await page.getByRole('contentinfo').getByRole('link', { name: 'Web for Everyone' }).click();
    // await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).click();
    // await page.getByRole('contentinfo').getByRole('link', { name: 'Resources' }).click();
    // await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click();
    // const page3Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'LinkedIn (opens in new tab)' }).click();
    // const page3 = await page3Promise;
    // await page.getByRole('link', { name: 'Accessibility Statement' }).click();
 
});


test.skip('test links for most common bugs page', async ({ page }) => {
    await page.goto('https://webforeveryone.us/resources/most-common-bugs');

    // ARTICLE
    const webAIMPromise = page.waitForEvent('popup');
    await page.getByRole('main').getByRole('link', { name: 'WebAIM opens in a new tab' }).click();
    const webAIM = await webAIMPromise;
    await webAIM.waitForLoadState();
    await expect(webAIM).toHaveURL('https://webaim.org/');

    // CONCLUSION
    // await page.getByRole('link', { name: 'Bug check' }).click();
    // await page.waitForURL('https://webforeveryone.us/resources/make-it-accessible-part1');
    // await expect(page).toHaveTitle(/Let\s Make It Accessible Part One/);
});



 
  
 
 
 

 