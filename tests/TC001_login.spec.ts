import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

/**
 * TC001 - Valid Login Test
 * Site  : https://the-internet.herokuapp.com/login
 * Credentials: tomsmith / SuperSecretPassword!
 */
test.describe("TC001 - Login Tests", () => {

  test("TC001_01 - Valid login should navigate to Secure Area", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await loginPage.verifySuccessMessage();
    await loginPage.verifySecureAreaHeading();
  });

  test("TC001_02 - Invalid login should show error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("wronguser", "wrongpassword");
    await loginPage.verifyFailureMessage();
  });

  test("TC001_03 - Login then logout should return to Login page", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await loginPage.verifySuccessMessage();
    await loginPage.logout();

    // After logout we should be back on the login page
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator("#flash")).toContainText("You logged out of the secure area!");
  });

});
