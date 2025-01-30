describe ("Verify UI Elements", ()=>
{
    it ("Radio_Buttons", ()=>
    {
        cy.visit("https://practice.expandtesting.com/radio-buttons#google_vignette");

        //Checking Visibility of Radio Buttons
        cy.get("#blue").should('be.visible')
        cy.get("#red").should("be.visible")
        cy.get("#yellow").should("be.visible")
        cy.get("#black").should("be.visible")
        cy.get("#green").should("be.visible")
        cy.get("#basketball").should("be.visible")
        cy.get("#football").should("be.visible")
        cy.get("#tennis").should("be.visible")


        //Selecting Radio Button Yellow and Tennis
        //Using Check to select and verifying that its checked
        cy.get("#yellow").check().should("be.checked")
        cy.get("#tennis").check().should("be.checked")
        
        //Checking rest all Radio Buttons are Not selected
        cy.get("#blue").should("not.be.checked")
        cy.get("#red").should("not.be.checked")
        cy.get("#green").should("be.disabled")
        cy.get("#black").should("not.be.checked")

        cy.get("#basketball").should("not.be.checked")
        cy.get("#football").should("not.be.checked")

        

    })
})