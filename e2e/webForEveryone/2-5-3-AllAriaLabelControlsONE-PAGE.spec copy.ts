import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('All controls with aria-label conform with SC 2.5.3 Label in Name', async ({ page }) => {
    const elements = page.getByRole('main').locator('[aria-label] [aria-labelledby]');
    console.log(elements);
    const elementsCount = await elements.count();
    const errors: string[] = [];
    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const visibleText = (await element.innerText())?.split(" ").slice(0, 2).join(" ") ?? "";
      
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


