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

  describe('Open webpage', async () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('Add t-shirt to cart and proceed to checkout', async () => {
      beforeAll(async () => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.selectProduct();
        await productAddedPage.expectButton();
        await productAddedPage.closeModal();
        await orderSummaryPage.goToSummary();
      });

      describe('Login in the app', async () => {
        beforeAll(async () => {
          await signInStepPage.sendLogin('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('Choose default address', async () => {
          beforeAll(async () => {
            await addressStepPage.addressStep();
            await shippingStepPage.shippingStep();
          });

          describe('Execute payment', async () => {
            beforeAll(async () => {
              await paymentStepPage.paymentStep();
              await bankPaymentPage.bankPayment();
              await summaryStepPage.goToSummary();
            });

            it('then the order should be completed', async () => {
              await expect(summaryStepPage.getText())
              .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
