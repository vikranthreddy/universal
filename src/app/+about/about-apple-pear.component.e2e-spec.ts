import { baseUrl, browser } from 'e2e-config';
import { e2e } from '~/app/framework/testing/e2e';

e2e.describe('AboutApplePearComponent', () => {
  e2e.it('should have title', async () => {
    const page = browser.goto(`${baseUrl}/about/apple/6/pear`);

    const text = await page.evaluate(() => document.title).end();

    e2e.e(text).toContain('Apple or pear | ng-seed/universal');
  });
});
