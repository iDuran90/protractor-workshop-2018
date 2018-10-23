import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private acceptProductsBtn: ElementFinder;

  constructor () {
    this.acceptProductsBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async closeModal(): Promise<void> {
    await this.acceptProductsBtn.click();
  }

  public getButton(): ElementFinder {
    return this.acceptProductsBtn;
  }
}
