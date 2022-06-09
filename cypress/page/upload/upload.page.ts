class Upload {

    private inputFile:string;

    constructor() {
        this.inputFile = "input[type='file']";
    }
    public getCardImageSelector (imageName:string): Cypress.Chainable {
       return cy.get(`div[title="${imageName}"]`)
      
    }

    public uploadImage(path:string):void{
        cy.get(this.inputFile).attachFile(path);
    }
}
export {Upload }
