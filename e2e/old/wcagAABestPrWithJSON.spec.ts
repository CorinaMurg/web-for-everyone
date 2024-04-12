// import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';
// import { Page } from 'playwright-core';
// import { PageDataTypes, pageData} from '../src/data/e2eData/pageData'

// const testPages = () => {
//     pageData.forEach((data) => {
//         testAxe(data)
//     });
// }

// testPages();

// function testAxe ({url, ignore, webPage}: PageDataTypes) {
//     test(`${webPage}: test WCAG 2.1 A, AA, best practices`, async ({page}) => {
//         await page.goto(url);
//         const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
//             .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
//             .exclude(ignore || [])
//             .analyze();
//         expect(accessibilityScanResults.violations).toEqual([]);
//     });
// }


