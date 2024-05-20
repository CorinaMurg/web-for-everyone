import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';
import { PageDataTypes, pageData} from './e2eData/allPagesData'


const testPages = () => {
    pageData.forEach((webPage) => {
        testAxe(webPage)
    });
}

testPages();

// TO DO: change into a fixture???

// SKIPPED SKIPPED SKIPPED
function testAxe ({ url, excludeElements, disableRules, webPage }: PageDataTypes) {
    test(`${webPage}: test all WCAG`, async ({page}, testInfo) => {
        await page.goto(url);
        const axeScanResults = await new AxeBuilder({ page: page as Page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa', 'best-practice'])
            .exclude(excludeElements || [])
            .disableRules(disableRules || [])
            .disableRules('color-contrast-enhanced')
            .analyze();

        await testInfo.attach('wcag scan results', {
            body: JSON.stringify(axeScanResults, null, 2),
            contentType: 'application/json'
        });

        expect(axeScanResults.violations).toEqual([]);
    });
}


