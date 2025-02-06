const {test, expect} = require ('@playwright/test')

test("Multi_elements", async ({page})=>
{

    await page.goto("https://the-internet.herokuapp.com/");
    
    // await page.waitForSelector('a'); //Ensuring the page is fully loaded with links
    const links = await page.$$('a'); //Locate all the links using tag a and storing it as an element
    
    console.log("Found ", links.length, " links on the page."); //Displaying number of links found on the page

    for(const link of links) 
    {
        const linkText = await link.innerText(); //Retriveing the link text to another variable for each link
        console.log("Link Text is : ", linkText); //Display the text of all the links
    }
}
)