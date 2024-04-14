import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://assistivlabs.com/dashboard');
  await page.goto('https://assistivlabs.com/sign-in');
  await page.getByLabel('Email address').fill('corina.murg@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Bombastic7410!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByLabel('Assistive technology')).toHaveValue('0');
  await page.getByLabel('Assistive technology').selectOption('5');
  await page.getByLabel('Assistive technology').selectOption('0');
  await expect(page.getByLabel('Assistive technology')).toHaveValue('0');
  await page.getByLabel('Assistive technology').selectOption('1');
});