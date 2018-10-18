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

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectProduct();
    await(browser.sleep(3000));
    await productAddedPage.closeModal();
    await(browser.sleep(3000));
    await orderSummaryPage.goToSummary();
    await(browser.sleep(3000));
    await signInStepPage.sendLogin();
    await(browser.sleep(3000));
    await addressStepPage.addressStep();
    await(browser.sleep(3000));
    await shippingStepPage.shippingStep();
    await(browser.sleep(3000));
    await paymentStepPage.paymentStep();
    await(browser.sleep(3000));
    await bankPaymentPage.bankPayment();
    await(browser.sleep(3000));
    await summaryStepPage.goToSummary();
    await(browser.sleep(3000));

    await expect(summaryStepPage.getText())
      .toBe('Your order on My Store is complete.');
  });
});
