import { test, expect } from "../../../e2e/fixtures/axeBuilderFixture";
import { Locator } from '@playwright/test';
import { Page } from '@playwright/test';
import { isMobileViewport } from '../../../e2e/utils/isMobileViewport';

export class MenuModalPageObject {
  readonly page: Page;
  readonly menuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuButton = this.page.getByRole('button', { name: 'Navigation Menu' }); 
  }

  async goToMenuButton() {
    const menuButton = this.page.getByRole('button', { name: 'Navigation Menu' });
    await menuButton.waitFor();
    await menuButton.click();
    await expect(this.page.locator('#root')).toHaveAttribute('aria-hidden', 'true');
    await this.page.locator('.menu-modal').waitFor();
  }
}
