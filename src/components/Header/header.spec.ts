import { test, expect } from '@playwright/test';

test('header', async ({ page }) => {
  await page.goto('https://webforeveryone.us/');
  await page.getByRole('banner').getByRole('link', { name: 'Web for Everyone' }).click();
  await page.getByLabel('site links').getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('site links').getByRole('link', { name: 'Blog' }).click();
  await page.getByLabel('site links').getByRole('link', { name: 'About' }).click();
});