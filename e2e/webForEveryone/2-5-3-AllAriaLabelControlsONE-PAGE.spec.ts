import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
});

test.skip ('Controls conform with SC 2.5.3 Label in Name', async ({ page }) => {
    const elements = page.getByRole('main').locator('[aria-label]');
    const elementsCount = await elements.count();
    const errors: string[] = [];
    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const visibleText = await element.innerText() ?? "";
        const accName = await element.getAttribute('aria-label') ?? "";
        
        if (visibleText && accName) {
            const textToCompareFromVisible = firstNWords(visibleText, 3).toLowerCase();
            const textToCompareFromAccName = firstNWords(accName, 3).toLowerCase();
            const match = textToCompareFromAccName === textToCompareFromVisible;
            if (!match) {
                errors.push(`Acc name "${accName}" should start with "${visibleText}"`);
            }
        }
    }  
    if (errors.length > 0) {
        throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
    }
});

function firstNWords(text: string, n: number) {
    return text.split(" ").slice(0, n).join(" ");
}





