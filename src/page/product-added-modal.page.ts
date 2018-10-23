import {
  $,
  browser,
  ElementFinder,
  ExpectedConditions
} from 'protractor';

export class ProductAddedPage {
  private acceptProductsBtn: ElementFinder;

  constructor () {
    this.acceptProductsBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async closeModal(): Promise<void> {
    await this.acceptProductsBtn.click();
  }

  public async expectButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.acceptProductsBtn), 3000);
  }
}
