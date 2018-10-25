import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;

  constructor() {
    this.frame = $('#IF1');
  }

  public async setFrameHeight(height: number): Promise<void> {
    await browser.executeScript(
      `document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public async getFrameHeight(): Promise<number> {
    const height = await this.frame.getAttribute('height');

    return Number(height);
  }
}
