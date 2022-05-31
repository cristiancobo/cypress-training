class MenuContentPage {

    private tShirtsMenu: string;
    private dressesMenu:string;
    private menuContentPageURL: string;

    constructor() {
        this.tShirtsMenu = "#block_top_menu > ul > li:nth-child(3) > a";
        this.dressesMenu = "#block_top_menu > ul > li:nth-child(2) > a";
        this.menuContentPageURL = Cypress.env("url");
        
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtsMenu(): void {
        cy.get(this.tShirtsMenu).click()
    }

    public goToDressesMenu(): void {
        cy.get(this.dressesMenu).click()
    }
}

export { MenuContentPage }
