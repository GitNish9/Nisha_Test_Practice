

describe('Alerts Handling', () => 
    {
    it("Simple Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("#content > div > ul > li:nth-child(1) > button").click()

        //Event Listener to capture the alert
        cy.on("window:alert", (str) =>
         { //Capturing Alert Window in Str Variable
        expect(str).to.equal("I am a JS Alert"); //Validating the alert message
        })

        //Validating the text after clicking on the alert
        cy.get("p#result").should("have.text", "You successfully clicked an alert");
        });

    it("Confirm Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("#content > div > ul > li:nth-child(2) > button").should('be.visible').click()

    cy.on("window:confirm", (str) =>
    {

    expect(str).to.equal("I am a JS Confirm");
    
    })
    
    cy.get("p#result").should("have.text", "You clicked: Ok");

});

    it("Cancel Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("#content > div > ul > li:nth-child(2) > button").click()
    cy.on("window:confirm", (str) =>
    {
    expect(str).to.equal("I am a JS Confirm");
    return false; //Clicking on Cancel Button
    })

    cy.get("p#result").should("have.text", "You clicked: Cancel");

    });

    it("Prompt Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((str) =>
        {
            cy.stub(str, "prompt").returns("Success")
        })
        
        cy.get("#content > div > ul > li:nth-child(3) > button").click()
        cy.get("p#result").should("have.text", "You entered: Success");
    })

    it("Prompt Alert Cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((str) => {
            cy.stub(str, "prompt").returns(null);
        });
        
        cy.get("#content > div > ul > li:nth-child(3) > button").click()
        
        cy.get("p#result").should("have.text", "You entered: null");
    })

it.only("Authentictaion Alert",()=>
{
    cy.visit("https://the-internet.herokuapp.com/basic_auth", 
    {
        auth:
        {
            username : "admin",
            password : "admin"
        }
    });

    //cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get('p').should("contain","Congratulations! You must have the proper credentials.");
})


});