
import { test, expect } from '../../../e2e/fixtures/axeBuilderFixture';
import { checkLabelInName } from '../../../e2e/utils/checkLabelInName';
import { storeForFocusTest } from '../../../e2e/utils/storeForFocusTestFunction';
import { checkFocus } from '../../../e2e/utils/focusedFromClicksFunction';


test.beforeEach( async ({page}) => {
    await page.goto('/blog');
});

test.describe('Blog', () => {
    test('Blog should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Blog/);
    });

    test('Blog should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();
    });
});

test.describe ('Blog main is accessible', () => {
    test('Blog conforms to axe AA a11y rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("Blog TOC controls should be focusable", async ({ page }) => {
        const linkAccessibility101 = page.getByRole('link', { name: 'Accessibility 101' })
        storeForFocusTest(linkAccessibility101);
        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        storeForFocusTest(linkYourPortfolioSite);
        const linkHtmlForAccessibility = page.getByRole('link', { name: 'HTML for accessibility' })
        storeForFocusTest(linkHtmlForAccessibility);
        const linkCssForAccessibility = page.getByRole('link', { name: 'CSS for accessibility' })
        storeForFocusTest(linkCssForAccessibility);
        const linkExamplesOfAccessible = page.getByRole('link', { name: 'Examples of accessible components' })
        storeForFocusTest(linkExamplesOfAccessible);

        await checkFocus(page);
    });
});

test.describe("Blog TOC controls conform to 2.5.3 Label in Name", () => {
    test("Blog Accessibility-101 LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkAccessibility101 = page.getByRole('link', { name: 'Accessibility 101' })
        const labelCheck = await checkLabelInName(linkAccessibility101, 'Accessibility 101');
        expect(labelCheck).toBeTruthy();
    });
    test("Blog Your-Portfolio-Site LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkYourPortfolioSite = page.getByRole('link', { name: 'Your portfolio site' })
        const labelCheck = await checkLabelInName(linkYourPortfolioSite, 'Your portfolio site');
        expect(labelCheck).toBeTruthy();
    });
    test("Blog HTML-for-accessibility LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkHtmlForAccessibility = page.getByRole('link', { name: 'HTML for accessibility' })
        const labelCheck = await checkLabelInName(linkHtmlForAccessibility, 'HTML for accessibility');
        expect(labelCheck).toBeTruthy();
    });
    test("Blog CSS-for-accessibility LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkCssForAccessibility = page.getByRole('link', { name: 'CSS for accessibility' })
        const labelCheck = await checkLabelInName(linkCssForAccessibility, 'CSS for accessibility');
        expect(labelCheck).toBeTruthy();
    });
    test("Blog Example-accessible-components LINK conforms to 2.5.3 Label in Name", async ({ page }) => {
        const linkExamplesOfAccessible = page.getByRole('link', { name: 'Examples of accessible components' })
        const labelCheck = await checkLabelInName(linkExamplesOfAccessible, 'Examples of accessible components');
        expect(labelCheck).toBeTruthy();
    });

});


test.describe('Blog controls are clickable', () => {
    test('Blog TOC controls are clickable', async ({ page }) => {
        await page.getByRole('link', { name: 'Accessibility 101' }).click();
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();

        await page.getByRole('link', { name: 'Your portfolio site' }).click();
        await expect(page.getByRole('heading', { name: 'Your portfolio site' })).toBeVisible();

        await page.getByRole('link', { name: 'HTML for accessibility' }).click();
        await expect(page.getByRole('heading', { name: 'HTML for accessibility' })).toBeVisible();

        await page.getByRole('link', { name: 'CSS for accessibility' }).click();
        await expect(page.getByRole('heading', { name: 'CSS for accessibility' })).toBeVisible();

        await page.getByRole('link', { name: 'Examples of accessible components' }).click();
        await expect(page.getByRole('heading', { name: 'Examples of accessible components' })).toBeVisible();
    })

    test.skip('Blog content controls are clickable', async ({ page }) => {
        await page.getByRole('link', { name: 'What is accessibility?' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/what-is-accessibility');
        await expect(page.getByRole('heading', { name: 'What is accessibility?' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/how-accessibility-works');
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'The most common accessibility' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/most-common-bugs');
        await expect(page.getByRole('heading', { name: 'The most common bugs' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'Fixing the six most common' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/fixing-the-six-most-common-bugs');
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'Level up: the next six bugs to watch for' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/the-next-six-bugs');
        await expect(page.getByRole('heading', { name: 'Level up: the next six bugs to watch for' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'The importance of semantic' }).click();
        const semanticPopup = await page.waitForEvent("popup");
        await semanticPopup.waitForLoadState();
        await expect(semanticPopup).toHaveURL('https://dev.to/corinamurg/use-semantic-html-4b97');

        await page.getByRole('link', { name: 'HTML: buttons or links? How' }).click();
        const buttonsLinksPopup = await page.waitForEvent("popup");
        await buttonsLinksPopup.waitForLoadState();
        await expect(buttonsLinksPopup).toHaveURL('https://dev.to/corinamurg/html-buttons-vs-links-5059');

        await page.getByRole('link', { name: 'Similar, but different: HTML' }).click();
        await expect(page).toHaveURL('https://webforeveryone.us/blog/similar-but-different');
        await expect(page.getByRole('heading', { name: 'Similar but different: HTML and ARIA terms' })).toBeVisible();
        await page.goBack();
       
        await page.getByRole('link', { name: 'HTML: tag vs. element opens' }).click();
        const tagElementPopup = await page.waitForEvent("popup");
        await tagElementPopup.waitForLoadState();
        await expect(tagElementPopup).toHaveURL('https://dev.to/corinamurg/html-tag-vs-element-3dc5');

        await page.getByRole('link', { name: 'A CSS-focused CodePen' }).click();
        const cssCodePenPopup = await page.waitForEvent("popup");
        await cssCodePenPopup.waitForLoadState();
        await expect(cssCodePenPopup).toHaveURL('https://codepen.io/collection/kNqjVV');
        
        await page.getByRole('link', { name: 'CodePens of accessible components' }).click();
        const exampeCodePensPopup = await page.waitForEvent("popup");
        await exampeCodePensPopup.waitForLoadState();
        await expect(exampeCodePensPopup).toHaveURL('https://codepen.io/collection/zxbLrQ');
    })
});
