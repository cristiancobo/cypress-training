export class Tshirts{

    private tshirts: string;
    private addToCartButton: string;
  
    constructor() {
      this.tshirts = '.product_list';
      this.addToCartButton = '.ajax_add_to_cart_button.btn.btn-default';
    }
  
    public findTShirtByName(tshirtName:string){
      return cy.get(".product-name").filter(`[title="${tshirtName}"]`);
     }
    
    public selectTshirt(tshirtName:string) {
        this.findTShirtByName(tshirtName)
        .contains(tshirtName)
        .first()
        .get(this.addToCartButton)
        .click();
    }  
  }
