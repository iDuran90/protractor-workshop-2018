import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private submitBtn: ElementFinder;
  private textContainer: ElementFinder;
  private commandOptions: ElementArrayFinder;
  // private continents: ElementArrayFinder;
  private uploadPhoto: ElementFinder;

  constructor () {
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
    this.submitBtn = element(by.id('submit'));
    this.textContainer = element(by.css('.wpb_text_column.wpb_content_element h1'));
    this.commandOptions = element.all(by.css('#selenium_commands option'));
    // this.continents = $$('#continents option');
    this.uploadPhoto = element(by.id('photo'));

  }

  private async selectSex(sex: string): Promise<void> {
    await element(by.css(`input[value="${sex}"]`)).click();
  }

  private async selectExperience(experience: string): Promise<void> {
    await element(by.css(`input[value="${experience}"]`)).click();
  }

  private async selectProfessions(professions: string[]): Promise<void> {
    for (const profession of professions) {
      await element(by.css(`input[value="${profession}"]`)).click();
    }
  }

  private async selectTools(tools: string[]): Promise<void> {
    for (const tool of tools) {
      await element(by.css(`input[value="${tool}"]`)).click();
    }
  }

  // private async selectContinent(continent: string): Promise<void> {
  //   await this.continents.each(async (element: ElementFinder) => {
  //     if (continent === await element.getText()) {
  //       await element.click();
  //     }
  //   });
  // }

  private async selectCommands(commands: string[]): Promise<void> {
    await this.commandOptions.each(async (element: ElementFinder) => {
      if (commands.indexOf(await element.getText()) !== -1) {
        await element.click();
      }
    });
  }

  private async uploadFile(relativePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadPhoto.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  public async fillForm(personalInformation: any): Promise<void> {
    await this.firstName.sendKeys(personalInformation.firstName);
    await this.lastName.sendKeys(personalInformation.lastName);

    await this.selectSex(personalInformation.sex);
    await this.selectExperience(personalInformation.experience);
    await this.selectProfessions(personalInformation.profession);
    await this.selectTools(personalInformation.tools);
    // await this.selectContinent(personalInformation.continent);
    await this.selectCommands(personalInformation.commands);

    await this.uploadFile(personalInformation.file);
  }

  public async submit(personalInformation: any): Promise<void> {
    await this.fillForm(personalInformation);

    await this.submitBtn.click();
  }

  public async getResponse(): Promise<string> {
    return await this.textContainer.getText();
  }

  public async getFilename(): Promise<string> {
    return await this.uploadPhoto.getAttribute('value');
  }
}
