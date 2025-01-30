

describe('Child Tabs and Windows', () => {

    it.skip("Using invoke",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#qlwapp > div > a").invoke("removeAttr","target").click();
        

        cy.wait(5000)
        cy.url().should('include',"web.whatsapp.com/");
    })

    it("Using Jquery",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#qlwapp > div > a").then((lnk) =>
    {
        const url = lnk.prop("href")
        //cy.log(url)
        cy.visit(url)
    })

    
    });


});