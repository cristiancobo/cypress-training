class OrderSummary {

    private checkout: string;

    constructor() {
        this.checkout = ".cart_navigation > .button > span";   
    }
    public goToAuthentication(): void {
        cy.get(this.checkout).click()
    }
}
export {OrderSummary }