
import { test, expect } from '../../../../e2e/fixtures/axeBuilderFixture';
import { Locator } from '@playwright/test';
import { checkFocus } from '../../../../e2e/utils/focusedFromClicksFunction';


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


test.describe ('most-common-bugs navigation', () => {
    test('most-common-bugs breadcrumbs should be clickable', async ({ page }) => {
        const breadcrumbLinkOne = page.getByLabel('Breadcrumb').getByRole('link', { name: 'Blog' });
        clickedElements.push(breadcrumbLinkOne);
        await breadcrumbLinkOne.click();
        await expect(page.getByRole('heading', { name: 'Accessibility resources' })).toBeVisible();
        await page.goBack();

        const breadcrumbLinkTwo = page.getByLabel('Breadcrumb').getByRole('link', { name: 'Accessibility 101' })
        clickedElements.push(breadcrumbLinkTwo);
        await breadcrumbLinkTwo.click();
        await expect(page.getByRole('heading', { name: 'Accessibility 101' })).toBeVisible();
        await page.goBack();
    });

    test('most-common-bugs breadcrumbs current post title should be part of breadcrumbs', async ({ page }) => {
        const currentPage = page.getByLabel('Breadcrumb').getByText('The most common bugs')
        clickedElements.push(currentPage);
    });

    test('most-common-bugs TOC links should be clickable', async ({ page }) => {
        const tocOne = page.getByRole('link', { name: 'WebAIM Million study' })
        clickedElements.push(tocOne);
        await tocOne.click();
        // heading is available to SR only
        // await expect(page.getByRole('heading', { name: 'WebAIM Million study' })).toBeVisible();

        const tocTwo = page.getByRole('link', { name: 'Low contrast text' })
        clickedElements.push(tocTwo);
        await tocTwo.click();
        await expect(page.getByRole('heading', { name: 'Low contrast text' })).toBeVisible();

        const tocThree = page.getByRole('link', { name: 'Missing alt text for images' })
        clickedElements.push(tocThree);
        await tocThree.click();
        await expect(page.getByRole('heading', { name: 'Missing alt text for images' })).toBeVisible();

        const tocFour = page.getByRole('link', { name: 'Empty links' })
        clickedElements.push(tocFour);
        await tocFour.click();
        await expect(page.getByRole('heading', { name: 'Empty links' })).toBeVisible();

        const tocFive = page.getByRole('link', { name: 'Empty buttons' })
        clickedElements.push(tocFive);
        await tocFive.click();
        await expect(page.getByRole('heading', { name: 'Empty buttons' })).toBeVisible();

        const tocSix = page.getByRole('link', { name: 'Missing document language' })
        clickedElements.push(tocSix);
        await tocSix.click();
        await expect(page.getByRole('heading', { name: 'Missing document language' })).toBeVisible();

        const tocSeven = page.getByRole('link', { name: 'Misused headings' })
        clickedElements.push(tocSeven);
        await tocSeven.click();
        await expect(page.getByRole('heading', { name: 'Misused headings' })).toBeVisible();

        const tocEight = page.getByRole('link', { name: 'Conclusion' })
        clickedElements.push(tocEight);
        await tocEight.click();
        await expect(page.getByRole('heading', { name: 'Conclusion' })).toBeVisible(); 
    });
});

test.describe ('most-common-bugs post content', () => {
    test('most-common-bugs post content links should be clickable', async ({ page }) => {
        const webAIMLink = page.getByRole('link', { name: 'WebAIM opens in a new tab' })
        clickedElements.push(webAIMLink);
        const webAIMLinkPromise = page.waitForEvent('popup');
        await webAIMLink.click();
        const webAIMPage = await webAIMLinkPromise;
        await webAIMPage.waitForLoadState();
        await expect(webAIMPage).toHaveURL('https://webaim.org/');
        await page.goBack();

        const accordion = page.locator('summary');
        clickedElements.push(accordion);
        await accordion.click();

        const webAIMMillionLink = page.getByRole('link', { name: 'WebAIM Million opens in a new tab' })
        clickedElements.push(webAIMMillionLink);
        const webAIMMillionLinkPromise = page.waitForEvent('popup');
        await webAIMMillionLink.click();
        const webAIMMillionPage = await webAIMMillionLinkPromise;
        await webAIMMillionPage.waitForLoadState();
        await expect(webAIMMillionPage).toHaveURL('https://webaim.org/projects/million/');
        await page.goBack();

        const fixingThe6Link = page.locator('#intro').getByRole('link', { name: 'Fixing the 6 most common bugs' })
        clickedElements.push(fixingThe6Link);
        await fixingThe6Link.click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
        await page.goBack();

        
        const howA11yWorksLink = page.getByRole('link', { name: 'How accessibility works' })
        clickedElements.push(howA11yWorksLink);
        await howA11yWorksLink.click();
        await expect(page.getByRole('heading', { name: 'How accessibility works' })).toBeVisible();
        await page.goBack();

        const changeTextColorButton = page.getByRole('button', { name: 'Change text color' })
        clickedElements.push(changeTextColorButton);
        await changeTextColorButton.click();
        await expect(page.getByText('Users with vision problems')).toHaveAttribute('style', 'color: #169AC0;');

        const accNameInLinksLink = page.locator('#empty-links').getByRole('link', { name: 'accessible name' })
        clickedElements.push(accNameInLinksLink);
        await accNameInLinksLink.click();
        await expect(page.getByRole('heading', { name: 'The accessible name' })).toBeVisible();
        await page.goBack();

        const accNameInButtonsLink = page.locator('#empty-buttons').getByRole('link', { name: 'accessible name' })
        clickedElements.push(accNameInButtonsLink);
        await accNameInButtonsLink.click();
        await expect(page.getByRole('heading', { name: 'The accessible name' })).toBeVisible();
        await page.goBack();

        const srSurveyPromise = page.waitForEvent('popup');
        const srSurveyLink = page.getByRole('link', { name: 'WebAIM\'s Screen Reader User' })
        clickedElements.push(srSurveyLink);
        await srSurveyLink.click();
        const srSurveyPage = await srSurveyPromise;
        await srSurveyPage.waitForLoadState();
        await expect(srSurveyPage.getByRole('heading', { name: 'Finding Information' })).toBeVisible();
        await page.goBack();

        const fixingThe6Link2 = page.locator('#conclusion').getByRole('link', { name: 'Fixing the 6 most common bugs' })
        clickedElements.push(fixingThe6Link2);
        await fixingThe6Link2.click();
        await expect(page.getByRole('heading', { name: 'Fixing the six most common bugs' })).toBeVisible();
        await page.goBack();
    });
});


test.describe ('most-common-bugs focus', () => {
    test('most-common-bugs should have focus set on all clickable elements', async ({ page }) => {
        await checkFocus(page);
    });
});