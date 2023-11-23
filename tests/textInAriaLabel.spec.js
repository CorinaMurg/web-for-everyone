import { test } from '@playwright/test';

// CHECK FOR ENTIRE INNER TEXT IF THE LINK
// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     await page.goto('http://localhost:5173/');
    
//     const elements = page.locator('[aria-label]');
//     const elementsCount = await elements.count();
//     const errors = [];
//     for (let i = 0; i < elementsCount; i++) {
//         const element = elements.nth(i);
//         const visibleText = (await element.textContent())?.trim().split(" ").slice(0, 3).join(" ") ?? "";
      
//         const ariaLabel = await element.getAttribute('aria-label') ?? "";
      
//         console.log(`Visible text: "${visibleText}", Aria-label: "${ariaLabel}"`);
      
//         if (ariaLabel) {
//             const condition = ariaLabel.toLowerCase().includes(visibleText.toLowerCase());
//             if (!condition) {
//                 errors.push(`The aria-label "${ariaLabel}" should include the visible text "${visibleText}"`);
//             }
//         }
//     }  
//     if (errors.length > 0) {
//         throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
//     }
// });

test('WCAG 2.5.3: Label in Name', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    const elements = page.locator('a[aria-label] h1, a[aria-label] h2, a[aria-label] h3, a[aria-label] h4, a[aria-label] h5, a[aria-label] h6');
    const elementsCount = await elements.count();
    const errors = [];

    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const headingText = (await element.textContent())?.trim().split(" ").slice(0, 3).join(" ") ?? "";
        
        // const ariaLabel = await element.evaluate(node => node.parentElement.getAttribute('aria-label')) ?? "";
        const ariaLabel = await element.evaluate(node => node.closest('a').getAttribute('aria-label'));

        console.log(`Heading text: "${headingText}", Aria-label: "${ariaLabel}"`);

        if (ariaLabel) {
            const condition = ariaLabel.toLowerCase().includes(headingText.toLowerCase());
            if (!condition) {
                errors.push(`The aria-label "${ariaLabel}" should include the heading text "${headingText}".`);
            }
        }
    }

    if (errors.length > 0) {
        throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
    }
});


// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     await page.goto('https://yourwebsite.com/');
    
//     // Select all <a> elements with an aria-label attribute
//     const links = await page.locator('[aria-label]');

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
//     const links = await page.locator('[aria-label]');

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
// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     function normalizeString(str) {
//         return str.toLowerCase().replace(/[\W_]+/g, " ").trim();
//     }

//     await page.goto('https://corinamurg.netlify.com/');
//     const links = page.locator('[aria-label]');
//     const errors = [];
//     const linksCount = await links.count();

//     for (let i = 0; i < linksCount; i++) {
//         const link = links.nth(i);

//         const linkText = await link.evaluate((el) => {
//             const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
//             return heading ? heading.textContent?.trim() : el.textContent?.trim();
//         });
        

//         const ariaLabel = await link.getAttribute('aria-label') ?? "";
//         const normalizedAriaLabel = normalizeString(ariaLabel);
//         const normalizedLinkText = normalizeString(linkText);
        
//         const condition = normalizedAriaLabel.includes(normalizedLinkText);  
//         if (!condition) {
//             errors.push(`The aria-label "${ariaLabel}" should include the visible text "${linkText}"`);
//         }
//     }
//     expect(errors).toEqual([]);
// });


// test('WCAG 2.5.3: Label in Name', async ({ page }) => {
//     function normalizeString(str) {
//         return str.toLowerCase().replace(/[\W_]+/g, " ").trim();
//     }

//     await page.goto('https://corinamurg.netlify.com/');
//     const links = page.locator('[aria-label]');
//     const errors = [];
//     const linksCount = await links.count();

//     for (let i = 0; i < linksCount; i++) {
//         const link = links.nth(i);

//         const linkText = await link.evaluate((el) => {
//             const heading = el.querySelector('h1, h2, h3, h4, h5, h6');
//             return heading ? heading.textContent?.trim() : el.textContent?.trim();
//         });
        

//         const ariaLabel = await link.getAttribute('aria-label') ?? "";
//         const normalizedAriaLabel = normalizeString(ariaLabel);
//         const normalizedLinkText = normalizeString(linkText);
        
//         const condition = normalizedAriaLabel.includes(normalizedLinkText);  
//         if (!condition) {
//             errors.push(`The aria-label "${ariaLabel}" should include the visible text "${linkText}"`);
//         }
//     }
//     expect(errors).toEqual([]);
// });
