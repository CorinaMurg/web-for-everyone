import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { checkFocus } from "../../../e2e/utils/focusedFromClicksFunction";
import { locateClickStore } from "../../../e2e/utils/locateClickStoreFunction";

test.beforeEach(async ({ page }) => {
  await page.goto("https://webforeveryone.us/");
});

test.describe("footer", () => {
  test("footer conforms to axe AA a11y rules", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.locator("footer").waitFor();
    const accessibilityScanResults = await makeAxeBuilder()
      .include("footer")
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("footer logo", async ({ page }) => {
    await locateClickStore(page, "footer", "link", "Web for Everyone");
    await expect(page).toHaveTitle(/Web for Everyone/);
    await expect(
      page.getByRole("heading", { name: "Let's make it accessible." })
    ).toBeVisible();
  });

  test("footer site links", async ({ page }) => {
    await locateClickStore(page, "footer", "link", "Home");
    await expect(page).toHaveTitle(/Web for Everyone/);
    await expect(
      page.getByRole("heading", { name: "Let's make it accessible." })
    ).toBeVisible();

    await locateClickStore(page, "footer", "link", "Blog");
    await expect(page).toHaveTitle(/Blog/);
    await expect(
      page.getByRole("heading", { name: "Accessibility resources" })
    ).toBeVisible();

    await locateClickStore(page, "footer", "link", "About");
    await expect(page).toHaveTitle(/About/);
    await expect(
      page.getByRole("heading", { name: "Let's make it accessible." })
    ).toBeVisible();

    await locateClickStore(page, "footer", "link", "Accessibility Statement");
    await expect(page).toHaveTitle(/Accessibility Statement/);
    await expect(
      page.getByRole("heading", {
        name: "Web for Everyone's commitment to accessibility",
      })
    ).toBeVisible();
  });

  test("footer contact", async ({ page }) => {
    const linkedInPromise = page.waitForEvent("popup");
    await locateClickStore(page, "footer", "link", "LinkedIn (opens in new tab)");
    const linkedIn = await linkedInPromise;
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL(
      "https://www.linkedin.com/in/corinamurg/"
    );
  });

  test("footer controls should be focusable", async ({ page }) => {
    await checkFocus(page);
  });
});
