import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Send personal information form', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When a new personal information is sent', () => {
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'
        ]
      });
    });

    it('Should response with title', async () => {
      await expect(personalInformationPage.getResponse())
        .toBe('Practice Automation Form');
    });
  });
});
