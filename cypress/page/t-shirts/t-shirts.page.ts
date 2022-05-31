export class Tshirts{

    private tshirts: string;
    private addToCartButton: string;
  
    constructor() {
      this.tshirts = '.product_list';
      this.addToCartButton = '.ajax_add_to_cart_button.btn.btn-default';
    }
  
    public selectTshirt(tshirtName:string) {
      cy.get(this.tshirts)
        .find('.product-name')
        .contains(tshirtName)
        .first()
        .get(this.addToCartButton)
        .click();
    }
  }
