

describe ("Tables Handling", ()=>{

beforeEach("Open URL Login", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name= 'username']").type("Admin")
    cy.get("input[name= 'password']").type("admin123")

    cy.get("button[type= 'submit']").click()

    cy.get("ul.oxd-main-menu").contains("Admin").click()

})

it("Total Rows & Columns", ()=>{

    cy.get("div.oxd-table>div.oxd-table-body>div.oxd-table-card").its('length').then((leng) =>
    {
        cy.log('Total Rows: '+leng);
    })
    cy.get("div.oxd-table>div.oxd-table-header>div>div[role='columnheader']").should("have.length", 6)

})


})