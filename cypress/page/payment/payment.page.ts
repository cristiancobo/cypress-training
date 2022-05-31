class Payment {

    private payBankWireButton: string;
    private payCheckButton : string;

    constructor() {
        this.payBankWireButton = "a[class='bankwire']";
        this.payCheckButton = "a[class='cheque']";
    }
    public payByBankWire(): void {
        cy.get(this.payBankWireButton).click()
    }

    public payByCheck(): void {
        cy.get(this.payCheckButton).click()
    }
}
export {Payment }
