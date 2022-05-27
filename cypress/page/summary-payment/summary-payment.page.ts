class SummaryPayment {

    private confirmationTextOrder: string;

    constructor() {
        this.confirmationTextOrder = ".cheque-indent";   
    }

    public getTextConfirmation(): Cypress.Chainable {
        return cy.get(this.confirmationTextOrder).click();
    }

}
export {SummaryPayment }