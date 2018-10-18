import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private pass: ElementFinder;
  private submit: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.pass = $('#passwd');
    this.submit = $('#SubmitLogin > span');
  }

  public async sendLogin(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.pass.sendKeys('WorkshopProtractor');
    await this.submit.click();
  }
}
