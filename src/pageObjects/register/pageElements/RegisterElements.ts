import PageElement from '../../../support/types/PageElement';

class RegisterElements {
  public static elements: Record<string, PageElement> = {
    inputUsername: { selector: 'xpath=//input[@name = "username"]', find: 'locator' },
    inputFirstName: { selector: 'xpath=//input[@name = "firstName"]', find: 'locator' },
    inputLastName: { selector: 'xpath=//input[@name = "lastName"]', find: 'locator' },
    inputPassword: { selector: 'xpath=//input[@id = "password"]', find: 'locator' },
    inputConfirmPassword: { selector: 'xpath=//input[@name = "confirmPassword"]', find: 'locator' },
    btnRegister: { selector: 'Register', find: 'button' },
    btnRegisterNav: { selector: 'Register', find: 'text' },
    btnCancel: { selector: 'Cancel', find: 'text' },
  };
}

export default RegisterElements;
