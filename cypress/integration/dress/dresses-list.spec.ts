import {

  MenuContentPage,
  Dresses,
} from "../../page";

const menuContentPage: MenuContentPage = new MenuContentPage();
const dresses: Dresses = new Dresses();

describe("the user navigates to the dresses page should", () => {
  let product: { dressesName: string[], dressesAmount:number };

  beforeEach(()=>{
    cy.fixture("products").then((tShirtName) =>{
      product = tShirtName;
    });
  });

  it("show the available amount of dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dresses.validateItemsNumber(product.dressesAmount);
  });

  it("the dress names appear correctly", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dresses.validateItemsNames(product.dressesName);
  });
});
