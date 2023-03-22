import { Page } from '@playwright/test';
import HomePageElements from '../page_elements/HomePageElements';
import BasePage from './BasePage';

class HomePageActions extends BasePage {

  constructor(page: Page) {
    super(page, new HomePageElements(page).elements);
  }

}

export default HomePageActions;