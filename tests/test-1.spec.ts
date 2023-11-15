import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('test', async ({ page }) => {
  await page.goto('https://corinamurg.netlify.app/');
  await page.getByRole('banner').getByRole('link', { name: 'Corina Murg' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Accessibility' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Corina Murg' }).click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByLabel('Ankit Choudhary\'s portfolio page on Unsplash').click();
  await page.getByLabel('Link to Ankit Choudhary green forest photo on Unsplash').click();
  await page.locator('a').filter({ hasText: 'Lava Leap2D Platform Game built with JavaScript' }).click();
  await page.locator('a').filter({ hasText: 'Twain & CompanyBookstore website built with React' }).click();
  await page.locator('a').filter({ hasText: 'Space Tourism AgencyMultipage website built with JavaScript' }).click();
  await page.getByRole('link', { name: 'My Projects' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('Corina\'s blog post on HTML buttons vs links on dev.to.').click();
  await page.getByLabel('Link to Aaron Visuals\' Unsplash profile').click();
  await page.getByLabel('Link to Aaron Visuals\' compass photo on Unsplash').click();
  await page.getByLabel('Link to Corina\'s blog post about the Lava Leap game.').click();
  await page.getByLabel('Link to Simon Schwyter\'s Unsplash profile').click();
  await page.getByLabel('Link to Simon Schwyter\'s cameleon photo on Unsplash').click();
  await page.getByLabel('Link to Corina\'s blog post on Immutability in React.').click();
  await page.getByRole('link', { name: 'Explore My Blog' }).click();
});

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://corinamurg.netlify.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });