

describe("Automation Test Suite", () =>
{
    //Verify the Title of Page
    it("Title Verification", ()=>
    {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.title().should('eq', 'Swag Labs')
    })

    //False Verification
    it("Title Verification False", ()=>
        {
            cy.visit("https://www.saucedemo.com/v1/")
            cy.title().should('eq', 'Swag Labs XYZ')
        })

})

