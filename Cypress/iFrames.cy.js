describe("iFrames", ()=>{

    it("iFrames Webelements", ()=>{

        cy.visit("https://demo.automationtesting.in/Frames.html")
       const body = cy.get("#singleframe").its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);
       
        body.clear().type("Success")
    })



})