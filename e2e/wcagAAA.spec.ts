// import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';
// import { Page } from 'playwright-core';

// test('should not have any automatically detectable WCAG AAA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/');

//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag2aaa'])
//         // .exclude('.footer-heading')
//         .analyze();

//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('resources page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag2aaa'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('about page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/about');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag2aaa'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });