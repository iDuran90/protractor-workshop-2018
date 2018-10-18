import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async bankPayment(): Promise<void> {
    await this.element.click();
  }
}
