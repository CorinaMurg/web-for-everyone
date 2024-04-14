import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Page } from 'playwright-core';

export type AxeAAFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

export const test = base.extend<AxeAAFixture>({
  makeAxeBuilder: async ({ page }, use, testInfo) => {
    const makeAxeBuilder = () => new AxeBuilder({ page: page as Page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])

    await use(makeAxeBuilder);
  }
});

export { expect } from '@playwright/test';