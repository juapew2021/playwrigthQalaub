import { Then, When } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
import RegisterActions from '../../pageObjects/register/pageActions/RegisterActions';
import { faker } from '@faker-js/faker/locale/en_AU';

Then('Se dirige a registrar un usuario', async function () {
  const page = this.page!;
  let registerActions = new RegisterActions(page);
  await registerActions.click('btnRegisterNav');
});

When('Crea un usuario nuevo', async function () {
  const page = this.page!;
  let registerActions = new RegisterActions(page);
  // Generar valores aleatorios
  const username = faker.internet.displayName();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  await registerActions.type('inputUsername', username);
  await registerActions.type('inputFirstName', firstName);
  await registerActions.type('inputLastName', lastName);
  await registerActions.type('inputPassword', 'Usuario2201@');
  await registerActions.type('inputConfirmPassword', 'Usuaro2201@');
  await registerActions.click('btnRegister');
});
