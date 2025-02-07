const {test,expect} = require ('@playwright/test')

test ('Assertions', async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //HARD ASSERTIONS
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

    //SOFT ASSERTIONS
   await page.click("#gender-female"); //Check Female CheckBox
   expect.soft(page.locator("#gender-male")).toBeChecked() //SoftAssert Male CheckBox
   
   //HARD ASSERTIONS
   expect(page.locator("#gender-female")).toBeChecked() //Assert Female CheckBox
})