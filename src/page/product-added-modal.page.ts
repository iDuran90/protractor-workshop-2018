import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedPage {
  private acceptProdutsBtn: ElementFinder;

  constructor () {
    this.acceptProdutsBtn = $('[style*="display: block;"] .button-container > a');
  }

  public closeModal(): promise.Promise<void> {
    return this.acceptProdutsBtn.click();
  }
}
