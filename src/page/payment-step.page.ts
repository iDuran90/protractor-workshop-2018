import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#form > p > button > span');
  }

  public async paymentStep(): Promise<void> {
    await this.element.click();
  }
}
