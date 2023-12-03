import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('http:/corinamurg.netlify.app/');

    const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
        .withTags(['wcag2aaa'])
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});