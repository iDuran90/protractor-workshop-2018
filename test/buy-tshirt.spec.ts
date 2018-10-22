import { browser } from 'protractor';
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectProduct();
    await(browser.sleep(1000));
    await productAddedPage.closeModal();
    await orderSummaryPage.goToSummary();
    await signInStepPage.sendLogin('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.addressStep();
    await shippingStepPage.shippingStep();
    await paymentStepPage.paymentStep();
    await bankPaymentPage.bankPayment();
    await summaryStepPage.goToSummary();

    await expect(summaryStepPage.getText())
      .toBe('Your order on My Store is complete.');
  });
});
