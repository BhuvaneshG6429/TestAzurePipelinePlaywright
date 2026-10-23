import { test, expect } from "@playwright/test";
import { DropdownPage } from "../pages/DropdownPage";

/**
 * TC003 - Dropdown Interaction Tests
 * Site  : https://the-internet.herokuapp.com/dropdown
 */
test.describe("TC003 - Dropdown Tests", () => {

  test("TC003_01 - Select Option 1 from dropdown", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.navigate();
    await dropdownPage.selectOption("1");
    await dropdownPage.verifySelectedOption("1");
  });

  test("TC003_02 - Select Option 2 from dropdown", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.navigate();
    await dropdownPage.selectOption("2");
    await dropdownPage.verifySelectedOption("2");
  });

  test("TC003_03 - Dropdown page heading should be visible", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.navigate();
    await dropdownPage.verifyPageHeading("Dropdown List");
  });

});
