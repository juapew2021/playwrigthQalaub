import locator from "../../locators/homePage.json";
import BasePage from "./BasePage";
class HomePageElements extends BasePage {
  elements: any = {
    "btnAccount": `xpath=${locator.btnAccount}`,
    "btnRegister": `xpath=${locator.btnRegister}`
  };
}

export default HomePageElements