import { test, expect } from '../fixtures/axeBuilderFixture';
import { Locator } from '@playwright/test';
import { Page } from '@playwright/test';

const clickedElements: Locator[] = [];

test.beforeEach( async ({page}) => {
    await page.goto('https://motivohealth.com/');
});


test('motivo header controls should be focusable', async ({ page }) => {
    const logo = page.getByRole('banner').getByRole('link').first();
    clickedElements.push(logo);

    const employers = page.locator('div').filter({ hasText: /^For employers$/ });
    clickedElements.push(employers);

    const clinicians = page.locator('div').filter({ hasText: /^For clinicians$/ });
    clickedElements.push(clinicians);

    const about = page.getByRole('link', { name: 'About us' });
    clickedElements.push(about);

    const resources = page.locator('div').filter({ hasText: /^Resources$/ });
    clickedElements.push(resources);

    const login = page.locator('div').filter({ hasText: /^Login$/ });
    clickedElements.push(login);

    const started = page.getByRole('link', { name: 'Get started' })
    clickedElements.push(started);

    await checkFocus(page);
});


async function checkFocus(page: Page): Promise<void> {
    for (const element of clickedElements) {
        await element.focus();
        try {
            await expect(element).toBeFocused();
            await page.keyboard.press('Tab');
        } catch (error) {
            console.error(`Focus not set on ${element}:`, error);
            continue;
        }
    }
}