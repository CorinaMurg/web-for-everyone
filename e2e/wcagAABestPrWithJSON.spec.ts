import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';

interface TestParamsTypes {
    url: string;
    ignore?: string[];
}

const pageData: TestParamsTypes[] = [
    {
        url: 'https://webforeveryone.us/',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/about',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/feedback',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part1',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part2',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources/what-is-accessibility',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources/how-accessibility-works',
        ignore: ['iframe']
    },
    {
        url: 'https://webforeveryone.us/resources/most-common-bugs',
        ignore: []
    },
    {
        url: 'https://webforeveryone.us/resources/similar-but-different',
        ignore: []
    }
];

const testPages = () => {
    pageData.forEach((data) => {
        testAxe(data);
    });
}

testPages();


function testAxe ({url, ignore}: TestParamsTypes) {
    test(`test WCAG 2.1 A, AA and best practices for ${url}`, async ({page}) => {
        await page.goto(url);
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag21aa', 'wcag21a', 'best-practice'])
            .exclude(ignore || [])
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
}


