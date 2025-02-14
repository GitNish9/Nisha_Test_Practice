const {test, expect} = require('@playwright/test')

test("Handle Dropdowns", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Handling Dropdown
    await page.locator("#country").selectOption("Germany")  //SelectOption using Visible Text
    await page.locator("#country").selectOption({label: "India"}) //SelectOption using label
    await page.locator("#country").selectOption({value: "uk"}) //SelectOption using value
    await page.locator("#country").selectOption({index: 0}) //SelectOption using index value
   // await expect(page.locator("#country")).toContainText("india") //Asserting whether India is selected

    //Asserting the number of options
    const dropdown_options = await page.$$("#country > option") //Storing dropdown options in a constant variable
    await expect(dropdown_options).toHaveLength(10) //Verifying the length of dropdown options

    //Asserting the option values
    for (const opt of dropdown_options)
    {

        let text_content = await opt.textContent() //Retriving text content from each opt value of dropdown_options
        console.log("Dropdown Value  :" + text_content)
    }

    await page.waitForTimeout(5000) //Pausing the code for evaluation purpose

})