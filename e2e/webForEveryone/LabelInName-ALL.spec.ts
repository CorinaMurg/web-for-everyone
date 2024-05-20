import { test, expect } from '@playwright/test';
import { checkLabelInName } from '../utils/checkLabelInName';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('label matches name', async ({ page }) => {
//   await page.getByLabel('Let\'s make itaccessible.').click();
//   await page.getByRole('link', { name: 'Learn accessibility' }).click();
  const buttonChecksForBugs = page.getByRole('link', { name: 'Check for bugs' })
  await buttonChecksForBugs.click();
  expect(checkLabelInName(buttonChecksForBugs, 'Check for bugs')).toBe(true);
});





