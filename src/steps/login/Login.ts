import { Then } from '@cucumber/cucumber';
import LoginActions from '../../pageObjects/login/pageActions/LoginActions';
import { expect } from '@playwright/test';

Then('Ingresa las credenciales de login', async function () {
  const page = this.page!;
  let loginActions = new LoginActions(page);
  await loginActions.type('inputEmail', 'usuario2201');
  await loginActions.type('inputPassword', 'Usuario2201@');
  await loginActions.click('btnLogin');
});

Then('Se visuzaliza el nombre de usuario', async function () {
  const page = this.page!;
  // let loginActions = new LoginActions(page);
  await expect(page.getByText('Hi, usuario2201')).toBeVisible();
});
