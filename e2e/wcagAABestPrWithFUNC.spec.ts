import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';

interface TestParams {
    url: string;
    ignore?: string[];
}

function testAxe ({url, ignore}: TestParams) {
    test(`test WCAG 2.1 A, AA and best practices for ${url}`, async ({page}) => {
        await page.goto(url);
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
            .exclude(ignore || [])
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
}

testAxe({url: 'https://webforeveryone.us/'});

testAxe({url: 'https://webforeveryone.us/resources'});

testAxe({url: 'https://webforeveryone.us/about'});

testAxe({url: 'https://webforeveryone.us/feedback'});

testAxe({url: 'https://webforeveryone.us/resources/make-it-accessible-part1'});

testAxe({url: 'https://webforeveryone.us/resources/make-it-accessible-part2'});

testAxe({url: 'https://webforeveryone.us/resources/what-is-accessibility'});

testAxe({url: 'https://webforeveryone.us/resources/how-accessibility-works', ignore: ['iframe']});

testAxe({url: 'https://webforeveryone.us/resources/most-common-bugs'});

testAxe({url: 'https://webforeveryone.us/resources/similar-but-different'});


