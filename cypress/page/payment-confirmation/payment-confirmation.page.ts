class PaymentConfirmation {

    private confirmOrderButton: string;

    constructor() {
        this.confirmOrderButton = "#cart_navigation > .button > span";   
    }
    public goToConfirmation(): void {
        cy.get(this.confirmOrderButton).click()
    }
}
export {PaymentConfirmation }