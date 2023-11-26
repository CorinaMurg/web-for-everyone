import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.app/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
});


// .exclude('.home--intro--image--caption')

// test.describe('homepage', () => { 
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('https://corinamurg.netlify.app/'); 

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); 
//   });
// });