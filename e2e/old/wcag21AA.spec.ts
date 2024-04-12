import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';

test('home page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }, testInfo) => {
    await page.goto('https://webforeveryone/about');
  
    const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
        .withTags(['wcag253'])
        .analyze();

    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
        });
    
    expect(accessibilityScanResults.violations).toEqual([]);
});

// test('resources page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('about page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/about');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('feedback page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/feedback');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('MakeIt1 page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/make-it-accessible-part1');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('MakeIt2 page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/make-it-accessible-part2');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('WhatIsA11y page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/what-is-accessibility');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('HowA11yWorks page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/how-accessibility-works');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .exclude(['iframe'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('MostCommonBugs page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/most-common-bugs');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('SimilarButDifferent page should not have any automatically detectable WCAG 2.1 AA violations', async ({ page }) => {
//     await page.goto('https://webforeveryone.us/resources/similar-but-different');
  
//     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//         .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//         .analyze();
  
//     expect(accessibilityScanResults.violations).toEqual([]);
// });