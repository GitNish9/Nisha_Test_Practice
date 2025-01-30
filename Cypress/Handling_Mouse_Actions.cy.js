/// <reference types = "cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe';


describe("Handling Mouse Actions", ()=>
{
    it("Right Click & Mouse Hover", ()=>
    {
        cy.visit("http://www.dhtmlgoodies.com/scripts/context-menu/context-menu.html")
        cy.get("body > h1").trigger('contextmenu').should('be.visible', "Menu item 4");
        cy.get("#contextMenu > li:nth-child(4) > a").trigger('mouseover').click();
    })

    it("Double click", ()=>
    {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded("iframe[name = 'iframeResult']");
        cy.iframe("iframe[name = 'iframeResult']").find("body > button").dblclick();
        cy.iframe("iframe[name = 'iframeResult']").find("#demo").should('have.text', 'Hello World');
    })

    it("Scroll Down & Up", ()=>
    {
        cy.visit("https://www.countryflags.com/")
        cy.wait(2000);
        cy.get("body > div.main.pt-md-4.pb-3.pb-md-5 > div.tiles > div:nth-child(220) > a > img").scrollIntoView();
    })

})