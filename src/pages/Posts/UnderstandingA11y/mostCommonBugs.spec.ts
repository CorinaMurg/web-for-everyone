
import { test, expect } from '../../../../e2e/fixtures/axeBuilderFixture';
import { Locator, Page } from '@playwright/test';


const clickedElements: Locator[] = [];

test.beforeEach( async ({page}) => {
    await page.goto('https://webforeveryone.us/blog/most-common-bugs');
});

test.describe('most common bugs', () => {
    test('most-common-bugs should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Most common bugs/);
    });

    test('most-common-bugs should have heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Most common bugs' })).toBeVisible();
    });
});

test.describe ('most-common-bugs accessibility', () => {
    test('most-common-bugs should conform to axe rules', async ({ page, makeAxeBuilder }) => {
        await page.locator('main').waitFor();
        const accessibilityScanResults = await makeAxeBuilder()
            .include('main')
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});


test.describe ('most-common-bugs links and buttons should be clickable', () => {
    test('most-common-bugs breadcrumbs should be clickable', async ({ page }) => {
        await page.getByLabel('Breadcrumb').getByRole('link', { name: 'Blog' }).click();
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();
        await page.goBack();

        await page.getByLabel('Breadcrumb').getByRole('link', { name: 'Accessibility 101' }).click();
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();
        await page.goBack();
    });

    test('most-common-bugs TOC links should be clickable', async ({ page }) => {
        await page.getByRole('link', { name: 'WebAIM Million study' }).click();
        await page.getByRole('link', { name: 'Low contrast text' }).click();
        await expect(page.getByRole('heading', { name: 'Low contrast text' })).toBeVisible();

        await page.getByRole('link', { name: 'Missing alt text for images' }).click();
        await expect(page.getByRole('heading', { name: 'Missing alt text for images' })).toBeVisible();

        await page.getByRole('link', { name: 'Empty links' }).click();
        await expect(page.getByRole('heading', { name: 'Empty links' })).toBeVisible();

        await page.getByRole('link', { name: 'Empty buttons' }).click();
        await expect(page.getByRole('heading', { name: 'Empty buttons' })).toBeVisible();

        await page.getByRole('link', { name: 'Missing document language' }).click();
        await expect(page.getByRole('heading', { name: 'Missing document language' })).toBeVisible();

        await page.getByRole('link', { name: 'Misused headings' }).click();
        await expect(page.getByRole('heading', { name: 'Misused headings' })).toBeVisible();

        await page.getByRole('link', { name: 'Conclusion' }).click();
        await expect(page.getByRole('heading', { name: 'Conclusion' })).toBeVisible(); 
    });

    test.skip('most-common-bugs post content links should be clickable', async ({ page }) => {
        const webAIMLinkPromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM opens in a new tab' }).click();
        const webAIMPage = await webAIMLinkPromise;
        await webAIMPage.waitForLoadState();
        await expect(webAIMPage).toHaveURL('https://webaim.org/');
        await page.goBack();

        await page.locator('#intro div').filter({ hasText: 'How do we know what\'s an' }).click();
        await page.getByText('How do we know what\'s an').click();
        
        const webAIMMillionLinkPromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM Million opens in a new tab' }).click();
        const webAIMMillionPage = await webAIMMillionLinkPromise;
        await webAIMMillionPage.waitForLoadState();
        await expect(webAIMMillionPage).toHaveURL('https://webaim.org/projects/million/');
        await page.goBack();

        await page.locator('#intro').getByRole('link', { name: 'Fixing the 6 most common bugs' }).click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
        await page.goBack();

        await page.getByRole('link', { name: 'How accessibility works' }).click();
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
        await page.goBack();

        await page.getByRole('button', { name: 'Change text color' }).click();
        await expect(page.getByText('Users with vision problems')).toHaveAttribute('style', 'color: #169AC0;');

        await page.locator('#empty-links').getByRole('link', { name: 'accessible name' }).click();
        await expect(page.getByRole('heading', { name: 'The accessible name' })).toBeVisible();
        await page.goBack();

        await page.locator('#empty-buttons').getByRole('link', { name: 'accessible name' }).click();
        await expect(page.getByRole('heading', { name: 'The accessible name' })).toBeVisible();
        await page.goBack();

        const srSurveyPromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM\'s Screen Reader User' }).click();
        const srSurveyPage = await srSurveyPromise;
        await srSurveyPage.waitForLoadState();
        await expect(srSurveyPage.getByRole('heading', { name: 'Finding Information' })).toBeVisible();
        await page.goBack();

        await page.locator('#conclusion').getByRole('link', { name: 'Fixing the 6 most common bugs' }).click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
        await page.goBack();
    });
});

test.describe ('most-common-bugs controls are focusable', () => {
    test('most-common-bugs breadcrumbs should be focusable', async ({ page }) => {
        const breadcrumbLinkOne = page.getByLabel('Breadcrumb').getByRole('link', { name: 'Blog' });
        clickedElements.push(breadcrumbLinkOne);

        const breadcrumbLinkTwo = page.getByLabel('Breadcrumb').getByRole('link', { name: 'Accessibility 101' })
        clickedElements.push(breadcrumbLinkTwo);
    });

    test('most-common-bugs breadcrumbs current post title should be part of breadcrumbs', async ({ page }) => {
        const currentPage = page.getByLabel('Breadcrumb').getByText('The most common bugs')
        clickedElements.push(currentPage);
    });

    test('most-common-bugs TOC links should be focusable', async ({ page }) => {
        const tocOne = page.getByRole('link', { name: 'WebAIM Million study' })
        clickedElements.push(tocOne);

        const tocTwo = page.getByRole('link', { name: 'Low contrast text' })
        clickedElements.push(tocTwo);

        const tocThree = page.getByRole('link', { name: 'Missing alt text for images' })
        clickedElements.push(tocThree);

        const tocFour = page.getByRole('link', { name: 'Empty links' })
        clickedElements.push(tocFour);

        const tocFive = page.getByRole('link', { name: 'Empty buttons' })
        clickedElements.push(tocFive);

        const tocSix = page.getByRole('link', { name: 'Missing document language' })
        clickedElements.push(tocSix);

        const tocSeven = page.getByRole('link', { name: 'Misused headings' })
        clickedElements.push(tocSeven);

        const tocEight = page.getByRole('link', { name: 'Conclusion' })
        clickedElements.push(tocEight);
    });

    test('most-common-bugs post content links should be clickable', async ({ page }) => {
        const webAIMLink = page.getByRole('link', { name: 'WebAIM opens in a new tab' })
        clickedElements.push(webAIMLink);

        const accordion = page.locator('summary');
        clickedElements.push(accordion);

        const webAIMMillionLink = page.getByRole('link', { name: 'WebAIM Million opens in a new tab' })
        clickedElements.push(webAIMMillionLink);

        const fixingThe6Link = page.locator('#intro').getByRole('link', { name: 'Fixing the 6 most common bugs' })
        clickedElements.push(fixingThe6Link);
        
        const howA11yWorksLink = page.getByRole('link', { name: 'How accessibility works' })
        clickedElements.push(howA11yWorksLink);

        const changeTextColorButton = page.getByRole('button', { name: 'Change text color' })
        clickedElements.push(changeTextColorButton);

        const accNameInLinksLink = page.locator('#empty-links').getByRole('link', { name: 'accessible name' })
        clickedElements.push(accNameInLinksLink);

        const accNameInButtonsLink = page.locator('#empty-buttons').getByRole('link', { name: 'accessible name' })
        clickedElements.push(accNameInButtonsLink);

        const srSurveyLink = page.getByRole('link', { name: 'WebAIM\'s Screen Reader User' })
        clickedElements.push(srSurveyLink);

        const fixingThe6Link2 = page.locator('#conclusion').getByRole('link', { name: 'Fixing the 6 most common bugs' })
        clickedElements.push(fixingThe6Link2);
    });

    test('most-common-bugs should have focus set on all clickable elements', async ({ page }) => {
        await checkFocus(page);
    });
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
