const {test,expect} = require ('@playwright/test');

test("Locators_", async ({page}) =>
{
    await page.goto("https://www.saucedemo.com/v1/");
   
    //Locate using CSS of the element
    await page.locator("#user-name").fill("standard_user");

    //Locate using Xpath of the element
    await page.locator('//*[@id="password"]').fill("secret_sauce");
      
    //Locate using Property of the element
    await page.locator("id=login-button").click(); // Click Login

   
    await page.click("//*[@id='menu_button_container']/div/div[3]/div/button")
    
    //Assert Logout Link
    await expect(page.locator("#logout_sidebar_link")).toContainText("Logout");

    await page.click("#logout_sidebar_link");

    await page.close();



})