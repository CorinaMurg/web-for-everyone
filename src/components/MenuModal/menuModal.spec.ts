import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { locateClickStore } from "../../../e2e/utils/locateClickStoreFunction";
import { isMobileViewport } from "../../../e2e/utils/isMobileViewport";
import { MenuModalPageObject } from "./MenuModalPageObject";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Navigation menu", () => {
  test.only("Navigation menu conforms to axe AA a11y rules", async ({page, makeAxeBuilder}) => {
    if(isMobileViewport({page})) {
        const menu = new MenuModalPageObject(page);
        await menu.goToMenuButton();
        const accessibilityScanResults = await makeAxeBuilder()
                                                .include(".menu-modal")
                                                .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    }
  });

  
});
