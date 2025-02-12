const {test, expect} = require ('@playwright/test')

test("Handling Elements", async({page})=>
{
      
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Handling Input Boxes
    await expect(page.locator("#name")).toBeEditable() //Assert whether its editable
    await page.locator("#name").fill("Full Name") //Locate By ID and fill the Name

    await expect(page.getByPlaceholder("Enter EMail")).toBeEmpty() //Assert whether its empty
    await page.getByPlaceholder("Enter EMail").fill("Full.Name@email.com") //Locate By PlaceHolder Value and fill the Email ID

    await expect(page.locator("#phone")).toBeVisible() //Assert whether its Visible
    await page.locator("#phone").fill("9876543210") //Locate By ID and fill the Phone Number

    await expect(page.locator("#textarea")).toBeEnabled() //Assert whether its Enabled
    await page.locator("textarea").fill("12345 Street Address, State - Zipcode") //Locate By ID and fill the Address


    //Handling Radio Buttons
    await page.locator("#male").check() //Selecting male Gender Radio Button
    await expect(page.locator("#male")).toBeChecked()//Validating whether its selected

    await page.locator("#female").check() //Selecting Female Gender Radio Button
    await expect(page.locator("#female")).toBeChecked()//Validating whether its selected

    await expect(page.locator("#male")).not.toBeChecked()//Validating whether its male button is now UNSELECTED


    //Handling CheckBoxes
    await page.locator("#sunday").check() //Selecting Sunday CheckBox
    await page.locator("#monday").check() //Selecting Monday CheckBox
    await page.locator("#friday").check() //Selecting Friday CheckBox
    await page.locator("#wednesday").check() //Selecting Wednesday CheckBox

    await expect(page.locator("#sunday")).toBeChecked() //Asserting whether Sunday is checked
    await expect(page.locator("#monday")).toBeChecked() //Asserting whether Monday is checked
    await expect(page.locator("#friday")).toBeChecked() //Asserting whether Friday is checked
    await expect(page.locator("#wednesday")).toBeChecked() //Asserting whether Wednesday is checked

    await page.locator("#sunday").uncheck() //Un-Selecting Sunday CheckBox

    await expect(page.locator("#sunday")).not.toBeChecked() //Asserting whether Sunday is NOT checked
    await expect(page.locator("#monday")).toBeChecked() //Asserting whether Monday is checked
    await expect(page.locator("#friday")).toBeChecked() //Asserting whether Friday is checked
    await expect(page.locator("#wednesday")).toBeChecked() //Asserting whether Wednesday is checked


    await page.waitForTimeout(5000); //Pausing the code for evaluation purpose


})