import { Locator, Page } from '@playwright/test';

export const clickedElements: Locator[] = []; 

export async function checkLabelInName(element: any, accName: string) {
    const visibleText = await element.innerHTML();

    function getFirstTwoWords(text: string) {
        return text.split(' ').slice(0, 2).join(' ');
    }

    const firstTwoWordsAccName = getFirstTwoWords(accName).toLowerCase();
    const firstTwoWordsVisible = getFirstTwoWords(visibleText).toLowerCase();

    const labelMatchesName = firstTwoWordsAccName === firstTwoWordsVisible;
    
    return labelMatchesName;
}




// export async function locateClickStore(page: Page, scope: string, role: any, name: string): Promise<void> {
//     const element = page.locator(scope).getByRole(role, { name });
//     await expect(element).toBeVisible();
//     await element.click();
//     clickedElements.push(element);  
// }