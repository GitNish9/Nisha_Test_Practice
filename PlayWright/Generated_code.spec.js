import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('PracticeTest_User');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('PracticeTest_Password');
  await page.getByRole('button', { name: 'Log in' }).click();

  //Assertions generated using pick locator
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome PracticeTest_User');
  await page.getByRole('link', { name: 'Log out' }).click();
});