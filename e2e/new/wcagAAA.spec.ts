
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; 
import { Page } from 'playwright-core';

test.describe('homepage', () => { 
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://webforeveryone.us/'); 

    const accessibilityScanResults = await new AxeBuilder({ page: page as Page })
        .withTags(['wcag2aaa'])
        .analyze(); 

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});