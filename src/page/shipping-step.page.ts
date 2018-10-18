import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private shippingBtn: ElementFinder;

  constructor () {
    this.shippingBtn = $('#cgv');
  }

  public shippingStep(): promise.Promise<void> {
    return this.shippingBtn.click();
  }
}
