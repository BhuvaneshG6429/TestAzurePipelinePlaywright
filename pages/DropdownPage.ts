import { Page, Locator, expect } from "@playwright/test";

/**
 * Page Object Model for Dropdown page
 * URL: https://the-internet.herokuapp.com/dropdown
 */
export class DropdownPage {
  readonly page: Page;
  readonly dropdown: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown    = page.locator("#dropdown");
    this.pageHeading = page.locator("h3");
  }

  async navigate() {
    await this.page.goto("/dropdown");
  }

  async selectOption(value: string) {
    await this.dropdown.selectOption({ value });
  }

  async verifySelectedOption(label: string) {
    await expect(this.dropdown).toHaveValue(label);
  }

  async verifyPageHeading(text: string) {
    await expect(this.pageHeading).toHaveText(text);
  }
}
