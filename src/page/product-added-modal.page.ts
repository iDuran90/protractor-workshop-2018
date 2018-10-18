import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('[style*="display: block;"] .button-container > a');
  }

  public async closeModal(): Promise<void> {
    await this.element.click();
  }
}
