import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedPage {
  private acceptProductsBtn: ElementFinder;

  constructor () {
    this.acceptProductsBtn = $('[style*="display: block;"] .button-container > a');
  }

  public closeModal(): promise.Promise<void> {
    return this.acceptProductsBtn.click();
  }

  public getButton(): ElementFinder {
    return this.acceptProductsBtn;
  }
}
