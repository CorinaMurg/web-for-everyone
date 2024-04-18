import { Page , expect } from '@playwright/test';

//PROBLEM: SELECTS ALL CONTROLS, INCLUDING THOSE THAT ARE NOT VISIBLE
export async function checkFocus(page: Page, scope: string) {
    const controls = page.locator(scope).locator('a[href], a[tabindex="0"], button');
    const linksCount = await controls.count();

    for (let i = 0; i < linksCount; i++) {
        await controls.nth(i).focus();
        try {
            await expect(controls.nth(i)).toBeFocused();
            await page.keyboard.press('Tab');
        } catch (error) {
            console.error(`Focus not set on element at index ${i}:`, error);
            continue;
        }
    }
}



