
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; 
import { Page } from 'playwright-core';

// https://dequeuniversity.com/rules/axe/html/4.8

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test.describe('a11y home', () => { 
    test('no wcagAA issues ', async ({ page }) => {   
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze(); 

        expect(accessibilityScanResults.violations).toEqual([]); 
    });
    test('no wcagAAA issues ', async ({ page }) => {   
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag2aaa'])
            .disableRules(['color-contrast-enhanced'])
            .analyze(); 

        expect(accessibilityScanResults.violations).toEqual([]); 
    });
    test('no best practice issues ', async ({ page }) => {   
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['best-practice'])
            .analyze(); 

        expect(accessibilityScanResults.violations).toEqual([]); 
    });
    // test('no experimental issues ', async ({ page }) => {   
    //     const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
    //         .withTags(['experimental'])
    //         .analyze(); 

    //     expect(accessibilityScanResults.violations).toEqual([]); 
    // });
    test('label in name ', async ({ page }) => {   
        const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
            .withTags(['wcag253'])
            .analyze(); 

        expect(accessibilityScanResults.violations).toEqual([]); 
    });
});