import { Locator } from '@playwright/test';

export const clickedElements: Locator[] = []; 

export async function storeForFocusTest(element: any) {
    clickedElements.push(element);  
}

