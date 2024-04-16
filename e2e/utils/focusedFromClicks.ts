import { Page, expect } from '@playwright/test';
import { clickedElements } from './locateAndStore';


export async function checkFocus(page: Page): Promise<void> {
    for (const element of clickedElements) {
        await element.focus();
        try {
            await expect(element).toBeFocused();
            await page.keyboard.press('Tab');
        } catch (error) {
            console.error(`Focus not set on element:`, error);
            continue;
        }
    }
}
