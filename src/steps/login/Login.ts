import { When } from '@cucumber/cucumber';
import LoginActions from '../../pageObjects/login/pageActions/LoginActions';

When('ingresa las credenciales de login', async function () {
  const page = this.page!;
  const newWindow = await page.context().waitForEvent('page');

  let loginActions = new LoginActions(newWindow);
  await loginActions.type('inputEmail', 'info@qalaub.com');
  await loginActions.type('inputPassword', 'QAlaub2024+');
  await loginActions.click('btnLogin');
  await page.waitForTimeout(10000);
});
