import { Page , expect } from '@playwright/test';

//PROBLEM: USING THE MAIN LANDMARK. CHANGE. RIGHT NOW NOT A PROBLEM BECAUSE ASIDE IS A CHILD OF MAIN
export async function checkFocus(page: Page) {
    // exclude iframe elements????
    const controls = page.locator('a[href], a[tabindex="0"], button, [role="button"], input');
    const linksCount = await controls.count();

    for (let i = 0; i < linksCount; i++) {
        await controls.nth(i).focus();
        try {
            await expect(controls.nth(i)).toBeFocused();
            await page.keyboard.press('Tab');
        } catch (error) {
            console.error(`Focus not set on element at index ${i}:`, error);
            i++;
            if (i < linksCount) {
                await controls.nth(i).focus();
                await expect(controls.nth(i)).toBeFocused();
                await page.keyboard.press('Tab');
            }
        }
    }
}

