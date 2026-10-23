import { test, expect } from "@playwright/test";
import { CheckboxPage } from "../pages/CheckboxPage";

/**
 * TC002 - Checkbox Interaction Tests
 * Site  : https://the-internet.herokuapp.com/checkboxes
 */
test.describe("TC002 - Checkbox Tests", () => {

  test("TC002_01 - First checkbox should be checkable", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.navigate();
    await checkboxPage.checkCheckbox(0);
    await checkboxPage.verifyChecked(0);
  });

  test("TC002_02 - Second checkbox should be uncheckable", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.navigate();
    // Second checkbox is checked by default — uncheck it
    await checkboxPage.uncheckCheckbox(1);
    await checkboxPage.verifyUnchecked(1);
  });

  test("TC002_03 - Page heading should display Checkboxes", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.navigate();
    await expect(checkboxPage.pageHeading).toHaveText("Checkboxes");
  });

});
