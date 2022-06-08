import {
  Information,
} from "../../page";

const information: Information = new Information();

describe("When user fills the form", () => {
  let personalInformation: {firstName: string, lastName: string, email: string, gender: string, mobileNumber: string, hobbies: string, currentAddress: string, state:string, city:string};
  beforeEach(()=>{
    cy.fixture("data").then((data) =>{
      personalInformation = data;
    });
  });

  it("Information is displayed correctly", () => {
    cy.visit(Cypress.env("urlForm"));
    information.fillForm(personalInformation);
    cy.get("tbody > :nth-child(1) > :nth-child(2)").should("have.text", "Holmes Salazar");
    cy.get("tbody > :nth-child(3) > :nth-child(2)").should("have.text", "Male");
    cy.get("tbody > :nth-child(4) > :nth-child(2)").should("have.text", "3656589156");
    cy.get("tbody > :nth-child(7) > :nth-child(2)").should("have.text", "Music, Reading");
    cy.get("tbody > :nth-child(9) > :nth-child(2)").should("have.text", "Av siempreViva # 123");
    cy.get("tbody > :nth-child(10) > :nth-child(2)").should("have.text", "Haryana Karnal");
  });
});
