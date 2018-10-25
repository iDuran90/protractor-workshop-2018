import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Modify iFrame', () => {
  const iFramePage: IFramePage = new IFramePage();

  describe('Load iFrames page', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
    });

    describe('When set iFrame height', () => {
      beforeAll(async () => {
        await iFramePage.setFrameHeight(100);
      });

      it('then the height should be updated', async () => {
        await expect(iFramePage.getFrameHeight()).toBe(100);
      });
    });

    describe('When get main title', () => {
      it('should get the correct title', async () => {
        await expect(iFramePage.getMainTitle()).toBe('Sample Iframe page');
      });

      describe('When got to the frame', () => {
        beforeAll(async () => {
          await iFramePage.goToFrame();
        });

        it('should get the correct title', async () => {
          await expect(iFramePage.getMainTitle()).toBe('Practice Automation Form');
        });

        describe('When back to main page', () => {
          beforeAll(async () => {
            await iFramePage.goToMainPage();
          });

          it('should get the correct title', async () => {
            await expect(iFramePage.getMainTitle()).toBe('Sample Iframe page');
          });
        });
      });
    });
  });
});
