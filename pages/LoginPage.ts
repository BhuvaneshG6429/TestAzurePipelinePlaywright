import { Page, Locator, expect } from "@playwright/test";

/**
 * Page Object Model for The-Internet Herokuapp
 * URL: https://the-internet.herokuapp.com/login
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;
  readonly logoutButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput  = page.locator("#username");
    this.passwordInput  = page.locator("#password");
    this.loginButton    = page.locator('button[type="submit"]');
    this.flashMessage   = page.locator("#flash");
    this.logoutButton   = page.locator("a.button.secondary");
    this.pageHeading    = page.locator("h2");
  }

  async navigate() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.flashMessage).toContainText("You logged into a secure area!");
  }

  async verifyFailureMessage() {
    await expect(this.flashMessage).toContainText("Your username is invalid!");
  }

  async verifySecureAreaHeading() {
    await expect(this.pageHeading).toHaveText("Secure Area");
  }

  async logout() {
    await this.logoutButton.click();
  }
}
