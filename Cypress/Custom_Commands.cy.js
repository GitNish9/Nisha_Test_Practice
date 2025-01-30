describe("Use Custom Commands", ()=>
{

    it("Use Login & Link Text", ()=>
    {
         //Using Custom Commands to Login into the Portal
        cy.Login();

        //Using Custom Commands to Click the link using Label
        cy.ClickLink("Sauce Labs Bolt T-Shirt");

    })
   

})