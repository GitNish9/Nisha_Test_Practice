const {test, expect} = require('@playwright/test')

test("Handle Dropdowns", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Handling Dropdown Selecting and Asserting the selection
    await page.locator("#country").selectOption("Germany")  //SelectOption using Visible Text
    await expect(page.locator("#country")).toHaveValue("germany"); // Validate the selected option

    await page.locator("#country").selectOption({label: "India"}) //SelectOption using label
    await expect(page.locator("#country")).toHaveValue("india"); // Validate the selected option

    await page.locator("#country").selectOption({value: "uk"}) //SelectOption using value
    await expect(page.locator("#country")).toHaveValue("uk"); // Validate the selected option

    await page.locator("#country").selectOption({index: 0}) //SelectOption using index value
    const firstOptionValue = await page.locator("#country > option").first().getAttribute('value');
    await expect(page.locator("#country")).toHaveValue(firstOptionValue); // Validate the selected option
   

    //Asserting the number of options
    const dropdown_options = await page.$$("#country option") //Storing dropdown options in a constant variable
    await expect(dropdown_options).toHaveLength(10) //Verifying the length of dropdown options

    //Asserting the option values - India
    let flag = false; //Setting Boolean Value as false
    for (const opt of dropdown_options)
    {

        let text_content = await opt.textContent() //Retriving text content from each opt value of dropdown_options
        console.log("Dropdown Value  :" + text_content)
        if (text_content.includes("India"))
        {
            flag = true; //Changing flag status to true for the presence of  India
        }
    }

    expect(flag).toBeTruthy(); //Checking for flag status after asserting for option "India"


        
    await page.waitForTimeout(5000) //Pausing the code for evaluation purpose

})
