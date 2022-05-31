class ModalWindowCart {

    private orderSummary: string;

    constructor() {
        this.orderSummary = "a[title='Proceed to checkout']";   
    }
    public goToOrderSummary(): void {
        cy.get(this.orderSummary).click()
    }
}
export {ModalWindowCart }
