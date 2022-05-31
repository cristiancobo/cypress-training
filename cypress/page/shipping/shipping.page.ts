class Shipping {

    private checkoutButton: string;
    private termsAndConditionsCheckBox: string;
    
    constructor() {
        this.checkoutButton = "button[name='processCarrier']";   
        this.termsAndConditionsCheckBox  = "input[name='cgv']";
    }
    public goToPayment(): void {
        cy.get(this.termsAndConditionsCheckBox).click();
        cy.get(this.checkoutButton).click();
    }
}
export {Shipping }
