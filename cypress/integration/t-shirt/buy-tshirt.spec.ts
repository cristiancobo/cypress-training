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
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtsMenu();
    tshirts.selectTshirt(Cypress.env("nameProduct"));
    modalWindowCart.goToOrderSummary();
    orderSummary.goToAuthentication();
    authentication.login(Cypress.env("emailTest"), Cypress.env("passwordTest"));
    addresses.goToShipping();
    shipping.goToPayment();
    payment.payByBankWire();
    paymentConfirmation.goToConfirmation();
    summaryPayment.getTextConfirmation().should("contains.text", "Your order on My Store is complete.");
  });
});
