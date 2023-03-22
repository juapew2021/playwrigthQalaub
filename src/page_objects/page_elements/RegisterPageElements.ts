import locator from "../../locators/registerPage.json";
import BasePage from "./BasePage";
class RegisterPageElements extends BasePage {
  elements: any = {
    "inputFirtsName": `xpath=${locator.inputFirtsName}`,
    "inputLastName": `xpath=${locator.inputLastName}`,
    "inputEmail": `xpath=${locator.inputEmail}`,
    "inputPassword": `xpath=${locator.inputPassword}`,
    "btnAgree": `xpath=${locator.btnAgree}`,
    "btnContinue": `xpath=${locator.btnContinue}`,
    "successMessage": `xpath=${locator.successMessage}`,
  };
}

export default RegisterPageElements