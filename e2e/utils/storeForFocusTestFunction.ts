import { Locator } from '@playwright/test';

export const clickedElements: Locator[] = []; 

export async function storeForFocusTest(element: Locator) {
    clickedElements.push(element);  
}

