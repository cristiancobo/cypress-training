import {
  Addresses,
  Authentication,
  MenuContentPage,
  OrderSummary,
  PaymentConfirmation,
  Shipping,
  SummaryPayment,
  ModalWindowCart,
  Tshirts,
  Payment,

} from "../../page";

const menuContentPage: MenuContentPage = new MenuContentPage();
const addresses: Addresses = new Addresses();
const authentication: Authentication = new Authentication();
const orderSummary: OrderSummary = new OrderSummary();
const paymentConfirmation: PaymentConfirmation = new PaymentConfirmation();
const shipping: Shipping = new Shipping();
const summaryPayment: SummaryPayment = new SummaryPayment();
const modalWindowCart: ModalWindowCart = new ModalWindowCart();
const tshirts: Tshirts = new Tshirts();
const payment: Payment = new Payment();


describe("Buy a t-shirt", () => {
  let userCredentials: { emailTest: string, passwordTest: string };
  let product: { productName: string; };
  beforeEach(()=>{
    cy.fixture("credentials").then((credentials) =>{
      userCredentials = credentials;
    });

    cy.fixture("products").then((tShirtName) =>{
      product = tShirtName;
    });
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtsMenu();
    tshirts.selectTshirt(product.productName);
    modalWindowCart.goToOrderSummary();
    orderSummary.goToAuthentication();
    authentication.login(userCredentials.emailTest, userCredentials.passwordTest);
    addresses.goToShipping();
    shipping.goToPayment();
    payment.payByBankWire();
    paymentConfirmation.goToConfirmation();
    summaryPayment.getTextConfirmation().should("contains.text", "Your order on My Store is complete.");
  });
});
