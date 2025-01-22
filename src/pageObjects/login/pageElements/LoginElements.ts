import PageElement from '../../../support/types/PageElement';

class LoginElements {
  public static elements: Record<string, PageElement> = {
    inputEmail: { selector: 'Login', find: 'placeholder' },
    inputPassword: { selector: 'xpath=//input[@name = "password"]', find: 'locator' },
    btnLogin: { selector: 'Login', find: 'button' },
  };
}

export default LoginElements;
