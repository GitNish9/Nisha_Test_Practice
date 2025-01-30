describe("CSS_Locators", ()=>
{
    it("CSS_ID_Class_Attribute", ()=>
    {
        cy.visit("https://www.saucedemo.com/v1/")
        //Identify  Username using ID
        cy.get("#user-name").type("standard_user")

        //Identify  Password using Attribute
        cy.get("[name='password']").type("secret_sauce")
        
        //Identify  Password using Class
        cy.get(".btn_action").click()
        
                //Assertion
        cy.get(".footer_copy").contains("© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
        
        
    }
    )
})