import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');

    await page.getByText('Web for Everyone').click();

    // NAVIGATION
    await page.getByRole('navigation').getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();

    // MAIN
    await page.getByRole('link', { name: 'Bug squashing' }).click();
    await expect(page).toHaveURL('https://webforeveryone.us/resources/make-it-accessible-part1');
    await expect(page.getByRole('heading', { name:`Your Portfolio Site: Let's Make It Accessible!`})).toBeVisible();
    
    // ASIDE

    // MINI-ARTICLES

    // FOOTER
    const linkedInPromise = page.waitForEvent('popup');
    await page.getByRole('navigation').getByRole('link', { name: 'LinkedIn' }).click();
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/webforeveryone/');
 
});

// 1) <a href="/" class="logo-link">…</a> 
// aka getByRole('banner').getByRole('link', { name: 'Web for Everyone' })

//  2) <span class="sr-only"> Web for Everyone's </span> 
// aka getByRole('link', { name: 'Web for Everyone\'s LinkedIn' })

//  3) <a href="/" class="logo-link">…</a> 
// aka getByRole('contentinfo').getByRole('link', { name: 'Web for Everyone' })

//  4) <span>Web for Everyone 2024</span> 
// aka getByText('Web for Everyone 2024')