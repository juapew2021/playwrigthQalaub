import { Page } from '@playwright/test';
import BasePage from '../../BasePage';
import MainElements from '../pageElements/MainElements';

class MainActions extends BasePage {
  constructor(page: Page) {
    super(page, MainElements.elements);
  }
}

export default MainActions;
