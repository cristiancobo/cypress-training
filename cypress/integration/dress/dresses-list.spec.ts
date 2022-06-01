import {

  MenuContentPage,
  Dresses,
} from "../../page";


describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dresses: Dresses;

  before(() => {
    menuContentPage = new MenuContentPage();
    dresses = new Dresses();
  });

  it("show the available amount of dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dresses.validateItemsNumber(Cypress.env("dressesAmount"));
  });

  it("the dress names appear correctly", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dresses.validateItemsNames(Cypress.env("dressesName"));
  });
});
