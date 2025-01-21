import { expect, Page } from '@playwright/test';
import RegisterPageElements from '../page_elements/RegisterPageElements';

import BasePage from './BasePage';

class RegisterPageActions extends BasePage {

  constructor(page: Page) {
    super(page, new RegisterPageElements(page).elements);
  }

  async fillFormRegister() {
    await this.type('inputFirtsName', 'nombres');
    await this.type('inputLastName', 'pruebas');
    await this.type('inputEmail', 'correoprue12@gmail.com');
    await this.type('inputPassword', 'password');
    await this.click('btnAgree');
    await this.click('btnContinue');
  }

  async validateSuccessRegister() {
    const successMessage = await this.getElement('successMessage');
    await expect(successMessage).toHaveText('Your Account Has Been Created!');
  }

}

export default RegisterPageActions;