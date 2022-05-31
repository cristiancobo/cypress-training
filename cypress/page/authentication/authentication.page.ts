class Authentication {

    private emailAddress: string;
    private passwordAddress: string;
    private buttonSignIn: string;

    constructor() {
        this.emailAddress = "#email";   
        this.passwordAddress = "#passwd";   
        this.buttonSignIn = "#SubmitLogin > span";
    }
    public login (email:string, password:string): void {
        cy.get(this.emailAddress).type(email);
        cy.get(this.passwordAddress).type(password);
        cy.get(this.buttonSignIn).click();
    }
}
export {Authentication }
