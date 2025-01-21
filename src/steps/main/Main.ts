import { Then, When } from "@cucumber/cucumber";
import { config } from "../../support/config";
import MainActions from "../../pageObjects/main/pageActions/MainActions";
// import { test, expect } from '@playwright/test';

When('se ingresa a la pagina principal', async function () {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

Then('se dirigue al inicio de sesion', async function () {
  const page = this.page!;
  let mainActions = new MainActions(page);
  await mainActions.click('btnLogin');
});
