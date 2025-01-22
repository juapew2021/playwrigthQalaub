import { Page } from '@playwright/test';
import BasePage from '../../BasePage';
import RegisterElements from '../pageElements/RegisterElements';

class RegisterActions extends BasePage {
  constructor(page: Page) {
    super(page, RegisterElements.elements);
  }
}

export default RegisterActions;
