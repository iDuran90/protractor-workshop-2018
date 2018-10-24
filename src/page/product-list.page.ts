import { $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products
      .filter(async (item: ElementFinder) => {
        const itemName = await item.$('.product-name').getText();

        return productName === itemName;
      }).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const productElement = this.findByProduct(productName);

    await productElement.$('.ajax_add_to_cart_button').click();
  }
}
