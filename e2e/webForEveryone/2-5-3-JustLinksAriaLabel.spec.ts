import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://webforeveryone.us/blog/most-common-bugs');
});

// SC 2.5.3: Label in Name (Level A)
// For user interface components with labels that include text or images of text, the accessible name starts with the text that is presented visually. 
// the text that is presented visually.


// PROBLEM: using page.locator('a, buttonc, ...') selects all controls, including those not in the acc tree
// (like the links in the mobile nav)
test.skip ('Links conform with Label in Name SC', async ({ page }) => {
    const links = page.getByRole('link')
    const linksCount = await links.count();
    const errors: string[] = [];
    for (let i = 0; i < linksCount; i++) {
        const link = links.nth(i);
        const visibleText = (await link.innerText())?.split(" ").slice(0, 2).join(" ") ?? "";
      
        const accName = (await link.getAttribute('aria-label'))?.split(" ").slice(0, 2).join(" ") ?? "";
      
        console.log(`Visible text: "${visibleText}", Acc Name: "${accName}"`);
      
        if (visibleText && accName) {
            const condition = accName.toLowerCase() === (visibleText.toLowerCase());
            if (!condition) {
                errors.push(`The acc name "${accName}" should include the visible text "${visibleText}"`);
            }
        }
    }  
    expect(errors).toEqual([]);
});

