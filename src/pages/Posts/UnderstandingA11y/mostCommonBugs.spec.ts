
import { test, expect } from '../../../../e2e/fixtures/axeBuilderFixture';
import { Locator, Page } from '@playwright/test';
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

    
    // DOES NOT TEST FROM HEADER TO MAIN TO FOOTER
    test.skip('home-main controls should be focusable', async ({ page }) => {
        await checkFocus(page);
    });
});

test.describe ('most-common-bugs post content', () => {
    test('most-common-bugs post content links should be clickable', async ({ page }) => {
        await page.getByRole('link', { name: 'WebAIM Million study' }).click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM opens in a new tab' }).click();
        const page1 = await page1Promise;

        await page.locator('summary').click();

        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM Million opens in a new' }).click();
        const page2 = await page2Promise;

        await page.locator('#intro').getByRole('link', { name: 'Fixing the 6 most common bugs' }).click();

        await page.getByRole('link', { name: 'How accessibility works' }).click();

        await page.getByRole('button', { name: 'Change text color' }).click();

        await page.getByRole('link', { name: 'review how the name of an' }).click();
        
        await page.getByRole('link', { name: 'accessible name' }).click();
        const page3Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'WebAIM\'s Screen Reader User' }).click();
        const page3 = await page3Promise;
        await page.locator('#conclusion').getByRole('link', { name: 'Fixing the 6 most common bugs' }).click();
        await page.locator('#conclusion').getByRole('link', { name: 'Fixing the 6 most common bugs' }).click();
            });
});