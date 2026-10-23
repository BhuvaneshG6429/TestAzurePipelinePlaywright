import { Page, Locator, expect } from "@playwright/test";

/**
 * Page Object Model for Checkboxes page
 * URL: https://the-internet.herokuapp.com/checkboxes
 */
export class CheckboxPage {
  readonly page: Page;
  readonly checkboxes: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkboxes  = page.locator('input[type="checkbox"]');
    this.pageHeading = page.locator("h3");
  }

  async navigate() {
    await this.page.goto("/checkboxes");
  }

  async getCheckbox(index: number): Promise<Locator> {
    return this.checkboxes.nth(index);
  }

  async checkCheckbox(index: number) {
    const cb = this.checkboxes.nth(index);
    if (!(await cb.isChecked())) {
      await cb.check();
    }
  }

  async uncheckCheckbox(index: number) {
    const cb = this.checkboxes.nth(index);
    if (await cb.isChecked()) {
      await cb.uncheck();
    }
  }

  async verifyChecked(index: number) {
    await expect(this.checkboxes.nth(index)).toBeChecked();
  }

  async verifyUnchecked(index: number) {
    await expect(this.checkboxes.nth(index)).not.toBeChecked();
  }
}
