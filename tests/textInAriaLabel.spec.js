import { test, expect } from '@playwright/test';

// CHECK FOR ENTIRE INNER TEXT IF THE LINK
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
//     await page.goto('https://yourwebsite.com/');
    
//     // Select all <a> elements with an aria-label attribute
//     const links = await page.$$('[aria-label]');

//     for (const link of links) {
//         // Check for a heading child, if not found, use the text content of the <a> itself
//         const linkText = await link.$eval('*', (el) => {
//             const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
//             return heading ? heading.textContent?.trim() : el.textContent?.trim();
//         }) ?? "";

//         // Get the aria-label attribute
//         const ariaLabel = await link.getAttribute('aria-label') ?? "";

//         // Perform the check for Label in Name compliance
//         expect(ariaLabel).toContain(linkText, `The aria-label "${ariaLabel}" should include the text "${linkText}".`);
//     }
// });


// CHECK FOR H4 ELEMENTS
// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     function normalizeString(str) {
//         return str.toLowerCase().replace(/[\W_]+/g, " ").trim();
//     }

//     await page.goto('https://corinamurg.netlify.com/');
//     const links = await page.$$('[aria-label]');

//     for (const link of links) {
//         const linkText = await link.$eval('*', (el) => {
//             const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
//             return heading ? heading.textContent?.trim() : el.textContent?.trim();
//         }) ?? "";

//         const ariaLabel = await link.getAttribute('aria-label') ?? "";
//         const normalizedAriaLabel = normalizeString(ariaLabel);
//         const normalizedLinkText = normalizeString(linkText);
//         const condition = normalizedAriaLabel.includes(normalizedLinkText);
        
//         if (!condition) {
//             throw new Error(`The aria-label "${ariaLabel}" should include the text "${linkText}".`);
//         }
//         expect(condition).toBeTruthy();
//     }
// });

// SHOW ALL ERRORS
test('WCAG 2.5.3: Label in Name', async ({ page }) => {
    function normalizeString(str) {
        return str.toLowerCase().replace(/[\W_]+/g, " ").trim();
    }

    await page.goto('https://corinamurg.netlify.com/');
    const links = await page.$$('[aria-label]');
    const errors = [];

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
            errors.push(`The aria-label "${ariaLabel}" should include the visible text "${linkText}"`);
        }
    }
    expect(errors).toEqual([]);
});
