describe("Using Config & Env ", ()=>
{

    it("Using Base URL and Env Var", ()=>
    {
        cy.visit('')
        cy.log("Displaying Variable from Env Variable " + Cypress.env("Env_UserName"))
    })




})