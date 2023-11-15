import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('test', async ({ page }) => {
  await page.goto('https://corinamurg.netlify.app/');
  await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Corina Murg' }).click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByLabel('Ankit Choudhary\'s portfolio page on Unsplash').click();
  await page.getByLabel('Link to Ankit Choudhary green forest photo on Unsplash').click();
  await page.locator('a').filter({ hasText: 'Lava Leap2D Platform Game built with JavaScript' }).click();
  await page.locator('a').filter({ hasText: 'Twain & CompanyBookstore website built with React' }).click();
  await page.locator('a').filter({ hasText: 'Space Tourism AgencyMultipage website built with JavaScript' }).click();
  await page.getByRole('link', { name: 'My Projects' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('Corina\'s blog post on HTML buttons vs links on dev.to.').click();
  await page.getByLabel('Link to Aaron Visuals\' Unsplash profile').click();
  await page.getByLabel('Link to Aaron Visuals\' compass photo on Unsplash').click();
  await page.getByLabel('Link to Corina\'s blog post about the Lava Leap game.').click();
  await page.getByLabel('Link to Simon Schwyter\'s Unsplash profile').click();
  await page.getByLabel('Link to Simon Schwyter\'s cameleon photo on Unsplash').click();
  await page.getByLabel('Link to Corina\'s blog post on Immutability in React.').click();
  await page.getByRole('link', { name: 'Explore My Blog' }).click();
});

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('.home--intro--image--caption')
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });


// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     await page.goto('https://corinamurg.netlify.com/');
    
//     const elements = await page.$$('[aria-label]');
//     for (const elementHandle of elements) {
//         const visibleText = (await elementHandle.textContent())?.trim() ?? "";
      
//         const ariaLabel = await elementHandle.getAttribute('aria-label') ?? "";
      
//         console.log(`Visible text: "${visibleText}", Aria-label: "${ariaLabel}"`);
      
//         const condition = ariaLabel.includes(visibleText);
//         if (!condition) {
//             console.error(`Mismatch found: The aria-label "${ariaLabel}" should include the visible text "${visibleText}".`);
//         }
      
//         expect(condition).toBeTruthy();
//     } 
// });

// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     await page.goto('https://corinamurg.netlify.com/');

//     await page.waitForSelector('a.recent-post--link h4');
//     const h4Elements = await page.$$('a.recent-post--link h4');

//     for (const h4Element of h4Elements) {
//         const titleText = (await h4Element.textContent())?.trim() ?? "";
//         const ariaLabel = await h4Element.evaluate(node => {
//             const parentLink = node.closest('a[aria-label]');
//             return parentLink ? parentLink.getAttribute('aria-label') : '';
//         });

//         const condition = ariaLabel.includes(titleText);
//         if (!condition) {
//             throw new Error(`The aria-label "${ariaLabel}" should include the text "${titleText}".`);
//         }
//         expect(condition).toBeTruthy();
//     }
// });

test('WCAG 2.5.3: Label in Name', async ({ page }) => {
    function normalizeString(str) {
        return str.toLowerCase().replace(/[\W_]+/g, " ").trim();
    }

    await page.goto('https://corinamurg.netlify.com/');
    const links = await page.$$('[aria-label]');

    for (const link of links) {
        const linkText = await link.$eval('*', (el) => {
            const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
            return heading ? heading.textContent?.trim() : el.textContent?.trim();
        }) ?? "";

        const ariaLabel = await link.getAttribute('aria-label') ?? "";
        const normalizedAriaLabel = normalizeString(ariaLabel);
        const normalizedLinkText = normalizeString(linkText);
        const condition = normalizedAriaLabel.includes(normalizedLinkText);
        
        if (!condition) {
            throw new Error(`The aria-label "${ariaLabel}" should include the text "${linkText}".`);
        }
        expect(condition).toBeTruthy();
    }
});

  
