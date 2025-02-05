const {test, expect} = require ('@playwright/test');

test('Title of Page', async({page})=>
{
    await page.goto("https://www.saucedemo.com/v1/");

    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/");

    //let pttl = await page.title();
    //let purl = await page.url();
    console.log("Successfully verified Page Title and URL to have : ",  await page.title() , "  ",  page.url());

    await page.close();
})