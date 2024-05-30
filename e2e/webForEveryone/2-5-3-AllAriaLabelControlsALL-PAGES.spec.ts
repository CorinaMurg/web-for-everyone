import { test, expect } from '@playwright/test';
import { PageDataTypes, pageData} from './e2eData/allPagesData'

const testPages = () => {
    pageData.forEach((webPage) => {
        testLabelInName(webPage)
    });
}

testPages();

function testLabelInName ({ url, webPage }: PageDataTypes) {
    test.skip (`${webPage}: test SC 2.5.3 Label in Name`, async ({page}) => {
        await page.goto(url);
        const elements = page.getByRole('main').locator('[aria-label]');
        const elementsCount = await elements.count();
        const errors: string[] = [];
        for (let i = 0; i < elementsCount; i++) {
            const element = elements.nth(i);
            const visibleText = (await element.innerText())?.split(" ").slice(0, 2).join(" ") ?? "";
        
            const accName = (await element.getAttribute('aria-label'))?.split(" ").slice(0, 2).join(" ") ?? "";
            
            console.log(`Visible text: "${visibleText}", Aria-label: "${accName}"`);
        
            if (visibleText && accName) {
                const condition = accName.toLowerCase() === (visibleText.toLowerCase());
                if (!condition) {
                    errors.push(`The aria-label "${accName}" should include the visible text "${visibleText}"`);
                }
            }
        }  
    if (errors.length > 0) {
        throw new Error(`Label in Name test failed:\n${errors.join("\n")}`);
    }

        // expect(errors.length).toEqual(0);
    });
}


