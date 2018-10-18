import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private paymentBtn: ElementFinder;

  constructor () {
    this.paymentBtn = $('#form > p > button > span');
  }

  public paymentStep(): promise.Promise<void> {
    return this.paymentBtn.click();
  }
}
