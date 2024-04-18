import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
});

// SC 2.5.3: Label in Name (Level A)
// For user interface components with labels that include text or images of text, the accessible name starts with the text that is presented visually. 
// the text that is presented visually.



test('WCAG 2.5.3: Label in Name', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
    
    const elements = page.locator('a[aria-label] h1, a[aria-label] h2, a[aria-label] h3, a[aria-label] h4, a[aria-label] h5, a[aria-label] h6');
    const elementsCount = await elements.count();
    const errors: string[] = [];


    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const headingText = (await element.textContent())?.trim().split(" ").slice(0, 3).join(" ") ?? "";
        
        // const ariaLabel = await element.evaluate(node => node.parentElement ? node.parentElement.getAttribute('aria-label') : null);

        const ariaLabel = await element.evaluate(node => {
            const closestAnchor = node.closest('a');
            return closestAnchor ? closestAnchor.getAttribute('aria-label') : null;
        });
        

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

