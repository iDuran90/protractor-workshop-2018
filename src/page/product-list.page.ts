import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private addCartBtn: ElementFinder;

  constructor () {
    this.addCartBtn = $('#center_column a.ajax_add_to_cart_button');
  }

  public selectProduct(): promise.Promise<void> {
    return this.addCartBtn.click();
  }
}
