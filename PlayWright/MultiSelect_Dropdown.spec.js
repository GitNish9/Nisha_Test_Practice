const {test, expect} = require('@playwright/test')

test("Multiselect Dropdowns", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption([{label: "Red"}, {label: "Yellow"}]) //Array of Multi Options
    // await page.selectOption("#colors",["Red", "Yellow"]) //Array of multioptions

    await expect(page.locator("#colors")).toHaveValues([/red/, /yellow/]) //Validating the Selected Multi Options

    //Asserting for Dropdown length
    const dd_options = await page.$$("#colors option") //Usinmg JS array concept
    expect(dd_options).toHaveLength(7) //Asserting the number of options in the dropdown

    //Asserting for Dropdown Text Content
    const text_content = await page.locator("#colors").textContent(); //Storing all the textcontent into a variable
    expect(text_content.includes("White")).toBeTruthy(); //Validating for the text white
    
    await page.waitForTimeout(5000) //Pausing the code for evaluation purpose
})