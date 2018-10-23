import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private paymentLink: ElementFinder;

  constructor () {
    this.paymentLink = $('#HOOK_PAYMENT a.bankwire');
  }

  public bankPayment(): promise.Promise<void> {
    return this.paymentLink.click();
  }
}
