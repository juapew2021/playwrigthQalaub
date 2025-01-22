import { Page } from '@playwright/test';

class BasePage {
  page: Page;
  elements: any;
  constructor(page: Page, elements: any) {
    this.page = page;
    this.elements = elements;
  }

  async click(name: string) {
    const element = this.elements[name];
    switch (element.find) {
      case 'text':
        return await this.page.getByText(element.selector).first().click();
      case 'placeholder':
        return await this.page.getByPlaceholder(element.selector).first().click();
      case 'button':
        return await this.page.getByRole('button', { name: element.selector }).first().click();
      default:
        return await this.page.click(this.elements[name]);
    }
  }

  async type(name: string, text: string) {
    const element = this.elements[name];
    switch (element.find) {
      case 'text':
        return await this.page.getByText(element.selector).first().type(text);
      case 'placeholder':
        return await this.page.getByPlaceholder(element.selector).first().type(text);
      default:
        return await this.page.locator(element.selector).first().type(text);
    }
  }

  async getElement(name: string) {
    return await this.page.locator(this.elements[name]);
  }
}

export default BasePage;
