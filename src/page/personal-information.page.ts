import { $, $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private submitBtn: ElementFinder;
  private textContainer: ElementFinder;

  constructor () {
    this.firstName = $('input[name="firstname"]');
    this.lastName = $('input[name="lastname"]');
    this.submitBtn = $('button[name="submit"]');
    this.textContainer = $('.wpb_text_column.wpb_content_element h1');
  }

  private async selectSex(sex: string): Promise<void> {
    await $(`input[value="${sex}"]`).click();
  }

  private async selectExperience(experience: string): Promise<void> {
    await $(`input[value="${experience}"]`).click();
  }

  private async selectProfessions(professions: string[]): Promise<void> {
    for (const profession of professions) {
      await $(`input[value="${profession}"]`).click();
    }
  }

  private async selectTools(tools: string[]): Promise<void> {
    for (const tool of tools) {
      await $(`input[value="${tool}"]`).click();
    }
  }

  private async selectContinent(continent: string): Promise<void> {
    const commandOptions: ElementArrayFinder = $$('#continents option');

    await commandOptions.each(async (element: ElementFinder) => {
      if (continent === await element.getText()) {
        await element.click();
      }
    });
  }

  private async selectCommands(commands: string[]): Promise<void> {
    const commandOptions: ElementArrayFinder = $$('#selenium_commands option');

    await commandOptions.each(async (element: ElementFinder) => {
      if (commands.includes(await element.getText())) {
        await element.click();
      }
    });
  }

  public async fillForm(personalInformation: any): Promise<void> {
    await this.firstName.sendKeys(personalInformation.firstName);
    await this.lastName.sendKeys(personalInformation.lastName);

    await this.selectSex(personalInformation.sex);
    await this.selectExperience(personalInformation.experience);
    await this.selectProfessions(personalInformation.profession);
    await this.selectTools(personalInformation.tools);
    await this.selectContinent(personalInformation.continent);
    await this.selectCommands(personalInformation.commands);

    await this.submitBtn.click();
  }

  public async getResponse(): Promise<string> {
    return await this.textContainer.getText();
  }
}
