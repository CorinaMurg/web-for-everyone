import { Locator, expect } from '@playwright/test';
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
    if (isMobileViewport({ page: this.page })) {
        await this.menuButton.waitFor();
        await this.menuButton.click();
        
        await expect(this.page.locator('#root')).toHaveAttribute('aria-hidden', 'true');
        await expect(this.page.locator('.ReactModal_Overlay')).toHaveAttribute('display', 'flex');
    }
  }


}