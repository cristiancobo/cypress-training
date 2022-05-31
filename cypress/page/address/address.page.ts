class Addresses {

    private checkoutButton: string;

    constructor() {
        this.checkoutButton = "button[name='processAddress']";   
    }
    public goToShipping(): void {
        cy.get(this.checkoutButton).click()
    }
}
export {Addresses }
