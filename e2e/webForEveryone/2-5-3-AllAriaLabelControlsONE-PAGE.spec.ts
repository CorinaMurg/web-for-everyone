import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://webforeveryone.us/');
});

test('Controls conform with SC 2.5.3 Label in Name', async ({ page }) => {
    const elements = page.getByRole('main').locator('[aria-label]');
    const elementsCount = await elements.count();
    const errors: string[] = [];
    for (let i = 0; i < elementsCount; i++) {
        const element = elements.nth(i);
        const visibleText = await element.innerText() ?? "";
        const accName = await element.getAttribute('aria-label') ?? "";
        
        if (visibleText && accName) {
            const startVisibleText = firstTwoWords(visibleText).toLowerCase();
            const startAccName = firstTwoWords(accName).toLowerCase();
            const match = startAccName === startVisibleText;
            if (!match) {
                errors.push(`Acc name "${accName}" should start with "${visibleText}"`);
            }
        }
    }  
    if (errors.length > 0) {
        throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
    }
});


function firstTwoWords(text: string) {
    return text.split(" ").slice(0, 2).join(" ");
}




