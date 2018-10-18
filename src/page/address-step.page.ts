import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private element: ElementFinder;

  constructor () {
    this.element = $('#center_column > form > p > button > span');
  }

  public async addressStep(): Promise<void> {
    await this.element.click();
  }
}
