import { Page, expect, Locator } from '@playwright/test';

export const clickedElements: Locator[] = []; 

export async function locateClickStore(page: Page, scope: string, role: any, name: string): Promise<void> {
    const element = page.locator(scope).getByRole(role, { name });
    await expect(element).toBeVisible();
    await element.click();
    clickedElements.push(element);  
}

