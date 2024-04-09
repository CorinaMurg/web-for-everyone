import { test, expect } from '@playwright/test';

test('footer', async ({ page }) => {
  await page.goto('https://webforeveryone.us/');

  await page.getByRole('contentinfo').getByRole('link', { name: 'Web for Everyone' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Accessibility Statement' }).click();

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn (opens in new tab)' }).click();
  const page2 = await page2Promise;
});