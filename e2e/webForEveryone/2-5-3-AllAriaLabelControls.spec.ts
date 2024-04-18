import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
});

// SC 2.5.3: Label in Name (Level A)
// For user interface components with labels that include text or images of text, the accessible name starts with the text that is presented visually. 
// the text that is presented visually.

//ISSUE: selects nav elements with aria-label

//QUESTION: innerText() vs textContent()?

test('All controls with aria-label conform with Label in Name', async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
    
    const elements = page.locator('[aria-label]');
    const elementsCount = await elements.count();
    const errors: string[] = [];
    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const visibleText = (await element.textContent())?.split(" ").slice(0, 2).join(" ") ?? "";
      
        const accName = (await element.getAttribute('aria-label'))?.split(" ").slice(0, 2).join(" ") ?? "";
        
        console.log(`Visible text: "${visibleText}", Aria-label: "${accName}"`);
      
        if (visibleText && accName) {
            const condition = accName.toLowerCase() === (visibleText.toLowerCase());
            if (!condition) {
                errors.push(`The aria-label "${accName}" should include the visible text "${visibleText}"`);
            }
        }
    }  
    if (errors.length > 0) {
        throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
    }
});

