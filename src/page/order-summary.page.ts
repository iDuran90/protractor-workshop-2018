import { $, ElementFinder, promise } from 'protractor';

export class OrderSummaryPage {
  private acceptBtn: ElementFinder;

  constructor () {
    this.acceptBtn = $('.cart_navigation span');
  }

  public goToSummary(): promise.Promise<void> {
    return this.acceptBtn.click();
  }
}
