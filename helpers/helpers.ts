import { Page, expect } from "@playwright/test";

/**
 * Common helper utilities shared across tests
 */
export class Helpers {

  /**
   * Wait for a page to fully load and verify its title contains expected text
   */
  static async verifyPageTitle(page: Page, expectedTitle: string) {
    await expect(page).toHaveTitle(new RegExp(expectedTitle, "i"));
  }

  /**
   * Wait for URL to contain expected string
   */
  static async verifyURL(page: Page, expectedUrlPart: string) {
    await expect(page).toHaveURL(new RegExp(expectedUrlPart));
  }

  /**
   * Take a screenshot with a given name
   */
  static async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });
  }
}
