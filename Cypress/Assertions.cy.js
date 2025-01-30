
describe("Assertions", ()=>
{
    it("Implicit_Assertions", ()=>
{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    /*
    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include', 'orangehrmlive')
    cy.url().should('contain', '-demo')
    */

    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .should('include', 'orangehrmlive')
    .should('contain', '-demo')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')

    cy.get('.orangehrm-login-footer-sm').should('have.length', '1')


    /*cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .and('include', 'orangehrmlive')
    .and('contain', "-demo")
    */

    //cy.get(".oxd-input oxd-input--active").type("Admin")
})


 it ("Explicit_Assertions", ()=>
{
cy.visit("https://www.saucedemo.com/v1/")
cy.get("#user-name").type("standard_user")
cy.get("#password").type("secret_sauce1")
cy.get("#login-button").click()
let expectedText = "Epic sadface: Username and password do not match any user in this service"
cy.get("#login_button_container").then( (x) =>
{
let actualtext = x.text()
expect(actualtext).to.equal(expectedText)

assert.equal(actualtext,expectedText)

})
})
})