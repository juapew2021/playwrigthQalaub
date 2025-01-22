import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
// import { expect } from '@playwright/test';

Then('Se visuzaliza el mensaje {string}', async function (text: string) {
  const page = this.page!;
  await expect(page.getByText(text)).toBeVisible();
});
