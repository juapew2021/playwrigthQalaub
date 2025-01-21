import { Given, Then, When } from "@cucumber/cucumber";
import HomePageActions from "../page_objects/page_actions/HomePageActions";
import RegisterPageActions from "../page_objects/page_actions/RegisterPageActions";
// import { test, expect } from '@playwright/test';
import { config } from "../support/config";

When('se abre la pagina principal de open cart', async function () {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

Then('se da clic en la opcion My Account', async function () {
  const page = this.page!;
  let homePageActions = new HomePageActions(page);
  await homePageActions.click('btnAccount');
});

Then('se selecciona la opcion de registrar', async function () {
  const page = this.page!;
  const homePageActions = new HomePageActions(page);
  await homePageActions.click('btnRegister');
});

Given('se completa el formulario de registro', async function () {
  const page = this.page!;
  const registerPageActions = new RegisterPageActions(page);
  await registerPageActions.fillFormRegister();
});

Then('se comprueba el correcto registro', async function () {
  const page = this.page!;
  const registerPageActions = new RegisterPageActions(page);
  await registerPageActions.validateSuccessRegister();
});