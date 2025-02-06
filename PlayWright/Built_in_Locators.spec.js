const {test,expect} = require ('@playwright/test')

test("Built_In", async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.waitForSelector("img[alt='orangehrm-logo']")
    const logo = await page.getByAltText("company-branding") //Locating image elements using alt-text value
    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin") //Locate element using placeholder value
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button", {type : 'submit'}).click() //Locate any element with its role of it
    await page.waitForSelector('text=Employees on Leave Today', { timeout: 3000 });
    expect(await page.getByText("Employees on Leave Today")).toBeVisible(); //Assert visibility of text against the text Employees on Leave Today
 
    await page.getByText("My Info").click() 
    await page.waitForTimeout(10000);
    const pageLabel = await page.getByLabel("Employee Id") //Locate using label
    expect(pageLabel).toBeTruthy()
    
    const pageTitle = await page.getByTitle("OrangeHRM"); //Locate using Title and asserting some value is present
    expect(pageTitle).toBeTruthy();

})