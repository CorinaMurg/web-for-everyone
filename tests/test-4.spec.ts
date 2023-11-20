import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://corinamurg.netlify.app/');
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
  const page2 = await page2Promise;
});