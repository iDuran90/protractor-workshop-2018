import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#cgv');
  }

  public async shippingStep(): Promise<void> {
    await this.element.click();
  }
}
