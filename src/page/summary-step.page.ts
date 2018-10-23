import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private buyBtn: ElementFinder;
  private textContainer: ElementFinder;

  constructor () {
    this.buyBtn = $('#cart_navigation > button');
    this.textContainer = $('.cheque-indent');
  }

  public goToSummary(): promise.Promise<void> {
    return this.buyBtn.click();
  }

  public getText(): promise.Promise<string> {
    return this.textContainer.getText();
  }
}
