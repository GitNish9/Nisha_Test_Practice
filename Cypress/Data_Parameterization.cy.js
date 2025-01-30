describe("Test Data Parameterization", ()=>
{
    it("Login Scenario", ()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("OrangeHRM.json").then((testdata) =>
        {
            testdata.forEach(element => {
                cy.get('input[name="username"]').type(element.Username);
                cy.get('input[name="password"]').type(element.Password);

                cy.get('button[type="submit"]').click();

                if(element.Username == "Admin" && element.Password == "admin123")
                {
                    cy.url().should('include', element.Expected);

                    cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > i').click();
                    cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a').click();
                }
                else
                {
                    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should('have.text', element.Expected);
                }
                
            });
        })
    })





})