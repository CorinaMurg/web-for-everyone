import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('http://localhost:5173/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // .exclude('.home--intro--image--caption')
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
});

