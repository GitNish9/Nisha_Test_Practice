describe("Dropdowns", () => {
  it.skip("select_option_dropdown", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#reasondummy_field > span > span > span.selection > span").click().type("Visa Application").type("{enter}");
    cy.get("#reasondummy_field > span > span > span.selection > span").should("have.text", "×Visa application");
  });

it("Auto_Suggestion_Dropdown", ()=>{
    cy.visit("https://www.google.com/")
    cy.get("#APjFqb").type("Cypress Automation");
    //cy.get("div.wM6W7d").contains("cypress automation").click();

    cy.get("div.wM6W7d > span").each(($el, index, $list) => {
        if($el.text() === "cypress automation jobs"){
            $el.click();

}
})


});
});