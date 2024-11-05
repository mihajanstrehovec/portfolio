import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.mihastrehovec.si/');

  // Expect a title "to contain" a substring.
  // random comment
  // random comment 2
  // added gh-pages branch
  // it works!!
  // anotehr stupid comment
  await expect(page).toHaveTitle(/Miha Jan Strehovec/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.mihastrehovec.si/');

  // Click the get started link.
  await page.getByRole('link', { name: 'EDUCATION' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

