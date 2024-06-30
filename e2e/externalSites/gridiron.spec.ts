import { test, expect } from '../../e2e/fixtures/axeBuilderFixture';


test.beforeEach( async ({page}) => {
    await page.goto('https://gridiron-survivor-letsgettechnical.vercel.app/register');
});

test.describe('about', () => {
    test('about should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Registration/);
    });

    test('about should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Register A New Account' })).toBeVisible();
    });
});

test.describe ('about main is accessible', () => {
    test('about conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            // .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});