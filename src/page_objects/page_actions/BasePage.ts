import { Page } from '@playwright/test';

class BasePage {
  page: Page;
  elements: any
  constructor(page: Page, elements: any) {
    this.page = page;
    this.elements = elements
  }

  async click(name: string) {
    return await this.page.click(this.elements[name]);
  }

  async type(name: string, text: string) {
    return await this.page.type(this.elements[name], text);
  }

  async getElement(name: string) {
    return await this.page.locator(this.elements[name]);
  }


}



export default BasePage;