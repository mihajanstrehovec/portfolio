import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('has title', async ({ page }) => {
  await page.goto('https://www.mihastrehovec.si/');
  await allure.tags("Web interface", "Authentication");
  await allure.severity("critical");
  // Expect a title "to contain" a substring.
  // random comment
  // random comment 2
  // added gh-pages branch
  // it works!!
  // anotehr stupid comment
  await allure.epic("Web interface");
  await allure.feature("Essential features");
  await allure.story("Authentication");
  await expect(page).toHaveTitle(/Miha Jan Strehovec/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.mihastrehovec.si/');

  // Click the get started link.
  await page.getByRole('link', { name: 'EDUCATION' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

