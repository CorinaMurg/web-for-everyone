import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';
import { PageDataTypes, pageData} from './e2eData/pageData'

const testPages = () => {
    pageData.forEach((data) => {
        testAxe(data)
    });
}

testPages();

function testAxe ({ url, excludeElements, disableRules, webPage }: PageDataTypes) {
    test(`${webPage}: test WCAG 2.1 A, AA, best practices`, async ({page}, testInfo) => {
        await page.goto(url);
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
            .exclude(excludeElements || [])
            .disableRules(disableRules || [])
            .analyze();

        await testInfo.attach('wcag scan results', {
            body: JSON.stringify(accessibilityScanResults, null, 2),
            contentType: 'application/json'
        });
        
        expect(accessibilityScanResults.violations).toEqual([]);
    });
}


