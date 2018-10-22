import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private paymentBtn: ElementFinder;

  constructor () {
    this.paymentBtn = $('#form button');
  }

  public paymentStep(): promise.Promise<void> {
    return this.paymentBtn.click();
  }
}
