import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private element: ElementFinder;
  private textContainer: ElementFinder;

  constructor () {
    this.element = $('#cart_navigation > button > span');
    this.textContainer = $('#center_column > div > p > strong');
  }

  public async goToSummary(): Promise<void> {
    await this.element.click();
  }

  public async getText(): Promise<string> {
    const text = await this.textContainer.getText();

    return text;
  }
}
