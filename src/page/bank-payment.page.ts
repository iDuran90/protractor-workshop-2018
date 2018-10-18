import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private paymentLink: ElementFinder;

  constructor () {
    this.paymentLink = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public bankPayment(): promise.Promise<void> {
    return this.paymentLink.click();
  }
}
