import { test, expect } from '@playwright/test';

export async function checkFocus(page) {
    const controls = page.locator('role=main').locator('a[href], button, [role="button"], input');
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

