/// <reference types = "Cypress"/>
describe("Authentication", () =>{

    it("Basic Auth", ()=>{

        cy.request({
            method : 'GET',
            url : 'https://postman-echo.com/basic-auth',
            auth : {
                user : 'postman',
                pass : 'password'
            }
        })
        .then((response)=>
        {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    })


    it.only("Digest Auth", ()=>{

        cy.request({
            method : 'GET',
            url : 'https://postman-echo.com/digest-auth',
            auth : {
                username : 'postman',
                password : 'password',
                method : 'digest'
            }
        })
        .then((response)=>
        {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    })








})