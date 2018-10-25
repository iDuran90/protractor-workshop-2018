import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;
  private title: ElementFinder;

  constructor() {
    this.frame = $('#IF1');
    this.title = $('#main h1');
  }

  public async setFrameHeight(height: number): Promise<void> {
    await browser.executeScript(
      `document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getFrameHeight(): Promise<number> {
    const height = await this.frame.getAttribute('height');

    return Number(height);
  }

  public async getMainTitle(): Promise<string> {
    return await this.title.getText();
  }

  public async goToFrame(): Promise<void> {
    await browser.switchTo().frame(this.frame.getWebElement());
  }

  public async goToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
