import { Page } from '@playwright/test';
import BasePage from '../../BasePage';
import LoginElements from '../pageElements/LoginElements';

class LoginActions extends BasePage {
  constructor(page: Page) {
    super(page, LoginElements.elements);
  }
}

export default LoginActions;
