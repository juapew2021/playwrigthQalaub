import { Then, When } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
import RegisterActions from '../../pageObjects/register/pageActions/RegisterActions';

Then('Se dirige a registrar un usuario', async function () {
  const page = this.page!;
  let registerActions = new RegisterActions(page);
  await registerActions.click('btnRegisterNav');
});

When('Crea un usuario nuevo', async function () {
  const page = this.page!;
  let registerActions = new RegisterActions(page);
  await registerActions.type('inputUsername', 'usuario22011');
  await registerActions.type('inputFirstName', 'Usuario2201@');
  await registerActions.type('inputLastName', 'Usuario2201@');
  await registerActions.type('inputPassword', 'Usuario2201@');
  await registerActions.type('inputConfirmPassword', 'Usuario2201@');
  await registerActions.click('btnRegister');
});
